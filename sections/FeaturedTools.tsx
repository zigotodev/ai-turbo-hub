'use client'

import { useState } from 'react'

import ToolCard from '@/components/ToolCard'
import SearchBar from '@/components/SearchBar'

import { tools } from '@/data/tools'

export default function FeaturedTools() {

  const [search, setSearch] = useState('')

  const filteredTools = tools.filter((tool) =>
    tool.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <span className="text-indigo-400 font-medium">
            FERRAMENTAS EM ALTA
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            As IAs mais acessadas do momento
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl">
            Ferramentas virais que estão crescendo absurdamente em 2026.
          </p>

        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.name}
              description={tool.description}
              image={tool.image}
              category={tool.category}
              slug={tool.slug}
            />
          ))}

        </div>

      </div>

    </section>
  )
}