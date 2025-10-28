# CI/CD Setup Guide for Sayali Portfolio

## ✅ Completed Steps

1. **Git Repository Initialized** ✓
2. **GitHub Repository Created** ✓
   - Repository: https://github.com/chinardeshpande/sayali-portfolio
   - Branch: main
   - Status: Code pushed successfully

3. **Netlify Site Created** ✓
   - Site Name: sayalideshpandeportfolio
   - Current URL: https://sayalideshpandeportfolio.com
   - Custom Domain: sayalideshpande.co.in (DNS configured)

---

## 🚀 Next Steps: Connect GitHub to Netlify for Auto-Deployment

### Step 1: Open Netlify Dashboard

The dashboard should already be open at:
https://app.netlify.com/projects/sayalideshpandeportfolio

Or run: `netlify open`

### Step 2: Connect to GitHub Repository

1. In Netlify dashboard, go to **"Site configuration"** → **"Build & deploy"**
2. Scroll to **"Continuous deployment"** section
3. Click **"Link repository"** or **"Connect to Git provider"**
4. Choose **GitHub**
5. Authorize Netlify to access your GitHub account (if not already done)
6. Select repository: **chinardeshpande/sayali-portfolio**
7. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
8. Click **"Deploy site"**

### Step 3: Verify Automatic Deployment

Once connected, Netlify will:
- ✅ Automatically deploy whenever you push to the `main` branch
- ✅ Show build logs for each deployment
- ✅ Provide deploy previews for pull requests (optional)
- ✅ Roll back to previous deployments if needed

---

## 📝 How Your CI/CD Pipeline Works

```
Local Changes → Git Commit → Git Push → GitHub → Netlify Build → Production Deploy
```

### Workflow:

1. **Make changes** to your portfolio locally
2. **Test locally**: `npm run dev` (http://localhost:5173)
3. **Commit changes**: `git add . && git commit -m "Your message"`
4. **Push to GitHub**: `git push origin main`
5. **Automatic deployment**: Netlify detects the push and automatically:
   - Pulls latest code from GitHub
   - Runs `npm run build`
   - Deploys to production at sayalideshpande.co.in
   - Sends you a notification when deployment is complete

---

## 🔧 Build Configuration

Your `netlify.toml` file is already configured:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures:
- Correct build command for Vite
- Correct publish directory
- Client-side routing works properly (SPA redirects)

---

## 🎯 Quick Commands Reference

### Local Development
```bash
npm run dev          # Start local dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Git Workflow
```bash
git status           # Check what files changed
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to GitHub (triggers auto-deploy)
```

### Netlify CLI
```bash
netlify status       # Check deployment status
netlify open         # Open Netlify dashboard
netlify deploy       # Manual deploy (not needed with CI/CD)
netlify logs         # View deployment logs
```

---

## 🌐 Your Live URLs

- **Primary Domain**: https://sayalideshpande.co.in
- **Netlify Domain**: https://sayalideshpandeportfolio.com
- **GitHub Repo**: https://github.com/chinardeshpande/sayali-portfolio

---

## ✨ Next Deployment Test

After connecting GitHub to Netlify, test the CI/CD pipeline:

1. Make a small change locally (e.g., update a text)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push
   ```
3. Watch Netlify dashboard - you should see a new deployment start automatically
4. Wait for deployment to complete (~1-2 minutes)
5. Visit https://sayalideshpande.co.in to see your changes live!

---

## 🛡️ Security Best Practices

- ✅ Repository is public (portfolio site - no sensitive data)
- ✅ Environment variables can be set in Netlify dashboard if needed
- ✅ Build logs are private on Netlify
- ✅ SSL certificate automatically provisioned by Netlify

---

## 📊 Monitoring & Analytics

In Netlify dashboard, you can:
- View deployment history
- Check build logs
- Monitor bandwidth usage
- See site analytics (if enabled)
- Set up deploy notifications (email, Slack, etc.)

---

## 🔄 Rollback if Needed

If a deployment breaks something:

1. Go to Netlify dashboard → **"Deploys"**
2. Find a previous working deployment
3. Click **"Publish deploy"** to rollback instantly

---

**Setup Date**: 2025-10-28
**Status**: Ready for GitHub connection
