import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="border-t border-white/10 bg-[#050816] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-black">
              AI Turbo Hub
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Portal moderno sobre inteligência artificial,
              automações, produtividade e ferramentas virais.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h4 className="text-white font-semibold mb-6">
              Navegação
            </h4>

            <div className="flex flex-col gap-4 text-gray-400">

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

            </div>

          </div>

          {/* CATEGORIES */}
          <div>

            <h4 className="text-white font-semibold mb-6">
              Categorias
            </h4>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link href="/category/produtividade">
                IA para Produtividade
              </Link>

              <Link href="/category/imagens">
                IA para Imagens
              </Link>

              <Link href="/category/automacao">
                IA para Automação
              </Link>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h4 className="text-white font-semibold mb-6">
              Newsletter
            </h4>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white outline-none"
              />

              <button className="bg-indigo-600 hover:bg-indigo-500 transition rounded-2xl py-3 font-semibold">
                Entrar
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 AI Turbo Hub. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">

            <Link href="#">
              Privacidade
            </Link>

            <Link href="#">
              Termos
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}