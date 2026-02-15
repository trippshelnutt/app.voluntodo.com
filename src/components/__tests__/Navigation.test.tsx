import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Navigation from '@/src/components/Navigation';

describe('Navigation', () => {
  it('should render VolunTodo branding', () => {
    render(<Navigation />);
    const title = screen.getByText('VolunTodo');
    expect(title).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Navigation />);
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const { container } = render(<Navigation />);
    const header = container.querySelector('header');
    const nav = container.querySelector('nav');
    expect(header).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });
});
