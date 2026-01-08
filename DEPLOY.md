# Deployment Guide - Marketing Analytics PWA

## 🚀 Quick Deploy to Netlify

### Option 1: Netlify CLI (Fastest)

**Step 1: Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**Step 2: Login to Netlify**
```bash
netlify login
```
Trình duyệt sẽ mở → Login với GitHub/Email

**Step 3: Deploy**
```bash
cd c:\WORKSPACE\locally-dashboard
netlify deploy --prod
```

**Chọn options:**
- Create & configure new site? → **Yes**
- Team: → Chọn team của bạn
- Site name: → `your-dashboard-name` (hoặc để trống cho random)
- Publish directory: → `.` (dấu chấm)

**Done!** URL sẽ là: `https://your-dashboard-name.netlify.app`

---

### Option 2: Netlify Web UI (Easy)

**Step 1: Tạo Git Repository**
```bash
cd c:\WORKSPACE\locally-dashboard
git init
git add .
git commit -m "Initial PWA dashboard"
```

**Step 2: Push to GitHub**
- Tạo repo mới trên GitHub: https://github.com/new
- Tên repo: `marketing-analytics-pwa`
- Public hoặc Private đều được

```bash
git remote add origin https://github.com/YOUR_USERNAME/marketing-analytics-pwa.git
git branch -M main
git push -u origin main
```

**Step 3: Connect Netlify**
1. Vào https://app.netlify.com/
2. Click **"Add new site" → "Import an existing project"**
3. Chọn **GitHub** → Authorize
4. Chọn repository `marketing-analytics-pwa`
5. **Build settings:**
   - Build command: (leave empty)
   - Publish directory: `.`
6. Click **"Deploy site"**

**Done!** Site sẽ tự build và deploy trong ~1 phút

---

## ⚙️ Sau khi Deploy

### 1. Update Google Cloud Console

**QUAN TRỌNG:** Thêm domain mới vào OAuth settings

1. Vào: https://console.cloud.google.com/apis/credentials
2. Chọn Client ID: `484034192422-...`
3. **Authorized JavaScript origins** → Add:
   - `https://your-dashboard-name.netlify.app`
4. Click **Save**

### 2. Test Dashboard

1. Mở: `https://your-dashboard-name.netlify.app`
2. Click "Đăng nhập với Google"
3. Login thành công → Dashboard loads! ✅
4. Click "📲 Cài đặt App" → Install as PWA
5. App icon xuất hiện trên desktop!

### 3. Share với Team

Send URL cho team:
```
https://your-dashboard-name.netlify.app
```

Họ có thể:
- Truy cập trực tiếp
- Install PWA
- Auto-login (session saved)

---

## 🔧 Custom Domain (Optional)

Nếu muốn domain riêng (vd: `analytics.yourcompany.com`):

1. **Netlify Dashboard** → Site Settings → Domain management
2. Click **"Add custom domain"**
3. Nhập domain: `analytics.yourcompany.com`
4. **Update DNS:**
   - Type: `CNAME`
   - Name: `analytics`
   - Value: `your-dashboard-name.netlify.app`
5. Wait 24h cho DNS propagate

Netlify tự động cấp SSL certificate (HTTPS)!

---

## 🔄 Auto-Deploy Updates

**Đã connect GitHub?** Mỗi lần push code mới:

```bash
git add .
git commit -m "Update dashboard"
git push
```

→ Netlify tự động deploy! Mọi người tự động nhận update.

---

## 📊 Monitor Deployment

**Netlify Dashboard:**
- Deploy status & logs
- Analytics (visitors, page views)
- Forms (nếu có)
- Functions (serverless)

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Deploy failed | Check `netlify.toml` exists |
| 404 on routes | Already fixed in `netlify.toml` |
| OAuth error | Add Netlify URL to Google Console |
| App không install được | Cần HTTPS ✅ (Netlify có sẵn) |

---

## ✅ Checklist

- [ ] Install Netlify CLI hoặc connect GitHub
- [ ] Deploy site
- [ ] Get deployment URL
- [ ] Update Google OAuth (add URL)
- [ ] Test authentication
- [ ] Test PWA installation
- [ ] Share URL with team
- [ ] Enjoy! 🎉

---

**Deployment time:** ~5 phút  
**Cost:** FREE (Netlify free tier)  
**HTTPS:** Included  
**CDN:** Global  
**Uptime:** 99.9%+

**Ready to go live! 🚀**
