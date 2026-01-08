# Marketing Analytics Dashboard - PWA

Progressive Web App cho Marketing Analytics với Google Sheets integration.

## 🌟 Tính năng

- ✅ **Cài đặt được như App** - Click "Cài đặt App" để thêm vào desktop
- ✅ **Chạy cửa sổ riêng** - Mở như native app, không có thanh địa chỉ browser
- ✅ **Tự động đăng nhập** - Session được lưu 7 ngày, không cần login lại
- ✅ **Kiểm tra quyền** - Chỉ email được cho phép mới truy cập được
- ✅ **Dữ liệu thời gian thực** - Kết nối trực tiếp Google Sheets
- ✅ **Offline support** - Vẫn mở được khi mất mạng
- ✅ **Dễ chia sẻ** - Share URL cho cả team

## 📋 Cài đặt nhanh

### 1. Cấu hình Google Cloud (Một lần duy nhất)

Xem chi tiết trong [SETUP_GUIDE.md](./SETUP_GUIDE.md):
1. Tạo Google Cloud Project
2. Enable Google Sheets API  
3. Tạo OAuth 2.0 Client ID
4. Thêm email vào test users

**Important:** Thêm `http://localhost:8000` vào **Authorized JavaScript origins**

### 2. Chỉnh sửa config

Mở [`config.js`](./config.js) và điền Client ID:
```javascript
CLIENT_ID: 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com'
```

### 3. Thêm email được phép

Mở [`index.html`](./index.html) (dòng ~628) và thêm email:
```javascript
const AUTHORIZED_EMAILS = [
    'your-email@gmail.com',
    'teammate@company.com',
    '*@your-company.com',  // Cho phép cả domain
];
```

### 4. Chạy local

```bash
cd c:\WORKSPACE\locally-dashboard
python -m http.server 8000
```

Mở browser: `http://localhost:8000/index.html`

## 📱 Cách dùng

### Lần đầu:
1. Click "Đăng nhập với Google"
2. Chọn tài khoản (phải là email được phép)
3. Click "📲 Cài đặt App" (nếu xuất hiện)
4. Dashboard sẽ tự lưu session

### Lần sau:
1. Mở app (từ desktop icon nếu đã install)
2. Tự động đăng nhập
3. Không cần click gì cả!

## 🚀 Deploy lên Internet

**Khuyến nghị:** Deploy lên Netlify/Vercel để:
- Có HTTPS (bắt buộc cho full PWA)
- Share URL dễ dàng
- Auto-update khi push code mới

```bash
# Deploy với Netlify
npm install -g netlify-cli
netlify deploy --prod
```

Sau khi deploy → Share URL với team: `https://your-dashboard.netlify.app`

## 📁 Cấu trúc

```
locally-dashboard/
├── index.html           # PWA Dashboard chính
├── manifest.json        # PWA manifest (icon, colors)
├── sw.js                # Service worker (offline)
├── config.js            # OAuth configuration
├── assets/
│   ├── icon-512.png    # App icons
│   ├── icon-192.png
│   └── icon-180.png
├── README.md           # File này
└── SETUP_GUIDE.md      # Hướng dẫn chi tiết
```

## 🔒 Bảo mật

- **Authorized emails only:** Chỉ email trong whitelist mới truy cập được
- **Session expiry:** Token hết hạn sau 7 ngày
- **Read-only access:** Chỉ đọc dữ liệu Google Sheets
- **Local storage:** Token lưu trong browser, mỗi máy riêng biệt

## ⚙️ Tùy chỉnh

### Thay đổi thời gian session:

Trong `index.html`, tìm function `getSession()`:
```javascript
// Đổi từ 7 ngày sang 30 ngày
if (loginTime && (Date.now() - parseInt(loginTime) > 30 * 24 * 60 * 60 * 1000)) {
```

### Cho phép tất cả emails:

```javascript
const AUTHORIZED_EMAILS = ['*'];  // Allow all
```

### Chỉ cho phép một domain:

```javascript
const AUTHORIZED_EMAILS = ['*@company.com'];  // Chỉ @company.com
```

## 🐛 Khắc phục lỗi

| Lỗi | Giải pháp |
|-----|----------|
| `redirect_uri_mismatch` | Thêm `http://localhost:8000` vào Google Console |
| Email không được phép | Thêm email vào `AUTHORIZED_EMAILS` |
| Không cài đặt được | Cần HTTPS - deploy lên Netlify |  
| Session mất | Check localStorage không bị xóa, token còn hạn |

## 📊 Tính năng sắp tới

- [ ] Multi-sheet data (Tổng-Vùng, Demographics)
- [ ] Regional performance charts
- [ ] Demographic insights
- [ ] Export to Excel
- [ ] Dark mode

## 📞 Hỗ trợ

- Xem [SETUP_GUIDE.md](./SETUP_GUIDE.md) cho hướng dẫn chi tiết
- Check browser console (F12) để xem lỗi
- Verify Google Cloud setup đúng

---

**Enjoy your PWA Dashboard! 📊✨**

Deploy và share với team ngay!
