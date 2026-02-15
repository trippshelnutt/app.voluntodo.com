# API Contract: SEO & Metadata

**Feature Branch**: `001-shared-todo-mvp`  
**Purpose**: Define Open Graph, Twitter Card, and schema.org metadata  
**Status**: Complete  
**Last Updated**: 2026-02-14

---

## Overview

This contract specifies all metadata tags required for:
- **SEO** (search engine indexing)
- **Social Sharing** (Facebook, LinkedIn, Twitter preview)
- **Accessibility** (screen readers)
- **Rich Snippets** (structured data)

All metadata is **rendered server-side** in the `<head>` section of the HTML response from `GET /`.

---

## Standard Meta Tags

### Essential Tags

```html
<!-- Character encoding (must be first) -->
<meta charset="utf-8" />

<!-- Viewport (responsive design) -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

<!-- Page title (50-60 characters recommended) -->
<title>Coming Soon - VolunTodo</title>

<!-- Page description (150-160 characters) -->
<meta name="description" content="We're building something amazing for your team. Join us as we revolutionize shared task management." />

<!-- Language -->
<html lang="en">

<!-- Robots (allow indexing) -->
<meta name="robots" content="index, follow" />
```

### Favicon & App Icons

```html
<!-- Standard favicon -->
<link rel="icon" href="/favicon.ico" type="image/x-icon" />

<!-- Modern favicon -->
<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />

<!-- iOS home screen icon (180x180px recommended) -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Android Chrome web app -->
<link rel="manifest" href="/manifest.json" />

<!-- Theme color (browser UI) -->
<meta name="theme-color" content="#4f46e5" />
```

---

## Open Graph Tags (Facebook, LinkedIn)

**Purpose**: Control how page appears when shared on Facebook, LinkedIn, etc.

### Required Tags

```html
<!-- Page type -->
<meta property="og:type" content="website" />

<!-- Page title (same as <title> recommended) -->
<meta property="og:title" content="Coming Soon - VolunTodo" />

<!-- Page description (max 300 characters) -->
<meta property="og:description" content="We're building something amazing for your team. Join us as we revolutionize shared task management." />

<!-- Page URL (canonical) -->
<meta property="og:url" content="https://app.voluntodo.com/" />

<!-- Site name -->
<meta property="og:site_name" content="VolunTodo" />

<!-- Image for social preview (1200x630px recommended) -->
<meta property="og:image" content="https://app.voluntodo.com/og-image.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Alternative image for social preview -->
<meta property="og:image:alt" content="VolunTodo - The future of shared task management" />
```

### Optional Locale Tags

```html
<!-- Language/region -->
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:locale:alternate" content="fr_FR" />
```

---

## Twitter Card Tags

**Purpose**: Control how page appears when shared on Twitter/X.

### Required Tags

```html
<!-- Card type (summary_large_image recommended for landing pages) -->
<meta name="twitter:card" content="summary_large_image" />

<!-- Twitter handle of website owner (optional) -->
<meta name="twitter:site" content="@voluntodo" />

<!-- Page title (same as og:title) -->
<meta name="twitter:title" content="Coming Soon - VolunTodo" />

<!-- Page description (max 200 characters) -->
<meta name="twitter:description" content="We're building something amazing for your team. Join us as we revolutionize shared task management." />

<!-- Image for Twitter preview (1200x675px minimum, 1.91:1 ratio) -->
<meta name="twitter:image" content="https://app.voluntodo.com/og-image.png" />

<!-- Image alt text (for accessibility) -->
<meta name="twitter:image:alt" content="VolunTodo - The future of shared task management" />

<!-- Twitter creator handle (optional) -->
<meta name="twitter:creator" content="@trippshelnutt" />
```

### Card Type Options
- `summary`: Title + description + thumbnail (min 120x120px)
- `summary_large_image`: Large image above title (recommended for landing pages)
- `player`: Video/media embed
- `app`: Mobile app download

---

## Canonical URL

**Purpose**: Tell search engines which URL is the "official" version (prevents duplicate content).

```html
<!-- Self-referential canonical (for homepage) -->
<link rel="canonical" href="https://app.voluntodo.com/" />

<!-- Alternate canonical (if different URLs serve same content) -->
<link rel="alternate" hreflang="en" href="https://app.voluntodo.com/" />
<link rel="alternate" hreflang="es" href="https://app.voluntodo.com/es/" />
<link rel="alternate" hreflang="x-default" href="https://app.voluntodo.com/" />
```

---

## Structured Data (Schema.org JSON-LD)

**Purpose**: Help search engines understand page content (enables rich snippets, knowledge panels).

### Organization Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Organization",
  "name": "VolunTodo",
  "url": "https://app.voluntodo.com/",
  "logo": "https://app.voluntodo.com/logo.png",
  "description": "We're building something amazing for your team.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "support@voluntodo.app"
  },
  "sameAs": [
    "https://twitter.com/voluntodo",
    "https://github.com/trippshelnutt/app.voluntodo.com",
    "https://linkedin.com/company/voluntodo"
  ]
}
</script>
```

### Website Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "VolunTodo",
  "url": "https://app.voluntodo.com/",
  "description": "We're building something amazing for your team.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://app.voluntodo.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### BreadcrumbList Schema (for navigation)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://app.voluntodo.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://app.voluntodo.com/about"
    }
  ]
}
</script>
```

---

## Security Headers

**Purpose**: Protect against XSS, clickjacking, and other attacks.

### Content-Security-Policy (CSP)

```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://analytics.google.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https: blob:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.github.com https://analytics.google.com;
  frame-ancestors 'self';
  base-uri 'self';
  form-action 'self'
```

### X-Frame-Options

```
X-Frame-Options: SAMEORIGIN
```
Prevents clickjacking (page can't be framed on external sites).

### X-Content-Type-Options

```
X-Content-Type-Options: nosniff
```
Prevents MIME type sniffing (browser uses declared content type).

### Referrer-Policy

```
Referrer-Policy: strict-origin-when-cross-origin
```
Controls how much referrer information is shared.

### Permissions-Policy (formerly Feature-Policy)

```
Permissions-Policy: 
  geolocation=(),
  microphone=(),
  camera=(),
  payment=(),
  usb=()
```
Disables unused browser APIs.

---

## Apple App Meta Tags (Optional)

```html
<!-- Status bar style on iOS -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

<!-- Hide Safari UI -->
<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- App title on home screen -->
<meta name="apple-mobile-web-app-title" content="VolunTodo" />

<!-- Startup image (portrait orientation) -->
<link rel="apple-startup-image" href="/apple-startup-image.png" />
```

---

## Android App Meta Tags (Optional)

```html
<!-- Chrome web app manifest -->
<link rel="manifest" href="/manifest.json" />

<!-- Chrome theme color -->
<meta name="theme-color" content="#4f46e5" />
```

### manifest.json Example

```json
{
  "name": "VolunTodo",
  "short_name": "VolunTodo",
  "description": "We're building something amazing for your team.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "theme_color": "#4f46e5",
  "background_color": "#ffffff",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## Robots & Crawling

### robots.txt Example

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /.well-known/

Sitemap: https://app.voluntodo.com/sitemap.xml
```

### sitemap.xml Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://app.voluntodo.com/</loc>
    <lastmod>2026-02-14T12:00:00Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://app.voluntodo.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## Testing & Validation

### Tools to Validate Metadata

#### 1. Google Search Console
- Submit sitemap
- Check rich results
- Monitor indexing status
- Track clicks/impressions

#### 2. Facebook Sharing Debugger
```
https://developers.facebook.com/tools/debug/og/object/
```
- Enter URL
- Verify Open Graph tags
- See preview as Facebook would render

#### 3. Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```
- Enter URL
- Verify Twitter Card tags
- See preview as Twitter would render

#### 4. Google Structured Data Testing Tool
```
https://search.google.com/test/rich-results
```
- Check schema.org markup
- Verify rich snippets eligibility

#### 5. SEO Auditors (Online Tools)
- Screaming Frog SEO Spider
- Semrush SEO Toolbar
- Lighthouse (built into Chrome DevTools)

### Automated Testing

```typescript
// e2e/metadata.spec.ts
import { test, expect } from '@playwright/test';

test('page has correct metadata tags', async ({ page }) => {
  await page.goto('/');
  
  // Check title
  await expect(page).toHaveTitle(/Coming Soon - VolunTodo/);
  
  // Check meta description
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).toMatch(/building something amazing/);
  
  // Check Open Graph
  const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
  expect(ogTitle).toBe('Coming Soon - VolunTodo');
  
  const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  expect(ogImage).toMatch(/voluntodo.com/);
  
  // Check Twitter Card
  const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
  expect(twitterCard).toBe('summary_large_image');
  
  // Check canonical URL
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toMatch(/app.voluntodo.com/);
  
  // Check structured data
  const scripts = await page.locator('script[type="application/ld+json"]').all();
  expect(scripts.length).toBeGreaterThan(0);
});

test('favicon and touch icon are accessible', async ({ page }) => {
  const favicon = await page.locator('link[rel="icon"]');
  expect(favicon).toHaveCount(1);
  
  const touchIcon = await page.locator('link[rel="apple-touch-icon"]');
  expect(touchIcon).toHaveCount(1);
});

test('robots.txt allows crawling', async ({ request }) => {
  const response = await request.get('/robots.txt');
  expect(response.status()).toBe(200);
  
  const content = await response.text();
  expect(content).toContain('Allow: /');
  expect(content).toContain('Sitemap:');
});

test('sitemap.xml is valid', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('xml');
});
```

---

## Metadata Implementation (Next.js)

### Using Next.js Metadata API

```typescript
// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon - VolunTodo',
  description: 'We\'re building something amazing for your team. Join us as we revolutionize shared task management.',
  keywords: ['todo', 'shared', 'collaboration', 'team'],
  authors: [{ name: 'VolunTodo' }],
  creator: 'VolunTodo',
  publisher: 'VolunTodo',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://app.voluntodo.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://app.voluntodo.com/',
    siteName: 'VolunTodo',
    title: 'Coming Soon - VolunTodo',
    description: 'We\'re building something amazing for your team.',
    images: [
      {
        url: 'https://app.voluntodo.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VolunTodo - The future of shared task management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon - VolunTodo',
    description: 'We\'re building something amazing for your team.',
    images: ['https://app.voluntodo.com/og-image.png'],
    creator: '@voluntodo',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## SEO Best Practices Checklist

- [ ] Page title is unique and descriptive (50-60 characters)
- [ ] Meta description is unique (150-160 characters)
- [ ] H1 heading present (one per page, matches/similar to title)
- [ ] All images have descriptive alt text
- [ ] Internal links use descriptive anchor text
- [ ] Mobile responsive (viewport meta tag, responsive CSS)
- [ ] Page speed optimized (< 3s load time)
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] Schema.org structured data included
- [ ] Canonical URL specified
- [ ] robots.txt exists and allows crawling
- [ ] sitemap.xml submitted to search engines
- [ ] Security headers implemented (CSP, etc.)
- [ ] No duplicate content (canonicals where needed)
- [ ] Accessibility compliant (WCAG 2.1 AA)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-14 | Initial metadata contract |

---

**Status**: ✅ Complete  
**Last Updated**: 2026-02-14  
**Ready for Phase 2 Implementation**
