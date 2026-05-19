export type Tool = {
  slug: string
  name: string
  description: string
  image: string
  category: string
  website: string
}

export const tools: Tool[] = [

  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    description: 'IA avançada para criação de textos, automação e produtividade.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    category: 'Produtividade',
    website: 'https://chat.openai.com',
  },

  {
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'Ferramenta de IA para criação de imagens ultra realistas.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Imagens',
    website: 'https://midjourney.com',
  },

  {
    slug: 'notion-ai',
    name: 'Notion AI',
    description: 'IA integrada ao Notion para produtividade e organização.',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29',
    category: 'Organização',
    website: 'https://notion.so',
  },

]