# Praxxys Nuxt 3 Boilerplate

<div align="center">

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82.svg?style=for-the-badge&logo=nuxt.js)](https://v3.nuxtjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)

A production-ready Nuxt 3 boilerplate with TypeScript, featuring standardized project structure and modern development tools.

</div>

## ✨ Features

-  🚀 [Nuxt 3](https://v3.nuxtjs.org) - The Intuitive Vue Framework
-  📝 [TypeScript](https://www.typescriptlang.org/) - Type checking for improved reliability
-  🎨 Modern UI development with shadcn-ui
-  📱 Mobile-first responsive design
-  🔍 SEO optimization utilities
-  🧪 Testing setup with Vitest
-  📊 State management with Pinia
-  🛠️ VS Code configuration included

## 🚀 Quick Start

### Prerequisites

-  Node.js (v16.x or later)
-  npm (included with Node.js)
-  Git

### Installation

1. Clone the repository:

```bash
git clone ssh://git@gitlab.praxxys.ph:52222/praxxys-labs-2025/frameworks/nuxt/praxxys-frontend.git
cd praxxys-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📚 Documentation

Comprehensive documentation is available in our [GitLab Wiki](https://gitlab.praxxys.ph/praxxys-labs-2025/frameworks/nuxt/praxxys-frontend/-/wiki).

Key documentation sections:

-  [Getting Started](/-/wikis/Getting-Started)
-  [Project Structure](/-/wikis/Project-Structure)
-  [Development Guidelines](/-/wikis/Development-Guidelines)
-  [Component Standards](/-/wikis/Component-Standards)

## 🛠️ Development Tools

### VS Code Extensions

Required extensions for optimal development experience:

-  Vue - Official
-  ESLint
-  Prettier
-  GitLens

### Available Scripts

```bash
# Development
npm run dev           # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode

# Linting
npm run lint         # Lint code
npm run lint:fix     # Fix linting issues
```

## 🏗️ Project Structure

```
praxxys-frontend/
├── assets/          # Static assets
├── components/      # Vue components
├── composables/     # Composition functions
├── layouts/         # Page layouts
├── middleware/      # Route middleware
├── pages/          # Application pages
├── plugins/        # Nuxt plugins
├── server/         # Server-side code
├── stores/         # Pinia stores
├── types/          # TypeScript types
└── utils/          # Utility functions
```

## 🔍 Environment Configuration

Configure your environment variables in `.env`:

```env
NUXT_PUBLIC_API_BASE=http://localhost:8000
NUXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

For detailed deployment instructions, refer to our [Deployment Guide](/-/wikis/Deployment-Guide).

## 📝 License

This project is proprietary and confidential. Unauthorized copying or distribution of this project's files, via any medium, is strictly prohibited.

## 👥 Team

Maintained by the Praxxys Development Team.

---

<div align="center">
  <sub>Built with ❤️ by Praxxys</sub>
</div>
