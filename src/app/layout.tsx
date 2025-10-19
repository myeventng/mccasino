import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Game of Jokes 2026 | MC Casino\'s Annual Comedy Concert',
  description:
    'Start your year with laughter! Join MC Casino and Nigeria\'s finest comedians at Game of Jokes 2026 - The Very Good Bad Guyz Edition. January 1st, 2026 at Cathelea Convention Centre, Benin City. Featuring Mr P, I Go Dye, Klint da Drunk, Kenny Blaq & more.',
  keywords: [
    'Game of Jokes',
    'MC Casino',
    'Comedy Concert',
    'Benin City Events',
    'Nigerian Comedy',
    'New Year Comedy Show',
    'January 1st 2026',
    'Cathelea Convention Centre',
    'Lawrence Osarenkhoe',
    'Mr P',
    'I Go Dye',
    'Klint da Drunk',
    'Kenny Blaq',
    'Comedy Festival Nigeria',
    'Stand-up Comedy',
    'Entertainment Benin City',
    'Edo State Events',
  ],
  metadataBase: new URL('https://casinogameofjoke.com'),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://casinogameofjoke.com',
    siteName: 'Game of Jokes 2026',
    title: 'Game of Jokes 2026 | MC Casino\'s Annual Comedy Concert',
    description:
      'Experience the biggest comedy event of the year! MC Casino presents Game of Jokes 2026 featuring Nigeria\'s top comedians. January 1st, 2026 at Cathelea Convention Centre, Benin City.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Game of Jokes 2026 - The Very Good Bad Guyz Edition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game of Jokes 2026 | MC Casino\'s Annual Comedy Concert',
    description:
      'Start 2026 with laughter! Join MC Casino and Nigeria\'s finest comedians on January 1st at Cathelea Convention Centre, Benin City.',
    images: ['/twitter-image.jpg'],
    creator: '@mccasino',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // other: 'your-other-verification-code',
  },
  alternates: {
    canonical: 'https://casinogameofjoke.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Favicon Links - Fallback for older browsers */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="MC Casino - Lawrence Osarenkhoe" />
        <meta name="theme-color" content="#ffd700" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#ffd700" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Event Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Game of Jokes 2026 - The Very Good Bad Guyz Edition',
              description:
                'Annual comedy concert featuring MC Casino and Nigeria\'s finest comedians',
              startDate: '2026-01-01T18:00:00+01:00',
              endDate: '2026-01-01T23:00:00+01:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Cathelea Convention Centre',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Cathelea Convention Centre',
                  addressLocality: 'Benin City',
                  addressRegion: 'Edo State',
                  addressCountry: 'NG',
                },
              },
              // image: 'https://casinogameofjoke.com/og-image.jpg',
              organizer: {
                '@type': 'Person',
                name: 'MC Casino',
                url: 'https://casinogameofjoke.com',
              },
              performer: [
                {
                  '@type': 'Person',
                  name: 'MC Casino',
                },
                {
                  '@type': 'Person',
                  name: 'Mr P',
                },
                {
                  '@type': 'Person',
                  name: 'I Go Dye',
                },
                {
                  '@type': 'Person',
                  name: 'Klint da Drunk',
                },
                {
                  '@type': 'Person',
                  name: 'Kenny Blaq',
                },
              ],
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Regular Ticket',
                  price: '5000',
                  priceCurrency: 'NGN',
                  availability: 'https://schema.org/InStock',
                  url: 'https://casinogameofjoke.com/#tickets',
                  validFrom: '2025-10-19',
                },
                {
                  '@type': 'Offer',
                  name: 'VIP Ticket',
                  price: '20000',
                  priceCurrency: 'NGN',
                  availability: 'https://schema.org/InStock',
                  url: 'https://casinogameofjoke.com/#tickets',
                  validFrom: '2025-10-19',
                },
                {
                  '@type': 'Offer',
                  name: 'Table Package',
                  price: '500000',
                  priceCurrency: 'NGN',
                  availability: 'https://schema.org/InStock',
                  url: 'https://casinogameofjoke.com/#tickets',
                  validFrom: '2025-10-19',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${manrope.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}