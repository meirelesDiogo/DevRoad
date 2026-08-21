"use client";

import AnimatedGlowingSearchBar from "@/components/ui/animated-glowing-search-bar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

/**
 * Header do DevRoad — Totalmente Funcional
 * -------------------------------------------------------------
 * Local: src/components/layout/header.jsx
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

const NAV_ITEMS = [
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "Aulas", href: "/aulas" },
  { label: "Comunidade", href: "/comunidade" },
  { label: "Sobre", href: "/sobre" },
];

const roadRuleStyle = {
  height: 3,
  width: "100%",
  backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.blue} 0px, ${COLORS.blue} 14px, transparent 14px, transparent 22px, ${COLORS.purple} 22px, ${COLORS.purple} 36px, transparent 36px, transparent 44px)`,
  opacity: 0.85,
};

const logoGradientId = "devroad-logo-gradient";

const LogoMark = ({ size = 34 }) => (
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  
  // hook do NextAuth que lê o estado da sessão em Client Components
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  // Fecha o menu mobile se a rota mudar
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      style={{ backgroundColor: "rgba(10,13,20,0.82)", borderBottom: `1px solid ${COLORS.border}` }}
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1180px] items-center gap-7 px-6 py-3.5">
        {/* Logo */}
        <Link href="/" aria-label="DevRoad, página inicial" className="flex items-center gap-2.5">
          <LogoMark />
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: COLORS.text }}
            className="whitespace-nowrap text-[19px] font-bold tracking-tight"
          >
            <span style={{ color: COLORS.blue }}>Dev</span>Road
          </span>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navegação principal" className="ml-2 hidden items-center gap-1.5 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: isActive ? COLORS.text : COLORS.muted }}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                  isActive ? "bg-[#151A24]" : "hover:bg-[#151A24] hover:text-white"
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
              <Link
                href="/login"
                style={{ color: COLORS.text }}
                className="hidden rounded-lg px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#151A24] md:block"
              >
                Entrar
              </Link>
              <Link
                href="/cadastro"
                style={{ background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})`, color: "#08090C" }}
                className="hidden items-center gap-1.5 rounded-lg px-4.5 py-2 text-sm font-semibold transition-transform hover:-translate-y-px md:flex"
              >
                Criar conta
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              {/* Nome do Usuário */}
              <span className="hidden text-sm font-medium text-[#EDF0F5] sm:block">
                Olá, {session.user.name?.split(" ")[0]}
              </span>

              {/* Botão de Logout */}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-lg border px-3 py-1.5 text-xs font-semibold text-red-400 transition-colors hover:bg-red-500/10"
                style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}
              >
                Sair
              </button>
            </div>
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

      {/* Menu mobile */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#10141D", borderTop: `1px solid ${COLORS.border}` }} className="md:hidden">
          <div className="flex flex-col gap-0.5 px-6 pb-4 pt-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: pathname === item.href ? COLORS.text : COLORS.muted }}
                className={`w-full rounded-lg px-3.5 py-2.5 text-sm font-medium ${
                  pathname === item.href ? "bg-[#151A24]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${COLORS.border}` }} className="flex gap-2.5 px-6 py-3.5">
            {!isAuthenticated ? (
              <>
                <Link
                  href="/login"
                  style={{ color: COLORS.text, borderColor: COLORS.border }}
                  className="flex flex-1 items-center justify-center rounded-lg border py-2.5 text-sm font-semibold"
                >
                  Entrar
                </Link>
                <Link
                  href="/cadastro"
                  style={{ background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})`, color: "#08090C" }}
                  className="flex flex-1 items-center justify-center rounded-lg py-2.5 text-sm font-semibold"
                >
                  Criar conta
                </Link>
              </>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full rounded-lg border border-red-500/20 bg-red-500/10 py-2.5 text-center text-sm font-semibold text-red-400"
              >
                Desconectar conta
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export { Header };
