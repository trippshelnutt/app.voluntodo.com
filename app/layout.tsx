import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/src/lib/config';
import './globals.css';

// Generate metadata dynamically to support environment-specific URLs
export const generateMetadata = (): Metadata => {
  const canonicalUrl = getCanonicalUrl();
  const ogImageUrl = getCanonicalUrl('/og-image.png');

  return {
    title: 'Coming Soon - VolunTodo',
    description: "We're building something amazing for your team.",
    openGraph: {
      title: 'Coming Soon - VolunTodo',
      description: "We're building something amazing for your team.",
      url: canonicalUrl,
      siteName: 'VolunTodo',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'VolunTodo Coming Soon',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Coming Soon - VolunTodo',
      description: "We're building something amazing for your team.",
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { siteUrl } = require('@/src/lib/config').getEnvironment();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VolunTodo',
              url: siteUrl,
              logo: getCanonicalUrl('/og-image.png'),
              description: "We're building something amazing for your team.",
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-slate-950 dark:text-white">{children}</body>
    </html>
  );
}
