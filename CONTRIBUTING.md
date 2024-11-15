# Contributing to [Your Project Name]

Thank you for your interest in contributing to our project! We welcome contributions from everyone. This document will guide you through our development process and project structure.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Coding Standards](#coding-standards)
6. [Commit Guidelines](#commit-guidelines)
7. [Pull Request Process](#pull-request-process)
8. [Testing](#testing)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/project-name.git`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

## Project Structure

Our project follows a standardized structure designed for large-scale applications and team collaboration:
📁 project-root/ ├── 📁 assets/ ├── 📁 components/ │ ├── 📁 common/ │ ├── 📁 layout/ │ └── 📁 features/ ├── 📁 composables/ ├── 📁 layouts/ ├── 📁 middleware/ ├── 📁 pages/ ├── 📁 plugins/ ├── 📁 stores/ ├── 📁 types/ ├── 📁 utils/ ├── 📁 server/ └── 📁 test/

For detailed information about each directory's purpose, please refer to our [Project Structure Guide](content/project-structure.md).

## Development Workflow

1. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name`
2. Make your changes, following our coding standards
3. Write or update tests as necessary
4. Run tests and ensure they pass: `npm run test`
5. Commit your changes following our commit guidelines
6. Push your branch and create a pull request

## Coding Standards

-  Use TypeScript for all new code
-  Follow the [Vue.js Style Guide](https://vuejs.org/style-guide/)
-  Use Composition API for new components
-  Use Pinia for state management
-  Follow naming conventions:
   -  PascalCase for component names
   -  camelCase for method and property names
   -  kebab-case for custom events

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

-  `feat:` for new features
-  `fix:` for bug fixes
-  `docs:` for documentation changes
-  `style:` for changes that do not affect the meaning of the code
-  `refactor:` for code changes that neither fix a bug nor add a feature
-  `perf:` for performance improvements
-  `test:` for adding or modifying tests
-  `chore:` for changes to the build process or auxiliary tools

Example: `feat: add user authentication feature`

## Pull Request Process

1. Ensure your code follows our coding standards and project structure
2. Update the README.md with details of significant changes if applicable
3. Add any necessary documentation to the `content/` directory
4. Ensure all tests pass and add new tests for new functionality
5. Your pull request will be reviewed by at least one maintainer
6. Address any comments or requested changes
7. Once approved, your pull request will be merged

## Testing

-  Write unit tests for all new functionality
-  Update existing tests when modifying code
-  Ensure all tests pass before submitting a pull request
-  Aim for high test coverage, especially for critical paths

We use Vitest for unit testing. Run tests with:
npm run test

Thank you for contributing to Boilerplate!
