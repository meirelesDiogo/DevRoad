export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Cabeçalho */}
        <section className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-1 w-12 rounded-full"
              style={{
                background: "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              }}
            />

            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
              Sobre o DevRoad
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Aprenda. Pratique. Evolua.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#8A93A6]">
            O DevRoad é uma plataforma gratuita criada para ajudar pessoas
            que estão aprendendo programação a encontrar um caminho mais
            organizado para seus estudos, reunindo conteúdos e recursos
            em um só lugar.
          </p>
        </section>

        {/* O que é */}
        <section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#7C5CFF]">
              O projeto
            </p>

            <h2 className="text-3xl font-bold">
              Um caminho para quem quer evoluir
            </h2>

            <div className="mt-6 space-y-5 text-[#8A93A6]">
              <p className="leading-7">
                Aprender programação pode ser confuso. Existem milhares de
                cursos, vídeos, documentações e tecnologias diferentes, e
                muitas vezes o maior problema não é encontrar conteúdo,
                mas saber{" "}
                <strong className="text-[#EDF0F5]">
                  o que estudar e em qual ordem
                </strong>.
              </p>

              <p className="leading-7">
                O DevRoad surgiu com o objetivo de simplificar essa jornada,
                organizando o aprendizado por meio de roadmaps, aulas,
                exercícios e projetos práticos.
              </p>

              <p className="leading-7">
                A primeira versão da plataforma já foi desenvolvida,
                estabelecendo a base para uma experiência de aprendizado
                mais organizada e acessível.
              </p>

              <p className="leading-7">
                Mais do que reunir conteúdos, a proposta é ajudar o estudante
                a transformar conhecimento em prática e avançar no próprio
                ritmo.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#18243A]">
              <span
                className="text-2xl font-bold"
                style={{
                  background: "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DR
              </span>
            </div>

            <h3 className="text-xl font-semibold">DevRoad</h3>

            <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
              Uma plataforma gratuita focada em aprendizado organizado,
              desenvolvimento de software e prática constante.
            </p>

            <div className="mt-6 border-t border-[#1E2430] pt-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-[#8A93A6]">
                  Status do projeto
                </span>

                <span className="rounded-full border border-[#2E8BFF]/30 bg-[#18243A] px-3 py-1 text-xs font-semibold text-[#2E8BFF]">
                  Versão 1.0 concluída
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
              Como funciona
            </p>

            <h2 className="text-3xl font-bold">
              Do primeiro passo à prática
            </h2>

            <p className="mt-3 max-w-2xl text-[#8A93A6]">
              O DevRoad organiza os estudos em diferentes etapas para
              facilitar a evolução do estudante, desde os primeiros
              conceitos até a criação de projetos.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Roadmaps */}
            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6 transition-transform duration-200 hover:-translate-y-1">
              <span className="font-mono text-sm text-[#2E8BFF]">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold">Roadmaps</h3>

              <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                Saiba quais tecnologias estudar e tenha uma direção
                organizada para sua jornada.
              </p>
            </div>

            {/* Aulas */}
            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6 transition-transform duration-200 hover:-translate-y-1">
              <span className="font-mono text-sm text-[#2E8BFF]">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold">Aulas</h3>

              <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                Acesse conteúdos selecionados e acompanhe cada etapa
                do seu aprendizado.
              </p>
            </div>

            {/* Exercícios */}
            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6 transition-transform duration-200 hover:-translate-y-1">
              <span className="font-mono text-sm text-[#2E8BFF]">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold">Exercícios</h3>

              <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                Reforce os conceitos estudados e desenvolva suas
                habilidades por meio da prática.
              </p>
            </div>

            {/* Projetos */}
            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6 transition-transform duration-200 hover:-translate-y-1">
              <span className="font-mono text-sm text-[#2E8BFF]">
                04
              </span>

              <h3 className="mt-5 text-xl font-semibold">Projetos</h3>

              <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                Coloque seus conhecimentos em prática e desenvolva
                projetos para seu portfólio.
              </p>
            </div>
          </div>
        </section>

        {/* Princípios */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#7C5CFF]">
              Princípios
            </p>

            <h2 className="text-3xl font-bold">
              O que guia o DevRoad
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
              <div className="text-2xl">🎯</div>

              <h3 className="mt-5 text-lg font-semibold">
                Organização
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                Reduzir a confusão de quem não sabe por onde começar
                ou qual deve ser o próximo passo.
              </p>
            </div>

            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
              <div className="text-2xl">🧠</div>

              <h3 className="mt-5 text-lg font-semibold">
                Aprendizado prático
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                Incentivar o estudante a praticar, experimentar e
                construir, não apenas consumir conteúdo.
              </p>
            </div>

            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
              <div className="text-2xl">🌎</div>

              <h3 className="mt-5 text-lg font-semibold">
                Acesso gratuito
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                Disponibilizar recursos gratuitos para quem deseja
                começar ou evoluir na programação.
              </p>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="mt-20 rounded-2xl border border-[#1E2430] bg-[#10141D] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
                Open Source
              </p>

              <h2 className="text-3xl font-bold">
                Construído de forma aberta
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#8A93A6]">
                O DevRoad é um projeto open source. Seu desenvolvimento
                também faz parte da minha própria jornada de aprendizado,
                permitindo aplicar conhecimentos, explorar novas tecnologias
                e compartilhar a evolução do projeto com a comunidade.
              </p>
            </div>

            <a
              href="https://github.com/MeirelesDiogo/DevRoad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              }}
            >
              Ver no GitHub
              <span>↗</span>
            </a>
          </div>
        </section>

        {/* Evolução do projeto */}
        <section className="mt-10 rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#18243A] text-[#2E8BFF]">
              🚀
            </div>

            <div>
              <h2 className="font-semibold">
                A primeira versão está pronta. A evolução continua.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#8A93A6]">
                A versão inicial do DevRoad estabeleceu a estrutura e os
                principais recursos da plataforma. O projeto continuará
                recebendo melhorias, novos conteúdos e funcionalidades
                conforme seu desenvolvimento avança.
              </p>
            </div>
          </div>
        </section>

        {/* Frase final */}
        <section className="py-20 text-center">
          <p
            className="font-mono text-sm font-semibold tracking-wider"
            style={{
              background: "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            APRENDA · PRATIQUE · EVOLUA
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
            Seu próximo passo começa aqui.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#8A93A6]">
            Escolha uma tecnologia, siga o caminho e comece a construir.
          </p>
        </section>

      </div>
    </main>
  );
}