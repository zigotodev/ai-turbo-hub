import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Turbo Hub',
  description:
    'Descubra as melhores ferramentas de inteligência artificial, produtividade, marketing e automação em 2026.',

  keywords: [
    'IA',
    'Inteligência Artificial',
    'Ferramentas IA',
    'ChatGPT',
    'Midjourney',
    'AI Tools',
    'Automação',
    'Marketing Digital',
  ],

  openGraph: {
    title: 'AI Turbo Hub',
    description:
      'As melhores ferramentas de IA do momento.',
    url: 'https://aiturbohub.com',
    siteName: 'AI Turbo Hub',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}