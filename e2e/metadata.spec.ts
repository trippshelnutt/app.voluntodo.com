import { test, expect } from '@playwright/test';

test.describe('Metadata & SEO', () => {
  test('should have correct page title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toContain('Coming Soon');
    expect(title).toContain('VolunTodo');
  });

  test('should have meta description', async ({ page }) => {
    await page.goto('/');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description?.length).toBeGreaterThan(10);
  });

  test('should have Open Graph tags', async ({ page }) => {
    await page.goto('/');
    
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
    
    expect(ogTitle).toBeTruthy();
    expect(ogDescription).toBeTruthy();
    expect(ogUrl).toBeTruthy();
  });

  test('should have Twitter Card tags', async ({ page }) => {
    await page.goto('/');
    
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
    
    expect(twitterCard).toBeTruthy();
    expect(twitterTitle).toBeTruthy();
  });

  test('should have favicon', async ({ page }) => {
    await page.goto('/');
    
    const favicon = await page.locator('link[rel="icon"]');
    expect(favicon).toBeVisible();
  });

  test('should have robots meta tag', async ({ page }) => {
    await page.goto('/');
    
    const robots = await page.locator('meta[name="robots"]').getAttribute('content');
    if (robots) {
      expect(robots).toContain('index');
      expect(robots).toContain('follow');
    }
  });
});
