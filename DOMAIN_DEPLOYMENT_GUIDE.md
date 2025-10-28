# Deploying to sayalideshpandeportfolio.com

## Your Domain: sayalideshpandeportfolio.com

This guide will walk you through deploying your portfolio to your custom domain.

---

## 🚀 Recommended Option: Netlify (Easiest!)

Netlify is the best option because:
- ✅ Free forever for static sites
- ✅ Automatic SSL/HTTPS
- ✅ Custom domain setup is super simple
- ✅ Continuous deployment from Git (optional)
- ✅ Instant rollbacks if needed

### Step-by-Step Deployment with Netlify:

#### 1. Deploy Your Site

**Option A: Drag & Drop (Fastest - 2 minutes)**

1. Go to https://app.netlify.com/drop
2. Drag the entire `dist/` folder onto the page
3. Wait 30 seconds - your site is live!
4. You'll get a temporary URL like: `random-name-123456.netlify.app`

**Option B: Connect to Git (Recommended for updates)**

1. Push your code to GitHub:
```bash
cd /Users/chinar.deshpande06/CD-THG/2025/THG-AI/MyCodingJourney/current-projects/sayali-portfolio
git init
git add .
git commit -m "Initial commit - Sayali Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sayali-portfolio.git
git push -u origin main
```

2. Go to https://app.netlify.com/
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

#### 2. Configure Your Custom Domain

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter: `sayalideshpandeportfolio.com`
4. Netlify will show you DNS settings

#### 3. Update Your Domain DNS

You need to point your domain to Netlify. You have two options:

**Option A: Use Netlify Nameservers (Recommended - Easiest)**

1. In your domain registrar (GoDaddy, Namecheap, etc.):
2. Update nameservers to Netlify's:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
3. Wait 1-24 hours for DNS propagation
4. Done! Netlify handles everything including SSL

**Option B: Keep Your Current DNS Provider**

Add these records in your DNS settings:

**For root domain (sayalideshpandeportfolio.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

#### 4. Enable HTTPS (Automatic!)

- Netlify automatically provisions SSL certificate (Let's Encrypt)
- Usually takes 1-2 minutes after DNS is configured
- Your site will be accessible via `https://sayalideshpandeportfolio.com`

#### 5. Configure Site Settings (Optional but Recommended)

In Netlify dashboard:

1. **Redirects** - Add this file to your `public/` folder:

Create `public/_redirects`:
```
/*    /index.html   200
```

This ensures React Router works correctly.

2. **Forms** - Already works out of the box! Your contact form will automatically work.

---

## 🎯 Alternative Option: Vercel

Another excellent option with similar ease of use.

### Deploy with Vercel:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /Users/chinar.deshpande06/CD-THG/2025/THG-AI/MyCodingJourney/current-projects/sayali-portfolio
vercel --prod
```

3. Follow prompts:
   - Project name: `sayali-portfolio`
   - Build command: `npm run build`
   - Output directory: `dist`

4. Add custom domain:
```bash
vercel domains add sayalideshpandeportfolio.com
```

5. Configure DNS as instructed by Vercel

---

## 📋 Pre-Deployment Checklist

- [x] Production build created (`dist/` folder exists)
- [x] All images and assets included
- [x] Resume PDF included
- [x] All HTML content files present
- [x] No console errors in production build
- [x] Build tested locally with `npm run preview`

---

## 🔧 DNS Configuration Reference

### Where to Find DNS Settings

**GoDaddy:**
1. Log in to GoDaddy
2. Go to "My Products" → "Domains"
3. Click "DNS" next to your domain

**Namecheap:**
1. Log in to Namecheap
2. Go to "Domain List"
3. Click "Manage" → "Advanced DNS"

**Google Domains:**
1. Log in to Google Domains
2. Click on your domain
3. Go to "DNS" section

**Cloudflare:**
1. Log in to Cloudflare
2. Select your domain
3. Go to "DNS" tab

---

## ⚡ Quick Start Guide (TL;DR)

**Fastest deployment (5 minutes):**

1. Go to https://app.netlify.com/drop
2. Drag `dist/` folder
3. In Netlify: Site Settings → Domain Management → Add custom domain
4. In your domain registrar: Update nameservers to Netlify's
5. Wait 1-24 hours
6. Done! Visit `https://sayalideshpandeportfolio.com`

---

## 🎨 After Deployment

### Test Your Live Site

Visit these URLs to verify everything works:
- https://sayalideshpandeportfolio.com
- https://www.sayalideshpandeportfolio.com (should redirect to non-www or vice versa)

Check:
- [ ] All images load
- [ ] Navigation works
- [ ] Project modals open correctly
- [ ] Resume downloads
- [ ] Contact form submits (if backend configured)
- [ ] Responsive on mobile
- [ ] All sections scroll properly

### Performance Testing

Run these tests on your live site:
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/

Expected scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+

---

## 🔄 How to Update Your Site

### With Netlify (Drag & Drop):
1. Make changes to your code
2. Run `npm run build`
3. Go to Netlify dashboard → Deploys
4. Drag new `dist/` folder to deploy area

### With Netlify (Git):
1. Make changes to your code
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
3. Netlify auto-deploys in ~1 minute

### With Vercel:
```bash
npm run build
vercel --prod
```

---

## 🆘 Troubleshooting

### DNS Not Propagating
- Wait 24-48 hours (usually takes 1-6 hours)
- Check status: https://dnschecker.org/#A/sayalideshpandeportfolio.com

### SSL Certificate Not Provisioning
- Ensure DNS is pointing correctly
- Wait 1 hour after DNS changes
- Check Netlify dashboard for SSL status

### 404 Errors on Refresh
- Add `_redirects` file (see above)
- Configure SPA redirect rules

### Images Not Loading
- Check all images are in `dist/images/` folder
- Verify paths start with `/` (e.g., `/images/logo.png`)

---

## 📞 Support

- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs
- **DNS Help:** Contact your domain registrar support

---

## ✅ Success Checklist

After deployment, verify:

- [ ] Site loads at https://sayalideshpandeportfolio.com
- [ ] HTTPS/SSL is enabled (green lock icon)
- [ ] All sections render correctly
- [ ] Project modals work
- [ ] Resume downloads
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Fast load times (< 3 seconds)

---

**Your portfolio is ready to go live! 🚀**

**Recommended next step:** Use Netlify drag & drop for fastest deployment, then configure your domain.

---

**Last Updated:** October 12, 2025
**Domain:** sayalideshpandeportfolio.com
**Build Location:** `/dist/` folder (29MB)
