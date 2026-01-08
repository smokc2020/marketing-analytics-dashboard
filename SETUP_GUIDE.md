# 🚀 Setup Guide - Local Dashboard

## Prerequisites

Before you begin, you need:
- ✅ A Google account
- ✅ Access to your Google Sheets (ID: `1Y00cAbIfyo4xiYJYhBsGQ5vJgU21g7mtNhet8NRv7fM`)
- ✅ A web browser (Chrome, Firefox, or Edge)
- ✅ (Optional) Python 3 installed for running a local server

---

## Step 1: Create Google Cloud Project

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click the project dropdown at the top
   - Click **"New Project"**
   - Project name: `Marketing Dashboard` (or any name you prefer)
   - Click **"Create"**
   - Wait for the project to be created

3. **Select Your Project**
   - Click the project dropdown again
   - Select your newly created project

---

## Step 2: Enable Google Sheets API

1. **Go to APIs & Services**
   - In the left sidebar, click **"APIs & Services"** → **"Library"**
   - OR visit: https://console.cloud.google.com/apis/library

2. **Search for Google Sheets API**
   - In the search box, type: `Google Sheets API`
   - Click on **"Google Sheets API"** in the results

3. **Enable the API**
   - Click the blue **"Enable"** button
   - Wait for it to be enabled (takes a few seconds)

---

## Step 3: Configure OAuth Consent Screen

1. **Go to OAuth Consent Screen**
   - In the left sidebar, click **"APIs & Services"** → **"OAuth consent screen"**
   - OR visit: https://console.cloud.google.com/apis/credentials/consent

2. **Choose User Type**
   - Select **"External"** (unless you have a Google Workspace)
   - Click **"Create"**

3. **Configure OAuth Consent Screen**
   - **App name**: `Marketing Dashboard` (or any name)
   - **User support email**: Your email address
   - **Developer contact information**: Your email address
   - Leave other fields as default
   - Click **"Save and Continue"**

4. **Scopes** (Step 2)
   - Click **"Save and Continue"** (no changes needed)

5. **Test Users** (Step 3)
   - Click **"Add Users"**
   - Enter your email address (the one you'll use to sign in)
   - Click **"Add"**
   - Click **"Save and Continue"**

6. **Summary** (Step 4)
   - Review and click **"Back to Dashboard"**

---

## Step 4: Create OAuth 2.0 Client ID

1. **Go to Credentials**
   - In the left sidebar, click **"APIs & Services"** → **"Credentials"**
   - OR visit: https://console.cloud.google.com/apis/credentials

2. **Create Credentials**
   - Click **"+ Create Credentials"** at the top
   - Select **"OAuth client ID"**

3. **Configure OAuth Client**
   - **Application type**: **Web application**
   - **Name**: `Local Dashboard Client` (or any name)
   
   - **Authorized JavaScript origins**:
     - Click **"+ Add URI"**
     - Add: `http://localhost:8000` (if using Python server)
     - Click **"+ Add URI"** again
     - Add: `file://` (if opening HTML directly)
     - Click **"+ Add URI"** again
     - Add: `http://127.0.0.1:8000` (alternative localhost)
   
   - **Authorized redirect URIs**: Leave empty (not needed for our use case)
   
   - Click **"Create"**

4. **Copy Your Client ID**
   - A popup will show your **Client ID** (looks like: `123456789-abc...apps.googleusercontent.com`)
   - **IMPORTANT**: Copy this entire Client ID
   - You can also click the download icon to save it as JSON (optional)
   - Click **"OK"**

---

## Step 5: Configure the Dashboard

1. **Open config.js**
   - Navigate to: `C:\Users\THE HIEN\.gemini\antigravity\scratch\locally-dashboard\config.js`
   - Open it with any text editor (Notepad, VS Code, etc.)

2. **Update CLIENT_ID**
   - Find the line: `CLIENT_ID: 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com',`
   - Replace `YOUR_CLIENT_ID_HERE.apps.googleusercontent.com` with your actual Client ID
   - Example:
     ```javascript
     CLIENT_ID: '123456789-abcdefghijklmnop.apps.googleusercontent.com',
     ```

3. **Verify SPREADSHEET_ID** (already correct)
   - Make sure this line shows: `SPREADSHEET_ID: '1Y00cAbIfyo4xiYJYhBsGQ5vJgU21g7mtNhet8NRv7fM',`

4. **Save the file**
   - Press Ctrl+S to save

---

## Step 6: Run the Dashboard

### Method 1: Using Python HTTP Server (Recommended)

1. **Open Command Prompt / Terminal**
   - Press `Win + R`, type `cmd`, press Enter

2. **Navigate to the dashboard folder**
   ```bash
   cd "C:\Users\THE HIEN\.gemini\antigravity\scratch\locally-dashboard"
   ```

3. **Start Python HTTP Server**
   - For Python 3:
     ```bash
     python -m http.server 8000
     ```
   - OR for Python 2:
     ```bash
     python -m SimpleHTTPServer 8000
     ```

4. **Open in Browser**
   - Open your browser (Chrome recommended)
   - Go to: `http://localhost:8000`
   - You should see the dashboard sign-in page

### Method 2: Direct File Open (May have limitations)

1. **Open File Explorer**
   - Navigate to: `C:\Users\THE HIEN\.gemini\antigravity\scratch\locally-dashboard`

2. **Open index.html**
   - Right-click on `index.html`
   - Select **"Open with"** → Choose your browser (Chrome, Firefox, or Edge)

**Note**: This method may have CORS restrictions. Use Method 1 if you encounter issues.

### Method 3: Using VS Code Live Server

1. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install it

2. **Open the Dashboard Folder**
   - File → Open Folder
   - Select `locally-dashboard` folder

3. **Start Live Server**
   - Right-click on `index.html`
   - Select **"Open with Live Server"**

---

## Step 7: Sign In and Use Dashboard

1. **Click "Đăng nhập với Google"**
   - A Google sign-in popup will appear

2. **Choose Your Account**
   - Select the email you added as a test user

3. **Grant Permissions**
   - You'll see a warning "Google hasn't verified this app" (this is normal for test apps)
   - Click **"Advanced"**
   - Click **"Go to Marketing Dashboard (unsafe)"**
   - Review the permissions (read access to your spreadsheets)
   - Click **"Continue"**

4. **Dashboard Loads**
   - After authentication, the dashboard will:
     - Fetch data from your Google Sheets
     - Display KPIs, charts, and tables
     - Show your profile in the top bar

---

## 🎉 You're Done!

The dashboard is now running locally with live data from your Google Sheets.

---

## Troubleshooting

### Error: "Client ID not configured"
- **Solution**: Make sure you updated `config.js` with your actual Client ID from Step 4

### Error: "Access denied" or "Unauthorized"
- **Solution**: Make sure you added your email as a test user in Step 3.5

### Error: "The resource does not exist"
- **Solution**: Double-check the `SPREADSHEET_ID` in `config.js` matches your sheet

### Sign-in popup doesn't appear
- **Solution**: 
  - Check if popup blockers are enabled (disable them)
  - Try using Method 1 (Python server) instead of direct file open

### Data doesn't load
- **Solution**:
  - Open browser Console (F12) and check for errors
  - Verify sheet names match exactly: `Tổng_theo sản phẩm`, `AdsOrders`
  - Make sure your Google account has access to the spreadsheet

### "CORS" errors in console
- **Solution**: Use Method 1 (Python HTTP Server) instead of opening file directly

---

## Usage Tips

### Refresh Data
- Click the **"🔄 Làm mới dữ liệu"** button to manually refresh
- Or enable **"⏱️ Tự động làm mới"** for auto-refresh every 5 minutes

### Filter by Product
- Use the product dropdown to view specific product performance

### Sort Tables
- Click on table headers to sort columns

### Sign Out
- Click your profile picture → **"Đăng xuất"**

---

## Security Notes

✅ **Your credentials stay local** - The Client ID is only used in your browser  
✅ **Read-only access** - The dashboard only requests read permissions  
✅ **No data sent to external servers** - All processing happens in your browser  
✅ **Test mode** - Your app is in test mode, only you can access it  

---

## Next Steps

### Making the App Public (Optional)

If you want to share this dashboard with your team:

1. **Verify the app** in Google Cloud Console
2. Change from "Testing" to "Production" in OAuth consent screen
3. Add team members' emails as authorized users
4. Share the dashboard URL (if hosted)

For now, it's safer to keep it in test mode for personal use.

---

## Need Help?

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Verify all steps in this guide
3. Make sure your Google Sheets is accessible
4. Try using incognito mode to rule out browser extensions

