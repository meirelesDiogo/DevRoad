import { h1 } from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

export const metadata:Metadata = {
  title: "DevRoad - Aprenda a programar do zero",
  description: "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",

 }
/**
 * Home — Hero inicial do DevRoad
 * -------------------------------------------------------------
 * Local: src/app/page.tsx
 * Usa os mesmos tokens de cor definidos em globals.css
 * (--blue, --purple, --muted, etc.) e a classe .road-rule--brand
 * já criada como divisor de assinatura da marca.
 */

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
      <section>

<div></div>









      </section>
    </main>
  );
}

