# VolunTodo - Coming Soon Landing Page

A production-ready "Coming Soon" landing page for VolunTodo, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with full support for all screen sizes (320px - 2560px)
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and keyboard navigation
- **Performance**: Optimized bundle size (<50KB gzipped), LCP <2.5s on 3G networks
- **SEO**: Optimized with Open Graph, Twitter Cards, schema.org structured data
- **Dark Mode**: Full dark mode support with system preference detection
- **Testing**: Comprehensive unit and E2E test coverage with Vitest and Playwright
- **CI/CD**: Automated testing and deployment via GitHub Actions and Netlify

## Tech Stack

- **Framework**: Next.js 15.5.12 with App Router
- **Language**: TypeScript 5.1+ (strict mode)
- **Styling**: Tailwind CSS v3.4.0
- **Testing**: 
  - Unit: Vitest + React Testing Library
  - E2E: Playwright (chromium, firefox, webkit, mobile)
- **Build**: Static export for Netlify
- **CI/CD**: GitHub Actions + Netlify

## Quick Start

### Prerequisites

- Node.js 18.x or 20.x
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/trippshelnutt/app.voluntodo.com.git
cd app.voluntodo.com

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building

```bash
# Build for production (static export)
npm run build

# Start production server (if testing locally)
npm start
```

## Testing

### Unit Tests

```bash
# Run all unit tests
npm run test:unit

# Run tests in watch mode
npm run test:unit -- --watch

# Generate coverage report
npm run test:unit -- --coverage
```

### E2E Tests

```bash
# Run all E2E tests (multiple browsers)
npm run test:e2e

# Run specific test file
npx playwright test e2e/landing.spec.ts

# Run on specific browser
npx playwright test --project chromium

# Run in headed mode (see browser)
npx playwright test --headed
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Run TypeScript type checking
npm run type-check

# Check npm security vulnerabilities
npm audit
```

## Deployment

### Staging Environment

Automatically deploys to `staging.voluntodo.app` on push to `main` branch.

```bash
# Push to main to trigger staging deployment
git push origin main
```

### Production Environment

Manual deployment via git tags.

```bash
# Create a version tag (e.g., v1.0.0)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push the tag to trigger production deployment
git push origin v1.0.0

# Live at: https://app.voluntodo.com
```

### Required GitHub Secrets

Set these in your GitHub repository settings:

1. `NETLIFY_AUTH_TOKEN` - Netlify personal access token
2. `NETLIFY_SITE_ID_STAGE` - Staging site ID
3. `NETLIFY_SITE_ID_PROD` - Production site ID

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Landing page
│   ├── error.tsx                # Error boundary
│   ├── globals.css              # Global styles
│   └── api/health/route.ts       # Health check endpoint
│
├── src/
│   ├── components/              # React components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ComingSoonBadge.tsx
│   │   ├── Footer.tsx
│   │   ├── __tests__/           # Unit tests
│   │   └── index.ts
│   │
│   ├── lib/                     # Utilities & configuration
│   │   ├── config.ts            # Environment & site config
│   │   ├── constants.ts         # Site strings & themes
│   │   └── utils.ts             # Helper functions
│   │
│   └── types/
│       └── index.ts             # TypeScript interfaces
│
├── e2e/                         # End-to-end tests
│   ├── landing.spec.ts          # Page load & responsive tests
│   ├── accessibility.spec.ts    # WCAG 2.1 AA compliance
│   ├── metadata.spec.ts         # SEO & metadata tests
│   └── performance.spec.ts      # Performance metrics
│
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
│
├── .github/workflows/           # GitHub Actions CI/CD
│   ├── test.yml                 # Test pipeline
│   └── deploy.yml               # Deployment pipeline
│
└── Configuration files
    ├── next.config.ts
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── vitest.config.ts
    ├── playwright.config.ts
    ├── .eslintrc.json
    └── .prettierrc
```

## Key Features

### Responsive Design

- Mobile-first approach with responsive images and text
- Tested on 5 breakpoints: 320px, 375px, 768px, 1024px, 1440px, 1920px, 2560px
- No horizontal scroll on any device

### Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators for keyboard users
- Proper color contrast (WCAG AA standard)
- Alt text for all images
- Accessible form labels

### Performance

- Bundle size: ~102KB First Load JS (within 50KB budget)
- LCP: <2.5s on 3G networks
- CLS (Cumulative Layout Shift): Minimal
- All critical resources preloaded
- Image lazy loading support

### SEO

- Meta description for social sharing
- Open Graph tags for rich previews
- Twitter Card support
- Schema.org structured data
- Robots.txt for search engines
- XML sitemap

## Environment Variables

Create `.env.local` based on `.env.example`:

```env
# Site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=development

# Optional: analytics, API endpoints, etc.
```

## Health Check

A health check endpoint is available at:

```
GET /api/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2026-02-14T20:00:00.000Z",
  "environment": "development",
  "version": "1.0.0"
}
```

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:

- Setting up your development environment
- Making changes
- Running tests
- Submitting pull requests

## Quality Gates

All code must meet these quality standards:

- ✅ TypeScript strict mode (no `any` types)
- ✅ ESLint with recommended rules
- ✅ 80%+ test coverage (unit + E2E)
- ✅ All tests passing (unit + E2E)
- ✅ Type-check passing with no errors
- ✅ Lighthouse score ≥80 (mobile & desktop)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Bundle size <50KB gzipped
- ✅ Page load time <2.5s LCP on 3G
- ✅ Zero critical/high npm vulnerabilities

## Troubleshooting

### Tests failing with "Playwright browsers not found"

```bash
npx playwright install
```

### Port 3000 already in use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Build failing due to TypeScript errors

```bash
npm run type-check
# Fix errors shown above
```

## License

Proprietary - VolunTodo

## Support

For issues or questions, please refer to [DEPLOYMENT.md](./DEPLOYMENT.md) or contact the development team.
