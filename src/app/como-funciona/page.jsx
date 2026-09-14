import Link from "next/link";

/**
 * Como Funciona — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/como-funciona/page.jsx
 * Tema claro, mesmos tokens de src/app/globals.css.
 */

export const metadata = {
  title: "Como Funciona - DevRoad",
  description: "Entenda como o DevRoad funciona: escolha sua linguagem, siga o roadmap e acompanhe seu progresso.",
};

const STEPS = [
  {
    number: "01",
    title: "Escolha sua linguagem",
    description:
      "Responda uma pergunta simples: qual linguagem você quer aprender? HTML/CSS, JavaScript, Python, Java ou PHP — você escolhe por onde começar.",
  },
  {
    number: "02",
    title: "Siga o roadmap",
    description:
      "Cada linguagem tem um caminho guiado, do zero ao avançado. Você sempre sabe qual é o próximo passo, sem se perder em recursos soltos pela internet.",
  },
  {
    number: "03",
    title: "Estude com aulas e exercícios",
    description:
      "Cada módulo do roadmap vem com conteúdo, exercícios práticos e projetos reais pra você aplicar o que aprendeu, não só ler teoria.",
  },
  {
    number: "04",
    title: "Marque seu progresso",
    description:
      "Crie uma conta gratuita (com Google, GitHub, GitLab ou Discord) para marcar aulas como concluídas e acompanhar sua evolução no roadmap.",
  },
  {
    number: "05",
    title: "Pratique com projetos",
    description:
      "No final de cada trilha, você constrói projetos práticos completos — o tipo de coisa que você pode colocar no seu portfólio.",
  },
];

const FEATURES = [
  {
    title: "100% gratuito",
    description: "Nenhuma funcionalidade essencial é paga. Sem planos, sem assinatura, sem pegadinha.",
  },
  {
    title: "Open source",
    description: "O código é público. Qualquer pessoa pode ver como funciona, sugerir melhorias ou contribuir.",
  },
  {
    title: "Feito pra iniciantes",
    description: "Sem jargão desnecessário. Cada roadmap assume que você pode estar vendo aquilo pela primeira vez.",
  },
];

export default function ComoFunciona() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10 blur-[120px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      {/* Cabeçalho */}
      <section className="relative mx-auto max-w-[900px] px-6 pb-16 pt-24 text-center lg:pt-32">
        <p
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
        >
          Como funciona
        </p>

        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
        >
          Do zero ao{" "}
          <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
            avançado
          </span>
          , em 5 passos
        </h1>

        <p className="mx-auto max-w-lg text-lg leading-relaxed text-[var(--muted)]">
          Sem enrolação, sem centenas de links soltos. Um caminho claro do início ao fim.
        </p>

        <div className="road-rule--brand road-rule mx-auto mt-8 w-40" />
      </section>

      {/* Passos */}
      <section className="relative mx-auto max-w-[780px] px-6 pb-24">
        <div className="flex flex-col gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex gap-5 rounded-2xl border p-6"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-3xl font-bold text-transparent"
              >
                {step.number}
              </span>
              <div>
                <h2
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                  className="mb-1.5 text-lg font-bold"
                >
                  {step.title}
                </h2>
                <p style={{ color: "var(--muted)" }} className="text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-[1000px] px-6 py-20">
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            className="mb-10 text-center text-2xl font-bold"
          >
            Por que o DevRoad é diferente
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-xl border p-6" style={{ borderColor: "var(--border)" }}>
                <div
                  style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 style={{ color: "var(--text)" }} className="mb-2 font-bold">
                  {feature.title}
                </h3>
                <p style={{ color: "var(--muted)" }} className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative mx-auto max-w-[700px] px-6 py-24 text-center">
        <h2
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          className="mb-4 text-2xl font-bold"
        >
          Pronto pra começar?
        </h2>
        <p style={{ color: "var(--muted)" }} className="mb-8 text-sm leading-relaxed">
          Escolha sua linguagem e siga o primeiro passo do seu roadmap agora mesmo.
        </p>
        <Link
          href="/"
          style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))", color: "#08090C" }}
          className="inline-flex items-center gap-1.5 rounded-lg px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-px"
        >
          Escolher minha linguagem
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}