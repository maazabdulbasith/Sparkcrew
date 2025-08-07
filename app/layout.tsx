import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SparkCrew Innovations - Empowering India\'s Youth',
  description: 'Empowering Indian youth (aged 16–24) by helping them earn through their personal or academic skills. Join the crew and turn your skills into income, experience, and pride.',
  keywords: 'SparkCrew, Indian youth, gig economy, student opportunities, skill-based work, local gigs',
  authors: [{ name: 'SparkCrew Innovations Pvt. Ltd.' }],
  openGraph: {
    title: 'SparkCrew Innovations - Empowering India\'s Youth',
    description: 'Empowering Indian youth by helping them earn through their skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 