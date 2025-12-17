import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'KAIAK | AI & Systems for Leaders',
  description: 'I help leaders reclaim 10+ hours a week through AI automation, smart systems, and operational foundations that actually work.',
  keywords: ['leadership', 'AI for education', 'productivity', 'school operations', 'NotebookLM', 'second brain', 'workflow automation'],
  authors: [{ name: 'Benedict' }],
  openGraph: {
    title: 'KAIAK | AI & Systems for Leaders',
    description: 'I help leaders reclaim 10+ hours a week through AI automation, smart systems, and operational foundations.',
    url: 'https://kaiak.io',
    siteName: 'KAIAK',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAIAK | AI & Systems for Leaders',
    description: 'I help leaders reclaim 10+ hours a week through AI automation and smart systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Calendly CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
        
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
        
        {/* iubenda Cookie Banner */}
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
          src="//cdn.iubenda.com/cs/gpp/stub.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="//cdn.iubenda.com/cs/iubenda_cs.js" 
          charset="UTF-8" 
          async 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
