import Link from "next/link";
import { auth } from "@/auth";

export const metadata = {
  title: "JavaScript - DevRoad",
  description:
    "Roadmap completo de JavaScript, dos fundamentos até APIs, assincronismo e desenvolvimento com Node.js.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Fundamentos do JavaScript",
    descricao:
      "Aprenda os conceitos fundamentais da linguagem e comece a escrever seus primeiros códigos em JavaScript.",
    aulas: [
      "O que é JavaScript",
      "Como executar JavaScript",
      "Variáveis",
      "let, const e var",
      "Tipos de dados",
      "Operadores",
      "Conversão de tipos",
      "Entrada e saída de dados",
      "Template literals",
      "Comentários e boas práticas",
    ],
  },
  {
    etapa: "02",
    titulo: "Controle de fluxo",
    descricao:
      "Aprenda a controlar a execução do programa utilizando condições, operadores lógicos e estruturas de repetição.",
    aulas: [
      "if e else",
      "else if",
      "Operador ternário",
      "Operadores lógicos",
      "switch",
      "for",
      "while",
      "do...while",
      "break e continue",
      "Exercícios de lógica",
    ],
  },
  {
    etapa: "03",
    titulo: "Arrays e objetos",
    descricao:
      "Aprenda a trabalhar com estruturas de dados essenciais para praticamente qualquer aplicação JavaScript.",
    aulas: [
      "O que são arrays",
      "Acessando elementos",
      "Adicionando e removendo elementos",
      "Percorrendo arrays",
      "map",
      "filter",
      "find",
      "reduce",
      "O que são objetos",
      "Propriedades e métodos",
      "Destructuring",
      "Spread e Rest",
    ],
  },
  {
    etapa: "04",
    titulo: "Funções",
    descricao:
      "Domine funções e aprenda conceitos importantes como callbacks, escopo, closures e recursão.",
    aulas: [
      "Criando funções",
      "Parâmetros e argumentos",
      "Retorno",
      "Escopo",
      "Function expression",
      "Arrow functions",
      "Callbacks",
      "Funções de alta ordem",
      "Closures",
      "Recursão",
    ],
  },
  {
    etapa: "05",
    titulo: "JavaScript no navegador",
    descricao:
      "Aprenda a utilizar JavaScript para criar páginas interativas manipulando o DOM e respondendo às ações do usuário.",
    aulas: [
      "O que é DOM",
      "Selecionando elementos",
      "Alterando conteúdo",
      "Alterando estilos",
      "Criando elementos",
      "Removendo elementos",
      "Eventos",
      "Formulários",
      "Validação",
      "localStorage",
      "sessionStorage",
      "Projeto: Lista de tarefas",
    ],
  },
  {
    etapa: "06",
    titulo: "JavaScript moderno",
    descricao:
      "Conheça recursos modernos da linguagem utilizados no desenvolvimento de aplicações atuais.",
    aulas: [
      "ES6+",
      "Destructuring avançado",
      "Spread e Rest",
      "Modules",
      "import e export",
      "Optional chaining",
      "Nullish coalescing",
      "Default parameters",
      "Sets e Maps",
      "Date e Math",
    ],
  },
  {
    etapa: "07",
    titulo: "Assincronismo e APIs",
    descricao:
      "Aprenda a trabalhar com operações assíncronas, Promises e APIs REST.",
    aulas: [
      "Código síncrono e assíncrono",
      "Callbacks",
      "Promises",
      "async e await",
      "Tratamento de erros",
      "fetch",
      "Requisições GET",
      "POST, PUT e DELETE",
      "JSON",
      "APIs REST",
      "Consumo de APIs externas",
      "Projeto: Aplicação consumindo API",
    ],
  },
  {
    etapa: "08",
    titulo: "JavaScript para Backend",
    descricao:
      "Dê o próximo passo utilizando JavaScript no backend com Node.js e prepare-se para criar aplicações completas.",
    aulas: [
      "O que é Node.js",
      "Node.js e JavaScript",
      "NPM",
      "package.json",
      "Módulos no Node.js",
      "File System",
      "HTTP com Node.js",
      "Criando um servidor",
      "CRUD em memória",
      "Projeto final com Node.js",
    ],
  },
];

export default async function JavaScriptRoadmap() {
  const session = await auth();
  const isAuthenticated = Boolean(session?.user);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)]">
      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10 blur-[120px]"
        style={{
          background:
            "linear-gradient(90deg, var(--blue), var(--purple))",
        }}
      />

      {/* Cabeçalho */}
      <section className="relative mx-auto max-w-[850px] px-6 pb-14 pt-24 text-center lg:pt-32">
        <Link
          href="/roadmaps"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>

          Voltar para os roadmaps
        </Link>

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <img
            src="/icons/front/javascript.svg"
            alt="JavaScript"
            width={38}
            height={38}
            className="h-10 w-10"
          />
        </div>

        <p
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
        >
          Roadmap · JavaScript
        </p>

        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
        >
          Java
          <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
            Script
          </span>
        </h1>

        <p className="mx-auto max-w-[650px] text-lg leading-relaxed text-[var(--muted)]">
          Aprenda JavaScript do zero. Domine a linguagem, crie aplicações
          interativas no navegador e avance até APIs, assincronismo e Node.js.
        </p>

        {!isAuthenticated && (
          <p className="mt-6 text-sm text-[var(--muted)]">
            <Link
              href="/login"
              className="font-semibold text-[var(--blue)] hover:underline"
            >
              Faça login
            </Link>{" "}
            para acompanhar seu progresso durante o roadmap.
          </p>
        )}

        <div className="road-rule--brand road-rule mx-auto mt-8 w-40" />
      </section>

      {/* Informações */}
      <section className="relative mx-auto max-w-[900px] px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-3">
          <div
            className="rounded-xl border p-5 text-center"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p className="text-2xl font-bold text-[var(--text)]">8</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Etapas</p>
          </div>

          <div
            className="rounded-xl border p-5 text-center"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p className="text-2xl font-bold text-[var(--text)]">86</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Aulas</p>
          </div>

          <div
            className="rounded-xl border p-5 text-center"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p className="text-2xl font-bold text-[var(--text)]">1</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Projeto final</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative mx-auto max-w-[900px] px-6 pb-24">
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px sm:block"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="flex flex-col gap-5">
            {ROADMAP.map((etapa) => (
              <article
                key={etapa.etapa}
                className="relative rounded-2xl border p-6 sm:pl-[78px]"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border sm:absolute sm:left-1 sm:top-6"
                  style={{
                    backgroundColor: "var(--surface-2)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    className="text-xs font-bold text-[var(--blue)]"
                  >
                    {etapa.etapa}
                  </span>
                </div>

                <div className="mb-5">
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "var(--text)",
                    }}
                    className="text-xl font-bold"
                  >
                    {etapa.titulo}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {etapa.descricao}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {etapa.aulas.map((aula, index) => (
                    <div
                      key={aula}
                      className="flex items-center gap-3 rounded-lg border px-4 py-3"
                      style={{
                        backgroundColor: "var(--bg)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold"
                        style={{
                          backgroundColor: "var(--surface-2)",
                          color: "var(--muted)",
                        }}
                      >
                        {index + 1}
                      </span>

                      <span className="text-sm text-[var(--muted)]">
                        {aula}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Link
                    href={
                      isAuthenticated
                        ? `/aulas/javascript/${etapa.etapa}/01`
                        : "/login"
                    }
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    {isAuthenticated
                      ? "Começar etapa"
                      : "Entrar para começar"}

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projeto final */}
      <section className="relative mx-auto max-w-[900px] px-6 pb-24">
        <div
          className="overflow-hidden rounded-2xl border p-7 sm:p-10"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--purple)]"
          >
            Projeto final
          </p>

          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-2xl font-bold text-[var(--text)] sm:text-3xl"
          >
            Agora coloque tudo em prática.
          </h2>

          <p className="mt-3 max-w-[650px] text-sm leading-relaxed text-[var(--muted)]">
            Depois de concluir as etapas, você estará preparado para criar
            aplicações JavaScript, consumir APIs e dar os primeiros passos no
            desenvolvimento backend com Node.js.
          </p>

          <Link
            href={isAuthenticated ? "/projetos/javascript" : "/login"}
            className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(90deg, var(--blue), var(--purple))",
            }}
          >
            {isAuthenticated ? "Ver projeto final" : "Entrar para começar"}

            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}