import type { Metadata } from 'next'
import './globals.css'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {

  title: {
    default: 'AI Turbo Hub',
    template: '%s | AI Turbo Hub',
  },

  description:
    'Descubra as ferramentas de inteligência artificial mais virais da internet.',

  keywords: [
    'IA',
    'Inteligência Artificial',
    'AI Tools',
    'ChatGPT',
    'Midjourney',
    'Automação',
    'Produtividade',
    'Marketing IA',
  ],

  metadataBase: new URL('https://ai-turbo-hub.vercel.app'),

  openGraph: {

    title: 'AI Turbo Hub',

    description:
      'As ferramentas de inteligência artificial mais acessadas do momento.',

    url: 'https://ai-turbo-hub.vercel.app',

    siteName: 'AI Turbo Hub',

    images: [
      {
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
      },
    ],

    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Turbo Hub',
    description:
      'Descubra ferramentas virais de inteligência artificial.',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">

      <body>
        {children}
      </body>
      
      <Analytics />

    </html>
  )
}