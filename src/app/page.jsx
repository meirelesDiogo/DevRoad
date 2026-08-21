import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

export const metadata = {
  title: "Home - Aprenda a programar do zero",
  description: "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",
};

const LANGUAGES = [
  { name: "HTML", icon: "/icons/front/html.svg", href: "/roadmaps/html" },
  { name: "CSS", icon: "/icons/front/css.svg", href: "/roadmaps/css" },
  { name: "JavaScript", icon: "/icons/front/javascript.svg", href: "/roadmaps/javascript" },
  { name: "Python", icon: "/icons/back/python.svg", href: "/roadmaps/python" },
  { name: "Java", icon: "/icons/back/java.svg", href: "/roadmaps/java" },
  { name: "PHP", icon: "/icons/back/php.svg", href: "/roadmaps/php" },
];

export default async function Home() {
  // Lê a sessão direto no servidor
  const session = await auth();
  const isLogged = !!session?.user;

  return (
    <main className="relative overflow-hidden bg-[var(--bg)]">
      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      {/* ================= HERO INICIAL ================= */}
      <section className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div className="text-center lg:text-left">
          <p style={{ fontFamily: "'JetBrains Mono', monospace" }} className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]">
            100% gratuito · open source
          </p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            {isLogged ? `Bem-vindo de volta, ${session.user.name?.split(" ")[0]}!` : "Não sabe por onde começar a programar?"}
          </h1>
          <p className="mx-auto max-w-md text-lg leading-relaxed text-[var(--muted)] lg:mx-0">
            {isLogged ? "Escolha sua trilha tecnológica abaixo e continue pavimentando seu futuro." : "Nós te mostramos o caminho."}
          </p>
          <div className="road-rule--brand road-rule mt-8 w-40 lg:mx-0" style={{ margin: "2rem auto 0" }} />
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div aria-hidden className="absolute inset-0 -z-10 rounded-[32px] opacity-30 blur-3xl" style={{ background: "linear-gradient(135deg, var(--blue), var(--purple))" }} />
          <Image src="/estrada.png" alt="Roadmap" width={600} height={400} priority className="w-full max-w-[520px] rounded-2xl border object-cover" style={{ borderColor: "var(--border)" }} />
        </div>
      </section>

      {/* ================= SEÇÃO DINÂMICA DE TRILHAS DISPONÍVEIS ================= */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: "var(--border)" }}>
        <Image src="/estrada.png" alt="" fill priority className="object-cover opacity-10" />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--bg) 0%, rgba(10,13,20,0.8) 50%, var(--bg) 100%)" }} />
 
        <div className="relative mx-auto max-w-[1180px] px-6 py-20">
          <div className="mb-12 text-center">
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-bold text-[var(--text)]">
              Sua Jornada de Aprendizado
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2">
              Selecione uma linguagem para acessar os roadmaps interativos e marcar conclusões.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang.name}
                // 🔄 Se o usuário não estiver logado, manda ele pro login. Se estiver, abre a trilha!
                href={isLogged ? lang.href : "/login"}
                className="group flex flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all hover:-translate-y-1"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              >
                <img src={lang.icon} alt={lang.name} width={40} height={40} className="h-10 w-10 transition-transform group-hover:scale-110" />
   
                <span style={{ color: "var(--text)" }} className="text-sm font-semibold">
                  {lang.name}
                </span>
   
                <span
                  style={{ color: "var(--muted)" }}
                  className="flex items-center gap-1 text-xs font-medium transition-colors group-hover:!text-[var(--blue)]"
                >
                  {isLogged ? "Acessar Trilhas" : "Entrar para começar"}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
