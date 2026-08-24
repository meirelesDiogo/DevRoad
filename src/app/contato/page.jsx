export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Cabeçalho */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-1 w-12 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              }}
            />

            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
              DevRoad
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Entre em contato
          </h1>

          <p className="max-w-2xl text-[#8A93A6]">
            Tem alguma dúvida, sugestão ou encontrou algum problema no
            DevRoad? Entre em contato comigo pelos canais abaixo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* E-mail */}
          <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6 transition-colors hover:border-[#2E8BFF]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#18243A] text-[#2E8BFF]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M22 7L12 13L2 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="mb-2 text-xl font-semibold">
              E-mail
            </h2>

            <p className="mb-5 text-sm leading-6 text-[#8A93A6]">
              Para dúvidas, sugestões, feedbacks ou assuntos relacionados
              ao projeto.
            </p>

            <a
              href="mailto:meirelesdiogo.dev@gmail.com"
              className="break-all text-sm font-medium text-[#2E8BFF] transition-colors hover:text-[#7C5CFF]"
            >
              meirelesdiogo.dev@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6 transition-colors hover:border-[#7C5CFF]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#211C35] text-[#7C5CFF]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" />
              </svg>
            </div>

            <h2 className="mb-2 text-xl font-semibold">
              GitHub
            </h2>

            <p className="mb-5 text-sm leading-6 text-[#8A93A6]">
              O DevRoad é um projeto open source. Você pode acompanhar o
              desenvolvimento, sugerir melhorias ou contribuir.
            </p>

            <a
              href="https://github.com/MeirelesDiogo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#7C5CFF] transition-colors hover:text-[#2E8BFF]"
            >
              github.com/MeirelesDiogo ↗
            </a>
          </div>

        </div>

        {/* Seção de assuntos */}
        <section className="mt-10 rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Como posso ajudar?
          </h2>

          <p className="mb-5 leading-7 text-[#8A93A6]">
            Você pode entrar em contato para assuntos relacionados ao
            desenvolvimento e funcionamento do DevRoad.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-lg border border-[#1E2430] p-4">
              <h3 className="mb-2 font-semibold text-[#EDF0F5]">
                💡 Sugestões
              </h3>

              <p className="text-sm leading-6 text-[#8A93A6]">
                Tem uma ideia para melhorar a plataforma ou adicionar uma
                nova funcionalidade?
              </p>
            </div>

            <div className="rounded-lg border border-[#1E2430] p-4">
              <h3 className="mb-2 font-semibold text-[#EDF0F5]">
                🐛 Problemas
              </h3>

              <p className="text-sm leading-6 text-[#8A93A6]">
                Encontrou um erro ou alguma funcionalidade que não está
                funcionando corretamente?
              </p>
            </div>

            <div className="rounded-lg border border-[#1E2430] p-4">
              <h3 className="mb-2 font-semibold text-[#EDF0F5]">
                📚 Conteúdo
              </h3>

              <p className="text-sm leading-6 text-[#8A93A6]">
                Quer sugerir uma aula, tecnologia, exercício ou projeto para
                o DevRoad?
              </p>
            </div>

            <div className="rounded-lg border border-[#1E2430] p-4">
              <h3 className="mb-2 font-semibold text-[#EDF0F5]">
                🤝 Contribuição
              </h3>

              <p className="text-sm leading-6 text-[#8A93A6]">
                Quer contribuir com o desenvolvimento do projeto open source?
              </p>
            </div>

          </div>
        </section>

        {/* E-mail principal */}
        <div className="mt-10 rounded-xl border border-[#1E2430] bg-[#10141D] p-8 text-center">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
            Fale comigo
          </p>

          <h2 className="mb-3 text-2xl font-semibold">
            Tem alguma coisa para dizer?
          </h2>

          <p className="mx-auto mb-6 max-w-xl text-sm leading-6 text-[#8A93A6]">
            Estou aberto a sugestões, feedbacks e ideias que possam ajudar
            o DevRoad a evoluir.
          </p>

          <a
            href="mailto:meirelesdiogo.dev@gmail.com"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
            }}
          >
            Enviar e-mail
          </a>
        </div>

        {/* Rodapé */}
        <div className="mt-16 border-t border-[#1E2430] pt-8">
          <div className="flex flex-col gap-2 text-sm text-[#5C6478] sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} DevRoad
            </span>

            <span>
              Aprenda · Pratique · Evolua
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}