# Google Sheets check-in setup

1. Create a Google Sheet and name one tab `Check-ins`.
2. Open **Extensions → Apps Script** and paste in the script below.
3. In Apps Script, open **Project Settings → Script properties** and add a property named `CHECK_IN_SECRET` with a long random value.
4. Select **Deploy → New deployment → Web app**. Execute as yourself and allow access to anyone.
5. Add the deployment URL to Vercel as `GOOGLE_SHEETS_CHECK_IN_URL`.
6. Add the same random value to Vercel as `GOOGLE_SHEETS_CHECK_IN_SECRET`.
7. Generate a second, different random value and add it as `CHECK_IN_QR_TOKEN`.
8. Redeploy, then create and print a QR code whose destination is:

   `https://your-live-domain/check-in?key=YOUR_CHECK_IN_QR_TOKEN`

Do not publish or link to that destination. Scanning it grants that browser access for eight
hours. Changing `CHECK_IN_QR_TOKEN` immediately invalidates existing access and requires a new
physical QR code.

```js
const SHEET_NAME = 'Check-ins';

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty('CHECK_IN_SECRET');

    if (!expectedSecret || data.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) return jsonResponse({ ok: false, error: 'Check-ins sheet not found' });

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Checked in at', 'Name', 'Attendee type', 'Class', 'Class ID']);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(data.checkedInAt),
      safeCell(data.name),
      safeCell(data.attendeeType),
      safeCell(data.classLabel),
      safeCell(data.classId)
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function safeCell(value) {
  const text = String(value || '');
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
```
