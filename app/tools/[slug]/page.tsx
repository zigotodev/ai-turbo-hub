import { tools } from '@/data/tools'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ToolPage({ params }: Props) {

  const { slug } = await params

  const tool = tools.find(
    (item) => item.slug === slug
  )

  if (!tool) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white py-32">

      <div className="max-w-5xl mx-auto px-6">

        {/* CATEGORY */}
        <span className="text-indigo-400 uppercase tracking-wide text-sm">
          {tool.category}
        </span>

        {/* TITLE */}
        <h1 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
          {tool.name}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-3xl">
          {tool.description}
        </p>

        {/* IMAGE */}
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-[500px] object-cover rounded-3xl mt-14 border border-white/10"
        />

        {/* CONTENT */}
        <div className="mt-16 space-y-8 text-gray-300 text-lg leading-8">

          <p>
            {tool.name} é uma das ferramentas de inteligência artificial
            mais populares atualmente, sendo utilizada por criadores,
            empresas e profissionais do mundo inteiro.
          </p>

          <p>
            A plataforma ajuda na automação de tarefas, produtividade,
            criação de conteúdo, marketing e diversas outras áreas.
          </p>

          <p>
            O mercado de IA continua crescendo rapidamente em 2026,
            e ferramentas como {tool.name} estão liderando essa transformação.
          </p>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-14">

          <a
            href={tool.website}
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold"
          >
            Acessar Ferramenta
          </a>

          <Link
            href="/tools"
            className="border border-white/10 hover:bg-white/5 transition px-8 py-4 rounded-2xl font-semibold"
          >
            Voltar
          </Link>

        </div>

      </div>

    </main>
  )
}