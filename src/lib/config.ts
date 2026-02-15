import type { Environment } from '@/src/types';

export function getEnvironment(): Environment {
  const env = process.env.NEXT_PUBLIC_ENV || 'development';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    isDevelopment: env === 'development',
    isStaging: env === 'staging',
    isProduction: env === 'production',
    siteUrl,
  };
}

export function getCanonicalUrl(path: string = '/'): string {
  const env = getEnvironment();
  // Normalize URL joining: trim trailing slash from base and ensure leading slash on path
  const baseUrl = env.siteUrl.endsWith('/') ? env.siteUrl.slice(0, -1) : env.siteUrl;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}
