export interface LandingPageContent {
  title: string;
  headline: string;
  subtitle?: string;
  ctaText: string;
  ctaUrl?: string;
  heroImage?: string;
  footerText?: string;
  socialLinks?: SocialLinks;
  theme: 'light' | 'dark' | 'auto';
  metadata: PageMetadata;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  ogImage?: string;
  twitterHandle?: string;
  canonicalUrl: string;
}

export interface Environment {
  isDevelopment: boolean;
  isStaging: boolean;
  isProduction: boolean;
  siteUrl: string;
}
