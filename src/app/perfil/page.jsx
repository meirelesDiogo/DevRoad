import Image from "next/image";
import Link from "next/link";
import { auth, signOut } from "@/auth";

/**
 * Perfil — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/perfil/page.jsx
 *
 * Server Component: usa auth() do Auth.js pra ler a sessão no
 * servidor. Sem "use client" — não precisa de hooks aqui.
 *
 * Se não estiver logado: mostra um card convidando pra fazer login.
 * Se estiver logado: mostra foto, nome, e-mail vindos da sessão.
 */

export const metadata = {
  title: "Meu Perfil - DevRoad",
};

function LoggedOutView() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[130px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      <div className="relative z-10 w-full max-w-[420px] text-center">
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg, var(--blue), var(--purple))" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>

        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          className="mb-2 text-2xl font-bold tracking-tight"
        >
          Você precisa entrar
        </h1>
        <p style={{ color: "var(--muted)" }} className="mb-8 text-sm leading-relaxed">
          Faça login pra ver seu perfil, acompanhar seu progresso e marcar aulas como concluídas.
        </p>

        <Link
          href="/login"
          style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))", color: "#08090C" }}
          className="inline-flex items-center gap-1.5 rounded-lg px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-px"
        >
          Fazer login
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </main>
  );
}

function LoggedInView({ user }) {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[130px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      <div className="relative mx-auto max-w-[560px]">
        {/* Card principal do perfil */}
        <div
          className="rounded-2xl border p-8 text-center sm:p-10"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div className="relative mx-auto mb-5 h-24 w-24">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-full opacity-70 blur-md"
              style={{ background: "linear-gradient(135deg, var(--blue), var(--purple))" }}
            />
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "Foto de perfil"}
                fill
                className="relative rounded-full border-4 object-cover"
                style={{ borderColor: "var(--surface)" }}
              />
            ) : (
              <div
                className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 text-2xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, var(--blue), var(--purple))", borderColor: "var(--surface)" }}
              >
                {(user.name || user.email || "?").charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <h1
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            className="mb-1 text-2xl font-bold tracking-tight"
          >
            {user.name || "Sem nome definido"}
          </h1>
          <p style={{ color: "var(--muted)" }} className="mb-6 text-sm">
            {user.email}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <span
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              className="rounded-full border px-3 py-1 text-[11px] font-medium"
            >
              🌱 Membro DevRoad
            </span>
          </div>
        </div>

        {/* Progresso — placeholders até o acompanhamento real ser implementado */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border p-5 text-center" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <p
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              className="text-2xl font-bold"
            >
              0
            </p>
            <p style={{ color: "var(--muted)" }} className="text-xs">
              Roadmaps iniciados
            </p>
          </div>
          <div className="rounded-xl border p-5 text-center" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <p
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              className="text-2xl font-bold"
            >
              0
            </p>
            <p style={{ color: "var(--muted)" }} className="text-xs">
              Aulas concluídas
            </p>
          </div>
        </div>

        {/* Ações */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            style={{ color: "var(--text)", borderColor: "var(--border)" }}
            className="flex flex-1 items-center justify-center rounded-lg border py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
          >
            Ver roadmaps
          </Link>

          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
            className="flex-1"
          >
            <button
              type="submit"
              style={{ borderColor: "var(--border)", color: "#E5443C" }}
              className="w-full rounded-lg border py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
            >
              Sair da conta
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default async function Perfil() {
  const session = await auth();

  if (!session?.user) {
    return <LoggedOutView />;
  }

  return <LoggedInView user={session.user} />;
}