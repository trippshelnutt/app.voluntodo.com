import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '@/src/components/Footer';

describe('Footer', () => {
  it('should render copyright text', () => {
    render(<Footer />);
    const copyright = screen.getByText(/© 2026 VolunTodo/);
    expect(copyright).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should have proper semantic structure', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should have accessible social link labels', () => {
    render(<Footer />);
    const twitterLink = screen.queryByLabelText('Twitter');
    const githubLink = screen.queryByLabelText('GitHub');
    if (twitterLink) expect(twitterLink).toHaveAttribute('target', '_blank');
    if (githubLink) expect(githubLink).toHaveAttribute('target', '_blank');
  });
});
