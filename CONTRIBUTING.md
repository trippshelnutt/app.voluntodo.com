# Contributing to VolunTodo

Thank you for your interest in contributing to VolunTodo! This document provides guidelines for setting up your development environment, making changes, and submitting contributions.

## Code of Conduct

- Be respectful and professional
- Write clear, descriptive commit messages
- Follow the project's coding standards
- Test your changes thoroughly before submitting

## Getting Started

### 1. Fork and Clone

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/app.voluntodo.com.git
cd app.voluntodo.com

# Add upstream remote
git remote add upstream https://github.com/trippshelnutt/app.voluntodo.com.git
```

### 2. Create a Feature Branch

```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Or for bug fixes:
git checkout -b fix/your-bug-fix
```

Branch naming convention:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test improvements
- `chore/` - Maintenance tasks

### 3. Set Up Development Environment

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

## Development Workflow

### Making Changes

1. **Code Style**: Follow the existing code style
   - Use TypeScript for all code
   - Enable strict mode (`"strict": true` in tsconfig.json)
   - Use meaningful variable and function names
   - Add comments for complex logic

2. **React Components**: Follow these patterns
   ```typescript
   // src/components/MyComponent.tsx
   import React from 'react';
   
   interface Props {
     title: string;
     onClick?: () => void;
   }
   
   export default function MyComponent({ title, onClick }: Props) {
     return (
       <div onClick={onClick}>
         {title}
       </div>
     );
   }
   ```

3. **Styling**: Use Tailwind CSS utility classes
   ```typescript
   // ✅ Good
   <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
     Click me
   </button>
   
   // ❌ Avoid custom CSS
   <style>button { padding: 8px 16px; }</style>
   ```

### Testing Your Changes

Before committing, ensure:

1. **Unit Tests**
   ```bash
   npm run test:unit
   # Create tests for new components:
   # src/components/__tests__/MyComponent.test.tsx
   ```

2. **E2E Tests**
   ```bash
   npm run build    # Build first
   npm run test:e2e
   ```

3. **Type Checking**
   ```bash
   npm run type-check
   ```

4. **Linting**
   ```bash
   npm run lint
   ```

5. **All Together**
   ```bash
   npm run build && npm run test:unit && npm run type-check && npm run lint
   ```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat` - A new feature
- `fix` - A bug fix  
- `docs` - Documentation only changes
- `style` - Formatting, missing semi-colons, etc. (no code change)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `perf` - Performance improvement
- `test` - Adding or updating tests
- `build` - Changes to build system or dependencies
- `ci` - Changes to CI configuration
- `chore` - Other changes that don't modify src or test files

### Examples

```bash
# Good commit messages
git commit -m "feat(components): add new Navigation component with responsive menu"
git commit -m "fix: resolve TypeScript error in HeroSection test"
git commit -m "docs: update README with deployment instructions"
git commit -m "test: add accessibility tests for keyboard navigation"
git commit -m "perf: optimize image loading with lazy loading"

# Bad commit messages
git commit -m "update stuff"
git commit -m "WIP"
git commit -m "fix things"
```

### Multi-line Commits

For complex changes, use multi-line commits:

```bash
git commit -m "feat(components): add dark mode toggle

- Add dark mode state to context provider
- Create DarkModeToggle component
- Update all components to support dark: classes
- Add tests for dark mode functionality

Closes #123"
```

## Testing Requirements

### Unit Tests

Create tests for:
- New components
- New utility functions
- Bug fixes (to prevent regressions)

Location: `src/components/__tests__/MyComponent.test.tsx`

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/src/components/MyComponent';

describe('MyComponent', () => {
  it('should render text content', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### E2E Tests

Create tests for:
- Major user workflows
- Responsive design on all breakpoints
- Accessibility compliance
- Performance metrics

Location: `e2e/feature-name.spec.ts`

## Pull Request Process

### Before Submitting

1. **Sync with main**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all checks**
   ```bash
   npm run lint
   npm run type-check
   npm run test:unit
   npm run build
   npm run test:e2e
   ```

3. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (please describe)

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing Done
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated
- [ ] Tested on desktop (1920px)
- [ ] Tested on tablet (768px)
- [ ] Tested on mobile (375px)
- [ ] Accessibility checked (keyboard nav, screen reader)

## Screenshots (if applicable)
Add screenshots of UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] Type-check passes
- [ ] Lint passes
- [ ] No console errors/warnings
- [ ] Commit messages follow Conventional Commits
```

## Code Review Process

Reviewers will check:

1. **Code Quality**
   - Follows TypeScript strict mode
   - Follows naming conventions
   - No code duplication
   - Proper error handling

2. **Testing**
   - Adequate test coverage
   - Tests are meaningful and passing
   - Edge cases covered

3. **Performance**
   - No unnecessary re-renders
   - Proper memoization where needed
   - Image optimization

4. **Accessibility**
   - Semantic HTML
   - Keyboard navigation
   - Color contrast
   - ARIA labels where needed

5. **Documentation**
   - README updated if needed
   - Complex logic has comments
   - Types are properly documented

## Reporting Issues

If you find a bug or have a feature request:

1. Check existing issues to avoid duplicates
2. Create a new issue with:
   - Clear title describing the problem
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Browser/OS information

## Questions?

- Check [README.md](./README.md) for project overview
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment details
- Review existing code and tests for examples

Thank you for contributing! 🎉
