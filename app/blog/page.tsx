import Link from 'next/link'

import { articles } from '@/data/articles'

export default function BlogPage() {

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-32">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black">
          Blog de IA
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl">
          Artigos sobre ferramentas, automações,
          produtividade e tendências de inteligência artificial.
        </p>

        {/* ARTICLES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {articles.map((article) => (

            <Link
              href={`/blog/${article.slug}`}
              key={article.slug}
              className="group bg-white/[0.03] border border-white/10 rounded-[32px] overflow-hidden hover:bg-white/[0.05] transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <span className="text-indigo-400 text-sm">
                  {article.category}
                </span>

                <h2 className="text-3xl font-black text-white mt-4 leading-tight">
                  {article.title}
                </h2>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {article.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  )
}