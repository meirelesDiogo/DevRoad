import { h1 } from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Home - Aprenda a programar do zero",
  description: "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",
openGraph: {
  title: "DevRoad - Aprenda a programar do zero",
  description: "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",
  images: ['https://dev-road-henna.vercel.app/logo.png'],
}
 }
/**
 * Home — Hero + Cards de linguagem do DevRoad
 * -------------------------------------------------------------
 * Local: src/app/page.tsx
 *
 * Ajustes feitos nesta versão:
 * - H1 centralizado (hero não é mais dividido em 2 colunas).
 * - A imagem /estrada.png virou o BACKGROUND do hero (com overlay
 *   escuro por cima pra garantir legibilidade do texto), já que
 *   agora o texto ocupa a largura toda.
 * - Adicionado grid de cards de linguagem: cada card é um link
 *   inteiro para /login (chamada pra ação de cadastro/login),
 *   já que no MVP marcar progresso só é possível autenticado.
 *
 * IMPORTANTE sobre os ícones: no Next.js, arquivos dentro de
 * /public são referenciados SEM o prefixo "/public" — ou seja,
 * um arquivo em public/icons/front/html.svg vira só "/icons/front/html.svg".
 * Ajuste o array LANGUAGES abaixo com os caminhos reais dos seus ícones.
 */

type Language = {
  name: string;
  icon: string;
};
 
const LANGUAGES: Language[] = [
  { name: "HTML", icon: "/icons/front/html.svg" },
  { name: "CSS", icon: "/icons/front/css.svg" },
  { name: "JavaScript", icon: "/icons/front/javascript.svg" },
  { name: "Python", icon: "/icons/back/python.svg" },
  { name: "Java", icon: "/icons/back/java.svg" },
  { name: "PHP", icon: "/icons/back/php.svg" },
];
export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)]">
      {/* glow de fundo sutil, reforçando a paleta azul/roxo sem poluir o layout */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      <section className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        {/* Coluna de texto */}
        <div className="text-center lg:text-left">
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
          >
            100% gratuito · open source
          </p>

          <h1
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl"
          >
            Não sabe por onde{" "}
            <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
              começar
            </span>{" "}
            a programar?
          </h1>

          <p className="mx-auto max-w-md text-lg leading-relaxed text-[var(--muted)] lg:mx-0">
            Nós te mostramos o caminho.
          </p>

          {/* estrada tracejada — elemento de assinatura da marca */}
          <div className="road-rule--brand road-rule mt-8 w-40 lg:mx-0" style={{ margin: "2rem auto 0" }} />
        </div>

        {/* Coluna da imagem */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[32px] opacity-30 blur-3xl"
            style={{ background: "linear-gradient(135deg, var(--blue), var(--purple))" }}
          />
          <Image
            src="/estrada.png"
            alt="Roadmap"
            width={600}
            height={400}
            priority
            className="w-full max-w-[520px] rounded-2xl border object-cover"
            style={{ borderColor: "var(--border)" }}
          />
        </div>
      </section>
<br /><br />

      
    <main className="bg-[var(--bg)]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* imagem de fundo */}
        <Image
          src="/estrada.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* overlay escuro em gradiente, garante legibilidade do texto sobre a imagem */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--bg) 0%, rgba(10,13,20,0.75) 45%, var(--bg) 100%)",
          }}
        />
        {/* glow sutil azul/roxo por cima de tudo */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]"
          style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
        />
 
        <div className="relative mx-auto max-w-[900px] px-6 py-28 text-center lg:py-36">
          
 
          <h1
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl"
          >
            Comece{" "}
            <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
              Hoje
            </span>
          </h1>
 
          <p className="mx-auto max-w-md text-lg leading-relaxed text-[var(--muted)]">
            Escolha a linguagem que deseja aprender e siga o roadmap para se tornar um desenvolvedor completo.
          </p>
 
          {/* estrada tracejada — elemento de assinatura da marca */}
          <div className="road-rule--brand road-rule mx-auto mt-8 w-40" />
        </div>
      </section>
 
      {/* ================= CARDS DE LINGUAGEM ================= */}
      <section className="relative mx-auto max-w-[1180px] px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {LANGUAGES.map((lang) => (
            <Link
              key={lang.name}
              href="/login"
              className="group flex flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all hover:-translate-y-1"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <img src={lang.icon} alt={lang.name} width={40} height={40} className="h-10 w-10" />
 
              <span style={{ color: "var(--text)" }} className="text-sm font-semibold">
                {lang.name}
              </span>
 
              <span
                style={{ color: "var(--muted)" }}
                className="flex items-center gap-1 text-xs font-medium transition-colors group-hover:!text-[var(--blue)]"
              >
                Entrar para começar
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </main>
  );
}

