'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-40 pb-24 bg-[#050816] text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <span className="text-indigo-400 font-medium">
            IA TRENDING 2026
          </span>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-6">
            Descubra as ferramentas de IA mais virais da internet
          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            Explore inteligências artificiais para produtividade,
            automação, vídeos, marketing e criação de conteúdo.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              href="/tools"
              className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Explorar
            </Link>

            <Link
              href="/blog"
              className="border border-white/10 hover:bg-white/5 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Ranking
            </Link>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt="AI Tools"
            className="rounded-[32px] border border-white/10"
          />

        </div>

      </div>

    </section>
  )
}