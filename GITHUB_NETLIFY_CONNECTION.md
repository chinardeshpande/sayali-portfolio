# GitHub to Netlify Connection Guide

## 🎯 Quick Reference

**GitHub Repository**: https://github.com/chinardeshpande/sayali-portfolio
**Netlify Dashboard**: https://app.netlify.com/projects/sayalideshpandeportfolio
**Live Site**: https://sayalideshpande.co.in

---

## 📋 Connection Steps

### Step 1: Open Netlify Dashboard
Already open at: https://app.netlify.com/projects/sayalideshpandeportfolio

### Step 2: Navigate to Build Settings
1. Left sidebar → **Site configuration**
2. Click **Build & deploy**

### Step 3: Link Repository
1. Scroll to **Build settings** section
2. Click **"Link repository"** or **"Link site to Git"**
3. Select **GitHub** as provider
4. Authorize Netlify if needed
5. Select repository: **chinardeshpande/sayali-portfolio**

### Step 4: Configure Build
Ensure these settings:
```
Base directory:     (leave empty)
Build command:      npm run build
Publish directory:  dist
Production branch:  main
```

### Step 5: Save & Deploy
Click **"Save"** - Netlify will start automatic deployment!

---

## ✅ Verification Checklist

After connection, verify:
- [ ] GitHub repo shows "Connected to Netlify" badge
- [ ] Netlify shows "Connected to GitHub" in Build settings
- [ ] First automatic deployment starts
- [ ] Build completes successfully
- [ ] Site updates at https://sayalideshpande.co.in

---

## 🔄 Testing CI/CD Pipeline

After connection is complete, test it:

```bash
# 1. Make a small test change
echo "<!-- CI/CD Test -->" >> index.html

# 2. Commit and push
git add .
git commit -m "Test: CI/CD pipeline"
git push origin main

# 3. Watch Netlify dashboard
# You should see a new deployment start automatically

# 4. Wait for deployment (~1-2 minutes)

# 5. Visit https://sayalideshpande.co.in
# Your changes should be live!
```

---

## 🚀 Future Workflow

From now on, every time you push to GitHub:

```bash
# Daily workflow
git add .
git commit -m "Update portfolio"
git push

# Netlify automatically:
# ✓ Detects the push
# ✓ Pulls latest code
# ✓ Runs npm run build
# ✓ Deploys to production
# ✓ Updates https://sayalideshpande.co.in
```

---

## 🔧 Build Settings Reference

Your `netlify.toml` configuration:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📊 Monitoring Deployments

In Netlify dashboard:
1. **Deploys** tab shows deployment history
2. Click any deployment to see build logs
3. **Production** badge shows current live version
4. Can rollback by clicking "Publish deploy" on older versions

---

## 🛠️ Troubleshooting

### Build fails?
1. Check build logs in Netlify dashboard
2. Verify build works locally: `npm run build`
3. Check Node version (should use v22)

### Changes not showing?
1. Wait 1-2 minutes for deployment
2. Hard refresh browser (Cmd/Ctrl + Shift + R)
3. Check Netlify "Deploys" tab for status

### Connection issues?
1. Re-authorize GitHub in Netlify settings
2. Check repository permissions
3. Verify repository is public or Netlify has access

---

## 🎉 Success Indicators

You'll know it's working when:
- ✅ Netlify shows "Connected to GitHub"
- ✅ Each push creates a new deployment
- ✅ Build logs show successful builds
- ✅ Changes appear on live site within 2 minutes

---

**Last Updated**: 2025-10-28
**Status**: Ready to connect
