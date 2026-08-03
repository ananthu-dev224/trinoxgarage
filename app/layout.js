import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
})

export const metadata = {
  title: 'Trinox Garage — Car Rental, Tourism & Taxi',
  description:
    'Self-drive car rental, tourism & travel packages, airport transfers, and drive-to-earn taxi cars by Trinox Garage.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}