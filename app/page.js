import HomePage from './components/HomePage'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './lib/site'

export const metadata = {
  title: {
    absolute: `${SITE_NAME} — Car Rental in Thrissur, Kerala | Self-Drive & Taxi`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} — Car Rental in Thrissur, Kerala`,
    description: SITE_DESCRIPTION,
  },
}

export default function Home() {
  return <HomePage />
}
