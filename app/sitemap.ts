import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: 'https://ai-turbo-hub.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },

    {
      url: 'https://ai-turbo-hub.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },

    {
      url: 'https://ai-turbo-hub.vercel.app/tools',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },

    {
      url: 'https://ai-turbo-hub.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

  ]
}