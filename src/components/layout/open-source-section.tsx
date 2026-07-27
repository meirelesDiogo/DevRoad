/**
 * Seção "Open Source" — DevRoad
 * -------------------------------------------------------------
 * Pode ser colada dentro do mesmo page.tsx (logo depois da seção
 * de cards de linguagem) ou extraída pra um componente próprio,
 * ex: src/components/sections/open-source.tsx
 *
 * Observação: troquei o <h1> por <h2> — sua página já tem um <h1>
 * no Hero, e ter dois <h1> na mesma página prejudica acessibilidade
 * e SEO (cada página deve ter só um <h1>).
 */

export function OpenSourceSection() {
  return (
    <section className="relative border-t" style={{ borderColor: "var(--border)" }}>
      {/* estrada tracejada no topo, mesma assinatura visual do resto do site */}
      <div className="road-rule--brand road-rule" />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
        {/* Coluna de texto */}
        <div>
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
          >
            Código aberto, para sempre
          </p>

          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="mb-5 text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl"
          >
            O DevRoad é um sistema{" "}
            <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
              open-source
            </span>{" "}
            desenvolvido para ajudar desenvolvedores nos seus estudos.
          </h2>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-[var(--muted)]">
            Acompanhe o desenvolvimento, sugira melhorias ou contribua com código.
            Todo o projeto é público — construído por devs, para devs.
          </p>

          {/* destaques rápidos */}
          <ul className="mb-9 flex flex-col gap-3">
            {[
              "Código-fonte 100% aberto no GitHub",
              "Aceita contribuições e sugestões da comunidade",
              "Roadmap de novas funcionalidades público",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/meirelesDiogo/DevRoad"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))", color: "#08090C" }}
              className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-px"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" />
              </svg>
              Ver no GitHub
            </a>

            <a
              href="https://github.com/meirelesDiogo/DevRoad/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text)", borderColor: "var(--border)" }}
              className="rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
            >
              Guia de contribuição
            </a>
          </div>
        </div>

        {/* Coluna visual — mockup estilo terminal, reforça a identidade "dev" */}
        <div className="group relative">
          {/* glow — mesma animação do AnimatedGlowingSearchBar: gradiente desfocado
              que intensifica a opacidade no hover do card */}
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#2E8BFF] via-[#7C5CFF] to-[#2E8BFF] opacity-30 blur-md transition-all duration-500 group-hover:opacity-70" />

          <div
            className="relative overflow-hidden rounded-xl border shadow-2xl"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            {/* barra de título estilo editor de código */}
            <div
              className="flex items-center gap-2 border-b px-4 py-3"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FF5F56" }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#27C93F" }} />
              <span
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted)" }}
                className="ml-2 text-xs"
              >
                terminal
              </span>
            </div>

            {/* conteúdo do "terminal" */}
            <div style={{ fontFamily: "'JetBrains Mono', monospace" }} className="space-y-2 p-6 text-sm">
              <p>
                <span style={{ color: "var(--muted-2)" }}>$</span>{" "}
                <span style={{ color: "var(--text)" }}>git clone</span>{" "}
                <span style={{ color: "var(--blue)" }}>github.com/meirelesDiogo/DevRoad</span>
              </p>
              <p>
                <span style={{ color: "var(--muted-2)" }}>$</span>{" "}
                <span style={{ color: "var(--text)" }}>npm install</span>
              </p>
              <p>
                <span style={{ color: "var(--muted-2)" }}>$</span>{" "}
                <span style={{ color: "var(--text)" }}>npm run dev</span>
              </p>
              <p style={{ color: "var(--purple)" }}>✓ pronto para contribuir.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenSourceSection;