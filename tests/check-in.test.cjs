const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const { runInNewContext } = require('node:vm');
const ts = require('typescript');

function loadHandler(fetch) {
  const source = readFileSync('src/routes/api/check-in/+server.ts', 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  const modules = {
    '$env/dynamic/private': {
      env: {
        CHECK_IN_QR_TOKEN: 'test-access',
        GOOGLE_SHEETS_CHECK_IN_URL: 'https://example.test/webhook',
        GOOGLE_SHEETS_CHECK_IN_SECRET: 'test-secret',
      },
    },
    '@sveltejs/kit': { json: (body, init) => Response.json(body, init) },
    '$lib/data/timetable': { timetableData: [] },
    '$lib/server/check-in-access': { hasCheckInAccess: () => true },
    '$lib/utils/date': { getGymDateKey: () => '2026-10-08' },
  };
  runInNewContext(outputText, {
    exports,
    require: (name) => {
      assert.ok(name in modules, `Unexpected import: ${name}`);
      return modules[name];
    },
    fetch,
    AbortSignal,
    console: { error() {} },
  });
  return exports;
}

function submit(POST) {
  return POST({
    cookies: {},
    url: new URL('https://example.test/api/check-in'),
    request: new Request('https://example.test/api/check-in', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test Member', classId: 'visitor' }),
    }),
  });
}

test('a Sheets response taking more than eight seconds completes successfully', async () => {
  let calls = 0;
  const { POST, config } = loadHandler(async (_url, { signal }) => {
    calls += 1;
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 9_000);
      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(signal.reason);
      }, { once: true });
    });
    return Response.json({ ok: true });
  });
  const response = await submit(POST);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(calls, 1);
  assert.equal(config.maxDuration, 60);
});

test('a timeout retries the same attendance payload and accepts duplicate confirmation', async () => {
  const bodies = [];
  const { POST } = loadHandler(async (_url, { body }) => {
    bodies.push(body);
    if (bodies.length === 1) throw new DOMException('Timed out', 'TimeoutError');
    return Response.json({ ok: true, duplicate: true });
  });
  const response = await submit(POST);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).duplicate, true);
  assert.equal(bodies.length, 2);
  assert.equal(bodies[0], bodies[1]);
  assert.equal(JSON.parse(bodies[0]).idempotencyKey, '2026-10-08:visitor:test member');
});

test('two failed attempts return a save error without claiming success', async () => {
  let calls = 0;
  const { POST } = loadHandler(async () => {
    calls += 1;
    throw new DOMException('Timed out', 'TimeoutError');
  });
  const response = await submit(POST);
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, undefined);
  assert.equal(calls, 2);
});
