'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#050816]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-black text-white"
        >
          AI Turbo Hub
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10">

          <Link
            href="/"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/tools"
            className="text-gray-300 hover:text-white transition"
          >
            Ferramentas
          </Link>

          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contato
          </Link>

        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="/tools"
          className="hidden md:flex bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-2xl text-white font-semibold"
        >
          Explorar
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden border-t border-white/10 bg-[#050816]">

          <div className="flex flex-col p-6 gap-6">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              href="/tools"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Ferramentas
            </Link>

            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Blog
            </Link>

             <Link
            href="/about"
            className="hover:text-white transition"
          >
            Sobre
          </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Contato
            </Link>

            <Link
              href="/tools"
              onClick={() => setMenuOpen(false)}
              className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-4 rounded-2xl text-white font-semibold text-center"
            >
              Explorar
            </Link>

          </div>

        </div>

      )}

    </header>
  )
}