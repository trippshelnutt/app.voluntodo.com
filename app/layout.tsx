import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coming Soon - VolunTodo',
  description: 'We\'re building something amazing for your team.',
  openGraph: {
    title: 'Coming Soon - VolunTodo',
    description: 'We\'re building something amazing for your team.',
    url: 'https://app.voluntodo.com',
    siteName: 'VolunTodo',
    images: [
      {
        url: 'https://app.voluntodo.com/og-image.png',
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
    description: 'We\'re building something amazing for your team.',
    images: ['https://app.voluntodo.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VolunTodo',
              url: 'https://app.voluntodo.com',
              logo: 'https://app.voluntodo.com/og-image.png',
              description: 'We\'re building something amazing for your team.',
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-slate-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}
