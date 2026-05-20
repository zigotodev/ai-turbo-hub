import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

  return {

    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap: 'https://ai-turbo-hub.vercel.app/sitemap.xml',
  }
}