import * as universal from '../entries/pages/contact/_page.ts.js';
import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.ts";
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.46DktDtJ.js","_app/immutable/chunks/CTAKUR_9.js","_app/immutable/chunks/Dnodtwet.js","_app/immutable/chunks/Dq85vJaZ.js","_app/immutable/chunks/OSD6v9kr.js","_app/immutable/chunks/BWZ9Llzm.js","_app/immutable/chunks/9R10x-xb.js","_app/immutable/chunks/CIH1Vx3-.js","_app/immutable/chunks/CfIuJFF7.js","_app/immutable/chunks/CGXSuc0S.js","_app/immutable/chunks/BtcVWsRj.js"];
export const stylesheets = [];
export const fonts = [];
