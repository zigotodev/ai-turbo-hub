import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles = {
  '5-ferramentas-ia-2026': {
    title: '5 Ferramentas de IA Que Estão Fazendo Sucesso em 2026',
  },
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20">

      <div className="max-w-5xl mx-auto px-6 py-20">

        <span className="inline-block bg-indigo-500/20 text-indigo-300 text-sm font-semibold px-5 py-2 rounded-full mb-8">
          INTELIGÊNCIA ARTIFICIAL
        </span>

        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          5 Ferramentas de IA Que Estão Fazendo Sucesso em 2026
        </h1>

        <p className="text-gray-300 text-xl leading-10 mt-10 max-w-4xl">
          A inteligência artificial se tornou parte do dia a dia de milhões de pessoas.
          Em 2026, algumas ferramentas estão dominando a internet e sendo usadas para
          criar conteúdo, automatizar tarefas e até gerar renda extra.
        </p>

        <p className="text-gray-400 text-lg leading-9 mt-8 max-w-4xl">
          Empresas, estudantes, designers, programadores e criadores de conteúdo
          utilizam essas plataformas diariamente para ganhar produtividade,
          economizar tempo e melhorar resultados.
        </p>

        <div className="flex items-center gap-6 text-gray-500 border-b border-white/10 pb-10 mt-10 mb-16">
          <span>17 de Maio de 2026</span>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>

        {/* CHATGPT */}

        <section className="border-b border-white/10 pb-16 mb-16">

          <h2 className="text-4xl font-bold mb-10">
            1. ChatGPT
          </h2>

          <div className="grid md:grid-cols-[160px_1fr] gap-12 items-start">

            <Link
              href="https://chat.openai.com"
              target="_blank"
            >
              <img
                src="/images/chatgpt.png"
                alt="ChatGPT"
                className="w-[130px] h-[130px] bg-white rounded-3xl p-5 object-contain hover:scale-105 transition duration-300"
              />
            </Link>

            <div>

              <p className="text-gray-300 text-lg leading-9 mb-8">
                O OpenAI ChatGPT continua sendo uma das ferramentas mais populares do mundo.
                A plataforma revolucionou a forma como pessoas trabalham, estudam,
                pesquisam e criam conteúdo na internet.
              </p>

              <p className="text-gray-400 text-lg leading-9 mb-8">
                Em 2026, milhões de usuários utilizam o ChatGPT diariamente para
                automatizar tarefas, gerar ideias, criar artigos, melhorar produtividade
                e até construir negócios online.
              </p>

              <h3 className="text-2xl font-bold mb-6">
                Ele é usado para:
              </h3>

              <div className="grid md:grid-cols-2 gap-5 text-lg text-gray-300">

                <div>✓ Criar textos</div>
                <div>✓ Gerar ideias</div>
                <div>✓ Responder perguntas</div>
                <div>✓ Resumir conteúdos</div>
                <div>✓ Auxiliar estudos</div>
                <div>✓ Programar</div>

              </div>

              <p className="text-gray-400 text-lg leading-9 mt-10">
                Muitos usuários também utilizam a ferramenta para marketing digital,
                produtividade, atendimento automatizado e geração de renda online.
              </p>

            </div>

          </div>

        </section>

        {/* GEMINI */}

        <section className="border-b border-white/10 pb-16 mb-16">

          <h2 className="text-4xl font-bold mb-10">
            2. Gemini
          </h2>

          <div className="grid md:grid-cols-[160px_1fr] gap-12 items-start">

            <Link
              href="https://gemini.google.com"
              target="_blank"
            >
              <img
                src="/images/gemini.png"
                alt="Gemini"
                className="w-[130px] h-[130px] bg-white rounded-3xl p-5 object-contain hover:scale-105 transition duration-300"
              />
            </Link>

            <div>

              <p className="text-gray-300 text-lg leading-9 mb-8">
                O Google Gemini evoluiu bastante e vem sendo integrado aos serviços
                do Google, aumentando ainda mais sua popularidade.
              </p>

              <p className="text-gray-400 text-lg leading-9 mb-8">
                A inteligência artificial do Google está sendo utilizada para pesquisas,
                produtividade, estudos e criação de conteúdo.
              </p>

              <h3 className="text-2xl font-bold mb-6">
                A ferramenta consegue:
              </h3>

              <div className="grid md:grid-cols-2 gap-5 text-lg text-gray-300">

                <div>✓ Responder perguntas</div>
                <div>✓ Criar conteúdos</div>
                <div>✓ Analisar documentos</div>
                <div>✓ Ajudar em pesquisas</div>

              </div>

              <p className="text-gray-400 text-lg leading-9 mt-10">
                Ela também ganhou espaço entre estudantes, empresas
                e criadores de conteúdo que utilizam os serviços do Google.
              </p>

            </div>

          </div>

        </section>

        {/* CANVA */}

        <section className="border-b border-white/10 pb-16 mb-16">

          <h2 className="text-4xl font-bold mb-10">
            3. Canva AI
          </h2>

          <div className="grid md:grid-cols-[160px_1fr] gap-12 items-start">

            <Link
              href="https://www.canva.com"
              target="_blank"
            >
              <img
                src="/images/canva.png"
                alt="Canva"
                className="w-[130px] h-[130px] bg-white rounded-3xl p-5 object-contain hover:scale-105 transition duration-300"
              />
            </Link>

            <div>

              <p className="text-gray-300 text-lg leading-9 mb-8">
                O Canva adicionou diversos recursos de inteligência artificial
                em sua plataforma, facilitando a criação de conteúdo visual.
              </p>

              <p className="text-gray-400 text-lg leading-9 mb-8">
                Atualmente, a ferramenta é uma das mais usadas por criadores de conteúdo,
                empresas e profissionais de marketing digital.
              </p>

              <h3 className="text-2xl font-bold mb-6">
                Hoje é possível:
              </h3>

              <div className="grid md:grid-cols-2 gap-5 text-lg text-gray-300">

                <div>✓ Gerar imagens</div>
                <div>✓ Criar posts</div>
                <div>✓ Editar vídeos</div>
                <div>✓ Remover fundos</div>
                <div>✓ Criar apresentações automaticamente</div>

              </div>

              <p className="text-gray-400 text-lg leading-9 mt-10">
                Isso facilitou muito a produção de conteúdo para redes sociais,
                anúncios e marketing digital.
              </p>

            </div>

          </div>

        </section>

        {/* ADOBE FIREFLY */}

        <section className="border-b border-white/10 pb-16 mb-16">

          <h2 className="text-4xl font-bold mb-10">
            4. Adobe Firefly
          </h2>

          <div className="grid md:grid-cols-[160px_1fr] gap-12 items-start">

            <Link
              href="https://firefly.adobe.com"
              target="_blank"
            >
              <img
                src="/images/firefly.png"
                alt="Adobe Firefly"
                className="w-[130px] h-[130px] bg-white rounded-3xl p-5 object-contain hover:scale-105 transition duration-300"
              />
            </Link>

            <div>

              <p className="text-gray-300 text-lg leading-9 mb-8">
                O Adobe Firefly virou destaque entre designers, criadores
                e profissionais da área criativa.
              </p>

              <p className="text-gray-400 text-lg leading-9 mb-8">
                A ferramenta permite gerar imagens usando comandos de texto
                e acelerar trabalhos criativos com inteligência artificial.
              </p>

              <h3 className="text-2xl font-bold mb-6">
                Muitos profissionais usam a IA para:
              </h3>

              <div className="grid md:grid-cols-2 gap-5 text-lg text-gray-300">

                <div>✓ Criar anúncios</div>
                <div>✓ Produzir banners</div>
                <div>✓ Fazer thumbnails</div>
                <div>✓ Criar artes digitais</div>

              </div>

              <p className="text-gray-400 text-lg leading-9 mt-10">
                A integração com ferramentas da Adobe tornou o Firefly
                uma das plataformas mais fortes do mercado criativo.
              </p>

            </div>

          </div>

        </section>

        {/* NOTION */}

        <section className="pb-16">

          <h2 className="text-4xl font-bold mb-10">
            5. Notion AI
          </h2>

          <div className="grid md:grid-cols-[160px_1fr] gap-12 items-start">

            <Link
              href="https://www.notion.so/product/ai"
              target="_blank"
            >
              <img
                src="/images/notion.png"
                alt="Notion AI"
                className="w-[130px] h-[130px] bg-white rounded-3xl p-5 object-contain hover:scale-105 transition duration-300"
              />
            </Link>

            <div>

              <p className="text-gray-300 text-lg leading-9 mb-8">
                O Notion AI vem crescendo bastante na área de produtividade
                e organização de tarefas.
              </p>

              <p className="text-gray-400 text-lg leading-9 mb-8">
                Empresas, estudantes e profissionais utilizam a plataforma
                diariamente para otimizar rotinas e melhorar organização.
              </p>

              <h3 className="text-2xl font-bold mb-6">
                Ele ajuda usuários a:
              </h3>

              <div className="grid md:grid-cols-2 gap-5 text-lg text-gray-300">

                <div>✓ Organizar tarefas</div>
                <div>✓ Resumir textos</div>
                <div>✓ Criar planejamentos</div>
                <div>✓ Gerar conteúdos automaticamente</div>

              </div>

              <p className="text-gray-400 text-lg leading-9 mt-10">
                A tendência é que ferramentas focadas em produtividade
                continuem crescendo fortemente nos próximos anos.
              </p>

            </div>

          </div>

        </section>

        {/* CONCLUSÃO */}

        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Conclusão
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            As ferramentas de inteligência artificial estão transformando
            completamente a forma como as pessoas trabalham,
            estudam e criam conteúdo na internet.
          </p>

          <p className="text-gray-400 text-lg leading-9 mt-8">
            Quem aprender a utilizar essas plataformas agora poderá sair
            na frente nos próximos anos, aproveitando oportunidades
            em produtividade, automação, criação de conteúdo e geração de renda online.
          </p>

        </div>

      </div>

    </main>
  )
}