import { articles } from '@/data/articles'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params

  const article = articles.find(
    (item) => item.slug === slug
  )

  if (!article) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  return {
    title: `${article.title} | AI Turbo Hub`,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: Props) {

  const { slug } = await params

  const article = articles.find(
    (item) => item.slug === slug
  )

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white py-32">

      <div className="max-w-4xl mx-auto px-6">

        <span className="text-indigo-400 text-sm uppercase tracking-widest">
          {article.category}
        </span>

        <h1 className="text-5xl font-black mt-6 leading-tight">
          {article.title}
        </h1>

        <p className="text-gray-400 text-xl mt-6 leading-relaxed">
          {article.description}
        </p>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[500px] object-cover rounded-3xl mt-12 border border-white/10"
        />

        <div className="mt-12 text-gray-300 leading-8 text-lg space-y-6">

          <p>
            A inteligência artificial está transformando completamente a internet.
          </p>

          <p>
            Ferramentas modernas conseguem automatizar tarefas,
            criar vídeos, imagens e conteúdos virais rapidamente.
          </p>

          <p>
            Empresas e criadores estão utilizando IA para crescer
            absurdamente rápido em 2026.
          </p>

        </div>

      </div>

    </main>
  )
}