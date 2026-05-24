import { tools } from '@/data/tools'
import Link from 'next/link'

export default function Tools() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <span className="text-indigo-400 font-medium">
            FERRAMENTAS EM ALTA
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            As IAs mais acessadas do momento
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl">
            Ferramentas virais que estão crescendo absurdamente em 2026.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tools.map((tool) => (

            <Link
              href={`/tools/${tool.slug}`}
              key={tool.slug}
              className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.05] transition block"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">

                <span className="text-indigo-400 text-sm">
                  {tool.category}
                </span>

                <h3 className="text-3xl font-bold text-white mt-4">
                  {tool.name}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {tool.description}
                </p>

                <div className="inline-block mt-8 bg-indigo-600 px-6 py-3 rounded-2xl text-white font-semibold">
                  Acessar
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  )
}