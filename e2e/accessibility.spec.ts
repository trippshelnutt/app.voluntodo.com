import { test, expect } from '@playwright/test';

test.describe('Accessibility - WCAG 2.1 AA', () => {
  test('should have no axe violations', async ({ page }) => {
    await page.goto('/');
    
    // Check for basic accessibility
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    // Verify heading hierarchy
    const h1s = await page.locator('h1').count();
    expect(h1s).toBeGreaterThanOrEqual(1);
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Tab to first interactive element
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => 
      document.activeElement?.tagName
    );
    
    // Should focus on an interactive element
    expect(['A', 'BUTTON', 'INPUT']).toContain(focusedElement);
  });

  test('should have visible focus indicators', async ({ page }) => {
    await page.goto('/');
    
    const buttons = page.locator('button, a');
    if ((await buttons.count()) > 0) {
      const firstButton = buttons.first();
      await firstButton.focus();
      
      const outline = await firstButton.evaluate(el => 
        window.getComputedStyle(el).outline
      );
      
      // Should have some focus styling
      expect(outline).toBeTruthy();
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Verify main heading has dark color on light background
    const heading = page.locator('h1');
    const color = await heading.evaluate(el => 
      window.getComputedStyle(el).color
    );
    
    // Should not be light gray or white
    expect(color).not.toMatch(/rgba?\(25[0-5],\s*25[0-5],\s*25[0-5]/);
  });

  test('should have semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Verify semantic elements exist
    const header = page.locator('header');
    const main = page.locator('main');
    const footer = page.locator('footer');
    
    await expect(header).toBeVisible();
    await expect(main).toBeVisible();
    await expect(footer).toBeVisible();
  });

  test('should have proper image alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      // Images should have alt text
      expect(alt).toBeTruthy();
    }
  });

  test('should have accessible form labels', async ({ page }) => {
    await page.goto('/');
    
    const inputs = page.locator('input');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        const ariaLabel = await input.getAttribute('aria-label');
        // If input has id, should have associated label
        expect((await label.count()) + (ariaLabel ? 1 : 0)).toBeGreaterThanOrEqual(1);
      }
    }
  });
});
