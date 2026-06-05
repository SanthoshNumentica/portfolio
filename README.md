# Sadaiyappan Subramani - Portfolio Website

A modern, high-performance, single-page developer portfolio built with **React.js**, **Vite**, **Bootstrap 5**, and the **pnpm** package manager.

## Features
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens.
- **Dynamic Scroll Entrances**: Intersection Observer hooks for scroll reveal animations.
- **Interactive Skills Grid**: Progress indicators that animate automatically as you scroll down.
- **Visa & Relocation Dashboard**: Highlights German skilled migration eligibility (EU Blue Card, Anabin H+ status).
- **State-Controlled Contact**: Client-side validated form with responsive submission loaders.

## Tech Stack
- **Framework**: React 19
- **Build System**: Vite 8
- **Styling**: Bootstrap 5 + custom variables & utilities
- **Package Manager**: pnpm 10

## Getting Started (Local Development)

### 1. Install Dependencies
Make sure you have [pnpm](https://pnpm.io/) installed:
```bash
pnpm install
```

### 2. Run the Development Server
Launch the local Vite server:
```bash
pnpm dev
```
Open `http://localhost:5173/` in your browser.

### 3. Build for Production
Compile optimized build bundles inside the `dist/` directory:
```bash
pnpm build
```

## Directory Structure
- `src/components/` - Subcomponents for page sections (Navbar, ProfileCard, HeroSection, WorkSection, SkillsSection, ProjectsSection, EducationSection, CertificatesSection, ContactSection).
- `src/App.jsx` - App entry point coordinating observers, tooltips, and layouts.
- `src/style.css` - Theme styles, typography overrides, and layout systems.
- `public/` - Public assets including images and documentation.
- `static-portfolio-backup/` - Saved copy of the original static website files.
