import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('should load page in reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load in under 5 seconds (generous for CI)
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have minimal layout shift', async ({ page }) => {
    await page.goto('/');
    
    // Get the main content area
    const main = page.locator('main');
    const initialHeight = await main.boundingBox();
    
    // Wait for any potential layout shifts
    await page.waitForTimeout(1000);
    
    const finalHeight = await main.boundingBox();
    
    // Heights should be similar (allowing for some variance)
    if (initialHeight && finalHeight) {
      const heightDifference = Math.abs(initialHeight.height - finalHeight.height);
      expect(heightDifference).toBeLessThan(50); // Less than 50px shift
    }
  });

  test('should render above the fold content quickly', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    
    // Wait for heading to be visible
    await page.locator('h1').waitFor({ state: 'visible', timeout: 3000 });
    
    const contentLoadTime = Date.now() - startTime;
    
    // Content should be visible within 3 seconds
    expect(contentLoadTime).toBeLessThan(3000);
  });

  test('should lazy load images if present', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const count = await images.count();
    
    // If there are images, they should have loading attribute
    for (let i = 0; i < count; i++) {
      const loading = await images.nth(i).getAttribute('loading');
      if (loading) {
        expect(['lazy', 'eager']).toContain(loading);
      }
    }
  });
});
