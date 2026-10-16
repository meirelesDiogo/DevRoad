import Link from "next/link";

export default function RoadmapLayout({
  titulo,
  descricao,
  categoria,
  icone,
  iconeAlt,
  logoTexto,
  roadmap,
  isAuthenticated,
  moduleBase,
  lessonSuffix = "",
  projeto,
}) {
  const totalAulas = roadmap.reduce(
    (total, etapa) => total + etapa.aulas.length,
    0
  );

  const primeiroModulo = roadmap[0];
  const primeiroNumero = String(primeiroModulo?.etapa || "01").padStart(
    2,
    "0"
  );

  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Voltar */}
        <Link
          href="/roadmaps"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#8A93A6] transition hover:text-[#A9ACF0]"
        >
          ← Voltar aos roadmaps
        </Link>

        {/* Cabeçalho */}
        <section className="relative mb-10 overflow-hidden rounded-3xl border border-[#1E2430] bg-[#10141D] p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#777BB4]/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#777BB4]/30 bg-[#777BB4]/10">
                {icone ? (
                  <img
                    src={icone}
                    alt={iconeAlt || titulo}
                    className="h-10 w-10 object-contain"
                  />
                ) : (
                  <span className="text-2xl font-black text-[#A9ACF0]">
                    {logoTexto || titulo}
                  </span>
                )}
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9ACF0]">
                  {categoria || "Roadmap de tecnologia"}
                </span>

                <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
                  {titulo}
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-[#8A93A6] sm:text-base">
              {descricao}
            </p>

            {/* Estatísticas */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold">{roadmap.length}</p>
                <p className="text-xs text-[#8A93A6]">Etapas</p>
              </div>

              <div>
                <p className="text-2xl font-bold">{totalAulas}</p>
                <p className="text-xs text-[#8A93A6]">Aulas</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Iniciante</p>
                <p className="text-xs text-[#8A93A6]">Nível inicial</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Avançado</p>
                <p className="text-xs text-[#8A93A6]">Nível final</p>
              </div>
            </div>

            {primeiroModulo && (
              <Link
                href={
                  isAuthenticated
                    ? `${moduleBase}/${primeiroNumero}${lessonSuffix}`
                    : "/login"
                }
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#777BB4] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#65699E]"
              >
                {isAuthenticated ? "Começar a aprender" : "Entrar para começar"}
                <span>→</span>
              </Link>
            )}

            {!isAuthenticated && (
              <p className="mt-4 text-xs text-[#8A93A6]">
                Faça login para acompanhar seu progresso durante o roadmap.
              </p>
            )}
          </div>
        </section>

        {/* Título dos módulos */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A9ACF0]">
              Sua jornada
            </span>

            <h2 className="mt-2 text-2xl font-bold">
              Conteúdo da trilha
            </h2>

            <p className="mt-2 text-sm text-[#8A93A6]">
              Avance pelos módulos e desenvolva suas habilidades
              progressivamente.
            </p>
          </div>

          {/* Lista de módulos */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {roadmap.map((etapa) => {
              const numero = String(etapa.etapa).padStart(2, "0");

              return (
                <article
                  key={etapa.etapa}
                  className="group rounded-2xl border border-[#1E2430] bg-[#10141D] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#777BB4]/50 hover:bg-[#121824]"
                >
                  <div className="flex items-start gap-4">
                    {/* Número do módulo */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#777BB4]/20 bg-[#777BB4]/10 text-sm font-bold text-[#A9ACF0]">
                      {numero}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#A9ACF0]">
                          Módulo {numero}
                        </span>

                        <span className="rounded-full border border-[#1E2430] bg-[#0A0D14] px-2 py-1 text-[10px] text-[#8A93A6]">
                          {etapa.aulas.length} aulas
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#EDF0F5] transition group-hover:text-[#A9ACF0]">
                        {etapa.titulo}
                      </h3>

                      {etapa.descricao && (
                        <p className="mt-2 text-sm leading-relaxed text-[#8A93A6]">
                          {etapa.descricao}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Prévia das aulas */}
                  <div className="mt-5 border-t border-[#1E2430] pt-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#8A93A6]">
                      Conteúdo do módulo
                    </p>

                    <div className="space-y-2">
                      {etapa.aulas.slice(0, 3).map((aula, index) => (
                        <div
                          key={`${etapa.etapa}-${aula}`}
                          className="flex items-center gap-3 text-sm text-[#C1C8D5]"
                        >
                          <span className="text-xs text-[#777BB4]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="truncate">{aula}</span>
                        </div>
                      ))}

                      {etapa.aulas.length > 3 && (
                        <p className="pl-7 text-xs text-[#8A93A6]">
                          + {etapa.aulas.length - 3} aulas
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Botão */}
                  <Link
                    href={
                      isAuthenticated
                        ? `${moduleBase}/${numero}${lessonSuffix}`
                        : "/login"
                    }
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#777BB4]/30 bg-[#777BB4]/10 px-4 py-3 text-sm font-semibold text-[#A9ACF0] transition hover:border-[#777BB4] hover:bg-[#777BB4] hover:text-white"
                  >
                    {isAuthenticated ? "Acessar módulo" : "Entrar para começar"}
                    <span>→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* Projeto final */}
        {projeto && (
          <section className="mt-12">
            <div className="relative overflow-hidden rounded-3xl border border-[#1E2430] bg-[#10141D] p-6 sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#777BB4]/10 blur-3xl" />

              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A9ACF0]">
                  Projeto final
                </span>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {projeto.titulo}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#8A93A6]">
                  {projeto.descricao}
                </p>

                <Link
                  href={isAuthenticated ? projeto.href : "/login"}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#777BB4] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#65699E]"
                >
                  {isAuthenticated ? "Ver projeto final" : "Entrar para começar"}
                  <span>→</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Rodapé */}
        <footer className="mt-12 border-t border-[#1E2430] pt-6 text-center">
          <p className="text-xs text-[#8A93A6]">
            DevRoad · Aprenda · Pratique · Evolua
          </p>
        </footer>
      </div>
    </main>
  );
}