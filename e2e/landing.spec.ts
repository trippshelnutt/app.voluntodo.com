import { test, expect } from '@playwright/test';

test.describe('Landing Page - Desktop', () => {
  test('should display Coming Soon message on desktop', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toContainText('Coming Soon');
  });

  test('should render all major sections', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    const main = page.locator('main');
    const footer = page.locator('footer');
    await expect(header).toBeVisible();
    await expect(main).toBeVisible();
    await expect(footer).toBeVisible();
  });

  test('should have responsive navigation', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});

test.describe('Landing Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should be responsive on mobile (375px)', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    // Verify no horizontal scroll
    const bodyWidth = await page.locator('body').evaluate(el => el.scrollWidth);
    const windowWidth = await page.locator('body').evaluate(el => el.clientWidth);
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
  });

  test('should have readable text on mobile', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1');
    const fontSize = await heading.evaluate(el => 
      window.getComputedStyle(el).fontSize
    );
    // Font size should be at least 16px
    expect(parseInt(fontSize)).toBeGreaterThanOrEqual(16);
  });
});

test.describe('Landing Page - Tablet', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test('should be responsive on tablet (768px)', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });
});

test.describe('Landing Page - 4K', () => {
  test.use({ viewport: { width: 3840, height: 2160 } });

  test('should scale to 4K screens', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });
});
