const NOTIFY_EMAIL   = 'founders@imperai.ai';
const SPREADSHEET_ID = '1QM-p-cFIkNb36rmQ2fqoaHMHA1rTfhi8yxWOifHVqBc';

function doPost(e) {
  try {
    const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getActiveSheet();

    const name    = (e.parameter.name    || '').trim();
    const company = (e.parameter.company || '').trim();
    const email   = (e.parameter.email   || '').trim();
    const ts      = new Date();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Company', 'Email']);
    }

    sheet.appendRow([ts, name, company, email]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '[Toren] 디자인 파트너십 신청 — ' + company,
      body: [
        '새 디자인 파트너십 신청이 접수되었습니다.',
        '',
        '이름:   ' + name,
        '회사:   ' + company,
        '이메일: ' + email,
        '시간:   ' + ts.toLocaleString('ko-KR'),
      ].join('\n'),
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
