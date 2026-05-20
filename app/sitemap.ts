import { MetadataRoute } from 'next'

import { articles } from '@/data/articles'
import { tools } from '@/data/tools'

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = 'https://ai-turbo-hub.vercel.app'

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
  }))

  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
  }))

  return [

    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },

    ...articleUrls,
    ...toolUrls,

  ]
}