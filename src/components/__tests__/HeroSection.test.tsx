import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from '@/src/components/HeroSection';

describe('HeroSection', () => {
  it('should render "Coming Soon" headline', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Coming Soon');
  });

  it('should render subtitle text', () => {
    render(<HeroSection />);
    const subtitle = screen.getByText(/We're building something amazing/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('should apply responsive classes', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-4xl', 'md:text-6xl');
  });

  it('should have proper color contrast', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-gray-900', 'dark:text-white');
  });

  it('should render Coming Soon badge', () => {
    render(<HeroSection />);
    const badge = screen.getByText('Coming Soon', { selector: 'span' });
    expect(badge).toBeInTheDocument();
  });
});
