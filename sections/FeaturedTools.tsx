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
    <section
      id="tools"
      className="py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>

            <span className="text-indigo-400 font-medium">
              FERRAMENTAS EM ALTA
            </span>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              As IAs mais acessadas do momento
            </h2>

            <p className="text-gray-400 mt-6 text-lg max-w-2xl leading-relaxed">
              Ferramentas virais que estão crescendo absurdamente em 2026.
            </p>

          </div>

          {/* BOTÃO FUNCIONAL */}
          <a
            href="/tools"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl text-white font-semibold w-fit"
          >
            Ver todas
          </a>

        </div>

        {/* SEARCH */}
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {/* EMPTY STATE */}
        {filteredTools.length === 0 && (

          <div className="mt-16 text-center">

            <h3 className="text-2xl font-bold text-white">
              Nenhuma ferramenta encontrada.
            </h3>

            <p className="text-gray-400 mt-4">
              Tente pesquisar outro nome.
            </p>

          </div>

        )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

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