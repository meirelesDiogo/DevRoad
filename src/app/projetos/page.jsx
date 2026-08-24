const platforms = [
  {
    name: "Frontend Mentor",
    description:
      "Desafios práticos baseados em designs reais para você transformar layouts em aplicações funcionais e desenvolver seu portfólio.",
    level: "Iniciante → Avançado",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
    url: "https://www.frontendmentor.io/",
    icon: "💻",
    featured: true,
  },
  {
    name: "freeCodeCamp",
    description:
      "Plataforma gratuita de aprendizado que combina conteúdos, exercícios e projetos para você praticar programação na prática.",
    level: "Iniciante → Avançado",
    technologies: [
      "JavaScript",
      "APIs",
      "Frontend",
      "Backend",
    ],
    url: "https://www.freecodecamp.org/",
    icon: "🚀",
    featured: false,
  },
];

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Cabeçalho */}
        <div className="mb-14 max-w-3xl">
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

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Projetos Práticos
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#8A93A6]">
            Aprender programação não é só assistir aulas. Depois de estudar,
            coloque seus conhecimentos em prática construindo projetos.
          </p>
        </div>

        {/* Aviso */}
        <div className="mb-10 flex gap-4 rounded-xl border border-[#1E2430] bg-[#10141D] p-5">
          <div className="text-xl">
            💡
          </div>

          <div>
            <h2 className="font-semibold">
              Pratique o que você aprendeu
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#8A93A6]">
              O DevRoad seleciona plataformas que oferecem desafios e
              projetos práticos para complementar seus estudos.
            </p>
          </div>
        </div>

        {/* Plataformas */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Plataformas recomendadas
            </h2>

            <p className="mt-2 text-sm text-[#8A93A6]">
              Escolha uma plataforma e comece a construir.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {platforms.map((platform) => (
              <article
                key={platform.name}
                className={`relative flex flex-col rounded-xl border bg-[#10141D] p-6 transition-all duration-200 hover:-translate-y-1 ${
                  platform.featured
                    ? "border-[#2E8BFF]"
                    : "border-[#1E2430]"
                }`}
              >

                {/* Destaque */}
                {platform.featured && (
                  <div className="absolute right-5 top-5 rounded-full border border-[#2E8BFF]/30 bg-[#18243A] px-3 py-1">
                    <span className="text-[11px] font-semibold text-[#2E8BFF]">
                      RECOMENDADO
                    </span>
                  </div>
                )}

                {/* Ícone */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#18243A] text-2xl">
                  {platform.icon}
                </div>

                {/* Nome */}
                <h3 className="text-2xl font-bold">
                  {platform.name}
                </h3>

                {/* Descrição */}
                <p className="mt-3 leading-7 text-[#8A93A6]">
                  {platform.description}
                </p>

                {/* Nível */}
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6478]">
                    Nível
                  </span>

                  <p className="mt-1 text-sm text-[#EDF0F5]">
                    {platform.level}
                  </p>
                </div>

                {/* Tecnologias */}
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6478]">
                    Tecnologias
                  </span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {platform.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[#1E2430] bg-[#0A0D14] px-2.5 py-1 text-xs text-[#8A93A6]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botão */}
                <div className="mt-8">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{
                      background: platform.featured
                        ? "linear-gradient(90deg, #2E8BFF, #7C5CFF)"
                        : "#18243A",
                    }}
                  >
                    Acessar plataforma
                    <span>↗</span>
                  </a>
                </div>

              </article>
            ))}

          </div>
        </section>

        {/* Como usar */}
        <section className="mt-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Como usar os projetos
            </h2>

            <p className="mt-2 text-sm text-[#8A93A6]">
              Uma forma simples de transformar estudo em prática.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
              <div className="mb-4 text-2xl">
                01
              </div>

              <h3 className="font-semibold">
                Estude
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A93A6]">
                Aprenda a tecnologia através do roadmap e das aulas
                disponíveis no DevRoad.
              </p>
            </div>

            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
              <div className="mb-4 text-2xl">
                02
              </div>

              <h3 className="font-semibold">
                Pratique
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A93A6]">
                Escolha um desafio em uma das plataformas recomendadas e
                tente resolver sozinho.
              </p>
            </div>

            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
              <div className="mb-4 text-2xl">
                03
              </div>

              <h3 className="font-semibold">
                Construa
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A93A6]">
                Coloque seus projetos no GitHub e use-os para construir seu
                portfólio.
              </p>
            </div>

          </div>
        </section>

        {/* Observação */}
        <section className="mt-10 rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
          <h2 className="mb-3 font-semibold">
            Sobre as plataformas
          </h2>

          <p className="text-sm leading-6 text-[#8A93A6]">
            As plataformas apresentadas nesta página são serviços externos
            e independentes do DevRoad. O DevRoad não é responsável pelo
            conteúdo, disponibilidade, políticas ou funcionamento desses
            serviços.
          </p>
        </section>

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