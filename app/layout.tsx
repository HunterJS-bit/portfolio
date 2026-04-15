import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import "./globals.css";

import { Roboto, Nunito } from 'next/font/google'

const openSans = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
  weight: ['400', '500', '600'],
  preload: true,
})

//👇 Configure the object for our second font
const robotoMono = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['400', '500'],
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://johndoe.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Marko — Software Engineer",
    template: "%s | Marko"
  },
  description: "Software engineer designing tools for thought. Focused on product design, frontend architecture, and building scalable web applications.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Marko — Software Engineer",
    description: "Software engineer designing tools for thought.",
    url: SITE_URL,
    siteName: "Marko Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marko — Software Engineer",
    description: "Software engineer designing tools for thought.",
    creator: "@markom",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: 'Marko Portfolio',
                  description: 'Software engineer designing tools for thought.',
                  inLanguage: 'en-US',
                },
                {
                  '@type': 'Person',
                  '@id': `${SITE_URL}/#person`,
                  name: 'Marko',
                  url: SITE_URL,
                  jobTitle: 'Software Engineer',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Datadog',
                    url: 'https://www.datadoghq.com',
                  },
                  sameAs: [
                    'https://twitter.com/markom',
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${robotoMono.variable}  antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navigation />
          <div className="flex-grow pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
