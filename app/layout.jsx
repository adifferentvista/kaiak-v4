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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}