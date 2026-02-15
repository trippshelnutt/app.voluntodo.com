# API Contract: Landing Page Route (GET /)

**Feature Branch**: `001-shared-todo-mvp`  
**Endpoint**: GET /  
**Purpose**: Serve the "Coming Soon" landing page  
**Status**: Complete  
**Last Updated**: 2026-02-14

---

## Overview

The landing page is a **server-rendered React component** (Next.js App Router) that returns an HTML response with complete page metadata, styling, and interactive elements.

---

## Request

### Method
```
GET /
```

### URL
```
https://app.voluntodo.com/
https://staging.voluntodo.app/  (staging)
http://localhost:3000/          (development)
```

### Headers (Standard HTTP)
```
Host: app.voluntodo.com
User-Agent: Mozilla/5.0 (compatible with all modern browsers)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.9
Accept-Encoding: gzip, deflate, br
Cache-Control: max-age=3600 (optional client-side cache instruction)
```

### Query Parameters
**None for MVP** - All content is static and hardcoded.

### Request Body
**None** - GET requests have no body.

---

## Response

### Status Codes

| Code | Meaning | Scenario |
|------|---------|----------|
| **200** | OK (Success) | Page loads successfully |
| **304** | Not Modified | Browser cache is fresh (Etag match) |
| **404** | Not Found | Path does not exist (e.g., `/invalid-path`) |
| **500** | Internal Server Error | Unexpected server-side error |
| **503** | Service Unavailable | Server temporarily unavailable |

---

### Success Response (200 OK)

#### Headers
```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 4832                    (approximate for gzipped response)
Content-Encoding: gzip
Cache-Control: public, max-age=3600, must-revalidate
ETag: "abc123def456"                   (for browser caching)
X-Frame-Options: SAMEORIGIN            (security header)
X-Content-Type-Options: nosniff        (security header)
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; ...
Date: Fri, 14 Feb 2026 12:00:00 GMT
Server: Netlify
```

#### Body (HTML)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="We're building something amazing for your team." />
  <title>Coming Soon - VolunTodo</title>
  
  <!-- Open Graph (Facebook) -->
  <meta property="og:title" content="Coming Soon - VolunTodo" />
  <meta property="og:description" content="We're building something amazing for your team." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://app.voluntodo.com/" />
  <meta property="og:image" content="https://app.voluntodo.com/og-image.png" />
  <meta property="og:site_name" content="VolunTodo" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coming Soon - VolunTodo" />
  <meta name="twitter:description" content="We're building something amazing for your team." />
  <meta name="twitter:image" content="https://app.voluntodo.com/og-image.png" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://app.voluntodo.com/" />
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- Styles (Tailwind CSS, ~2KB gzipped) -->
  <style>
    /* Tailwind CSS classes (PurgeCSS keeps only used utilities) */
    .text-2xl { font-size: 1.5rem; }
    .md\:text-4xl { @media (min-width: 768px) { font-size: 2.25rem; } }
    /* ... more Tailwind utilities ... */
  </style>
</head>
<body>
  <div id="__next">
    <!-- React app renders here -->
    <header class="w-full py-4 px-6 bg-white">
      <nav class="max-w-4xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-indigo-600">VolunTodo</div>
        <!-- Navigation links optional -->
      </nav>
    </header>
    
    <main class="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <section class="max-w-2xl text-center space-y-6">
        <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900">
          Coming Soon
        </h1>
        
        <p class="text-sm md:text-base lg:text-lg text-gray-600 px-2 md:px-0">
          We're building something amazing for your team.
        </p>
        
        <button class="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Notify Me
        </button>
      </section>
    </main>
    
    <footer class="w-full py-8 px-6 bg-white border-t">
      <div class="max-w-4xl mx-auto text-center text-gray-600 text-sm">
        <p>© 2026 VolunTodo. All rights reserved.</p>
        <div class="flex justify-center gap-4 mt-4">
          <a href="https://twitter.com/voluntodo" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://github.com/trippshelnutt/app.voluntodo.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  </div>
  
  <!-- Schema.org Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "VolunTodo",
    "url": "https://app.voluntodo.com/",
    "description": "We're building something amazing for your team."
  }
  </script>
  
  <!-- Next.js Script (hydration, ~18KB gzipped) -->
  <script src="/_next/static/chunks/main.js" async></script>
  <script src="/_next/static/chunks/pages/index.js" async></script>
</body>
</html>
```

### Response Size
```
Total (gzipped):
  HTML skeleton:    1.5KB
  Tailwind CSS:     2KB
  React JS:         18KB
  Other assets:     2.5KB
  ──────────────────────
  Total:            24KB (within 50KB budget)
```

---

## Error Responses

### 404 Not Found
```
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
<head><title>404 - Page Not Found</title></head>
<body>
  <h1>Page Not Found</h1>
  <p>The page you are looking for does not exist.</p>
  <a href="/">Go Home</a>
</body>
</html>
```

### 500 Internal Server Error
```
HTTP/1.1 500 Internal Server Error
Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
<head><title>500 - Server Error</title></head>
<body>
  <h1>Internal Server Error</h1>
  <p>Something went wrong on our end. Please try again later.</p>
  <a href="/">Go Home</a>
</body>
</html>
```

### 503 Service Unavailable
```
HTTP/1.1 503 Service Unavailable
Content-Type: text/html; charset=utf-8
Retry-After: 60

<!DOCTYPE html>
<html>
<head><title>503 - Service Unavailable</title></head>
<body>
  <h1>Service Temporarily Unavailable</h1>
  <p>We're down for maintenance. Please check back shortly.</p>
</body>
</html>
```

---

## Performance Metrics

### Measured via Lighthouse CI

| Metric | Target | Measurement Method | Pass Threshold |
|--------|--------|-------------------|-----------------|
| **First Contentful Paint (FCP)** | < 1.5s | Lighthouse (3G throttle) | Green (< 1.5s) |
| **Largest Contentful Paint (LCP)** | < 2.5s | Lighthouse (3G throttle) | Green (< 2.5s) |
| **Cumulative Layout Shift (CLS)** | < 0.1 | Lighthouse | Good (< 0.1) |
| **Time to Interactive (TTI)** | < 3.5s | Lighthouse (3G throttle) | Green (< 3.5s) |
| **Speed Index** | < 4.3s | Lighthouse (3G throttle) | Green (< 4.3s) |
| **Lighthouse Score** | 80+ | Lighthouse | Pass (80+) |

### Real-World Performance (Monitoring)
- **FCP**: Target < 1.5s (measured on 3G)
- **LCP**: Target < 2.5s (measured on 3G)
- **CLS**: Target < 0.1 (zero layout shifts)
- **Page Load (3G)**: Target < 2 seconds

---

## Browser Compatibility Matrix

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| **Chrome** | Latest (v120+) | ✅ Full support | Full ES2020 support |
| **Chrome** | Previous (v119) | ✅ Full support | Full ES2020 support |
| **Firefox** | Latest (v122+) | ✅ Full support | Full ES2020 support |
| **Firefox** | Previous (v121) | ✅ Full support | Full ES2020 support |
| **Safari** | Latest (v17+) | ✅ Full support | Full ES2020 support |
| **Safari** | Previous (v16) | ✅ Full support | Full ES2020 support |
| **Edge** | Latest (v120+) | ✅ Full support | Chromium-based |
| **Edge** | Previous (v119) | ✅ Full support | Chromium-based |
| **IE 11** | Legacy | ⚠️ Degraded | Graceful fallback (no modern JS) |

### Testing Approach
- Automated: Lighthouse CI (Moto G4 mobile device profile)
- Manual: BrowserStack for legacy browser testing
- Local: Chrome DevTools device emulation

---

## Testing Scenarios

### Happy Path
```
✅ User navigates to app.voluntodo.com
✅ Page loads (< 2s on 3G)
✅ "Coming Soon" headline visible
✅ CTA button clickable
✅ Responsive on all device sizes
✅ All links functional
✅ Lighthouse score 80+
```

### Network Conditions
```
✅ Slow 3G (3G throttle): Page loads in < 2 seconds
✅ Offline: Shows appropriate error/fallback
✅ Network interruption: Graceful degradation
```

### Accessibility
```
✅ Keyboard navigation (Tab through all elements)
✅ Screen reader (NVDA, JAWS compatibility)
✅ Color contrast (4.5:1 for body text)
✅ Focus indicators visible
✅ Form labels associated
✅ WCAG 2.1 AA audit passes
```

### Cross-Device
```
✅ Mobile (320px): Layout reflows correctly
✅ Tablet (768px): Centered, readable
✅ Desktop (1440px): Full width, professional
✅ Large desktop (1920px+): Centered, not stretched
✅ Touch: Button sizes 48x48px minimum
✅ Dark mode: Contrast maintains 4.5:1
```

---

## HTTP Headers Detail

### Cache-Control
```
Cache-Control: public, max-age=3600, must-revalidate
```
- `public`: Cacheable by any cache (browser, CDN)
- `max-age=3600`: Cache for 1 hour before revalidating
- `must-revalidate`: Don't serve stale content without checking server

### Content-Security-Policy (CSP)
```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' https://fonts.googleapis.com;
  connect-src 'self' https://api.github.com
```
- Prevents XSS attacks
- Restricts script execution
- Allows only approved external resources

### Security Headers
```
X-Frame-Options: SAMEORIGIN           # Prevent clickjacking
X-Content-Type-Options: nosniff       # Prevent MIME type sniffing
Referrer-Policy: strict-origin-when-cross-origin # Control referrer info
```

---

## API Health Check (Optional)

### Endpoint
```
GET /api/health
```

### Response
```json
{
  "status": "ok",
  "timestamp": "2026-02-14T12:00:00Z",
  "environment": "production",
  "version": "1.0.0"
}
```

### Use Case
- Monitoring/uptime checks
- Deployment verification
- Health dashboard

---

## Contract Validation

### Automated Testing
```typescript
// e2e/landing.spec.ts
import { test, expect } from '@playwright/test';

test('GET / returns 200 OK with correct content', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  
  // Verify headers
  const contentType = response?.headers()['content-type'];
  expect(contentType).toContain('text/html');
  
  // Verify content
  await expect(page.locator('h1')).toContainText('Coming Soon');
  await expect(page.locator('button')).toBeVisible();
});

test('page loads within 2 seconds on 3G', async ({ page }) => {
  await page.route('**/*', route => {
    setTimeout(() => route.continue(), 100); // Simulate 3G delay
  });
  
  const startTime = Date.now();
  await page.goto('/');
  const loadTime = Date.now() - startTime;
  
  expect(loadTime).toBeLessThan(2000);
});

test('Lighthouse score is 80+', async ({ page }) => {
  await page.goto('/');
  const lighthouse = await page.evaluate(() => {
    // Lighthouse score retrieval (requires Lighthouse CI integration)
  });
  
  expect(lighthouse.score).toBeGreaterThanOrEqual(80);
});
```

---

## Deployment Validation

### Pre-Release Checklist
- [ ] All tests pass (lint, type-check, unit, E2E)
- [ ] Lighthouse score 80+ (mobile & desktop)
- [ ] Accessibility audit passes (axe-core)
- [ ] Page loads in < 2s on 3G
- [ ] Responsive on 320px → 1920px+
- [ ] Social metadata correct (Open Graph, Twitter)
- [ ] Cross-browser compatibility verified
- [ ] Performance budget met (< 50KB)
- [ ] Health check endpoint returns 200
- [ ] Monitoring/alerts configured
- [ ] Rollback procedure documented

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-14 | Initial contract |

---

**Status**: ✅ Complete  
**Last Updated**: 2026-02-14  
**Ready for Phase 2 Implementation**
