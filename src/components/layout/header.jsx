import Link from "next/link";
import { auth, signOut } from "@/auth";

/**
 * Header — DevRoad
 * -------------------------------------------------------------
 * Local: src/components/layout/header.jsx
 *
 * Header moderno em glassmorphism com controle de estado de autenticação.
 */

const logoGradientId = "devroad-header-logo-gradient";

function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://w3.org">
      <defs>
        <linearGradient id={logoGradientId} x1="0" y1="0" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2E8BFF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <path d="M35 8 H55 C75 8 88 24 88 46 C88 68 75 84 55 84 H35 V60 L35 34 Z M35 34 V60 H52 C63 60 70 54 70 46 C70 38 63 34 52 34 H35 Z" fill={`url(#${logoGradientId})`} />
      <path d="M40 44 L32 50 L40 56" stroke="#0A0D14" strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M60 44 L68 50 L60 56" stroke="#0A0D14" strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 92 C20 74 30 68 40 60" stroke="#0A0D14" strokeWidth={10} strokeLinecap="round" fill="none" />
      <path d="M8 92 C20 74 30 68 40 60" stroke={`url(#${logoGradientId})`} strokeWidth={6} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export async function Header() {
  // Busca a sessão atual de forma assíncrona no servidor
  const session = await auth();
  const usuarioLogado = !!session?.user;

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-[#0A0D14]/75" style={{ borderColor: "var(--border, #1E2430)" }}>
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
        
        {/* Logo Link */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <LogoMark />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-[19px] font-bold tracking-tight text-[#EDF0F5]">
            <span style={{ color: "var(--blue, #2E8BFF)" }}>Dev</span>Road
          </span>
        </Link>

        {/* Navegação Principal */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/roadmaps" className="text-sm font-medium transition-colors hover:text-[#EDF0F5]" style={{ color: "var(--muted, #8A93A6)" }}>
            Roadmaps
          </Link>
          <Link href="/comunidade" className="text-sm font-medium transition-colors hover:text-[#EDF0F5]" style={{ color: "var(--muted, #8A93A6)" }}>
            Comunidade
          </Link>
        </nav>

        {/* Área de Ações Autenticadas / Não Autenticadas */}
        <div className="flex items-center gap-4">
          {usuarioLogado ? (
            <div className="flex items-center gap-4">
              {/* Nome do usuário vindo do banco */}
              <span className="hidden text-sm font-medium text-[#EDF0F5] sm:block">
                Olá, {session.user.name?.split(" ")[0]}
              </span>

              {/* Foto ou Avatar padrão */}
              <div className="relative h-8 w-8 overflow-hidden rounded-full border bg-[#10141D]" style={{ borderColor: "var(--border, #1E2430)" }}>
                {session.user.image ? (
                  <img src={session.user.image} alt={session.user.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-bold text-[#2E8BFF]">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Botão de Logout como Server Action */}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="rounded-lg border px-3 py-1.5 text-xs font-semibold text-red-400 transition-colors hover:bg-red-500/10"
                  style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}
                >
                  Sair
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Usuário Anônimo: Exibe botões de Entrada */}
              <Link href="/login" className="text-sm font-semibold transition-colors hover:text-[#EDF0F5]" style={{ color: "var(--muted, #8A93A6)" }}>
                Entrar
              </Link>

              <Link
                href="/cadastro"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[#08090C] transition-transform hover:-translate-y-px"
                style={{ background: "linear-gradient(90deg, #2E8BFF, #7C5CFF)" }}
              >
                Criar conta
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}
