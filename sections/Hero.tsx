'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {

  return (
    <section className="relative pt-40 pb-32 bg-[#050816] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="text-indigo-400 font-medium tracking-widest">
            IA TRENDING 2026
          </span>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-6">

            Descubra as ferramentas de IA mais virais da internet

          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-2xl">

            Explore inteligências artificiais para produtividade,
            automação, marketing, vídeos e criação de conteúdo.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

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

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >

          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt="AI"
            className="relative rounded-[32px] border border-white/10 shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  )
}