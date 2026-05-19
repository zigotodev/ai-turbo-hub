'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <h1 className="text-3xl font-black text-white">
          AI Turbo Hub
        </h1>

        <nav className="hidden md:flex gap-10 text-gray-300">

          <Link href="/">
  Home
</Link>

<Link href="/tools">
  Ferramentas
</Link>

<Link href="/blog">
  Blog
</Link>

<Link href="/contact">
  Contato
</Link>

        </nav>

        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-2xl text-white font-semibold transition">

          Explorar

        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  )
}