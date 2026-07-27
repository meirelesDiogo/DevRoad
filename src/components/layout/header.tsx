"use client";
import AnimatedGlowingSearchBar from "@/components/ui/animated-glowing-search-bar";
import { useState, type CSSProperties, type FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Header do DevRoad
 * -------------------------------------------------------------
 * Requer Tailwind CSS configurado no projeto.
 * Fontes usadas (adicione no seu <head> / _document / globals.css):
 *   Space Grotesk (logo/wordmark)  — pesos 500, 700
 *   Inter (nav/body)               — pesos 400, 500, 600, 700
 *   JetBrains Mono (labels/eyebrow) — pesos 500, 600
 *
 * Exemplo (Next.js / globals.css):
 *   @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
 */

const COLORS = {
  bg: "#0A0D14",
  surface2: "#151A24",
  border: "#1E2430",
  blue: "#2E8BFF",
  purple: "#7C5CFF",
  text: "#EDF0F5",
  muted: "#8A93A6",
};

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Aulas", href: "/aulas" },
  { label: "Comunidade", href: "/comunidade" },
  { label: "Sobre", href: "/sobre" },
];

export interface HeaderProps {
  /** href atualmente ativo, usado para destacar o item de navegação correspondente */
  activePath?: string;
  /** se o usuário já estiver autenticado, troque os botões de auth por algo próprio (ex: avatar) */
  isAuthenticated?: boolean;
}

// linha tracejada estilo "estrada" — elemento de assinatura da marca
const roadRuleStyle: CSSProperties = {
  height: 3,
  width: "100%",
  backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.blue} 0px, ${COLORS.blue} 14px, transparent 14px, transparent 22px, ${COLORS.purple} 22px, ${COLORS.purple} 36px, transparent 36px, transparent 44px)`,
  opacity: 0.85,
};

const logoGradientId = "devroad-logo-gradient";

const LogoMark: FC<{ size?: number }> = ({ size = 34 }) => (
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

const Header: FC<HeaderProps> = ({ activePath = "/roadmaps", isAuthenticated = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{ backgroundColor: "rgba(10,13,20,0.82)", borderBottom: `1px solid ${COLORS.border}` }}
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1180px] items-center gap-7 px-6 py-3.5">
        {/* Logo */}
        <a href="/" aria-label="DevRoad, página inicial" className="flex items-center gap-2.5">
          <LogoMark />
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: COLORS.text }}
            className="whitespace-nowrap text-[19px] font-bold tracking-tight"
          >
            <span style={{ color: COLORS.blue }}>Dev</span>Road
          </span>
        </a>

        {/* Nav desktop */}
        <nav aria-label="Navegação principal" className="ml-2 hidden items-center gap-1.5 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link
  key={item.href}
  href={item.href}
  style={{
    color: isActive ? COLORS.text : COLORS.muted,
  }}
  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
    isActive
      ? "bg-[#151A24]"
      : "hover:bg-[#151A24] hover:text-white"
  }`}
>
  {item.label}
</Link>
            );
          })}
        </nav>

        {/* Ações à direita */}
        <div className="ml-auto flex items-center gap-2.5">
         <AnimatedGlowingSearchBar />

          {!isAuthenticated ? (
            <>
              <a
                href="/entrar"
                style={{ color: COLORS.text }}
                className="hidden rounded-lg px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#151A24] md:block"
              >
                Entrar
              </a>
              <a
                href="/cadastro"
                style={{ background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})`, color: "#08090C" }}
                className="hidden items-center gap-1.5 rounded-lg px-4.5 py-2 text-sm font-semibold transition-transform hover:-translate-y-px md:flex"
              >
                Criar conta
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </>
          ) : (
            <a href="/perfil" className="hidden md:block" aria-label="Meu perfil">
              <div
                style={{ background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})` }}
                className="h-9 w-9 rounded-full"
              />
            </a>
          )}

          {/* Botão hambúrguer (mobile) */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            style={{ color: COLORS.text }}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[#151A24] md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <div style={roadRuleStyle} aria-hidden />

      {/* Painel mobile */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#10141D", borderTop: `1px solid ${COLORS.border}` }} className="md:hidden">
          <div className="flex flex-col gap-0.5 px-6 pb-4 pt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ color: item.href === activePath ? COLORS.text : COLORS.muted }}
                className="w-full rounded-lg px-3.5 py-2.5 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${COLORS.border}` }} className="flex gap-2.5 px-6 py-3.5">
            <a
              href="/login"
              style={{ color: COLORS.text, borderColor: COLORS.border }}
              className="flex flex-1 items-center justify-center rounded-lg border py-2.5 text-sm font-semibold"
            >
              Entrar
            </a>
            <a
              href="/cadastro"
              style={{ background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})`, color: "#08090C" }}
              className="flex flex-1 items-center justify-center rounded-lg py-2.5 text-sm font-semibold"
            >
              Criar conta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
export { Header };