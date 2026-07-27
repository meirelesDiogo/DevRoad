import Link from "next/link";
import { SocialButtons } from "@/components/auth/social-buttons";

/**
 * Login — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/entrar/page.tsx (ou onde sua rota de login estiver)
 * Mantém o <SocialButtons /> como estava — só estilizei a página
 * ao redor dele (card, logo, glow, textos de apoio).
 */

const logoGradientId = "devroad-login-logo-gradient";

function LogoMark({ size = 40 }: { size?: number }) {
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

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-6 py-16">
      {/* glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      {/* voltar pro início */}
      <Link
        href="/"
        className="absolute left-6 top-6 flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--text)]"
        style={{ color: "var(--muted)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar para o início
      </Link>

      {/* card de login */}
      <div className="group relative w-full max-w-[400px]">
        {/* glow ao redor do card, mesmo padrão usado no header/terminal */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#2E8BFF] via-[#7C5CFF] to-[#2E8BFF] opacity-20 blur-md transition-all duration-500 group-hover:opacity-40" />

        <div
          className="relative rounded-2xl border px-8 py-10 shadow-2xl backdrop-blur"
          style={{ backgroundColor: "rgba(16,20,29,0.95)", borderColor: "var(--border)" }}
        >
          {/* logo */}
          <div className="mb-8 flex flex-col items-center gap-3">
            <LogoMark />
            <span
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              className="text-[19px] font-bold tracking-tight"
            >
              <span style={{ color: "var(--blue)" }}>Dev</span>Road
            </span>
          </div>

          {/* cabeçalho */}
          <div className="mb-8 text-center">
            <h1
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              className="mb-2 text-2xl font-bold tracking-tight"
            >
              Bem-vindo de volta
            </h1>
            <p style={{ color: "var(--muted)" }} className="text-sm leading-relaxed">
              Entre para continuar seu roadmap de onde você parou.
            </p>
          </div>

          {/* botões sociais (mantidos como já estavam) */}
          <SocialButtons />

          {/* rodapé do card */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="road-rule w-full opacity-40" />

            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Não tem conta?{" "}
              <Link href="/cadastro" style={{ color: "var(--blue)" }} className="font-semibold hover:underline">
                Criar conta grátis
              </Link>
            </p>
          </div>
        </div>

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
    </main>
  );
}