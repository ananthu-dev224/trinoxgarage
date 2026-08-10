import { SITE_URL } from './lib/site'

export default function sitemap() {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/refund-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
