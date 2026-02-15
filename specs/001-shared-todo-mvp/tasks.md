---
description: "Task list for Shared Todo Coming Soon MVP Phase 2 Implementation"
---

# Tasks: Responsive Shared Todo Web App - Coming Soon Landing Page (MVP)

**Feature Branch**: `001-shared-todo-mvp`  
**Status**: Phase 2 - Implementation Ready  
**Timeline**: 6-8 hours development  
**Last Updated**: 2026-02-14

**Input**: Design documents from `/specs/001-shared-todo-mvp/`  
**Prerequisites**: ✅ plan.md, ✅ spec.md, ✅ data-model.md, ✅ contracts/, ✅ research.md, ✅ quickstart.md

---

## Format: `[ID] [P?] [Story] Description with file path`

- **[ID]**: Task identifier (T001, T002, etc.) - execution order
- **[P]**: Optional marker - task can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1, US2, US3) - required for user story tasks only
- **Description**: Clear action with exact file path for implementation

---

## Executive Summary

This MVP implements a production-ready "Coming Soon" landing page with:

- **3 Priority-1 User Stories** (all MVP-critical):
  - **US1**: Visitor Views Landing Page (responsive, fast, accessible)
  - **US2**: Deploy to Stage Environment (CI/CD pipeline)
  - **US3**: Deploy to Production Environment (automated release)

- **Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Vitest, Playwright, Netlify

- **Quality Gates**: 
  - Lighthouse 80+ (performance)
  - WCAG 2.1 AA (accessibility)
  - 80%+ test coverage (unit + E2E)
  - < 50KB total bundle size

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and Next.js configuration

### Core Setup

- [ ] T001 Initialize Next.js 15 project with TypeScript strict mode in app.voluntodo.com/
- [ ] T002 [P] Configure TypeScript compiler options in tsconfig.json (strict mode enabled)
- [ ] T003 [P] Setup Tailwind CSS v4 configuration in tailwind.config.ts
- [ ] T004 [P] Configure PostCSS for Tailwind processing in postcss.config.ts
- [ ] T005 [P] Create global styles and Tailwind imports in app/globals.css
- [ ] T006 [P] Configure ESLint rules in .eslintrc.json (align with Constitution)
- [ ] T007 [P] Configure Prettier formatting in .prettierrc
- [ ] T008 [P] Setup environment variables template in .env.example
- [ ] T009 [P] Create local development env file .env.local (git-ignored)

### Project Structure

- [ ] T010 [P] Create component directory structure: src/components/, src/lib/, src/types/
- [ ] T011 [P] Create test directories: src/components/__tests__/, e2e/
- [ ] T012 [P] Create GitHub workflow directory: .github/workflows/
- [ ] T013 [P] Create public assets directory with placeholder images

### Package Management

- [ ] T014 Verify npm dependencies in package.json (Next.js, React, TypeScript, Tailwind)
- [ ] T015 [P] Add development dependencies: vitest, @testing-library/react, @testing-library/dom
- [ ] T016 [P] Add E2E testing: playwright, @axe-core/playwright
- [ ] T017 [P] Add code quality tools: eslint, prettier, typescript
- [ ] T018 Run npm install and verify no critical vulnerabilities (npm audit)
- [ ] T019 Verify dev server starts with `npm run dev` (test http://localhost:3000)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that ALL user stories depend on - MUST complete first

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

### Layout & Root Configuration

- [ ] T020 Create root layout in app/layout.tsx with metadata API (title, description, Open Graph)
- [ ] T021 [P] Configure favicon and touch icons in app/layout.tsx with links to public/
- [ ] T022 [P] Setup schema.org JSON-LD structured data in app/layout.tsx
- [ ] T023 Create error boundary in app/error.tsx (catch render errors)
- [ ] T024 Create 404 page in app/not-found.tsx (graceful 404 handling)

### Type System & Config

- [ ] T025 [P] Define TypeScript types in src/types/index.ts (LandingPageContent, SocialLinks, PageMetadata)
- [ ] T026 [P] Create config utilities in src/lib/config.ts (environment detection, site URLs)
- [ ] T027 [P] Create constants in src/lib/constants.ts (UI strings, theme colors, breakpoints)
- [ ] T028 Create utility functions in src/lib/utils.ts (class merging, validation helpers)

### Testing Framework Setup

- [ ] T029 Configure Vitest in vitest.config.ts (test runner, coverage settings)
- [ ] T030 [P] Configure Playwright in playwright.config.ts (browsers, devices, timeout)
- [ ] T031 [P] Create Playwright test fixtures in e2e/fixtures/test-data.ts
- [ ] T032 Setup GitHub Actions workflow for testing in .github/workflows/test.yml

### Health Check Endpoint

- [ ] T033 Create health check endpoint in app/api/health/route.ts (returns 200 OK with status)
- [ ] T034 Test health check returns JSON: {status, timestamp, environment, version}

### SEO & Metadata Assets

- [ ] T035 [P] Create favicon (16x16, 32x32) and place in public/favicon*.png
- [ ] T036 [P] Create Open Graph image (1200x630px) in public/og-image.png
- [ ] T037 [P] Create apple-touch-icon (180x180px) in public/apple-touch-icon.png
- [ ] T038 [P] Create robots.txt in public/robots.txt (allow all, sitemap reference)
- [ ] T039 [P] Create sitemap.xml in public/sitemap.xml (landing page entry)
- [ ] T040 [P] Create PWA manifest in public/manifest.json (app name, icons, theme color)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Visitor Views Landing Page (Priority: P1) 🎯 MVP

**Feature**: Responsive, accessible, performant landing page displaying "Coming Soon" message

**Goal**: Deploy a beautiful, fast, mobile-first landing page that attracts and engages visitors

**Independent Test**: Navigate to website URL on various devices/browsers, verify "Coming Soon" message displays correctly with responsive layout, all links functional, page loads in < 2s

**Acceptance Criteria**:
- ✅ "Coming Soon" headline visible and centered on all devices (320px → 4K)
- ✅ Page loads in < 2 seconds on 3G network
- ✅ WCAG 2.1 AA accessibility compliance (zero critical violations)
- ✅ Lighthouse score 80+ on mobile and desktop
- ✅ Responsive on desktop (1440px), tablet (768px), mobile (375px)

### Components (Implementation)

- [ ] T041 [P] [US1] Create HeroSection component in src/components/HeroSection.tsx (headline, subtitle, CTA button)
- [ ] T042 [P] [US1] Create Navigation component in src/components/Navigation.tsx (header with logo)
- [ ] T043 [P] [US1] Create Footer component in src/components/Footer.tsx (copyright, social links)
- [ ] T044 [P] [US1] Create ComingSoonBadge component in src/components/ComingSoonBadge.tsx (status badge)
- [ ] T045 [US1] Create component barrel export in src/components/index.ts

### Page Assembly

- [ ] T046 [US1] Create landing page in app/page.tsx (assemble HeroSection + Navigation + Footer)
- [ ] T047 [US1] Apply responsive Tailwind classes to all components (md:, lg: prefixes for breakpoints)
- [ ] T048 [US1] Verify mobile-first design (320px base, scales up)

### Styling & Design

- [ ] T049 [P] [US1] Apply Tailwind utility classes to HeroSection (gradient bg, responsive text sizes)
- [ ] T050 [P] [US1] Apply Tailwind utility classes to Navigation (logo, nav links)
- [ ] T051 [P] [US1] Apply Tailwind utility classes to Footer (links, copyright, social icons)
- [ ] T052 [US1] Ensure color contrast meets WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large)
- [ ] T053 [US1] Verify no custom CSS needed (use Tailwind utilities only)

### Responsive Design

- [ ] T054 [US1] Test responsive layout at breakpoints: 320px, 375px, 768px, 1024px, 1440px, 1920px
- [ ] T055 [US1] Verify text sizes scale responsively: mobile text-2xl → tablet text-4xl → desktop text-6xl
- [ ] T056 [US1] Verify padding/spacing scale responsively: mobile px-4 → desktop px-12
- [ ] T057 [US1] Verify images scale responsively with Next.js Image component
- [ ] T058 [US1] Verify no horizontal scroll on any device

### Accessibility (WCAG 2.1 AA)

- [ ] T059 [US1] Add semantic HTML: proper heading hierarchy (h1, h2, h3 - no skips)
- [ ] T060 [US1] Add alt text to all images in Image components
- [ ] T061 [US1] Ensure all buttons have accessible labels (text visible or aria-label)
- [ ] T062 [US1] Verify focus indicators visible on all interactive elements (focus:ring-2)
- [ ] T063 [US1] Verify keyboard navigation works (Tab through all elements, Enter to activate buttons)
- [ ] T064 [US1] Add aria-live regions for dynamic content (if any)
- [ ] T065 [US1] Verify form labels properly associated (htmlFor, id attributes)

### Unit Tests (Vitest)

- [ ] T066 [P] [US1] Write unit tests for HeroSection in src/components/__tests__/HeroSection.test.tsx
  - Test renders "Coming Soon" headline
  - Test renders subtitle text
  - Test renders CTA button with correct text
  - Test applies responsive classes (text-2xl md:text-4xl lg:text-6xl)
  - Test line height and spacing meets accessibility standards

- [ ] T067 [P] [US1] Write unit tests for Navigation in src/components/__tests__/Navigation.test.tsx
  - Test renders logo/brand name
  - Test renders navigation links
  - Test links have correct href attributes

- [ ] T068 [P] [US1] Write unit tests for Footer in src/components/__tests__/Footer.test.tsx
  - Test renders copyright text
  - Test renders social media links
  - Test links point to correct URLs

- [ ] T069 [P] [US1] Write unit tests for landing page in src/__tests__/page.test.tsx
  - Test page renders without errors
  - Test all components are present (Navigation, HeroSection, Footer)
  - Test page structure is correct (header, main, footer)

- [ ] T070 [US1] Run unit tests: `npm run test:unit` - all should pass

### E2E Tests (Playwright)

- [ ] T071 [P] [US1] Write E2E test for page load in e2e/landing.spec.ts
  - Test page loads on desktop (1440px viewport)
  - Test page loads on tablet (768px viewport)
  - Test page loads on mobile (375px viewport)
  - Test "Coming Soon" headline is visible on all devices
  - Test CTA button is visible and clickable

- [ ] T072 [P] [US1] Write E2E test for responsive layout in e2e/responsive.spec.ts
  - Test layout reflows correctly on mobile (320px) without horizontal scroll
  - Test layout adapts for tablet (768px)
  - Test layout looks professional on desktop (1440px)
  - Test text remains readable at all sizes (font-size >= 16px)
  - Test button hit area >= 44x44px (iOS) or 48x48px (Android)

- [ ] T073 [P] [US1] Write E2E test for accessibility in e2e/accessibility.spec.ts
  - Test axe-core finds zero WCAG 2.1 AA violations
  - Test keyboard navigation: Tab through all elements
  - Test focus indicators visible on keyboard nav
  - Test color contrast >= 4.5:1 for body text
  - Test all images have alt text
  - Test semantic HTML structure (h1, h2, h3 hierarchy)

- [ ] T074 [P] [US1] Write E2E test for performance in e2e/performance.spec.ts
  - Test page loads in < 2 seconds on 3G network
  - Test First Contentful Paint (FCP) < 1.5s
  - Test Largest Contentful Paint (LCP) < 2.5s
  - Test Cumulative Layout Shift (CLS) < 0.1
  - Test Lighthouse score >= 80 (mobile and desktop)

- [ ] T075 [P] [US1] Write E2E test for metadata in e2e/metadata.spec.ts
  - Test page title is set correctly
  - Test meta description is present
  - Test Open Graph tags (og:title, og:description, og:image, og:url)
  - Test Twitter Card tags (twitter:card, twitter:title, twitter:image)
  - Test canonical URL is set
  - Test schema.org JSON-LD is present

- [ ] T076 [P] [US1] Write E2E test for browser compatibility in e2e/browsers.spec.ts
  - Test page renders correctly on Chrome (latest)
  - Test page renders correctly on Firefox (latest)
  - Test page renders correctly on Safari (latest)
  - Test graceful degradation for older browsers

- [ ] T077 [US1] Run E2E tests: `npm run test:e2e` - all should pass

### Performance Testing (Lighthouse CI)

- [ ] T078 [P] [US1] Configure Lighthouse CI in .github/lighthouse-config.json
  - Set performance budget: Lighthouse score >= 80
  - Set FCP < 1.5s threshold
  - Set LCP < 2.5s threshold
  - Set CLS < 0.1 threshold

- [ ] T079 [US1] Run local Lighthouse test: `npm run test:performance`
  - Verify score >= 80 on desktop
  - Verify score >= 80 on mobile
  - Verify performance metrics within targets

### Bundle Size & Optimization

- [ ] T080 [US1] Analyze bundle size with `npm run build --analyze`
  - Verify total < 50KB gzipped
  - Verify HTML < 5KB
  - Verify CSS < 10KB
  - Verify JavaScript < 20KB
  - Verify images < 30KB

- [ ] T081 [US1] Optimize images: convert to WebP, use responsive sizes
- [ ] T082 [US1] Verify CSS PurgeCSS removes unused Tailwind utilities
- [ ] T083 [US1] Verify JavaScript code splitting is working (check build output)

### Code Quality

- [ ] T084 [US1] Run ESLint: `npm run lint` - zero errors/warnings
- [ ] T085 [US1] Run Prettier: `npm run format` - format all code
- [ ] T086 [US1] Run TypeScript: `npm run type-check` - zero type errors
- [ ] T087 [US1] Verify test coverage >= 80% for all components

**Checkpoint**: User Story 1 complete - landing page fully functional, tested, and performant

---

## Phase 4: User Story 2 - Deploy to Stage Environment (Priority: P1)

**Feature**: Automated deployment pipeline to staging environment for testing

**Goal**: Enable safe testing and validation of changes before production

**Independent Test**: Merge code to main branch, verify automatic deployment succeeds, access website at staging.voluntodo.app and confirm content matches local version

**Acceptance Criteria**:
- ✅ Deployment triggers automatically on merge to main
- ✅ Website accessible at staging.voluntodo.app
- ✅ All tests pass before deployment
- ✅ Deployment completes in < 10 minutes
- ✅ Clear error messages if deployment fails

### CI/CD Pipeline - Testing Phase

- [ ] T088 [P] [US2] Create GitHub Actions workflow in .github/workflows/test.yml
  - Trigger: Pull request to main or 001-shared-todo-mvp
  - Step 1: Checkout code
  - Step 2: Setup Node.js (18+)
  - Step 3: Install dependencies (npm install)
  - Step 4: Run linting (npm run lint)
  - Step 5: Run type-check (npm run type-check)
  - Step 6: Run unit tests (npm run test:unit)
  - Step 7: Run E2E tests (npm run test:e2e)
  - Step 8: Run Lighthouse CI (npm run test:performance)
  - Fail: If any step fails, block PR merge

- [ ] T089 [P] [US2] Add GitHub branch protection rules
  - Require all tests to pass before merge
  - Require at least 1 code review approval
  - Block merge if status checks fail

### CI/CD Pipeline - Staging Deployment

- [ ] T090 [US2] Create GitHub Actions workflow in .github/workflows/deploy.yml
  - Trigger 1: Push to main branch (automatic staging deployment)
  - Trigger 2: Git release tag (automatic production deployment)
  - Conditional step: If push to main → deploy to staging
  - Conditional step: If release tag → deploy to production

- [ ] T091 [US2] Configure Netlify deployment in .github/workflows/deploy.yml
  - Use GitHub Action: `netlify/actions`
  - Environment variables: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID_STAGE
  - Deploy directory: `.next/out`
  - Preview: Show deployment URL in GitHub Actions logs

- [ ] T092 [P] [US2] Setup GitHub Actions secrets
  - Add secret: NETLIFY_AUTH_TOKEN (Netlify personal access token)
  - Add secret: NETLIFY_SITE_ID_STAGE (Netlify staging site ID)
  - Verify secrets are not exposed in logs

### Netlify Configuration

- [ ] T093 [P] [US2] Create Netlify configuration in netlify.toml
  - Build command: `npm run build`
  - Publish directory: `.next/out`
  - Node version: 18 or higher
  - Environment variables for staging context

- [ ] T094 [P] [US2] Configure environment variables in Netlify dashboard (staging context)
  - NEXT_PUBLIC_ENV=staging
  - NEXT_PUBLIC_SITE_URL=https://staging.voluntodo.app

- [ ] T095 [P] [US2] Setup Netlify redirects (if needed) for Next.js in netlify.toml
  - Redirect HTTP to HTTPS
  - Setup API routes properly

### Deployment Validation

- [ ] T096 [US2] Test staging deployment manually
  - Push to main branch
  - Wait for GitHub Actions to complete
  - Verify deployment succeeded (no errors in logs)
  - Access staging.voluntodo.app
  - Verify page loads and displays correctly
  - Verify "Coming Soon" message visible

- [ ] T097 [US2] Verify staging environment is production-like
  - Same content as local version
  - Same styling and layout
  - All links working correctly
  - Images loading properly

- [ ] T098 [US2] Test deployment failure recovery
  - Introduce a syntax error in code
  - Push to branch and create PR
  - Verify tests fail in GitHub Actions
  - Verify PR merge is blocked
  - Fix error and push again
  - Verify tests pass and PR can merge

### Monitoring & Logs

- [ ] T099 [US2] Verify GitHub Actions logs capture:
  - Build output (compilation messages)
  - Test results (passed/failed counts)
  - Deploy status (success/failure)
  - Deployment URL

- [ ] T100 [US2] Configure Netlify Analytics (basic monitoring)
  - Traffic patterns (page views, unique visitors)
  - Performance metrics (FCP, LCP, CLS)
  - Error tracking

**Checkpoint**: User Story 2 complete - staging deployment pipeline operational

---

## Phase 5: User Story 3 - Deploy to Production Environment (Priority: P1)

**Feature**: Controlled, automated release pipeline to production

**Goal**: Enable safe, repeatable production releases with rollback capability

**Independent Test**: Create GitHub release tag, verify automatic deployment succeeds, access website at app.voluntodo.com and confirm it's live

**Acceptance Criteria**:
- ✅ Deployment triggers on Git release tag (v*.*.* format)
- ✅ Website accessible at app.voluntodo.com
- ✅ All tests pass before deployment
- ✅ Deployment completes in < 10 minutes
- ✅ Rollback procedure works (can revert to previous version)

### Production CI/CD Pipeline

- [ ] T101 [US3] Update GitHub Actions deploy workflow in .github/workflows/deploy.yml
  - Trigger 2: Git tag creation (pattern: v*)
  - On tag: Run all tests again
  - On tag: Deploy to Netlify production
  - On tag: Use NETLIFY_SITE_ID_PROD instead of STAGE

- [ ] T102 [P] [US3] Setup production GitHub Actions secrets
  - Add secret: NETLIFY_SITE_ID_PROD (Netlify production site ID)
  - Keep: NETLIFY_AUTH_TOKEN (shared with staging)
  - Verify secrets are restricted and secure

### Netlify Production Configuration

- [ ] T103 [P] [US3] Configure Netlify production context in netlify.toml
  - Environment: Production
  - Build command: `npm run build`
  - Environment variables for production context

- [ ] T104 [P] [US3] Configure environment variables in Netlify dashboard (production context)
  - NEXT_PUBLIC_ENV=production
  - NEXT_PUBLIC_SITE_URL=https://app.voluntodo.com

- [ ] T105 [P] [US3] Setup production domain in Netlify
  - Domain: app.voluntodo.com
  - SSL/TLS: Enable (auto-provisioned by Netlify)
  - DNS: Point to Netlify nameservers

### Production Release Process

- [ ] T106 [US3] Document release process in CONTRIBUTING.md
  - Step 1: Ensure main branch is stable (all tests passing)
  - Step 2: Create GitHub release (fill in release notes)
  - Step 3: GitHub Actions auto-creates git tag
  - Step 4: Monitor GitHub Actions logs
  - Step 5: Verify app.voluntodo.com is live
  - Step 6: Monitor Netlify Analytics

- [ ] T107 [US3] Test production release process
  - Create GitHub release v1.0.0
  - Monitor GitHub Actions workflow
  - Verify deployment succeeds
  - Access app.voluntodo.com
  - Verify page loads correctly
  - Verify production URL in page metadata (og:url, canonical)

- [ ] T108 [US3] Verify production environment matches staging
  - Same content as staging
  - Same styling and performance
  - All links working
  - Images loading from CDN
  - Health check endpoint accessible

### Rollback Capability

- [ ] T109 [US3] Document rollback procedure in CONTRIBUTING.md
  - Identify previous working version (git tag -l)
  - Create new rollback tag pointing to previous commit
  - Push rollback tag (triggers auto-deploy)
  - Verify previous version is live
  - Time to rollback: < 5 minutes

- [ ] T110 [US3] Test rollback procedure
  - Verify git tags exist for multiple versions
  - Create rollback tag manually
  - Push rollback tag
  - Verify Netlify deploys previous version
  - Time to complete: measure actual time

### Health Check & Monitoring

- [ ] T111 [US3] Verify health check endpoint in production
  - Endpoint: app.voluntodo.com/api/health
  - Response: 200 OK with JSON {status: "ok", timestamp, environment, version}
  - Setup uptime monitoring (optional: external service)

- [ ] T112 [US3] Configure error tracking in production
  - Next.js error boundary logs to console
  - Monitor Netlify error logs
  - Setup alerts for high error rates (optional)

- [ ] T113 [US3] Setup performance monitoring in production
  - Netlify Analytics: Core Web Vitals monitoring
  - Lighthouse CI: Automatic performance regression detection
  - Monitor trends over time

### Cross-Browser Validation

- [ ] T114 [P] [US3] Validate on Chrome (latest and prior version)
  - Navigate to app.voluntodo.com
  - Verify page loads and renders correctly
  - Test responsive layout on mobile/tablet/desktop
  - Check console for errors (F12)

- [ ] T115 [P] [US3] Validate on Firefox (latest and prior version)
  - Navigate to app.voluntodo.com
  - Verify page loads and renders correctly
  - Test responsive layout

- [ ] T116 [P] [US3] Validate on Safari (latest and prior version)
  - Navigate to app.voluntodo.com
  - Verify page loads and renders correctly
  - Test on macOS and iOS

- [ ] T117 [P] [US3] Validate on Edge (latest and prior version)
  - Navigate to app.voluntodo.com
  - Verify page loads and renders correctly

### Security Validation

- [ ] T118 [US3] Verify HTTPS is enforced
  - Navigate to http://app.voluntodo.com
  - Verify automatic redirect to https://app.voluntodo.com
  - Check SSL certificate is valid

- [ ] T119 [US3] Verify security headers are present
  - Check X-Frame-Options: SAMEORIGIN
  - Check X-Content-Type-Options: nosniff
  - Check Content-Security-Policy header
  - Use browser DevTools or online header checker

- [ ] T120 [US3] Run npm audit in production
  - Verify no critical/high vulnerabilities
  - Document any known vulnerabilities and mitigation

**Checkpoint**: User Story 3 complete - production deployment pipeline operational and tested

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final touches, documentation, and knowledge transfer

### Documentation

- [ ] T121 [P] Update README.md with:
  - Project overview (what is VolunTodo?)
  - Quick start (git clone, npm install, npm run dev)
  - Deployment instructions (staging and production)
  - Technology stack overview
  - Links to design documents (specs/)

- [ ] T122 [P] Create/update CONTRIBUTING.md with:
  - Development workflow (branch, commit, PR, merge)
  - Code style guide (ESLint, Prettier, TypeScript)
  - Testing requirements (unit, E2E, Lighthouse)
  - Commit message format (Conventional Commits)
  - Release process (staging vs production)
  - Rollback procedure

- [ ] T123 [P] Update or create API documentation
  - Landing page endpoint: GET / response structure
  - Health check endpoint: GET /api/health response
  - Example requests/responses

- [ ] T124 [P] Create ARCHITECTURE.md (optional) with:
  - Directory structure and purpose
  - Component hierarchy
  - Data flow (if applicable)
  - Technology decisions and rationale

- [ ] T125 [P] Create DEPLOYMENT.md with:
  - Prerequisites (Node.js version, Netlify account)
  - Environment variables setup
  - Staging deployment steps
  - Production release steps
  - Monitoring and alerts
  - Troubleshooting common issues

### Code Quality & Review

- [ ] T126 Perform final code review of all changes
  - Check for unused code/imports
  - Verify consistent naming conventions
  - Ensure no hardcoded secrets
  - Check error handling is comprehensive

- [ ] T127 [P] Run full test suite one final time
  - Linting: `npm run lint` (zero errors)
  - Type-check: `npm run type-check` (zero errors)
  - Unit tests: `npm run test:unit` (80%+ coverage)
  - E2E tests: `npm run test:e2e` (all pass)
  - Lighthouse: `npm run test:performance` (80+ score)

- [ ] T128 [P] Verify no console warnings or errors
  - Run dev server: `npm run dev`
  - Open DevTools console (F12)
  - Navigate page, verify zero errors/warnings
  - Test on mobile viewport

- [ ] T129 Verify bundle size one final time
  - Run: `npm run build --analyze`
  - Total < 50KB gzipped
  - HTML < 5KB, CSS < 10KB, JS < 20KB, images < 30KB
  - Document size breakdown for stakeholders

### Accessibility Audit

- [ ] T130 Run axe-core accessibility audit
  - `npm run test:a11y` should find zero violations
  - Manual screen reader testing (optional: use NVDA or JAWS)
  - Keyboard-only navigation test (Tab, Enter, Escape)

- [ ] T131 Verify WCAG 2.1 AA compliance one final time
  - Color contrast >= 4.5:1 for body text
  - Text sizes >= 16px (prevents mobile zoom)
  - All interactive elements keyboard accessible
  - Focus indicators visible
  - Heading hierarchy correct (h1, h2, h3 - no skips)

### Performance Final Check

- [ ] T132 Run Lighthouse CI one final time
  - Desktop score >= 80
  - Mobile score >= 80
  - FCP < 1.5s (3G network)
  - LCP < 2.5s (3G network)
  - CLS < 0.1 (no layout jumps)

- [ ] T133 Verify page loads in < 2 seconds
  - Test on 3G network (use Chrome DevTools throttling)
  - Measure from first byte to interactive
  - Document actual load time

### Production Readiness Checklist

- [ ] T134 Complete pre-launch checklist:
  - [ ] All tests pass (lint, type, unit, E2E, Lighthouse)
  - [ ] Code reviewed and approved
  - [ ] Accessibility audit passed (WCAG 2.1 AA)
  - [ ] Performance targets met (Lighthouse 80+, < 2.5s LCP)
  - [ ] Bundle size under budget (< 50KB)
  - [ ] Security headers configured (CSP, HSTS, X-Frame-Options)
  - [ ] SEO metadata complete (Open Graph, Twitter Card, schema.org)
  - [ ] Environment variables configured (staging and production)
  - [ ] Netlify deployment tested (staging and production)
  - [ ] Health check endpoint working
  - [ ] Rollback procedure documented and tested
  - [ ] Monitoring and alerts configured
  - [ ] Documentation complete and reviewed

### Stakeholder Communication

- [ ] T135 Prepare launch announcement with:
  - Website URL (app.voluntodo.com)
  - Screenshot of landing page
  - Key metrics (Lighthouse score, load time, accessibility compliance)
  - Timeline of next features (Phase 2+)

- [ ] T136 [P] Create/update project README visible on GitHub
  - Link to live site
  - "Coming Soon" messaging
  - CTA for stakeholder access

### Knowledge Transfer

- [ ] T137 Document any non-obvious implementation decisions in code comments
  - Explain why Tailwind instead of custom CSS
  - Explain why Next.js server components
  - Explain performance optimization choices

- [ ] T138 Record or write quick walkthroughs:
  - How to run dev server locally
  - How to deploy to staging
  - How to release to production
  - How to rollback if needed

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup) → Phase 2 (Foundational) → Phase 3 (US1) ┐
                                          → Phase 4 (US2) ├→ Phase 6 (Polish)
                                          → Phase 5 (US3) ┘
```

**Critical Path**:
1. ✅ Setup (Phase 1) - Initialize project
2. ✅ Foundational (Phase 2) - BLOCKS all user stories
3. ✅ User Story 1 (Phase 3) - Landing page MVP
4. ✅ User Story 2 (Phase 4) - Staging deployment (can start after Phase 2)
5. ✅ User Story 3 (Phase 5) - Production deployment (can start after Phase 2)
6. ✅ Polish (Phase 6) - Final documentation

### Within Each User Story

**Typical Task Order**:
1. Components (render logic)
2. Styling (Tailwind classes)
3. Unit tests (test components in isolation)
4. E2E tests (test full user journey)
5. Performance tests (Lighthouse)
6. Accessibility tests (axe-core)
7. Code review and fixes

### Parallel Opportunities

**Phase 1 Setup**: All [P] tasks can run in parallel
```bash
# All in parallel:
- T002: TypeScript config
- T003: Tailwind config
- T004: PostCSS config
- T006: ESLint config
- T007: Prettier config
- T010-T013: Create directory structure
```

**Phase 2 Foundational**: All [P] tasks can run in parallel
```bash
# All in parallel:
- T021-T027: Layout and config
- T030-T031: Testing framework
- T035-T040: SEO assets and metadata
```

**Phase 3 US1**: Components and tests can run in parallel
```bash
# All components in parallel (different files):
- T041: HeroSection component
- T042: Navigation component
- T043: Footer component
- T044: ComingSoonBadge component

# All tests in parallel (different files):
- T066: HeroSection tests
- T067: Navigation tests
- T068: Footer tests
- T071-T077: E2E and performance tests
```

**Phase 4 & 5**: Deployment pipelines can be configured in parallel after Phase 2
```bash
# Parallel:
- T088-T095: Staging deployment pipeline (US2)
- T101-T105: Production pipeline setup (US3)
```

### Suggested Execution Plan (Single Developer)

**Day 1 (4 hours)**:
- T001-T019: Phase 1 Setup (30 min)
- T020-T040: Phase 2 Foundational (3.5 hours)

**Day 2-3 (3-4 hours)**:
- T041-T083: Phase 3 US1 Implementation (2 hours)
- T066-T087: US1 Tests (1.5 hours)

**Day 3-4 (1-2 hours)**:
- T088-T120: Phase 4 & 5 Deployment Pipelines (1.5-2 hours)

**Day 4 (1 hour)**:
- T121-T138: Phase 6 Polish & Documentation (1 hour)

**Total**: 6-8 hours ✅

### Suggested Execution Plan (Team of 2-3)

**Split work after Phase 2 completion**:
- Developer 1: Phase 3 (Landing Page) - 2-3 hours
- Developer 2: Phase 4 & 5 (Deployment Pipelines) - 1.5-2 hours in parallel
- Developer 3: Phase 6 (Documentation) - 1 hour in parallel

All complete in parallel, then final review together.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

To deliver MVP quickly, focus on this path:

1. **Complete Phase 1**: Setup (30 min)
2. **Complete Phase 2**: Foundational - CRITICAL (3.5 hours)
3. **Complete Phase 3**: Landing Page US1 (2-3 hours)
4. **STOP and VALIDATE**: Test page independently, Lighthouse 80+, accessibility WCAG AA
5. **Deploy Staging**: Push to main (automatic)
6. **LAUNCH MVP**: Only landing page live, no deployments yet

**Then** add Phases 4 & 5 when ready.

### Incremental Delivery

For stakeholder demos at each stage:

**After Phase 1 + 2** (3.5 hours):
- Show: Project structure, dev server running, TypeScript strict mode working
- Value: Foundation is solid

**After Phase 3** (6 hours total):
- Show: Landing page on localhost:3000
- Value: MVP feature complete, fully tested, production-ready
- Deploy to staging: Push to main

**After Phase 4** (7.5 hours total):
- Show: Automatic staging deployment working
- Value: Safe testing environment available

**After Phase 5** (8 hours total):
- Show: Live production site at app.voluntodo.com
- Value: Public website is live
- Demo: Rollback procedure (simulated)

**After Phase 6** (9 hours total):
- Show: Documentation and knowledge transfer
- Value: Team can maintain and extend

### Build + Test Cycle

For each task, follow this pattern:

```
1. Write code (implement component, test, feature)
2. Run local tests: npm run test:unit, npm run test:e2e
3. Run quality checks: npm run lint, npm run type-check
4. Verify changes: npm run build (no errors)
5. Commit: git add . && git commit -m "..."
6. Push: git push origin [branch]
7. Wait for GitHub Actions (tests run automatically)
8. Get code review approval
9. Merge to main (if staging deployment) or create release tag (if production)
```

---

## Notes & Guidelines

- **[P] marker**: Task can run in parallel (different files, no blocking dependencies on other incomplete tasks)
- **[Story] label**: Maps task to user story for traceability and independent delivery
- **File paths**: All exact paths provided for implementation
- **Test-driven**: Write failing tests FIRST (if tests requested), then implement to pass
- **Commit frequency**: After each task or logical group (keep commits small and focused)
- **Code review**: Each PR should have meaningful review before merge
- **No vague tasks**: Every task is specific and actionable (not "improve performance" - instead "verify Lighthouse score >= 80")
- **Independent testing**: Each user story should be testable in isolation
- **Performance focus**: Bundle size, load time, and Lighthouse are critical success criteria
- **Accessibility first**: WCAG 2.1 AA compliance is non-negotiable (not optional)
- **Security**: No hardcoded secrets, environment variables only, security headers configured

---

## Success Criteria (Completion Checklist)

### Phase 1: Setup ✅
- [ ] Next.js 15 project initializes
- [ ] TypeScript strict mode enabled
- [ ] Tailwind CSS configured
- [ ] Dev server starts without errors
- [ ] All npm packages installed

### Phase 2: Foundational ✅
- [ ] Root layout created with metadata API
- [ ] Health check endpoint responds with 200 OK
- [ ] All SEO assets in place (favicon, og-image, manifest)
- [ ] Vitest and Playwright configured
- [ ] GitHub Actions test workflow created

### Phase 3: User Story 1 ✅
- [ ] Landing page renders at /
- [ ] Page is responsive (320px → 1920px+)
- [ ] Lighthouse score >= 80 (mobile and desktop)
- [ ] WCAG 2.1 AA compliance verified (axe-core)
- [ ] All tests pass (unit, E2E, accessibility, performance)
- [ ] Bundle size < 50KB gzipped
- [ ] Page loads in < 2 seconds on 3G

### Phase 4: User Story 2 ✅
- [ ] GitHub Actions test workflow runs on PR
- [ ] Deployment to staging automatic on merge to main
- [ ] Website accessible at staging.voluntodo.app
- [ ] All pre-deployment tests pass

### Phase 5: User Story 3 ✅
- [ ] Production deployment workflow configured
- [ ] Website accessible at app.voluntodo.com
- [ ] All tests pass before production deploy
- [ ] Rollback procedure documented and tested

### Phase 6: Polish ✅
- [ ] README.md complete and accurate
- [ ] CONTRIBUTING.md complete and accurate
- [ ] DEPLOYMENT.md complete and accurate
- [ ] All documentation reviewed
- [ ] Knowledge transfer complete
- [ ] Final code review passed
- [ ] Pre-launch checklist completed

---

## Timeline & Effort

| Phase | Tasks | Effort | Cumulative |
|-------|-------|--------|-----------|
| Setup (Phase 1) | 19 | 0.5h | 0.5h |
| Foundational (Phase 2) | 21 | 3.0h | 3.5h |
| Landing Page (Phase 3) | 47 | 2.5h | 6.0h |
| Staging Deploy (Phase 4) | 19 | 1.0h | 7.0h |
| Prod Deploy (Phase 5) | 20 | 1.0h | 8.0h |
| Polish (Phase 6) | 18 | 1.0h | 9.0h |
| **TOTAL** | **144** | **8.5h** | **8.5h** |

**Ranges**:
- Fast track (experienced with Next.js/TypeScript): 6-7 hours
- Standard (normal pace): 7-8 hours  
- Thorough (careful review): 8-10 hours

---

## Git Workflow

### Feature Branch
```bash
git checkout 001-shared-todo-mvp
git pull origin 001-shared-todo-mvp
# Work on tasks...
git add .
git commit -m "feat: implement HeroSection component"
git push origin 001-shared-todo-mvp
```

### Creating PR for Staging
```bash
# Create PR from 001-shared-todo-mvp to main
# GitHub Actions runs tests automatically
# Get code review approval
# Merge to main (auto-deploys to staging)
```

### Creating Release for Production
```bash
git tag v1.0.0
git push origin v1.0.0
# GitHub Actions auto-deploys to production
```

---

**Status**: ✅ Ready for Phase 2 Implementation  
**Last Updated**: 2026-02-14  
**Total Tasks**: 144  
**Estimated Duration**: 6-8 hours (single developer)  
**MVP Scope**: All 3 user stories (landing page, staging, production)
