/**
 * Configuration for Local Dashboard
 * 
 * IMPORTANT: You need to replace these values with your own Google API credentials
 * Follow SETUP_GUIDE.md for step-by-step instructions
 */

const CONFIG = {
  // OAuth 2.0 Client ID from Google Cloud Console
  // Example: '123456789-abcdefg.apps.googleusercontent.com'
  CLIENT_ID: '484034192422-jcva2k0o68ju2pc0fvn3sjnqegvgnli8.apps.googleusercontent.com',

  // Your Google Sheets ID (already filled in)
  SPREADSHEET_ID: '1Y00cAbIfyo4xiYJYhBsGQ5vJgU21g7mtNhet8NRv7fM',

  // API scopes - readonly access to spreadsheets
  SCOPES: 'https://www.googleapis.com/auth/spreadsheets.readonly',

  // Discovery docs for Google Sheets API
  DISCOVERY_DOCS: ['https://sheets.googleapis.com/$discovery/rest?version=v4']
};
