import { articles } from '@/data/articles'
import Link from 'next/link'

export default function Trending() {
  return (
    <section className="py-20 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">

          <div>

            <span className="text-indigo-400 font-semibold tracking-widest text-sm">
              TRENDING NOW
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
              Tendências em alta
            </h2>

          </div>

          <Link
            href="/blog"
            className="w-fit border border-white/10 px-6 py-3 rounded-2xl text-white hover:bg-white/5 transition"
          >
            Ver tudo
          </Link>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* BIG ARTICLE */}
          <Link
            href={`/blog/${articles[0].slug}`}
            className="relative min-h-[500px] rounded-[32px] overflow-hidden border border-white/10 group"
          >

            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10">

              <span className="text-indigo-400 uppercase tracking-wider text-sm">
                {articles[0].category}
              </span>

              <h3 className="text-3xl md:text-5xl font-black text-white mt-4 leading-tight max-w-xl">
                {articles[0].title}
              </h3>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-lg">
                {articles[0].description}
              </p>

            </div>

          </Link>

          {/* SIDE ARTICLES */}
          <div className="flex flex-col gap-6">

            {articles.slice(1).map((article) => (

              <Link
                href={`/blog/${article.slug}`}
                key={article.slug}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition flex flex-col md:flex-row"
              >

                {/* IMAGE */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full md:w-52 h-52 md:h-auto object-cover flex-shrink-0"
                />

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-center">

                  <span className="text-indigo-400 text-sm uppercase tracking-wide">
                    {article.category}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-3 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {article.description}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}