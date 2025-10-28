# Deploying sayalideshpandeportfolio.com from Wix to Netlify

## Your Setup:
- **Domain:** sayalideshpandeportfolio.com (purchased through Wix)
- **Hosting:** Netlify (free, fast, easy)
- **Your site:** Ready to deploy in `dist/` folder

---

## 🎯 Complete Deployment Guide (15 minutes)

### Part 1: Deploy to Netlify (5 minutes)

#### Step 1: Create Netlify Account
1. Go to: https://app.netlify.com/signup
2. Sign up with GitHub, GitLab, or Email (I recommend GitHub)
3. Verify your email

#### Step 2: Deploy Your Site
1. Go to: https://app.netlify.com/drop
2. **Drag and drop** the entire `dist` folder from:
   ```
   /Users/chinar.deshpande06/CD-THG/2025/THG-AI/MyCodingJourney/current-projects/sayali-portfolio/dist/
   ```
3. Wait 30 seconds
4. Your site is LIVE! 🎉
5. Note the temporary URL (like `random-name-123.netlify.app`)

#### Step 3: Add Your Custom Domain
1. In Netlify dashboard, click on your site
2. Go to **Domain settings** (or **Site settings → Domain management**)
3. Click **Add custom domain**
4. Enter: `sayalideshpandeportfolio.com`
5. Click **Verify**
6. Netlify will show you need to configure DNS

---

### Part 2: Configure Wix DNS Settings (10 minutes)

Since your domain is with Wix, you need to point it to Netlify.

#### Option A: Point Domain to Netlify (Recommended)

**In Wix:**

1. Log in to your Wix account
2. Go to **Domains** (or **My Domains**)
3. Click on `sayalideshpandeportfolio.com`
4. Look for **DNS Settings** or **Manage DNS**
5. You'll need to add these records:

**Add A Record:**
```
Type: A
Host: @
Points to: 75.2.60.5
TTL: 3600 (or Auto)
```

**Add CNAME Record for www:**
```
Type: CNAME
Host: www
Points to: [your-netlify-site].netlify.app
TTL: 3600 (or Auto)
```

6. Save changes

#### Option B: Transfer DNS to Netlify (Advanced)

If Wix allows external DNS management:

1. In Wix, find **Nameservers** settings
2. Change to **Custom nameservers**
3. Use Netlify's nameservers:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
4. Save changes

---

### Part 3: Wait for DNS Propagation (1-24 hours)

- Usually takes 1-6 hours
- Can take up to 24-48 hours
- Check status at: https://dnschecker.org/#A/sayalideshpandeportfolio.com

---

### Part 4: Enable HTTPS (Automatic)

1. Once DNS is configured, go to Netlify dashboard
2. Go to **Domain settings → HTTPS**
3. Netlify will automatically provision SSL certificate
4. Takes 1-2 minutes
5. Your site will be secure! 🔒

---

## 🎨 Detailed Wix DNS Instructions

### Finding DNS Settings in Wix:

**Method 1:**
1. Go to: https://www.wix.com/my-account/domains/
2. Click on your domain
3. Click **Manage DNS Records** or **Advanced DNS**

**Method 2:**
1. Wix Dashboard → **Domains**
2. Select `sayalideshpandeportfolio.com`
3. Click **Manage** → **DNS Records**

### What Records to Add:

**Record 1 - Root Domain (A Record):**
```
Record Type: A
Host/Name: @ (or leave empty)
Value/Points to: 75.2.60.5
TTL: 3600 or Automatic
```

**Record 2 - WWW Subdomain (CNAME):**
```
Record Type: CNAME
Host/Name: www
Value/Points to: [your-site-name].netlify.app
TTL: 3600 or Automatic
```

**Note:** Replace `[your-site-name]` with your actual Netlify site name (shown in Netlify dashboard)

### Important:
- **Remove** any existing A or CNAME records that point elsewhere
- **Keep** MX records (for email) if you have them
- Wix might show a warning - it's OK to proceed

---

## ✅ Verification Checklist

After DNS propagation:

### Test Your Site:
- [ ] Visit http://sayalideshpandeportfolio.com
- [ ] Visit https://sayalideshpandeportfolio.com (should work with SSL)
- [ ] Visit http://www.sayalideshpandeportfolio.com
- [ ] Check all images load
- [ ] Test project modals
- [ ] Download resume
- [ ] Test navigation
- [ ] Check mobile responsive

### Check DNS:
- [ ] DNS propagated globally: https://dnschecker.org/#A/sayalideshpandeportfolio.com
- [ ] SSL certificate issued (green lock in browser)
- [ ] WWW redirects to non-WWW (or vice versa)

---

## 🔄 How to Update Your Site Later

### Quick Update:
1. Make changes to your code
2. Run `npm run build`
3. Go to Netlify → **Deploys**
4. Drag new `dist/` folder to deploy area
5. Site updates in 30 seconds!

### Better Way (Git-based):
1. Push code to GitHub
2. Connect Netlify to GitHub repo
3. Auto-deploys on every push

---

## 🆘 Troubleshooting

### "Domain already connected to another site"
- In Wix, ensure domain is not pointing to Wix servers
- Remove any Wix hosting connection

### "DNS not propagating"
- Wait 24-48 hours
- Clear browser cache
- Try incognito/private mode
- Use different device/network

### "SSL certificate not issued"
- Wait 1 hour after DNS changes
- Verify DNS is pointing correctly
- Check Netlify dashboard for SSL status

### "Site shows 404 errors"
- Verify `_redirects` file is in `dist/` folder
- Re-deploy if needed

### Wix DNS Not Updating
- Some Wix plans restrict DNS changes
- You might need to upgrade Wix plan
- Or transfer domain to another registrar (Namecheap, GoDaddy)

---

## 📞 Need Help?

### Wix Support:
- Help Center: https://support.wix.com/
- Look for "Connect domain to external site" articles

### Netlify Support:
- Docs: https://docs.netlify.com/domains-https/custom-domains/
- Community: https://answers.netlify.com/

### Check DNS Propagation:
- https://dnschecker.org/
- https://www.whatsmydns.net/

---

## 💡 Pro Tips

1. **Keep Wix Domain Registration:** You can keep domain at Wix, just point DNS to Netlify
2. **Email:** If you have email with Wix, keep MX records unchanged
3. **Backup:** Keep the `dist/` folder safe - it's your deployment package
4. **Performance:** After deployment, test at https://pagespeed.web.dev/
5. **Analytics:** Add Google Analytics if needed (easy in Netlify)

---

## 🎉 Success!

Once complete, your portfolio will be:
- ✅ Live at https://sayalideshpandeportfolio.com
- ✅ Secure with HTTPS
- ✅ Fast and professional
- ✅ Easy to update

---

**Time Estimate:**
- Netlify deployment: 5 minutes
- DNS configuration: 5 minutes
- DNS propagation wait: 1-24 hours
- SSL setup: Automatic

**Total active time: ~10 minutes of work!**

---

**Next Steps:**
1. Follow Part 1 to deploy on Netlify
2. Get your Netlify URL
3. Follow Part 2 to configure Wix DNS
4. Wait for DNS to propagate
5. Enjoy your live portfolio! 🚀

---

**Last Updated:** October 12, 2025
**Domain:** sayalideshpandeportfolio.com (Wix)
**Hosting:** Netlify (Free)
**Status:** Ready to Deploy
