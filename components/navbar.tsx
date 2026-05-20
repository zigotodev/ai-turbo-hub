'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl md:text-4xl font-black text-white"
        >
          AI Turbo Hub
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-white">

          <Link
            href="/"
            className="hover:text-indigo-400 transition"
          >
            Home
          </Link>

          <Link
            href="/tools"
            className="hover:text-indigo-400 transition"
          >
            Ferramentas
          </Link>

          <Link
            href="/blog"
            className="hover:text-indigo-400 transition"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="hover:text-indigo-400 transition"
          >
            Contato
          </Link>

        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="/tools"
          className="hidden md:flex bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl text-white font-semibold"
        >
          Explorar
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >

          <span className="w-7 h-[3px] bg-white rounded-full" />
          <span className="w-7 h-[3px] bg-white rounded-full" />
          <span className="w-7 h-[3px] bg-white rounded-full" />

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden border-t border-white/10 bg-[#050816] px-6 py-8 flex flex-col gap-6">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg"
          >
            Home
          </Link>

          <Link
            href="/tools"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg"
          >
            Ferramentas
          </Link>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg"
          >
            Contato
          </Link>

          <Link
            href="/tools"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 text-center py-4 rounded-2xl text-white font-semibold mt-4"
          >
            Explorar
          </Link>

        </div>

      )}

    </header>
  )
}