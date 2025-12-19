import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Rangsagar | Innovative Digital Solutions',
  description: 'Rangsagar delivers cutting-edge web development, mobile apps, and digital solutions. Transform your business with our expertise.',
  keywords: ['web development', 'mobile apps', 'digital solutions', 'UI/UX design', 'cloud solutions'],
  authors: [{ name: 'Rangsagar' }],
  creator: 'Rangsagar',
  publisher: 'Rangsagar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rangsagar.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rangsagar.org',
    title: 'Rangsagar | Innovative Digital Solutions',
    description: 'Transforming businesses with innovative digital solutions',
    siteName: 'Rangsagar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rangsagar | Innovative Digital Solutions',
    description: 'Transforming businesses with innovative digital solutions',
    creator: '@rangsagar',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}