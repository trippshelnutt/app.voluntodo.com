# Data Model & Content Structure

**Feature Branch**: `001-shared-todo-mvp`  
**Purpose**: Define entities, fields, validation rules, and rendering specifications  
**Status**: Complete  
**Last Updated**: 2026-02-14

---

## Overview

This MVP is a **static landing page** (no database required). The data model consists of three entities:

1. **Landing Page** - The primary public-facing page
2. **Stage Environment** - Staging deployment target
3. **Production Environment** - Public deployment target

All content is **rendered via React components** with **Tailwind CSS styling**. No backend database is needed.

---

## 1. Landing Page Entity

### Purpose
The public-facing "Coming Soon" page displayed to all visitors.

### Fields

| Field | Type | Required | Validation | Example |
|-------|------|----------|-----------|---------|
| `title` | string | Yes | 1-100 characters | "Coming Soon - VolunTodo" |
| `headline` | string | Yes | 1-200 characters | "Coming Soon" |
| `subtitle` | string | No | 0-500 characters | "We're building something amazing for your team." |
| `ctaText` | string | Yes | 1-50 characters | "Notify Me" or "Get Started" |
| `ctaUrl` | string (URL) | No | Valid URL or empty | "https://newsletter.voluntodo.app" |
| `heroImage` | string (URL or local path) | No | Valid image path | "/images/hero.png" |
| `footerText` | string | No | 0-200 characters | "© 2026 VolunTodo. All rights reserved." |
| `socialLinks` | object | No | Structured links | `{ twitter: "...", github: "...", linkedin: "..." }` |
| `theme` | enum | Yes | 'light' \| 'dark' \| 'auto' | "light" |
| `metadata` | object | Yes | SEO/social data | See Metadata section below |

### Core Fields (Rendering)

#### Title
- **Usage**: Browser tab title, SEO
- **Constraint**: 1-100 characters (recommended 50-60 for SEO)
- **Default**: "Coming Soon - VolunTodo"
- **Validation**: Non-empty string, no HTML tags

#### Headline
- **Usage**: Large centered heading on page
- **Constraint**: 1-200 characters
- **Default**: "Coming Soon"
- **Rendering**: Responsive text sizes
  - Mobile (320px): 24px (text-2xl)
  - Tablet (768px): 36px (text-4xl)
  - Desktop (1024px+): 48-60px (text-5xl/text-6xl)
- **Validation**: Non-empty string, no HTML tags

#### Subtitle
- **Usage**: Descriptive text below headline
- **Constraint**: 0-500 characters (optional)
- **Default**: "We're building something amazing for your team."
- **Rendering**: Smaller text, secondary color (gray-600)
- **Validation**: String, no HTML tags, can be empty

#### Call-to-Action
- **CTA Text**: Button label (1-50 chars)
  - Examples: "Notify Me", "Get Started", "Join Waitlist"
- **CTA URL**: Destination when clicked (optional)
  - If provided: Links to email signup or external form
  - If empty: Button shown but non-functional (placeholder)
- **Rendering**: Prominent button, Tailwind styled
  ```tsx
  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
    {ctaText}
  </button>
  ```

#### Hero Image (Optional)
- **Usage**: Background or featured image
- **Type**: PNG, JPG, WebP (Next.js Image component handles optimization)
- **Size**: 1200x600px recommended (responsive, auto-scaled)
- **Validation**: Valid image path, exists in `/public` directory
- **Rendering**: Via Next.js Image component (automatic optimization)

#### Footer Text
- **Usage**: Copyright, links, contact info
- **Constraint**: 0-200 characters (optional)
- **Default**: "© 2026 VolunTodo. All rights reserved."
- **Validation**: String, basic HTML allowed (links via markdown conversion)

#### Social Links
- **Usage**: Links to social media profiles
- **Format**: Object with platform keys
  ```typescript
  interface SocialLinks {
    twitter?: string;      // URL to Twitter profile
    github?: string;       // URL to GitHub profile
    linkedin?: string;     // URL to LinkedIn profile
    email?: string;        // Email address (mailto: link)
  }
  ```
- **Validation**: Valid URLs or email addresses
- **Rendering**: Icon + link in footer
  ```tsx
  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
    <TwitterIcon />
  </a>
  ```

#### Theme
- **Usage**: Color scheme preference
- **Options**:
  - `'light'`: Light theme (white background, dark text)
  - `'dark'`: Dark theme (dark background, light text)
  - `'auto'`: Follow system preference (via `prefers-color-scheme`)
- **Default**: `'light'`
- **Validation**: Enum value only
- **Rendering**: Applied via Tailwind dark mode
  ```tsx
  <div className="bg-white dark:bg-slate-950 text-black dark:text-white">
    {content}
  </div>
  ```

### Metadata (SEO & Social)
See `contracts/metadata.md` for complete specification.

**Includes**:
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Schema.org structured data
- Canonical URLs
- Favicon + apple-touch-icon

---

## 2. Responsive Breakpoints

All components MUST be tested at these breakpoints:

| Breakpoint | Width | Device | Use Case |
|------------|-------|--------|----------|
| **Mobile** | 320px | iPhone SE, small phones | Minimum supported width |
| **Mobile L** | 375px | iPhone 12/13, typical phone | Common size |
| **Mobile XL** | 425px | Large phones (Plus models) | Larger phones |
| **Tablet** | 768px | iPad (portrait) | Tablet devices |
| **Laptop** | 1024px | iPad (landscape), small laptops | Desktop-like |
| **Desktop** | 1440px | Typical desktop monitor | Standard desktop |
| **Desktop L** | 1920px | Large monitors | Wide monitors |
| **Desktop XL** | 2560px | 4K monitors | Very wide screens |

### Responsive Design Rules

1. **Mobile-First Approach**:
   - Design for mobile first (320px)
   - Add complexity for larger screens

2. **No Horizontal Scroll**:
   - All content must fit within viewport width
   - Account for scrollbar (15-17px) on desktop

3. **Touch Targets** (Mobile):
   - Buttons/links: minimum 44x44px (iOS), 48x48px (Android)
   - Adequate spacing: minimum 8px between interactive elements

4. **Text Readability**:
   - Font size minimum 16px (prevents mobile zoom)
   - Line height minimum 1.5 for body text
   - Line length maximum 65 characters for readability

5. **Image Scaling**:
   - Use responsive images via Next.js Image component
   - Serve appropriate size for device width
   - Use `srcSet` for multiple resolutions

### Tailwind Responsive Classes

```tsx
// Example: Responsive text size
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  Coming Soon
</h1>

// Example: Responsive spacing
<div className="px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-20">
  {content}
</div>

// Example: Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items}
</div>
```

**Tailwind Breakpoints** (responsive prefixes):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 3. Accessibility Compliance (WCAG 2.1 AA)

### Required Standards

**Level AA** (minimum):
- Color contrast: 4.5:1 for normal text, 3:1 for large text (18px+)
- Keyboard navigation: All interactive elements accessible via Tab
- Focus indicators: Visible focus ring on all focusable elements
- Heading hierarchy: h1 → h2 → h3 (no skipped levels)
- Alt text: All images have descriptive alt text
- Form labels: All inputs have associated labels

### Implementation Requirements

#### Color Contrast
```tsx
// ✅ Good contrast
<h1 className="text-gray-900">Heading</h1>  // Black on white: 21:1
<p className="text-gray-600">Body text</p>  // Gray on white: 7:1

// ❌ Poor contrast
<p className="text-gray-300">Text</p>  // Light gray on white: 2.3:1 (FAIL)
```

#### Keyboard Navigation
```tsx
// ✅ Accessible button
<button className="..." onClick={handleClick}>
  Notify Me
</button>

// Automatically keyboard accessible via HTML semantics
// - Tab to focus
// - Enter/Space to activate

// ❌ Not accessible
<div onClick={handleClick}>Notify Me</div>  // No keyboard support
```

#### Focus Indicators
```tsx
// ✅ Clear focus ring
<button className="... focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
  Click me
</button>

// Visible ring appears when focused via keyboard
```

#### Heading Hierarchy
```tsx
// ✅ Correct hierarchy
<h1>Coming Soon</h1>
<h2>Why Wait?</h2>
<h3>Feature #1</h3>

// ❌ Incorrect (skips h2)
<h1>Coming Soon</h1>
<h3>Feature #1</h3>  // Should be h2
```

#### Alt Text
```tsx
// ✅ Descriptive alt text
<Image
  src="/hero.png"
  alt="Team collaborating on shared todo list"
  width={1200}
  height={600}
/>

// ❌ Poor alt text
<Image src="/hero.png" alt="image" />  // Too generic
<Image src="/hero.png" alt="" />        // Missing information
```

#### Form Labels
```tsx
// ✅ Properly labeled
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />

// ❌ No label association
<label>Email Address</label>
<input type="email" />  // No id/htmlFor connection
```

### Testing Requirements
- **Automated**: axe-core (Playwright)
- **Manual**: Screen reader testing (NVDA, JAWS)
- **Lighthouse**: Accessibility audit score

---

## 4. Performance Targets

### Key Metrics

| Metric | Target | Measurement | Threshold |
|--------|--------|-------------|-----------|
| **FCP** | < 1.5s | Lighthouse (3G throttle) | Page shows content quickly |
| **LCP** | < 2.5s | Lighthouse (3G throttle) | Main content visible quickly |
| **CLS** | < 0.1 | Lighthouse | No layout jumps during load |
| **Lighthouse** | ≥ 80 | Lighthouse (mobile & desktop) | Overall quality score |
| **Bundle Size** | < 50KB | Build analysis | Total gzipped JS + CSS |

### Performance Validation
- **Local**: Run `npm run test:performance`
- **CI/CD**: Lighthouse CI gates on every PR/merge
- **Production**: Netlify Analytics dashboard monitors Core Web Vitals

---

## 5. Stage Environment

### Purpose
QA testing environment that mirrors production configuration.

### Properties
| Property | Value |
|----------|-------|
| **URL** | `https://staging.voluntodo.app` |
| **Access** | Team only (not public) |
| **Data** | Same as production (hardcoded in components) |
| **Deployment Trigger** | Automatic on merge to `main` branch |
| **TLS/HTTPS** | Yes (Netlify auto-provisioning) |
| **Cache** | 1 hour (Netlify CDN) |

### Deployment Process
```
1. Developer pushes to main branch
2. GitHub Actions triggered automatically
3. All tests run (lint, type-check, unit, E2E)
4. Build succeeds (no errors/warnings)
5. Deploy to Netlify staging site
6. Verification: staging.voluntodo.app loads successfully
```

### Testing Activities
- QA team verifies page loads correctly
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Responsive design testing (mobile, tablet, desktop)
- Performance testing (Lighthouse)
- Accessibility testing (axe-core)

---

## 6. Production Environment

### Purpose
Public live website accessed by end-users globally.

### Properties
| Property | Value |
|----------|-------|
| **URL** | `https://app.voluntodo.com` |
| **Access** | Public (any visitor) |
| **Data** | Same as staging |
| **Deployment Trigger** | Manual via Git release tag (v*.*.* format) |
| **TLS/HTTPS** | Yes (Netlify auto-provisioning) |
| **Cache** | 1 hour (Netlify CDN) |
| **CDN Regions** | Global (Netlify edge network) |

### Deployment Process
```
1. Developer creates GitHub release (v1.0.0)
2. Git tag pushed to origin
3. GitHub Actions triggered automatically
4. All tests run (same as staging)
5. Build succeeds
6. Deploy to Netlify production site
7. Verification: app.voluntodo.com loads successfully
```

### Monitoring & Observability
- Health check endpoint: `GET /api/health` → 200 OK
- Netlify Analytics: Track page views, performance, errors
- Lighthouse CI: Performance score trends
- GitHub Actions logs: Build/deployment history
- Rollback ready: Can revert to previous tag in < 5 minutes

---

## 7. Content Configuration

### Where Content Lives

**Option A: Hardcoded in Components** (Recommended for MVP)
```tsx
// src/components/HeroSection.tsx
export function HeroSection() {
  const content = {
    headline: "Coming Soon",
    subtitle: "We're building something amazing for your team.",
    ctaText: "Notify Me",
    ctaUrl: "https://newsletter.example.com",
  };

  return (
    <section>
      <h1>{content.headline}</h1>
      <p>{content.subtitle}</p>
      <button onClick={() => window.location.href = content.ctaUrl}>
        {content.ctaText}
      </button>
    </section>
  );
}
```

**Option B: Environment Variables** (Future enhancement)
```tsx
// Access via NEXT_PUBLIC_* variables
const headline = process.env.NEXT_PUBLIC_HEADLINE || "Coming Soon";
```

**Option C: External CMS** (Phase 2 enhancement)
- Headless CMS (Sanity, Strapi, Contentful)
- Database (Supabase, Firebase)
- Static content management

### Updating Content

**For MVP** (hardcoded):
1. Edit component file
2. Run `npm run build` locally
3. Commit and push to `001-shared-todo-mvp` branch
4. Create PR for review
5. Merge to `main` (auto-deploys to staging)
6. Create GitHub release tag (auto-deploys to production)

---

## 8. Validation Rules

### Field Validation

```typescript
interface LandingPageContent {
  title: string;           // 1-100 chars, non-empty
  headline: string;        // 1-200 chars, non-empty
  subtitle?: string;       // 0-500 chars, optional
  ctaText: string;         // 1-50 chars, non-empty
  ctaUrl?: string;         // Valid URL or undefined
  heroImage?: string;      // Valid image path or undefined
  footerText?: string;     // 0-200 chars, optional
  socialLinks?: {
    twitter?: string;      // Valid URL
    github?: string;       // Valid URL
    linkedin?: string;     // Valid URL
    email?: string;        // Valid email
  };
  theme: 'light' | 'dark' | 'auto';
}
```

### Validation Example
```typescript
function validateLandingPageContent(content: Partial<LandingPageContent>) {
  const errors: string[] = [];

  if (!content.title || content.title.length < 1 || content.title.length > 100) {
    errors.push('Title must be 1-100 characters');
  }

  if (content.ctaUrl && !isValidUrl(content.ctaUrl)) {
    errors.push('CTA URL must be a valid URL');
  }

  if (content.theme && !['light', 'dark', 'auto'].includes(content.theme)) {
    errors.push('Theme must be light, dark, or auto');
  }

  return { valid: errors.length === 0, errors };
}
```

---

## 9. Rendering Specifications

### Page Structure (HTML Outline)
```
<html>
  <head>
    <meta> tags (SEO, social)
    <title>Coming Soon - VolunTodo</title>
    <style> Tailwind CSS
  </head>
  <body>
    <header>Navigation (optional)</header>
    <main>
      <section>Hero Section ("Coming Soon")</section>
    </main>
    <footer>Footer links</footer>
  </body>
</html>
```

### Component Hierarchy
```
<Layout>
  <Navigation />
  <main>
    <HeroSection>
      <h1>Coming Soon</h1>
      <p>Subtitle</p>
      <button>CTA</button>
    </HeroSection>
  </main>
  <Footer>
    <SocialLinks />
  </Footer>
</Layout>
```

### CSS Architecture
- **No custom CSS** for MVP (use Tailwind utilities only)
- **No CSS-in-JS** (Tailwind + PostCSS sufficient)
- **Dark mode** via Tailwind dark: class
- **Responsive** via Tailwind breakpoint prefixes (md:, lg:, etc.)

---

## 10. TypeScript Types

```typescript
// src/types/index.ts

export interface LandingPageContent {
  title: string;
  headline: string;
  subtitle?: string;
  ctaText: string;
  ctaUrl?: string;
  heroImage?: string;
  footerText?: string;
  socialLinks?: SocialLinks;
  theme: 'light' | 'dark' | 'auto';
  metadata: PageMetadata;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface PageMetadata {
  // See contracts/metadata.md for full spec
  title: string;
  description: string;
  ogImage?: string;
  twitterHandle?: string;
  canonicalUrl: string;
}

export interface Environment {
  isDevelopment: boolean;
  isStaging: boolean;
  isProduction: boolean;
  siteUrl: string;
}
```

---

## Summary

**Landing Page Entity**:
- Static content (no database)
- Highly responsive (320px → 4K)
- Fully accessible (WCAG 2.1 AA)
- Performant (< 50KB, 80+ Lighthouse)
- Type-safe (TypeScript)

**Stage & Production**:
- Identical content
- Different URLs (staging.voluntodo.app vs app.voluntodo.com)
- Automatic deployment via GitHub Actions
- Monitored health checks and performance metrics

**Ready for Phase 2 implementation.**

---

**Version**: 1.0.0  
**Last Updated**: 2026-02-14  
**Status**: ✅ Complete
