export default function ContactPage() {
  
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">

      <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-3xl p-10">
       

        <h1 className="text-5xl font-black">
          Contato
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Entre em contato para parcerias, anúncios ou sugestões.
        </p>

        <form className="mt-10 flex flex-col gap-6">

          <input
            type="text"
            placeholder="Seu nome"
            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none"
          />

          <textarea
            placeholder="Sua mensagem"
            rows={6}
            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none resize-none"
          />

          <button
            className="bg-indigo-600 hover:bg-indigo-500 transition py-4 rounded-2xl font-semibold"
          >
            Enviar mensagem
          </button>

        </form>

      </div>

    </main>
  )
}