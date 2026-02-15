# Developer Quickstart Guide

**Feature Branch**: `001-shared-todo-mvp`  
**Purpose**: Get developers up and running in minutes  
**Status**: Complete  
**Last Updated**: 2026-02-14

---

## 5-Minute Setup

### Prerequisites

Before you start, verify you have these tools installed:

```bash
# Check Node.js version (18+ required, 22+ recommended)
node --version
# Output: v22.0.0 (or higher)

# Check npm version (10+ required)
npm --version
# Output: 10.0.0 (or higher)

# Check Git is installed
git --version
# Output: git version 2.40.0 (or higher)
```

**Don't have these?**
- **Node.js**: Download from https://nodejs.org (LTS recommended)
- **Git**: Download from https://git-scm.com

### Step 1: Clone Repository (1 min)

```bash
# Clone the project
git clone https://github.com/trippshelnutt/app.voluntodo.com.git

# Navigate to project directory
cd app.voluntodo.com

# Checkout feature branch
git checkout 001-shared-todo-mvp
```

### Step 2: Install Dependencies (2 min)

```bash
# Install all npm packages
npm install

# Expected output:
# added 150 packages in 45s
```

### Step 3: Configure Environment (1 min)

```bash
# Copy example environment variables
cp .env.example .env.local

# Edit .env.local with your local settings (usually no changes needed for development)
# nano .env.local  (or use your favorite editor)
```

**.env.local contents:**
```
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Start Development Server (1 min)

```bash
# Start the dev server
npm run dev

# Output:
# ▲ Next.js 15.0.0
# - Local:        http://localhost:3000
# - Environments: .env.local
#
# ✓ Ready in 1.2s
```

**Success!** Open http://localhost:3000 in your browser. You should see the "Coming Soon" landing page.

---

## Project File Structure

### Key Directories

```
app.voluntodo.com/
├── app/                           # Next.js App Router (page routes)
│   ├── layout.tsx                 # Root layout (HTML structure, metadata)
│   ├── page.tsx                   # Homepage (GET /)
│   ├── globals.css                # Global Tailwind CSS imports
│   └── api/
│       └── health/route.ts        # Health check endpoint
│
├── src/components/                # React components
│   ├── Navigation.tsx             # Header navigation
│   ├── HeroSection.tsx            # "Coming Soon" hero section
│   ├── Footer.tsx                 # Footer component
│   └── __tests__/                 # Component unit tests
│       ├── HeroSection.test.tsx
│       └── ...
│
├── src/lib/                       # Utilities and helpers
│   ├── config.ts                  # Configuration (env vars, constants)
│   └── constants.ts               # UI strings, tailwind breakpoints
│
├── e2e/                           # End-to-end tests (Playwright)
│   ├── landing.spec.ts            # Test: page loads correctly
│   ├── responsive.spec.ts         # Test: responsive behavior
│   ├── accessibility.spec.ts      # Test: WCAG compliance
│   └── performance.spec.ts        # Test: Lighthouse scores
│
├── .github/workflows/             # GitHub Actions CI/CD
│   ├── test.yml                   # Lint, type-check, test
│   ├── deploy.yml                 # Deploy to Netlify
│   └── performance.yml            # Lighthouse CI
│
├── specs/001-shared-todo-mvp/     # Design documents
│   ├── spec.md                    # Original feature specification
│   ├── plan.md                    # Implementation plan
│   ├── research.md                # Technology research
│   ├── data-model.md              # Data model & validation
│   ├── quickstart.md              # This file
│   └── contracts/                 # API contracts
│       ├── landing-page.md
│       └── metadata.md
│
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS customization
├── vitest.config.ts               # Unit test configuration
├── playwright.config.ts           # E2E test configuration
├── .eslintrc.json                 # Linting rules
├── .prettierrc                    # Code formatting
├── .env.example                   # Environment variable template
└── .env.local                     # Local env vars (git-ignored)
```

### Important Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Landing page component (what users see) |
| `src/components/HeroSection.tsx` | "Coming Soon" message component |
| `package.json` | List of all dependencies & npm scripts |
| `tailwind.config.ts` | Tailwind CSS customization |
| `vitest.config.ts` | Unit test runner configuration |
| `specs/001-shared-todo-mvp/plan.md` | Implementation plan & success criteria |

---

## Common npm Scripts

### Development

```bash
# Start development server (auto-reload, http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server (runs optimized build)
npm run start

# View bundle size analysis
npm run build --analyze
```

### Testing

```bash
# Run all unit tests (Vitest)
npm run test:unit

# Run unit tests in watch mode (re-run on file change)
npm run test:unit --watch

# Generate test coverage report
npm run test:unit --coverage

# Run end-to-end tests (Playwright)
npm run test:e2e

# Run E2E tests with browser visible
npm run test:e2e --headed

# Run accessibility tests (axe-core)
npm run test:a11y

# Run Lighthouse performance tests
npm run test:performance
```

### Code Quality

```bash
# Run ESLint (find style issues)
npm run lint

# Auto-fix ESLint and Prettier issues
npm run format

# Type-check with TypeScript (no build, just checking)
npm run type-check

# Run all checks together
npm run check
```

### Deployment

```bash
# Deploy to Netlify (requires configuration)
npm run deploy

# View build output size
npm run build && npm run build --analyze
```

---

## Development Workflow

### Typical Day: Making Changes

#### 1. Start Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser. You'll see the "Coming Soon" page.

#### 2. Make Code Changes
Edit any file in `src/components/` or `app/`. Your browser will **automatically reload** (hot reload).

**Example**: Edit `src/components/HeroSection.tsx`:
```tsx
// Change the headline
- <h1>Coming Soon</h1>
+ <h1>Coming Very Soon!</h1>
```
Browser reloads automatically → you see the change instantly.

#### 3. Run Tests Locally
```bash
# Check unit tests pass
npm run test:unit

# Check E2E tests pass
npm run test:e2e

# Check code quality
npm run lint
npm run type-check
```

#### 4. Commit and Push
```bash
# See what you changed
git status

# Stage your changes
git add .

# Commit with a clear message
git commit -m "feat: update hero section headline"

# Push to your feature branch
git push origin your-branch-name
```

#### 5. Create Pull Request
- Go to GitHub and create a PR from your branch to `main`
- GitHub Actions automatically runs tests
- Wait for approval from a team member
- Merge to `main` (auto-deploys to staging)

#### 6. Deploy to Production
```bash
# Create a release (vX.Y.Z format)
git tag v1.0.1
git push origin v1.0.1

# GitHub Actions auto-deploys to production (app.voluntodo.com)
```

---

## Styling with Tailwind CSS

### Tailwind Basics

Tailwind CSS provides **utility classes** for styling (no custom CSS needed).

**Example: Create a styled button**
```tsx
// Instead of custom CSS, use Tailwind utilities
<button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
  Click Me
</button>

// Breakdown:
// px-6 = padding-left & padding-right (1.5rem)
// py-3 = padding-top & padding-bottom (0.75rem)
// bg-indigo-600 = background color (indigo)
// text-white = text color (white)
// rounded-lg = border-radius (0.5rem)
// font-semibold = font-weight (600)
// hover:bg-indigo-700 = hover effect (darker indigo)
// transition-colors = smooth color transition
```

### Responsive Design with Tailwind

Use **breakpoint prefixes** to make designs responsive:

```tsx
// Mobile (320px): text-2xl
// Tablet (768px+): text-4xl
// Desktop (1024px+): text-6xl
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  Coming Soon
</h1>

// Tailwind breakpoints:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Common Tailwind Classes

```tsx
// Spacing
className="mx-auto"          // margin: auto (horizontal centering)
className="px-4 md:px-8"     // padding (responsive)
className="mt-6 mb-12"       // margin-top, margin-bottom

// Sizing
className="w-full h-screen"  // width: 100%, height: 100vh
className="max-w-4xl"        // max-width: 56rem

// Colors
className="text-gray-900 bg-white"      // text color, background
className="border border-gray-300"      // border styling
className="text-indigo-600 hover:text-indigo-700"  // hover states

// Typography
className="text-lg font-bold"           // text size, weight
className="tracking-wide leading-relaxed"  // letter spacing, line height

// Flexbox/Grid
className="flex items-center justify-center"   // Flexbox
className="grid grid-cols-1 md:grid-cols-2"    // Grid (responsive)
```

### Dark Mode

Tailwind supports dark mode via the `dark:` prefix:

```tsx
<div className="bg-white dark:bg-slate-950 text-black dark:text-white">
  {content}
</div>

// When dark mode is enabled (via system preference or manual toggle):
// - bg-white becomes bg-slate-950
// - text-black becomes text-white
```

---

## Testing Guide

### Unit Tests (Vitest)

**Where**: `src/components/__tests__/`

**Run**:
```bash
npm run test:unit
```

**Example Test**:
```typescript
// src/components/__tests__/HeroSection.test.tsx
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('should render "Coming Soon" message', () => {
    render(<HeroSection />);
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('should render call-to-action button', () => {
    render(<HeroSection />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
```

### End-to-End Tests (Playwright)

**Where**: `e2e/`

**Run**:
```bash
npm run test:e2e
```

**Example Test**:
```typescript
// e2e/landing.spec.ts
import { test, expect } from '@playwright/test';

test('should display Coming Soon on desktop', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Coming Soon');
});

test('should be responsive on mobile', async ({ page }) => {
  page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});
```

### Accessibility Tests (axe-core)

**Run**:
```bash
npm run test:a11y
```

Tests for WCAG 2.1 AA compliance automatically.

### Performance Tests (Lighthouse)

**Run**:
```bash
npm run test:performance
```

Checks for:
- FCP < 1.5s
- LCP < 2.5s
- CLS < 0.1
- Lighthouse score 80+

---

## Deployment

### Deploy to Staging

Automatic on merge to `main`:

```bash
# Your code
git push origin main

# GitHub Actions automatically:
# 1. Runs all tests
# 2. Builds the project
# 3. Deploys to Netlify staging
# 4. URL: https://staging.voluntodo.app
```

### Deploy to Production

Manual via Git release tags:

```bash
# Create a release tag (vMAJOR.MINOR.PATCH format)
git tag v1.0.0
git push origin v1.0.0

# GitHub Actions automatically:
# 1. Runs all tests
# 2. Builds the project
# 3. Deploys to Netlify production
# 4. URL: https://app.voluntodo.com
```

### Rollback Procedure

If production deployment has issues:

```bash
# Identify the previous working version
git tag -l | sort -V  # Lists all tags in version order

# Create a rollback tag (pointing to previous commit)
git tag v1.0.1-rollback <previous-commit-hash>
git push origin v1.0.1-rollback

# GitHub Actions automatically deploys the rollback version
# Netlify reverts to that version in < 5 minutes
```

---

## Environment Variables

### What Are They?

Environment variables are **secret configuration values** not stored in code (like API keys).

### Setup for Development

1. **Copy the template**:
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** (git-ignored, never committed):
   ```
   NEXT_PUBLIC_ENV=development
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Access in code**:
   ```typescript
   // Variables prefixed NEXT_PUBLIC_* are available in the browser
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
   // Output: http://localhost:3000 (development)
   //         https://app.voluntodo.com (production)
   ```

### For Staging/Production

Set in Netlify dashboard:
- `NEXT_PUBLIC_ENV=staging` (staging environment)
- `NEXT_PUBLIC_ENV=production` (production environment)
- `NEXT_PUBLIC_SITE_URL=https://app.voluntodo.com` (production)

---

## Troubleshooting

### Issue: Port 3000 Already In Use

```bash
# Error: listen EADDRINUSE :::3000
# Solution: Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

### Issue: Node.js Version Mismatch

```bash
# Error: node version is 16.x.x, need 18+
# Solution: Upgrade Node.js
# Visit https://nodejs.org and download LTS (22+ recommended)

# Verify after installation
node --version  # Should show 18+
```

### Issue: npm install Hangs

```bash
# Error: Installation takes forever or freezes
# Solution: Clear npm cache and retry
npm cache clean --force
npm install --verbose
```

### Issue: TypeScript Errors in Editor

```bash
# Solution: Ensure typescript is installed
npm install -D typescript

# Restart your editor (VS Code, etc.)
# The TypeScript language server should auto-start
```

### Issue: Hot Reload Not Working

```bash
# Error: Browser doesn't refresh when I edit files
# Solution: Check if dev server is running
npm run dev

# If still not working:
# 1. Save a file to trigger reload
# 2. Check browser console for errors
# 3. Restart dev server: Ctrl+C then npm run dev
```

### Issue: Tests Fail Locally But Pass on CI

```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Then run tests again
npm run test:unit
```

---

## Git Workflow

### Create a New Feature Branch

```bash
# Create and checkout a new branch
git checkout -b feature/my-feature

# Or use the newer syntax
git switch -c feature/my-feature
```

### Commit Changes

```bash
# See what changed
git status

# Stage specific files
git add src/components/HeroSection.tsx

# Or stage all changes
git add .

# Commit with a descriptive message
git commit -m "feat: update hero section styling"
```

**Commit Message Format** (Conventional Commits):
- `feat: add new feature`
- `fix: fix a bug`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code cleanup`
- `test: add tests`
- `chore: update dependencies`

### Push and Create PR

```bash
# Push your branch to GitHub
git push origin feature/my-feature

# Then create a PR on GitHub (button will appear after push)
```

### Review Process

1. **Team member reviews** your code
2. **GitHub Actions runs tests** automatically
3. **Address feedback** (make requested changes)
4. **Get approval** (minimum 1 approval required)
5. **Merge to main** (auto-deploys to staging)

---

## Performance Checklist

Before committing code:

- [ ] Run tests: `npm run test:unit`
- [ ] Check types: `npm run type-check`
- [ ] Check linting: `npm run lint`
- [ ] Build locally: `npm run build` (no errors/warnings)
- [ ] Check bundle size: `npm run build --analyze` (< 50KB)
- [ ] Test responsively: `npm run dev` then use Chrome DevTools device emulation

---

## Getting Help

### Documentation
- **Phase 1 Plan**: `specs/001-shared-todo-mvp/plan.md` (implementation roadmap)
- **Data Model**: `specs/001-shared-todo-mvp/data-model.md` (what we're building)
- **API Contracts**: `specs/001-shared-todo-mvp/contracts/` (API specifications)
- **Technology Research**: `specs/001-shared-todo-mvp/research.md` (why we chose these tools)

### Common Questions

**Q: Where do I add new components?**  
A: Create files in `src/components/` folder (e.g., `NewComponent.tsx`).

**Q: How do I add a new page?**  
A: Create a new folder in `app/` with a `page.tsx` file (Next.js routing).

**Q: How do I style a component?**  
A: Use Tailwind CSS utility classes in the `className` attribute. Don't write custom CSS.

**Q: How do I add a new npm dependency?**  
A: `npm install package-name` (or `npm install -D package-name` for dev dependencies).

**Q: How often should I commit?**  
A: After completing a small logical unit of work (not too frequent, not too rare).

---

## Next Steps

1. **Run the dev server**: `npm run dev`
2. **Open the page**: http://localhost:3000
3. **Edit a component**: Try changing text in `src/components/HeroSection.tsx`
4. **Watch it reload**: Browser updates automatically
5. **Run tests**: `npm run test:unit` to verify everything works
6. **Read the plan**: `specs/001-shared-todo-mvp/plan.md` for next tasks

---

**Status**: ✅ Complete  
**Last Updated**: 2026-02-14  
**Ready for Phase 2 Development**

**Questions?** Check the specs directory or review the design documents for more details.
