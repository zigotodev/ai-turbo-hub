export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        <div>

          <h3 className="text-2xl font-bold text-white">
            AI Turbo Hub
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Portal premium sobre inteligência artificial, automações e ferramentas virais.
          </p>

        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Navegação
          </h4>

          <div className="flex flex-col gap-3 text-gray-400">
            <a href="#">Home</a>
            <a href="#">Ferramentas</a>
            <a href="#">Blog</a>
            <a href="#">Contato</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Categorias
          </h4>

          <div className="flex flex-col gap-3 text-gray-400">
            <a href="#">IA para Vídeos</a>
            <a href="#">IA para Marketing</a>
            <a href="#">IA para Negócios</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Newsletter
          </h4>

          <div className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Seu e-mail"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
            />

            <button className="bg-indigo-600 hover:bg-indigo-500 transition rounded-xl py-3 text-white">
              Entrar
            </button>

          </div>
        </div>

      </div>

    </footer>
  )
}