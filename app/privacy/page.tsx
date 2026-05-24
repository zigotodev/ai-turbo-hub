import BackHome from '@/components/BackHome'
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-32">

      <div className="max-w-4xl mx-auto">
        <BackHome />

        <h1 className="text-5xl font-bold mb-10">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">

          <p>
            Este site pode coletar informações
            anônimas de navegação através de cookies,
            analytics e tecnologias semelhantes.
          </p>

          <p>
            Utilizamos ferramentas como Google Analytics
            para entender melhor o comportamento
            dos visitantes.
          </p>

          <p>
            Algumas plataformas parceiras podem utilizar
            cookies para personalização de anúncios
            e métricas.
          </p>

          <p>
            Nenhuma informação pessoal é vendida
            ou compartilhada indevidamente.
          </p>

        </div>

      </div>

    </main>
  )
}