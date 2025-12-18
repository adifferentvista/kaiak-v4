import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata = {
  title: 'KAIAK | AI & Systems for Leaders',
  description: 'I help leaders reclaim 10+ hours a week through AI automation, smart systems, and operational foundations that actually work.',
  keywords: ['leadership', 'AI for education', 'productivity', 'school operations', 'NotebookLM', 'second brain', 'workflow automation'],
  authors: [{ name: 'Benedict' }],
  metadataBase: new URL('https://kaiak.io'),
  openGraph: {
    title: 'KAIAK | AI & Systems for Leaders',
    description: 'I help leaders reclaim 10+ hours a week through AI automation, smart systems, and operational foundations.',
    url: 'https://kaiak.io',
    siteName: 'KAIAK',
    locale: 'en_US',
    type: 'website',
    // TODO: Add images once you have an OG image
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAIAK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAIAK | AI & Systems for Leaders',
    description: 'I help leaders reclaim 10+ hours a week through AI automation and smart systems.',
    // TODO: Add images once you have a Twitter card image
    // images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kaiak.io',
  },
  icons: {
    icon: [
      { url: '/favicon-dark.png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-light.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Calendly CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('kaiak-theme');
                  var isDark = theme === 'dark' || 
                    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
                    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-cream dark:bg-navy">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Calendly */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EFQFMJWN6P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EFQFMJWN6P');
          `}
        </Script>
        
        {/* iubenda Cookie Banner - Fixed with https:// URLs */}
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "siteId": 4350956,
              "cookiePolicyId": 49134491,
              "lang": "en",
              "storage": { "useSiteId": true }
            };
          `}
        </Script>
        <Script 
          src="https://cs.iubenda.com/autoblocking/4350956.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdn.iubenda.com/cs/gpp/stub.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdn.iubenda.com/cs/iubenda_cs.js" 
          charSet="UTF-8" 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
