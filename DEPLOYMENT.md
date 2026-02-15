# Deployment Guide

This guide explains how to deploy VolunTodo to staging and production environments on Netlify.

## Overview

The deployment pipeline uses GitHub Actions to:

1. **Test**: Run lint, type-check, unit tests
2. **Build**: Create optimized Next.js static export
3. **Deploy Staging**: Auto-deploy to `staging.voluntodo.app` on push to `main`
4. **Deploy Production**: Manual deploy to `app.voluntodo.com` on git tags (v*)

## Prerequisites

### GitHub Repository Setup

1. **Owner Access**: You must have admin access to the repository

2. **GitHub Secrets**: Set these in repository settings (Settings → Secrets and variables → Actions)
   - `NETLIFY_AUTH_TOKEN` - Personal access token from Netlify
   - `NETLIFY_SITE_ID_STAGE` - Staging site ID  
   - `NETLIFY_SITE_ID_PROD` - Production site ID

### Netlify Account Setup

1. **Create Netlify Account**: https://app.netlify.com/signup

2. **Create Two Sites**:
   - **Staging**: `staging.voluntodo.app`
   - **Production**: `app.voluntodo.com`

## Setting Up GitHub Secrets

### 1. Get Netlify Auth Token

1. Log in to [Netlify](https://app.netlify.com)
2. Click your profile icon → **Site settings** → **API** (or go to user settings)
3. Under "Applications", click **New access token**
4. Give it a name: "GitHub Actions Deployment"
5. Copy the token

### 2. Get Site IDs

For each Netlify site:

1. Go to **Site settings** → **General**
2. Find "Site ID" under "Site information"
3. Copy the ID

### 3. Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each:

```
Name: NETLIFY_AUTH_TOKEN
Value: <your-netlify-auth-token>

Name: NETLIFY_SITE_ID_STAGE
Value: <staging-site-id>

Name: NETLIFY_SITE_ID_PROD
Value: <production-site-id>
```

## Deployment Workflow

### Automatic Staging Deployment

```bash
# 1. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 2. Push to main branch
git push origin main

# 3. GitHub Actions automatically:
#    - Runs tests (lint, type-check, unit tests)
#    - Builds the project (npm run build)
#    - Deploys to Netlify staging site
#    - Available at: https://staging.voluntodo.app
```

### Manual Production Deployment

```bash
# 1. Ensure all changes are merged to main
git checkout main
git pull origin main

# 2. Create a version tag
# Use semantic versioning: v1.0.0, v1.0.1, v1.1.0, etc.
git tag -a v1.0.0 -m "Release version 1.0.0

- Feature: add coming soon badge
- Fix: improve mobile responsiveness
- Docs: update README with deployment guide"

# 3. Push the tag to GitHub
git push origin v1.0.0

# 4. GitHub Actions automatically:
#    - Runs all tests
#    - Builds the project with production env vars
#    - Deploys to Netlify production site
#    - Available at: https://app.voluntodo.com
```

## Environment Variables

### Staging Environment

Set in GitHub Actions deploy workflow or Netlify settings:

```env
NEXT_PUBLIC_ENV=staging
NEXT_PUBLIC_SITE_URL=https://staging.voluntodo.app
```

### Production Environment

Set in GitHub Actions deploy workflow or Netlify settings:

```env
NEXT_PUBLIC_ENV=production
NEXT_PUBLIC_SITE_URL=https://app.voluntodo.com
```

These are passed to the build process via the deploy workflow.

## Build Configuration

The app is configured for static export in `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export', // Static export for Netlify
  // ... other config
};
```

This outputs to `.next/out` which is deployed by the workflow.

## Deployment Checklist

Before deploying to production:

- [ ] All tests passing locally: `npm run test:unit && npm run test:e2e`
- [ ] Type-check passing: `npm run type-check`
- [ ] Lint passing: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Changes reviewed and merged to `main`
- [ ] Version tag created with proper format (v*.*.**)
- [ ] Git push includes the tag

## Monitoring Deployments

### GitHub Actions

1. Go to repository → **Actions**
2. Click on workflow run to see:
   - Test results
   - Build logs
   - Deployment status

### Netlify

1. Go to Netlify site dashboard
2. View:
   - Deployment history
   - Deployment logs
   - Performance metrics
   - Status checks

## Rollback Procedures

### Staging Rollback

```bash
# Push a fix to main branch
git push origin main

# Staging will automatically redeploy with the fix
```

### Production Rollback

If production deployment fails or has issues:

```bash
# Option 1: Deploy previous stable version
git tag -a v1.0.1 -m "Rollback to v1.0.0"
git push origin v1.0.1

# Option 2: Force manual deployment from Netlify dashboard
# - Go to site settings → Deploys → Trigger deploy
# - Select branch to deploy (main with known good commit)
```

## Troubleshooting

### Deployment Fails with "secrets not found"

**Problem**: GitHub Actions can't access Netlify secrets

**Solution**:
1. Verify secrets are set in repository settings
2. Check secret names match exactly (case-sensitive):
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID_STAGE`
   - `NETLIFY_SITE_ID_PROD`
3. Regenerate auth token if needed

### Build Fails During Deployment

**Problem**: `npm run build` fails in GitHub Actions

**Solution**:
1. Check GitHub Actions logs for specific error
2. Run build locally: `npm run build`
3. Fix issues locally, commit, and push
4. GitHub Actions will retry on next push

### Build Succeeds But Site Shows Wrong Content

**Problem**: Old version still showing on deployed site

**Solution**:
1. Check deployment history in Netlify
2. Verify correct version was deployed
3. Clear CDN cache in Netlify settings
4. Trigger new deployment from Netlify dashboard

### Tests Pass Locally But Fail in CI

**Problem**: Different Node.js version or environment

**Solution**:
1. Check GitHub Actions workflow Node.js version
2. Ensure local Node.js version matches (18.x or 20.x)
3. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## Performance Monitoring

### After Deployment

Check performance metrics in Netlify:

1. **Analytics**:
   - Page views
   - Unique visitors
   - Traffic sources

2. **Performance**:
   - Build time
   - Deployment size
   - Page load metrics

3. **Status**:
   - Uptime monitoring
   - SSL certificate status
   - Domain DNS configuration

## Domain Configuration

### Staging Domain

1. In Netlify site settings → **Domain management**
2. Add domain: `staging.voluntodo.app`
3. Configure DNS records as shown

### Production Domain

1. In Netlify site settings → **Domain management**
2. Add domain: `app.voluntodo.com`
3. Configure DNS records as shown
4. Enable HTTPS (automatic with Netlify)

## Post-Deployment Tasks

After production deployment:

1. **Verify Site Works**
   - Open https://app.voluntodo.com
   - Check all pages render
   - Test responsive design
   - Check console for errors

2. **Run Health Check**
   ```bash
   curl https://app.voluntodo.com/api/health
   ```
   Should return:
   ```json
   {
     "status": "ok",
     "timestamp": "2026-02-15T20:00:00.000Z",
     "environment": "production",
     "version": "1.0.0"
   }
   ```

3. **Monitor for Errors**
   - Check Netlify analytics for errors
   - Monitor error logs if applicable
   - Set up alerts for site downtime

## CI/CD Pipeline Details

### Test Workflow (`test.yml`)

Runs on: `push` and `pull_request` to `main` and feature branches

Steps:
1. Checkout code
2. Setup Node.js (18.x and 20.x)
3. Install dependencies
4. Run ESLint
5. Run TypeScript check
6. Run unit tests
7. Upload coverage to codecov
8. Build project (if tests pass)
9. Upload build artifacts

### Deploy Workflow (`deploy.yml`)

Runs on: `push` to `main` and `push` with tags (v*)

**Staging Job**:
- Runs if: push to main branch
- Builds with `NEXT_PUBLIC_SITE_URL=https://staging.voluntodo.app`
- Deploys to staging Netlify site

**Production Job**:
- Runs if: push with tag matching v* pattern
- Builds with `NEXT_PUBLIC_SITE_URL=https://app.voluntodo.com`
- Deploys to production Netlify site
- Creates GitHub release notes

## Security Considerations

1. **Secrets Management**
   - Never commit secrets to repository
   - Use GitHub Secrets for sensitive data
   - Rotate auth tokens periodically

2. **Access Control**
   - Limit who can create production tags
   - Use branch protection on main
   - Require reviews for PRs

3. **HTTPS Enforcement**
   - Netlify provides automatic HTTPS
   - All traffic redirects to HTTPS
   - CSP and security headers configured

## Support & Questions

For deployment issues:

1. Check GitHub Actions logs for errors
2. Check Netlify deployment logs
3. Review this guide for solutions
4. Contact the development team if needed

## Useful Commands

```bash
# View recent commits
git log --oneline -5

# View all tags
git tag -l

# Create an annotated tag
git tag -a v1.0.0 -m "Release message"

# Push a specific tag
git push origin v1.0.0

# Delete a local tag
git tag -d v1.0.0

# Delete a remote tag
git push origin --delete v1.0.0

# View tag details
git show v1.0.0
```

## References

- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
