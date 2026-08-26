"use client";

export default function ContribuirPage() {
  const formas = [
    {
      numero: "01",
      titulo: "Contribua com código",
      descricao:
        "Encontrou algo que pode ser melhorado? Você pode contribuir diretamente com o código do DevRoad através do GitHub.",
      acao: "Acessar GitHub",
      href: "https://github.com/meirelesDiogo/DevRoad",
      externo: true,
    },
    {
      numero: "02",
      titulo: "Reporte problemas",
      descricao:
        "Encontrou um bug, link quebrado ou algum comportamento inesperado? Informe o problema para ajudar a melhorar a plataforma.",
      acao: "Reportar um bug",
      href: "/bugs",
      externo: false,
    },
    {
      numero: "03",
      titulo: "Compartilhe ideias",
      descricao:
        "Tem uma sugestão de nova aula, tecnologia, roadmap ou funcionalidade? Sua ideia pode ajudar o DevRoad a evoluir.",
      acao: "Entrar em contato",
      href: "/contato",
      externo: false,
    },
    {
      numero: "04",
      titulo: "Participe da comunidade",
      descricao:
        "Converse com outros desenvolvedores, compartilhe conhecimento e acompanhe o desenvolvimento do projeto.",
      acao: "Entrar no Discord",
      href: "https://discord.gg/qjjZC6S5Th",
      externo: true,
    },
  ];

  const passos = [
    {
      numero: "01",
      titulo: "Faça um Fork",
      descricao:
        "Crie uma cópia do repositório do DevRoad para sua própria conta do GitHub.",
    },
    {
      numero: "02",
      titulo: "Crie sua Branch",
      descricao:
        "Crie uma branch específica para a alteração que você pretende fazer.",
    },
    {
      numero: "03",
      titulo: "Faça as alterações",
      descricao:
        "Implemente sua melhoria, correção ou nova funcionalidade.",
    },
    {
      numero: "04",
      titulo: "Abra um Pull Request",
      descricao:
        "Envie suas alterações para análise e, se estiver tudo certo, elas poderão fazer parte do projeto.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* HEADER */}
        <section className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-1 w-12 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              }}
            />

            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
              Open Source
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contribua com o DevRoad
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#8A93A6]">
            O DevRoad é um projeto open source criado para ajudar pessoas a
            aprender programação através de roadmaps, aulas, exercícios e
            projetos práticos.
          </p>

          <p className="mt-4 text-base leading-7 text-[#8A93A6]">
            O projeto também faz parte da minha jornada de estudos e está em
            constante desenvolvimento. Cada contribuição ajuda o DevRoad a
            evoluir e também torna o projeto melhor para quem está aprendendo.
          </p>
        </section>

        {/* CTA GITHUB */}
        <section className="mt-12 overflow-hidden rounded-2xl border border-[#1E2430] bg-[#10141D]">
          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

              <div className="max-w-2xl">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#7C5CFF]">
                  Repositório
                </span>

                <h2 className="mt-2 text-2xl font-bold">
                  O código está no GitHub
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#8A93A6]">
                  Todo o código do DevRoad está disponível publicamente.
                  Você pode estudar o projeto, sugerir melhorias, abrir
                  issues ou enviar suas próprias contribuições.
                </p>
              </div>

              <a
                href="https://github.com/meirelesDiogo/DevRoad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
                }}
              >
                Ver no GitHub
                <span>↗</span>
              </a>

            </div>
          </div>

          <div
            className="h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
            }}
          />
        </section>

        {/* FORMAS DE CONTRIBUIR */}
        <section className="mt-16">
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
              Como ajudar
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              Existem várias formas de contribuir
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8A93A6]">
              Você não precisa necessariamente programar para contribuir.
              Toda ajuda que melhora o projeto é bem-vinda.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {formas.map((forma) => (
              <div
                key={forma.numero}
                className="group rounded-2xl border border-[#1E2430] bg-[#10141D] p-7 transition-all hover:-translate-y-1 hover:border-[#2E8BFF]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-bold text-[#2E8BFF]">
                    {forma.numero}
                  </span>

                  <span className="text-xl text-[#5C6478] transition-colors group-hover:text-[#7C5CFF]">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {forma.titulo}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#8A93A6]">
                  {forma.descricao}
                </p>

                <a
                  href={forma.href}
                  target={forma.externo ? "_blank" : undefined}
                  rel={
                    forma.externo
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2E8BFF] transition-colors hover:text-[#7C5CFF]"
                >
                  {forma.acao}
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* COMO CONTRIBUIR COM CÓDIGO */}
        <section className="mt-16">
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#7C5CFF]">
              Desenvolvimento
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              Quer contribuir com código?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8A93A6]">
              Se você quiser trabalhar diretamente no código do DevRoad,
              siga o fluxo padrão de contribuição do GitHub.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {passos.map((passo) => (
              <div
                key={passo.numero}
                className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-6"
              >
                <span className="font-mono text-xs font-bold text-[#2E8BFF]">
                  {passo.numero}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {passo.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#8A93A6]">
                  {passo.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section className="mt-16 rounded-2xl border border-[#1E2430] bg-[#10141D] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
                Stack
              </span>

              <h2 className="mt-2 text-2xl font-bold">
                Tecnologias utilizadas
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8A93A6]">
                O DevRoad utiliza tecnologias modernas para construir uma
                plataforma de aprendizado e também serve como projeto
                prático durante minha evolução como desenvolvedor.
              </p>
            </div>

            <div className="flex max-w-md flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "JavaScript",
                "Node.js",
                "PostgreSQL",
                "Prisma",
                "Tailwind CSS",
                "Docker",
                "Git",
                "GitHub",
              ].map((tecnologia) => (
                <span
                  key={tecnologia}
                  className="rounded-lg border border-[#1E2430] bg-[#0A0D14] px-3 py-2 text-xs font-medium text-[#8A93A6]"
                >
                  {tecnologia}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* COMUNIDADE */}
        <section className="mt-16 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-7">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#18243A] text-lg">
              💬
            </div>

            <h3 className="text-xl font-semibold">
              Faça parte da comunidade
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#8A93A6]">
              Entre no Discord para acompanhar o projeto, trocar ideias,
              tirar dúvidas e conversar com outras pessoas interessadas em
              programação.
            </p>

            <a
              href="https://discord.gg/qjjZC6S5Th"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2E8BFF] hover:text-[#7C5CFF]"
            >
              Entrar no Discord
              <span>↗</span>
            </a>
          </div>

          <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-7">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#18243A] text-lg">
              ⭐
            </div>

            <h3 className="text-xl font-semibold">
              Gostou do projeto?
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#8A93A6]">
              Se o DevRoad for útil para você, considere dar uma estrela no
              GitHub. Isso ajuda o projeto a ganhar visibilidade.
            </p>

            <a
              href="https://github.com/meirelesDiogo/DevRoad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2E8BFF] hover:text-[#7C5CFF]"
            >
              Dar uma estrela
              <span>↗</span>
            </a>
          </div>

        </section>

        {/* LICENÇA */}
        <section className="mt-16 border-t border-[#1E2430] pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-semibold">
                DevRoad é open source
              </p>

              <p className="mt-1 text-sm text-[#5C6478]">
                O projeto utiliza a licença MIT.
              </p>
            </div>

            <a
              href="https://github.com/meirelesDiogo/DevRoad/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#2E8BFF] hover:text-[#7C5CFF]"
            >
              Ver licença →
            </a>

          </div>
        </section>

      </div>
    </main>
  );
}