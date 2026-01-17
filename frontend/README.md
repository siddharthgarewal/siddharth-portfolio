# 🚀 Siddharth Garewal - Professional Portfolio

A modern, responsive, and fully-featured portfolio website built with React, showcasing professional experience, projects, skills, and seamless GitHub integration.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Key Features & Components](#key-features--components)
- [Configuration](#configuration)
- [Deployment](#deployment)

## ✨ Features

- **Modern Hero Section** - Eye-catching landing page with smooth animations and glassmorphism effects
- **Live GitHub Integration** - Dynamically fetches and displays your top 3 GitHub repositories
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Dark Theme** - Beautiful dark gradient backgrounds with smooth transitions
- **Interactive Navigation** - Smooth scrolling between sections with fixed header
- **Experience Timeline** - Detailed work experience with technologies used
- **Skills Dashboard** - 4-category skill organization with visual cards
- **Project Cards** - Enhanced project display with language badges, topics, and stats
- **Download Resume** - One-click resume download functionality
- **Contact Section** - Easy-to-use contact form and social links
- **Smooth Animations** - Hover effects, fade-ins, and scroll animations throughout

## 🛠️ Tech Stack

### Frontend

- **React 19.0.0** - UI library with functional components and hooks
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing for Tailwind
- **Lucide React** - Beautiful, consistent SVG icons
- **Radix UI** - Unstyled, accessible component primitives
- **class-variance-authority (CVA)** - CSS class composition library

### Build & Development

- **Create React App** - Zero-configuration setup
- **react-scripts 5.0.1** - CRA build scripts
- **react-router-dom 7.5.1** - Client-side routing (extensible)

### State Management & Forms

- **React Hooks** - useState, useEffect for local state management
- **react-hook-form 7.56.2** - Efficient form handling

### API Integration

- **GitHub API v3** - Fetch repository data and metadata

## 📁 Project Structure

```
frontend/
├── public/
│   ├── assets/
│   │   ├── profile.png           # Profile picture
│   │   └── Siddharth_Garewal_5_Yrs_Exp.pdf  # Resume
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Navigation header with smooth scroll
│   │   ├── Hero.jsx              # Hero section with CTA buttons
│   │   ├── Experience.jsx        # Work experience timeline
│   │   ├── GitHubProjects.jsx    # Dynamic GitHub projects display
│   │   ├── Skills.jsx            # 4-category skills dashboard
│   │   ├── Projects.jsx          # Static featured projects
│   │   ├── Contact.jsx           # Contact form & info
│   │   ├── Footer.jsx            # Footer section
│   │   └── ui/                   # Radix UI component library
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       ├── textarea.jsx
│   │       └── [other UI components]
│   ├── data/
│   │   └── mock.js               # Portfolio content & metadata
│   ├── hooks/
│   │   └── use-toast.js          # Toast notifications hook
│   ├── lib/
│   │   └── utils.js              # Utility functions
│   ├── App.js                    # Main app component
│   ├── App.css
│   ├── index.js                  # React entry point
│   ├── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── .env
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/siddharthgarewal/siddharth-portfolio.git
cd siddharth-portfolio/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📝 Available Scripts

### Development

```bash
npm start
```

Runs the app in development mode with hot reload.

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- The page reloads when you make changes
- Lint errors appear in the console

### Build for Production

```bash
npm run build
```

Creates an optimized production build:

- Bundles React in production mode
- Minifies code and optimizes performance
- Filenames include hashes for caching
- Output is in the `build/` folder

### Testing

```bash
npm test
```

Launches the test runner in interactive watch mode.

### Eject Configuration

```bash
npm run eject
```

⚠️ **Warning: This is a one-way operation!**
Ejects from Create React App and exposes all configuration files.

## 🎨 Key Features & Components

### Hero Section (`Hero.jsx`)

- **Responsive Layout** - Full-height hero with gradient background
- **CTA Buttons**:
  - "View My Work" - Smooth scroll to projects section
  - "Download Resume" - Downloads PDF from `/public/assets/`
- **Contact Information** - Location, email, phone
- **Profile Image** - Stored in `/public/assets/profile.png`
- **Animations** - Pulse effects and scroll indicator

### GitHub Projects (`GitHubProjects.jsx`)

- **Dynamic Fetching** - Retrieves top 3 repositories from GitHub API
- **Features**:
  - Star count badges with animation
  - Language color-coded indicators
  - Topics/tags display
  - Watchers and forks stats
  - Last updated date (human-readable)
  - License information
  - Links to demo and code
- **Error Handling** - Graceful fallback UI with retry option

### Skills Section (`Skills.jsx`)

- **4 Categories**:
  1. Core Technologies (6 skills)
  2. Frameworks (6 skills)
  3. Styling & Design (4 skills)
  4. Tools & Platforms (4 skills)
- **Glassmorphism Cards** - Backdrop blur effects with hover animations
- **Responsive Grid** - 1 col mobile, 2 cols tablet, 3-4 cols desktop
- **Category Icons** - Visual indicators using Lucide icons

### Header Navigation (`Header.jsx`)

- **Fixed Positioning** - Stays at top during scroll
- **Smooth Scrolling** - Scroll to sections with animation
- **Special Action**:
  - "About" link scrolls to top of page
- **Responsive Menu** - Mobile hamburger menu
- **Social Links** - GitHub, LinkedIn icons
- **Contact CTA** - Quick access button

### Experience Section (`Experience.jsx`)

- **Timeline Display** - Chronological work history
- **Project Details**:
  - Company & title
  - Duration
  - Technologies used
  - Key responsibilities

## ⚙️ Configuration

### Adding Your Content

Edit `src/data/mock.js` to update:

- Personal information
- Work experience
- Projects
- Skills
- Education
- Contact details

### GitHub Integration

Update the GitHub username in `src/components/GitHubProjects.jsx`:

```javascript
const GITHUB_USERNAME = "siddharthgarewal"; // Change to your username
```

### Resume Download

Place your resume PDF at:

```
frontend/public/assets/Siddharth_Garewal_5_Yrs_Exp.pdf
```

### Profile Picture

Place your profile image at:

```
frontend/public/assets/profile.png
```

### Environment Variables

Check `.env` file for configuration:

```
REACT_APP_BACKEND_URL=https://your-backend-url.com
WDS_SOCKET_PORT=443
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

1. **Vercel** (Recommended)
   - Connect GitHub repository
   - Auto-deploys on push

2. **Netlify**
   - Deploy from `build/` folder
   - Configure environment variables

3. **GitHub Pages**
   - Add to `package.json`: `"homepage": "https://siddharthgarewal.github.io"`
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add deploy scripts to `package.json`

4. **Traditional Hosting**
   - Upload contents of `build/` folder to web server

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- Code splitting with React.lazy (extensible)
- Optimized images and assets
- Minified CSS and JavaScript
- CDN-ready build output
- Smooth animations using CSS transforms

## 🔗 API Rate Limits

GitHub API allows:

- **60 requests/hour** (unauthenticated)
- **5000 requests/hour** (authenticated)

For higher limits, add a GitHub Personal Access Token to requests.

## 🐛 Troubleshooting

### GitHub Projects Not Loading

1. Check internet connectivity
2. Verify GitHub username in `GitHubProjects.jsx`
3. Ensure repositories are public
4. Check browser console for API errors

### Resume Download Not Working

1. Verify file exists at `public/assets/Siddharth_Garewal_5_Yrs_Exp.pdf`
2. Check file permissions
3. Clear browser cache

### Styling Issues

1. Run `npx update-browserslist-db@latest`
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Restart development server

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Lucide React Icons](https://lucide.dev)
- [Radix UI Components](https://www.radix-ui.com)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Siddharth Garewal**

- 5+ Years of Full-Stack Development Experience
- GitHub: [@siddharthgarewal](https://github.com/siddharthgarewal)
- LinkedIn: [Siddharth Garewal](https://linkedin.com/in/siddharthgarewal)
- Email: contact@example.com

## 🙏 Acknowledgments

- Built with Create React App
- UI Components from Radix UI
- Icons from Lucide React
- Styling with Tailwind CSS
- GitHub data via GitHub API

---

**Last Updated**: January 2026
**Version**: 1.0.0

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
