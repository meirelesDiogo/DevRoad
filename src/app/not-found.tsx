import Link from "next/link";
import type { FC } from "react";

/**
 * not-found.tsx — App Router do Next.js
 * -------------------------------------------------------------
 * Coloque este arquivo em: src/app/not-found.tsx
 * O Next.js renderiza ele automaticamente sempre que:
 *   - a rota não existe
 *   - você chama notFound() de dentro de uma page/layout
 *
 * Requer Tailwind CSS + as mesmas fontes do Header/Footer
 * (Space Grotesk, Inter, JetBrains Mono).
 */

const COLORS = {
  bg: "#0A0D14",
  border: "#1E2430",
  blue: "#2E8BFF",
  purple: "#7C5CFF",
  text: "#EDF0F5",
  muted: "#8A93A6",
  muted2: "#5C6478",
};

const logoGradientId = "devroad-404-logo-gradient";

const LogoMark: FC<{ size?: number }> = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={logoGradientId} x1="0" y1="0" x2="90" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor={COLORS.blue} />
        <stop offset="1" stopColor={COLORS.purple} />
      </linearGradient>
    </defs>
    <path
      d="M35 8 H55 C75 8 88 24 88 46 C88 68 75 84 55 84 H35 V60 L35 34 Z M35 34 V60 H52 C63 60 70 54 70 46 C70 38 63 34 52 34 H35 Z"
      fill={`url(#${logoGradientId})`}
    />
    <path d="M40 44 L32 50 L40 56" stroke={COLORS.bg} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M60 44 L68 50 L60 56" stroke={COLORS.bg} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8 92 C20 74 30 68 40 60" stroke={COLORS.bg} strokeWidth={10} strokeLinecap="round" fill="none" />
    <path d="M8 92 C20 74 30 68 40 60" stroke={`url(#${logoGradientId})`} strokeWidth={6} strokeLinecap="round" fill="none" />
  </svg>
);

export default function NotFound() {
  return (
    <main
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <Link href="/" className="mb-10 flex items-center gap-2.5" aria-label="Voltar para a página inicial do DevRoad">
        <LogoMark />
        <span
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="whitespace-nowrap text-[19px] font-bold tracking-tight"
        >
          <span style={{ color: COLORS.blue }}>Dev</span>Road
        </span>
      </Link>

      {/* estrada tracejada saindo do 404 — mesmo elemento de assinatura do header/footer */}
      <div className="relative mb-6">
        <span
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="block bg-gradient-to-r from-[#2E8BFF] to-[#7C5CFF] bg-clip-text text-[120px] font-bold leading-none text-transparent sm:text-[160px]"
        >
          404
        </span>
        <span
          aria-hidden
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.blue} 0px, ${COLORS.blue} 14px, transparent 14px, transparent 22px, ${COLORS.purple} 22px, ${COLORS.purple} 36px, transparent 36px, transparent 44px)`,
          }}
          className="absolute -bottom-2 left-1/2 h-[3px] w-24 -translate-x-1/2 opacity-80 sm:w-32"
        />
      </div>

      <p
        style={{ fontFamily: "'JetBrains Mono', monospace", color: COLORS.blue }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.14em]"
      >
        Estrada ainda sendo pavimentada
      </p>

      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="mb-3 text-2xl font-bold sm:text-3xl">
        Esta página está em desenvolvimento
      </h1>

      <p style={{ color: COLORS.muted }} className="mb-9 max-w-md text-sm leading-relaxed sm:text-base">
        Estamos construindo essa parte do roadmap. Enquanto isso, que tal continuar de onde você parou?
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          style={{ background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})`, color: "#08090C" }}
          className="flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-px"
        >
          Voltar para o início
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
        <Link
          href="/roadmaps"
          style={{ color: COLORS.text, borderColor: COLORS.border }}
          className="rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#151A24]"
        >
          Ver roadmaps
        </Link>
      </div>
    </main>
  );
}