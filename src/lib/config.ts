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
  return `${env.siteUrl}${path}`;
}
