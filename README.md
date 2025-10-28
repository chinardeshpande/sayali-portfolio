# Sayali Deshpande - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and achievements.

## 🌟 Live Demo
Production build available in `dist/` folder - ready to deploy!

## 📋 Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)

## ✨ Features

### Sections
- **Hero Section** - Professional introduction with rotating profile images
- **About** - Educational background and professional summary
- **Experience** - 6 professional positions with company logos and key achievements
- **Project Showcase** - Portfolio projects with interactive modals
- **X-Factor** - Achievements, certifications, and creative pursuits
- **Contact** - Professional contact form

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Interactive project modals with HTML content
- ✅ Optimized production build
- ✅ Fast loading performance
- ✅ SEO-friendly structure
- ✅ Clean, professional UI/UX
- ✅ Downloadable resume

## 🛠️ Technology Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Heroicons (SVG)

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd sayali-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# TypeScript type checking
npm run type-check

# Lint code
npm run lint
```

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

The `dist/` folder contains your production-ready website. Deploy options:

**1. Netlify (Easiest)**
```bash
# Drag and drop 'dist' folder to netlify.com
```

**2. Vercel**
```bash
npm install -g vercel
vercel --prod
```

**3. GitHub Pages**
```bash
# Push to GitHub and enable Pages in repository settings
```

**4. Your own server**
```bash
# Upload dist/ contents to web root
# Configure server to serve index.html for all routes
```

## 📁 Project Structure

```
sayali-portfolio/
│
├── dist/                          # Production build (ready to deploy)
│   ├── assets/                    # Compiled CSS & JS bundles
│   ├── images/                    # Optimized images
│   │   ├── companies/            # Company & organization logos
│   │   └── projects/             # Project screenshots
│   ├── html-content/             # Project detail pages
│   ├── videos/                   # Video assets
│   └── index.html                # Entry point
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── About.tsx            # About section
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Experience.tsx       # Work experience
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Navigation.tsx       # Navigation bar
│   │   ├── Projects.tsx         # Project showcase
│   │   ├── XFactor.tsx          # Achievements
│   │   ├── HtmlContentModal.tsx # Project detail modal
│   │   └── LocalHtmlModal.tsx   # Local HTML viewer
│   │
│   ├── pages/
│   │   └── Home.tsx             # Main page layout
│   │
│   ├── App.tsx                  # App root
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
│
├── public/                       # Static assets
│   ├── images/                  # Source images
│   ├── html-content/            # HTML content files
│   └── videos/                  # Video files
│
├── DEPLOYMENT.md                 # Deployment guide
├── README.md                     # This file
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js           # Tailwind config
└── vite.config.ts               # Vite config
```

## 🎨 Customization

### Update Personal Information

**Experience Section** (`src/components/Experience.tsx`)
```typescript
const experiences = [
  {
    company: "Your Company",
    role: "Your Role",
    period: "Date Range",
    location: "Location",
    type: "Industry Type",
    logo: "/images/companies/logo.jpg",
    highlights: ["Achievement 1", "Achievement 2"]
  }
];
```

**Projects** (`src/components/Projects.tsx`)
```typescript
const projects = [
  {
    title: "Project Name",
    subtitle: "Project Type",
    description: "Description",
    image: "/images/projects/project.jpg",
    tags: ["Tag1", "Tag2"],
    // ... more fields
  }
];
```

### Update Styling

**Colors** (`tailwind.config.js`)
```javascript
colors: {
  primary: {
    50: '#fef2f2',
    // ... customize your color palette
  }
}
```

**Fonts** (`src/index.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

### Add New Sections

1. Create component in `src/components/`
2. Import in `src/pages/Home.tsx`
3. Add navigation item in `src/components/Navigation.tsx`

## 📸 Assets

### Images
- All images in `public/images/`
- Company logos: `public/images/companies/`
- Project images: `public/images/projects/`

### Adding New Images
```bash
# Add to public folder
public/images/your-image.jpg

# Reference in code
<img src="/images/your-image.jpg" />
```

## 🔧 Development Tips

### Hot Module Replacement
Vite provides instant HMR - changes reflect immediately in browser

### TypeScript
Full TypeScript support with type checking
```bash
npm run type-check
```

### Responsive Design
Uses Tailwind's responsive prefixes:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

## 🐛 Troubleshooting

**Build fails?**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Images not loading?**
- Check images are in `public/` folder
- Use absolute paths: `/images/file.jpg`
- Verify file names match exactly (case-sensitive)

**Routing issues after deployment?**
- Configure server to serve `index.html` for all routes
- See DEPLOYMENT.md for server configs

## 📊 Performance

- Optimized bundle size (~95KB gzipped)
- Lazy loading for images
- Code splitting
- Minified assets
- Fast First Contentful Paint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is private and proprietary to Sayali Deshpande.

## 🤝 Contact

For questions or support:
- Review the DEPLOYMENT.md guide
- Check component documentation in source files
- Verify browser console for errors

## 🎉 Ready to Deploy!

Your production-ready website is in the `dist/` folder.

**Quick deploy:** Upload `dist/` contents to any static hosting service!

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

**Last Updated:** October 12, 2025
**Version:** 1.0.0
