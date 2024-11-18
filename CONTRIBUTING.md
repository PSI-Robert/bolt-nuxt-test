# Contributing to Praxxys Nuxt Boilerplate

<div align="center">

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge)](https://conventionalcommits.org)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=for-the-badge)](https://prettier.io/)
[![Maintainability](https://img.shields.io/badge/Maintainability-A+-success.svg?style=for-the-badge)](/)

A guide to contributing to the Praxxys Nuxt 3 Boilerplate project

</div>

## 📑 Table of Contents

-  [Code of Conduct](#-code-of-conduct)
-  [Getting Started](#-getting-started)
-  [Development Workflow](#-development-workflow)
-  [Project Structure](#-project-structure)
-  [Coding Standards](#-coding-standards)
-  [Commit Guidelines](#-commit-guidelines)
-  [Pull Request Process](#-pull-request-process)
-  [Testing Guidelines](#-testing-guidelines)

## 📜 Code of Conduct

Our team is dedicated to providing a welcoming and inclusive environment. We expect all contributors to:

-  Be respectful and inclusive of differing viewpoints
-  Accept constructive criticism gracefully
-  Focus on what's best for the team and project
-  Show empathy towards others

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone ssh://git@gitlab.praxxys.ph:52222/praxxys-labs-2025/frameworks/nuxt/praxxys-frontend.git
cd praxxys-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up your development environment:

   -  Install required VS Code extensions
   -  Copy `.env.example` to `.env`
   -  Configure your editor settings

4. Start the development server:

```bash
npm run dev
```

## 💻 Development Workflow

1. **Branch Creation**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Development**

   -  Write code following our [Coding Standards](#-coding-standards)
   -  Keep changes focused and atomic
   -  Update tests as needed

3. **Testing**

   ```bash
   npm run test        # Run all tests
   npm run lint        # Check code style
   npm run type-check  # Verify TypeScript
   ```

4. **Committing Changes**
   ```bash
   git add .
   git commit -m "feat: add user authentication feature"
   ```

## 📁 Project Structure

```
praxxys-frontend/
├── assets/          # Static assets
│   ├── images/     # Image files
│   └── styles/     # Global styles
├── components/     # Vue components
│   ├── common/     # Reusable UI components
│   ├── layout/     # Layout components
│   └── features/   # Feature-specific components
├── composables/    # Composition functions
├── layouts/        # Page layouts
├── pages/         # Application routes
├── stores/        # Pinia stores
├── types/         # TypeScript types
└── utils/         # Utility functions
```

## 📝 Coding Standards

### Component Structure

```vue
<script setup lang="ts">
   // 1. Type imports
   import type { User } from '~/types';

   // 2. Props/Emits
   const props = defineProps<{
      user: User;
   }>();

   // 3. Composables
   const { userData } = useUser();

   // 4. Additional logic
</script>

<template>
   <div>
      <!-- Template content -->
   </div>
</template>
```

### Naming Conventions

-  **Components:** PascalCase (`UserProfile.vue`)
-  **Files:** kebab-case (`user-profile.vue`)
-  **Functions:** camelCase (`getUserData()`)
-  **Constants:** UPPERCASE (`MAX_ITEMS`)
-  **Types/Interfaces:** PascalCase (`UserInterface`)

## 📋 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
type(scope): description

# Examples
feat(auth): add user login functionality
fix(api): resolve data fetching issue
docs(readme): update installation steps
style(lint): format code according to standards
refactor(store): improve state management logic
test(auth): add unit tests for login
chore(deps): update dependencies
```

### Types

-  `feat`: New feature
-  `fix`: Bug fix
-  `docs`: Documentation
-  `style`: Formatting
-  `refactor`: Code restructuring
-  `test`: Tests
-  `chore`: Maintenance

## 🔄 Pull Request Process

1. **Create Pull Request**

   -  Use our PR template
   -  Link related issues
   -  Include clear description

2. **Review Process**

   -  Address reviewer feedback
   -  Keep discussions focused
   -  Update PR as needed

3. **Checklist**
   -  [ ] Tests passing
   -  [ ] Code meets standards
   -  [ ] Documentation updated
   -  [ ] No conflicts with main branch

## 🧪 Testing Guidelines

### Writing Tests

```typescript
import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import MyComponent from './MyComponent.vue';

describe('MyComponent', () => {
   it('renders correctly', async () => {
      const wrapper = await mountSuspended(MyComponent);
      expect(wrapper.exists()).toBe(true);
   });
});
```

### Testing Commands

```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 🤝 Need Help?

-  Check our [GitLab Wiki](/-/wikis/home)
-  Contact the team lead
-  Open an issue for discussion

---

<div align="center">
  <sub>Thank you for contributing to the Praxxys Nuxt Boilerplate! 🙏</sub>
</div>
