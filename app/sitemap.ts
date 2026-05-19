import { articles } from '@/data/articles'
import { tools } from '@/data/tools'

export default function sitemap() {

  const blogRoutes = articles.map((article) => ({
    url: `https://aiturbohub.com/blog/${article.slug}`,
    lastModified: new Date(),
  }))

  const toolRoutes = tools.map((tool) => ({
    url: `https://aiturbohub.com/tools/${tool.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://aiturbohub.com',
      lastModified: new Date(),
    },

    {
      url: 'https://aiturbohub.com/blog',
      lastModified: new Date(),
    },

    {
      url: 'https://aiturbohub.com/tools',
      lastModified: new Date(),
    },

    ...blogRoutes,
    ...toolRoutes,
  ]
}