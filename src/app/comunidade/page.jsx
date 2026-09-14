import Link from "next/link";

/**
 * Comunidade — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/comunidade/page.jsx
 *
 * OBS: o layout.jsx já renderiza a <OpenSourceSection /> em toda
 * página (código aberto + terminal de git clone). Esta página foca
 * especificamente na comunidade (Discord), sem repetir aquele conteúdo.
 */

export const metadata = {
  title: "Comunidade - DevRoad",
  description: "Faça parte da comunidade DevRoad no Discord e no GitHub.",
};

const STEPS = [
  {
    title: "Entre no servidor",
    description:
      "Clique no convite do Discord abaixo — é gratuito e leva menos de 1 minuto.",
  },
  {
    title: "Leia as regras e se apresente",
    description:
      "Conte um pouco sobre você em #apresente-se — nível, linguagem, objetivo.",
  },
  {
    title: "Escolha suas linguagens",
    description:
      "Em #roles, marque as linguagens que você estuda e desbloqueie os canais de ajuda certos.",
  },
  {
    title: "Participe",
    description:
      "Tire dúvidas, ajude quem tá começando, e mostre seu progresso em #mostrando-progresso.",
  },
];

export default function Comunidade() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10 blur-[120px]"
        style={{
          background: "linear-gradient(90deg, var(--blue), var(--purple))",
        }}
      />

      {/* Cabeçalho */}
      <section className="relative mx-auto max-w-[700px] px-6 pb-14 pt-24 text-center lg:pt-32">
        <p
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
        >
          Comunidade
        </p>

        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
        >
          Você não aprende{" "}
          <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
            sozinho
          </span>
        </h1>

        <p className="mx-auto max-w-md text-lg leading-relaxed text-[var(--muted)]">
          Tire dúvidas, mostre seu progresso e ajude outros devs iniciantes —
          tudo no nosso servidor do Discord.
        </p>

        <div className="road-rule--brand road-rule mx-auto mt-8 w-40" />
      </section>

      {/* Cards de CTA */}
      <section className="relative mx-auto max-w-[900px] px-6 pb-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Discord */}
          <div
            className="flex flex-col rounded-2xl border p-7"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ backgroundColor: "#5865F2" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path d="M20.3 5.3A18 18 0 0015.6 4l-.24.48a13 13 0 013.9 1.6 15 15 0 00-14.5 0 13 13 0 013.9-1.6L8.4 4a18 18 0 00-4.7 1.3C1.2 9.7.6 14 .8 18.2a18 18 0 005.5 2.8l1.1-1.8a11 11 0 01-1.8-.9l.4-.3a13 13 0 0011.9 0l.4.3a11 11 0 01-1.8.9l1.1 1.8a18 18 0 005.5-2.8c.3-4.9-.6-9.1-3.2-12.9zM8.6 15.6c-1 0-1.9-1-1.9-2.2 0-1.2.8-2.2 1.9-2.2s1.9 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2zm6.8 0c-1 0-1.9-1-1.9-2.2 0-1.2.8-2.2 1.9-2.2s1.9 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2z" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "var(--text)",
              }}
              className="mb-2 text-lg font-bold"
            >
              Discord
            </h2>
            <p
              style={{ color: "var(--muted)" }}
              className="mb-6 flex-1 text-sm leading-relaxed"
            >
              Canais de ajuda por linguagem, papo geral e gente pronta pra te
              ajudar a destravar.
            </p>
            <Link
              href="https://discord.com/invite/qjjZC6S5Th"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#5865F2", color: "#fff" }}
              className="flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-px"
            >
              Entrar no Discord
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* GitHub */}
          <div
            className="flex flex-col rounded-2xl border p-7"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ backgroundColor: "var(--text)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--surface)"
              >
                <path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "var(--text)",
              }}
              className="mb-2 text-lg font-bold"
            >
              GitHub
            </h2>
            <p
              style={{ color: "var(--muted)" }}
              className="mb-6 flex-1 text-sm leading-relaxed"
            >
              O código do DevRoad é 100% aberto. Veja o que estamos construindo
              ou contribua você também.
            </p>
            <Link
              href="https://github.com/meirelesDiogo/DevRoad"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
              className="flex items-center justify-center gap-1.5 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
            >
              Ver repositório
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Como participar */}
      <section
        className="relative border-t"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-[780px] px-6 py-20">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "var(--text)",
            }}
            className="mb-10 text-center text-2xl font-bold"
          >
            Como participar
          </h2>

          <div className="flex flex-col gap-5">
            {STEPS.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--blue), var(--purple))",
                  }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                >
                  {index + 1}
                </span>
                <div>
                  <h3
                    style={{ color: "var(--text)" }}
                    className="mb-1 font-semibold"
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{ color: "var(--muted)" }}
                    className="text-sm leading-relaxed"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link pra FAQ */}
      <section className="relative mx-auto max-w-[700px] px-6 py-20 text-center">
        <p style={{ color: "var(--muted)" }} className="text-sm">
          Tem dúvidas antes de entrar?{" "}
          <Link
            href="/faq"
            style={{ color: "var(--blue)" }}
            className="font-semibold hover:underline"
          >
            Veja nossa FAQ
          </Link>
        </p>
      </section>
    </main>
  );
}
