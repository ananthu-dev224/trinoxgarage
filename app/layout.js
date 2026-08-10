import { Bebas_Neue, DM_Sans } from 'next/font/google'
import {
  BUSINESS,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from './lib/site'
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Car Rental',
  icons: {
    icon: '/images/trinox_logo.png',
    apple: '/images/trinox_logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Car Rental in Thrissur, Kerala`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Trinox Garage car rental fleet in Thrissur, Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Car Rental in Thrissur, Kerala`,
    description: SITE_DESCRIPTION,
    images: ['/images/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Thrissur',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['AutoRental', 'LocalBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      url: SITE_URL,
      image: `${SITE_URL}/images/banner.jpg`,
      logo: `${SITE_URL}/images/trinox_logo.png`,
      description: SITE_DESCRIPTION,
      email: BUSINESS.email,
      telephone: BUSINESS.phones,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Thrissur',
        },
        {
          '@type': 'State',
          name: 'Kerala',
        },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Trinox Garage Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Self-Drive Car Rental',
              areaServed: 'Thrissur, Kerala',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tourism & Travel Packages',
              areaServed: 'Kerala',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Airport Transfers',
              areaServed: 'Thrissur, Kerala',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Drive & Earn Taxi Car Rental',
              areaServed: 'Thrissur, Kerala',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: {
        '@id': `${SITE_URL}/#business`,
      },
      inLanguage: 'en-IN',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
