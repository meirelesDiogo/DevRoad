import Link from "next/link";
import { auth } from "@/auth";

/**
 * Roadmaps — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/roadmaps/page.jsx
 *
 * Server Component: usa auth() pra saber se o usuário está logado
 * e trocar o texto/destino do botão de cada card.
 */

export const metadata = {
  title: "Roadmaps - DevRoad",
  description: "Escolha uma linguagem e siga o roadmap guiado do zero ao avançado.",
};

const ROADMAPS = [
  {
    slug: "html-css",
    name: "HTML & CSS",
    icon: "/icons/front/html.svg",
    level: "Iniciante",
    description: "A base de toda a web. Estruture páginas e estilize do zero.",
  },
  {
    slug: "javascript",
    name: "JavaScript",
    icon: "/icons/front/javascript.svg",
    level: "Iniciante ao avançado",
    description: "Dê vida às suas páginas e aprenda a linguagem mais usada da web.",
  },
  {
    slug: "python",
    name: "Python",
    icon: "/icons/back/python.svg",
    level: "Iniciante ao avançado",
    description: "Sintaxe simples, poder enorme. Ótima primeira linguagem de back-end.",
  },
  {
    slug: "java",
    name: "Java",
    icon: "/icons/back/java.svg",
    level: "Intermediário ao avançado",
    description: "Programação orientada a objetos e sistemas robustos.",
  },
  {
    slug: "php",
    name: "PHP",
    icon: "/icons/back/php.svg",
    level: "Iniciante ao avançado",
    description: "Ainda move boa parte da web. Simples de aprender, fácil de aplicar.",
  },
];

export default async function Roadmaps() {
  const session = await auth();
  const isAuthenticated = Boolean(session?.user);

  return (
    <main className="relative overflow-hidden bg-[var(--bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10 blur-[120px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      {/* Cabeçalho */}
      <section className="relative mx-auto max-w-[700px] px-6 pb-14 pt-24 text-center lg:pt-32">
        <p
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
        >
          Roadmaps
        </p>

        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
        >
          Escolha seu{" "}
          <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
            caminho
          </span>
        </h1>

        <p className="mx-auto max-w-md text-lg leading-relaxed text-[var(--muted)]">
          Cada roadmap leva você do zero ao avançado, com aulas, exercícios e projetos práticos.
        </p>

        {!isAuthenticated && (
          <p style={{ color: "var(--muted)" }} className="mt-5 text-sm">
            <Link href="/login" style={{ color: "var(--blue)" }} className="font-semibold hover:underline">
              Faça login
            </Link>{" "}
            pra acompanhar seu progresso em cada roadmap.
          </p>
        )}

        <div className="road-rule--brand road-rule mx-auto mt-8 w-40" />
      </section>

      {/* Lista de roadmaps */}
      <section className="relative mx-auto max-w-[900px] px-6 pb-24">
        <div className="flex flex-col gap-4">
          {ROADMAPS.map((roadmap) => (
            <div
              key={roadmap.slug}
              className="flex flex-col items-start gap-5 rounded-2xl border p-6 transition-colors sm:flex-row sm:items-center"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--surface-2)" }}
              >
                <img src={roadmap.icon} alt="" width={28} height={28} className="h-7 w-7" />
              </div>

              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }} className="text-lg font-bold">
                    {roadmap.name}
                  </h2>
                  <span
                    style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                    className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium"
                  >
                    {roadmap.level}
                  </span>
                </div>
                <p style={{ color: "var(--muted)" }} className="text-sm leading-relaxed">
                  {roadmap.description}
                </p>
              </div>

              <Link
                href={isAuthenticated ? `/roadmaps/${roadmap.slug}` : "/login"}
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
                className="flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)] sm:w-auto"
              >
                {isAuthenticated ? "Começar" : "Entrar para começar"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}