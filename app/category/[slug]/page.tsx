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
      title: 'Artigo não encontrado | AI Turbo Hub',
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
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Artigo não encontrado
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-20">

        <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-semibold">
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
          alt={article.title}
          className="w-full h-[500px] object-cover rounded-3xl mt-14 border border-white/10"
        />

      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-32">

        <div
          className="
            prose
            prose-invert
            prose-lg
            max-w-none

            prose-headings:text-white
            prose-headings:font-black
            prose-headings:tracking-tight

            prose-h2:text-4xl
            prose-h2:mt-20
            prose-h2:mb-8
            prose-h2:border-b
            prose-h2:border-white/10
            prose-h2:pb-4

            prose-p:text-gray-300
            prose-p:leading-8
            prose-p:mb-8

            prose-strong:text-white

            prose-ul:my-8
            prose-ul:space-y-4

            prose-li:text-gray-300
            prose-li:marker:text-indigo-400
          "
        >

        <ReactMarkdown>
  {article.content as string}
</ReactMarkdown>
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

        <div className="mt-24">
          <Tools />
        </div>

      </section>

    </main>
  )
}