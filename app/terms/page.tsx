import BackHome from '@/components/BackHome'
export default function TermsPage() {
  

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-32">

      <div className="max-w-4xl mx-auto">

        <BackHome />

        <h1 className="text-5xl font-bold mb-10">
          Termos de Uso
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">

          <p>
            Ao acessar este site, você concorda com os
            termos e condições descritos nesta página.
          </p>

          <p>
            O AI Turbo Hub fornece conteúdos relacionados
            à inteligência artificial, ferramentas digitais
            e tendências tecnológicas.
          </p>

          <p>
            Não garantimos resultados financeiros,
            profissionais ou comerciais com o uso
            das ferramentas apresentadas.
          </p>

          <p>
            Links externos podem direcionar para
            plataformas de terceiros, pelas quais
            não nos responsabilizamos.
          </p>

          <p>
            Estes termos podem ser alterados
            a qualquer momento sem aviso prévio.
          </p>

        </div>

      </div>

    </main>
  )
}