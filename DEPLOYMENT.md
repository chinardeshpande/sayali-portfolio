# Sayali Deshpande Portfolio - Deployment Guide

## Overview
This is a production-ready React + TypeScript portfolio website built with Vite. The website is fully functional, self-contained, and ready to be deployed to any web hosting platform.

## 🚀 Quick Deployment Options

### Option 1: Static Hosting (Recommended)
The `dist/` folder contains all production-ready files. Simply upload the contents to any static hosting service:

#### Netlify
1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop the `dist/` folder
3. Your site will be live instantly!
4. Optional: Set up custom domain in Netlify settings

#### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts
4. Your site will be deployed!

#### GitHub Pages
1. Create a new GitHub repository
2. Push this code to the repository
3. Go to Settings → Pages
4. Set source to "GitHub Actions"
5. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### AWS S3 + CloudFront
1. Create an S3 bucket
2. Enable static website hosting
3. Upload contents of `dist/` folder
4. Set up CloudFront distribution (optional, for HTTPS)
5. Configure custom domain in Route 53

### Option 2: Using Your Own Server

#### Apache
1. Upload `dist/` contents to your web root (e.g., `/var/www/html/`)
2. Create `.htaccess` file:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
1. Upload `dist/` contents to your web root
2. Update nginx config:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📦 What's Included

### Production Build (`dist/` folder)
- ✅ Optimized HTML, CSS, and JavaScript
- ✅ All images and assets
- ✅ Company logos (Experience & X-Factor sections)
- ✅ Project images and content
- ✅ Resume PDF
- ✅ HTML content for project modals
- ✅ Video files

### Source Code
- ✅ React 19 + TypeScript
- ✅ Vite build system
- ✅ Tailwind CSS
- ✅ All component source files
- ✅ Complete project structure

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
sayali-portfolio/
├── dist/                          # Production build (deploy this)
│   ├── assets/                    # Compiled CSS & JS
│   ├── images/                    # All images
│   │   ├── companies/            # Company & organization logos
│   │   └── projects/             # Project images
│   ├── html-content/             # Project detail HTML files
│   ├── videos/                   # Video assets
│   ├── index.html                # Main HTML file
│   └── Sayali Deshpande - UX Designer - Resume.pdf
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx        # Professional experience section
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── XFactor.tsx          # Achievements & certifications
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   └── main.tsx
│
├── public/                       # Static assets (copied to dist)
│   ├── images/
│   └── html-content/
│
└── package.json
```

## 🎨 Features

### Sections
1. **Hero** - Introduction with profile images
2. **About** - Background and education
3. **Experience** - 6 professional positions with company logos
4. **Project Showcase** - Portfolio projects with modal popups
5. **X-Factor** - Achievements, certifications, and creative pursuits
6. **Contact** - Contact form

### Technical Features
- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Interactive project modals
- ✅ Optimized images and assets
- ✅ SEO-friendly
- ✅ Fast loading times
- ✅ Clean, professional design

## 🔧 Customization

### Update Content
All content is in the respective component files:
- Experience: `src/components/Experience.tsx`
- Projects: `src/components/Projects.tsx`
- X-Factor: `src/components/XFactor.tsx`
- Contact: `src/components/Contact.tsx`

### Update Styling
- Colors and themes: `tailwind.config.js`
- Custom CSS: Component files use Tailwind classes

### Add New Images
1. Add images to `public/images/`
2. Reference in components: `/images/your-image.jpg`
3. Rebuild: `npm run build`

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 Important Notes

### SPA Routing
This is a single-page application (SPA). Make sure your hosting provider is configured to:
- Serve `index.html` for all routes
- Handle client-side routing properly

### Environment Variables
No environment variables are required for basic deployment. The site is fully self-contained.

### Custom Domain
After deploying, you can configure a custom domain through your hosting provider's settings.

## 📊 Performance
- Optimized bundle size
- Lazy loading for images
- Code splitting
- Gzip compression ready

## 🔒 Security
- No sensitive data in code
- All external links use `rel="noopener noreferrer"`
- Script removal in HTML content modals
- HTTPS recommended for production

## 📞 Support
For questions or issues:
- Review component code in `src/components/`
- Check browser console for errors
- Verify all assets are uploaded correctly

## ✅ Pre-Deployment Checklist
- [ ] Run `npm run build` to create fresh production build
- [ ] Test production build locally: `npm run preview`
- [ ] Verify all images load correctly
- [ ] Test all navigation links
- [ ] Test contact form (configure backend if needed)
- [ ] Check responsive design on mobile
- [ ] Verify resume PDF downloads correctly
- [ ] Test project modals
- [ ] Configure custom domain (optional)
- [ ] Set up SSL/HTTPS (recommended)

## 🎉 You're Ready!
The website is production-ready. Simply upload the `dist/` folder contents to your hosting provider, and your portfolio will be live!

---

**Built with:** React 19, TypeScript, Vite, Tailwind CSS
**Last Updated:** October 12, 2025
**Version:** 1.0.0
