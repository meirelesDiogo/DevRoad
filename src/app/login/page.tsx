import Link from "next/link";
import Image from "next/image";
import { SocialButtons } from "@/components/auth/social-buttons";

/**
 * Login — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/entrar/page.tsx (ajuste o caminho pra sua rota real)
 *
 * Layout split-screen: painel de marca à esquerda (some no mobile),
 * formulário limpo à direita. Padrão usado em telas de login de
 * produtos SaaS premium (Linear, Vercel, Stripe).
 *
 * <SocialButtons /> continua exatamente como estava — só o entorno
 * foi redesenhado.
 */

const logoGradientId = "devroad-login-logo-gradient";

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={logoGradientId} x1="0" y1="0" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2E8BFF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <path
        d="M35 8 H55 C75 8 88 24 88 46 C88 68 75 84 55 84 H35 V60 L35 34 Z M35 34 V60 H52 C63 60 70 54 70 46 C70 38 63 34 52 34 H35 Z"
        fill={`url(#${logoGradientId})`}
      />
      <path d="M40 44 L32 50 L40 56" stroke="var(--bg)" strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M60 44 L68 50 L60 56" stroke="var(--bg)" strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 92 C20 74 30 68 40 60" stroke="var(--bg)" strokeWidth={10} strokeLinecap="round" fill="none" />
      <path d="M8 92 C20 74 30 68 40 60" stroke={`url(#${logoGradientId})`} strokeWidth={6} strokeLinecap="round" fill="none" />
    </svg>
  );
}

const FEATURES = [
  "Roadmaps guiados do zero ao avançado",
  "Aulas, exercícios e projetos práticos",
  "100% gratuito, para sempre — open source",
];

export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* ================= PAINEL DE MARCA (some no mobile) ================= */}
      <div className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between" style={{ backgroundColor: "var(--surface)" }}>
        {/* imagem da estrada como textura de fundo */}
        <Image src="/estrada.png" alt="" fill priority className="object-cover opacity-25" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, var(--surface) 0%, rgba(16,20,29,0.85) 60%, var(--surface) 100%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full opacity-25 blur-[120px]"
          style={{ background: "linear-gradient(135deg, var(--blue), var(--purple))" }}
        />

        {/* topo: logo */}
        <div className="relative z-10 p-10">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark />
            <span
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              className="text-lg font-bold tracking-tight"
            >
              <span style={{ color: "var(--blue)" }}>Dev</span>Road
            </span>
          </Link>
        </div>

        {/* meio: mensagem de marca */}
        <div className="relative z-10 px-10 pb-16">
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--blue)" }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.14em]"
          >
            Aprenda · Pratique · Evolua
          </p>

          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            className="mb-8 max-w-sm text-3xl font-bold leading-tight tracking-tight"
          >
            Sua jornada de desenvolvedor{" "}
            <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
              começa aqui
            </span>
            .
          </h2>

          <ul className="flex flex-col gap-3.5">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="road-rule--brand road-rule mt-10 w-32" />
        </div>
      </div>

      {/* ================= FORMULÁRIO ================= */}
      <div className="relative flex items-center justify-center bg-[var(--bg)] px-6 py-16">
        <Link
          href="/"
          className="absolute left-6 top-6 flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--text)] lg:hidden"
          style={{ color: "var(--muted)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Voltar
        </Link>

        <div className="w-full max-w-[380px]">
          {/* logo — só aparece no mobile, já que o painel esquerdo some */}
          <div className="mb-10 flex justify-center lg:hidden">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark />
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                className="text-lg font-bold tracking-tight"
              >
                <span style={{ color: "var(--blue)" }}>Dev</span>Road
              </span>
            </Link>
          </div>

          <div className="mb-9">
            <h1
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              className="mb-2 text-[28px] font-bold tracking-tight"
            >
              Bem-vindo de volta
            </h1>
            <p style={{ color: "var(--muted)" }} className="text-sm leading-relaxed">
              Entre para continuar seu roadmap de onde você parou.
            </p>
          </div>

          <SocialButtons />

          <div className="mt-9 flex items-center gap-3">
            <span className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            <span style={{ color: "var(--muted-2)", fontFamily: "'JetBrains Mono', monospace" }} className="text-[11px] uppercase tracking-wider">
              DevRoad
            </span>
            <span className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
          </div>

          <p className="mt-7 text-center text-sm" style={{ color: "var(--muted)" }}>
            Não tem conta?{" "}
            <Link href="/cadastro" style={{ color: "var(--blue)" }} className="font-semibold hover:underline">
              Criar conta grátis
            </Link>
          </p>

          <p className="mt-6 text-center text-xs leading-relaxed" style={{ color: "var(--muted-2)" }}>
            Ao continuar, você concorda com nossos{" "}
            <Link href="/termos" className="underline hover:text-[var(--muted)]">
              Termos de uso
            </Link>{" "}
            e nossa{" "}
            <Link href="/privacidade" className="underline hover:text-[var(--muted)]">
              Política de privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}