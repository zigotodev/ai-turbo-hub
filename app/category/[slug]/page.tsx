import { articles } from '@/data/articles'

import Tools from '@/components/tools'

import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

type Props = {
  params: {
    slug: string
  }
}
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const article = articles.find(
  (item) => item.slug === params.slug
)

  if (!article) {
    return {
      title: 'Artigo não encontrado'
    }
  }

  return {
    title: `${article.title} | AI Turbo Hub`,
    description: article.description,

    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  }
}

export default function ArticlePage({ params }: Props) {

  const article = articles.find(
    (item) => item.slug === params.slug
  )

  if (!article) {
    return (
      <div
  className="
    prose
    prose-invert
    prose-lg
    max-w-none
    mt-16

    prose-headings:text-white
    prose-headings:font-black
    prose-headings:tracking-tight

    prose-h1:text-5xl
    prose-h1:mb-8

    prose-h2:text-4xl
    prose-h2:mt-20
    prose-h2:mb-8
    prose-h2:border-b
    prose-h2:border-white/10
    prose-h2:pb-4

    prose-h3:text-3xl
    prose-h3:mt-16
    prose-h3:mb-6

    prose-p:text-gray-300
    prose-p:leading-8
    prose-p:mb-8

    prose-strong:text-white

    prose-ul:my-8
    prose-ul:space-y-4

    prose-li:text-gray-300
    prose-li:marker:text-indigo-400

    prose-hr:border-white/10
  "
>
  <ReactMarkdown>
    
    {article.content}
  </ReactMarkdown>
</div>
    )
  }
  
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-20">

        <span className="text-indigo-400 font-medium">
          {article.category}
        </span>

        <h1 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
          {article.title}
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl leading-relaxed">
          {article.description}
        </p>

        <img
          src={article.image}
          className="w-full h-[500px] object-cover rounded-3xl mt-14"
        />

      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-32">

        <div className="prose prose-invert prose-lg max-w-none">

          <h2>
  O futuro das inteligências artificiais
</h2>

<p>
  Ferramentas de IA estão revolucionando o mercado digital.
  Empresas e criadores estão usando automações para crescer
  mais rápido e reduzir custos.
</p>

<h2>
  Como ganhar dinheiro com IA
</h2>

<p>
  Existem dezenas de maneiras de monetizar ferramentas
  de inteligência artificial, incluindo afiliados,
  criação de conteúdo, automação e geração de leads.
</p>

<h2>
  Melhor estratégia em 2026
</h2>

<p>
  Criar um portal de conteúdo otimizado para SEO
  continua sendo uma das estratégias mais fortes
  para gerar tráfego orgânico.
</p>
        </div>

        <Tools />

      </section>

    </main>
    
  )
}