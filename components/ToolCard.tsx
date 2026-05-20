'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  image: string
  category: string
  slug: string
}

export default function ToolCard({
  title,
  description,
  image,
  category,
  slug,
}: Props) {

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
    >

      <Link
        href={`/tools/${slug}`}
        className="group relative block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      >

        {/* IMAGE */}
        <div className="overflow-hidden">

          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        {/* GLOW */}
        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition duration-500" />

        {/* CONTENT */}
        <div className="p-8 relative z-10">

          <span className="text-indigo-400 text-sm font-medium tracking-wide">
            {category}
          </span>

          <h3 className="text-3xl font-black text-white mt-4 leading-tight">
            {title}
          </h3>

          <p className="text-gray-400 mt-5 leading-relaxed">
            {description}
          </p>

          {/* BUTTON */}
          <div className="mt-8">

            <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">

              Explorar IA →

            </span>

          </div>

        </div>

      </Link>

    </motion.div>
  )
}