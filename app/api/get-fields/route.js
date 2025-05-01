import { google } from 'googleapis';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const sheetId = searchParams.get('sheetId');
    const token = searchParams.get('token');
    const decodedEmail = token ? Buffer.from(token, 'base64').toString() : '';

    if (!sheetId || !decodedEmail) {
        return new Response(JSON.stringify({ error: 'Missing sheetId or token' }), {
            status: 400,
        });
    }

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const result = await sheets.spreadsheets.values.get({
            spreadsheetId: sheetId,
            range: 'A1:1',
        });

        const fields = result.data.values[0];

        return new Response(JSON.stringify({ fields }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Google Sheets Error:', err);
        return new Response(JSON.stringify({ error: 'Failed to fetch fields' }), {
            status: 500,
        });
    }
}
