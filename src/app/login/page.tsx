import Link from "next/link";
import Image from "next/image";
import { SocialButtons } from "@/components/auth/social-buttons";

/**
 * Login — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/login/page.tsx
 *
 * Layout centralizado (sem divisão de tela): imagem da estrada
 * como fundo cheio, com overlay escuro, e um card em glassmorphism
 * flutuando no centro. Mais compacto que a versão split-screen.
 */

const logoGradientId = "devroad-login-logo-gradient";

function LogoMark({ size = 44 }: { size?: number }) {
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

const BADGES = ["Roadmaps guiados", "Aulas práticas", "100% gratuito"];

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-6 py-16">
      {/* imagem de fundo cheia */}
      <Image src="/estrada.png" alt="" fill priority className="object-cover opacity-20" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, var(--bg) 0%, rgba(10,13,20,0.55) 40%, var(--bg) 100%)" }}
      />

      {/* glows decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full opacity-20 blur-[100px]"
        style={{ background: "var(--purple)" }}
      />

      {/* voltar pro início */}
      <Link
        href="/"
        className="absolute left-6 top-6 z-10 flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--text)]"
        style={{ color: "var(--muted)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar para o início
      </Link>

      {/* card central em glassmorphism */}
      <div className="group relative z-10 w-full max-w-[440px]">
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#2E8BFF] via-[#7C5CFF] to-[#2E8BFF] opacity-25 blur-md transition-all duration-500 group-hover:opacity-50 group-hover:blur-lg" />

        <div
          className="relative rounded-3xl border px-9 py-11 shadow-2xl backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1"
          style={{ backgroundColor: "rgba(16,20,29,0.72)", borderColor: "var(--border)" }}
        >
          {/* logo + badges */}
          <div className="mb-8 flex flex-col items-center gap-4 text-center">
            <LogoMark />
            <div>
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                className="text-2xl font-bold tracking-tight"
              >
                <span style={{ color: "var(--blue)" }}>Dev</span>Road
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                  className="rounded-full border px-3 py-1 text-[11px] font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* cabeçalho */}
          <div className="mb-8 text-center">
            <h1
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              className="mb-2 text-2xl font-bold tracking-tight"
            >
              Entre para continuar sua jornada
            </h1>
            <p style={{ color: "var(--muted)" }} className="text-sm leading-relaxed">
              Acompanhe seu progresso e retome de onde parou.
            </p>
          </div>

          <SocialButtons />

          <p className="mt-8 text-center text-sm" style={{ color: "var(--muted)" }}>
            Não tem conta?{" "}
            <Link href="/cadastro" style={{ color: "var(--blue)" }} className="font-semibold hover:underline">
              Criar conta grátis
            </Link>
          </p>
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