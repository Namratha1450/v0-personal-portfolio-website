import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Namratha Chowdary Gundapuneedi | Portfolio',
  description: 'B.Tech CSE (Data Science) | Aspiring Data Analyst | Transforming Data into Strategic Insights',
}

export const viewport: Viewport = {
  themeColor: '#05070D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
