import Link from "next/link";
import { auth } from "@/auth";

export const metadata = {
  title: "Python - DevRoad",
  description:
    "Roadmap completo de Python, dos fundamentos até projetos, orientação a objetos, arquivos, APIs e desenvolvimento backend.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Fundamentos do Python",
    descricao:
      "Aprenda a sintaxe da linguagem e os conceitos fundamentais para começar a programar com Python.",
    aulas: [
      "O que é Python",
      "Instalação e ambiente",
      "Primeiro programa",
      "Variáveis",
      "Tipos de dados",
      "Entrada de dados",
      "Saída de dados",
      "Operadores",
      "Conversão de tipos",
      "Comentários e boas práticas",
    ],
  },
  {
    etapa: "02",
    titulo: "Controle de fluxo",
    descricao:
      "Aprenda a criar programas capazes de tomar decisões e repetir tarefas automaticamente.",
    aulas: [
      "if",
      "else",
      "elif",
      "Operadores de comparação",
      "Operadores lógicos",
      "match",
      "for",
      "while",
      "break e continue",
      "Exercícios de lógica",
    ],
  },
  {
    etapa: "03",
    titulo: "Estruturas de dados",
    descricao:
      "Domine listas, tuplas, conjuntos e dicionários para organizar e manipular informações.",
    aulas: [
      "Listas",
      "Índices e slicing",
      "Métodos de listas",
      "Percorrendo listas",
      "List comprehension",
      "Tuplas",
      "Sets",
      "Dicionários",
      "Métodos de dicionários",
      "Estruturas de dados aninhadas",
      "Desempacotamento",
      "Exercícios com estruturas de dados",
    ],
  },
  {
    etapa: "04",
    titulo: "Funções e módulos",
    descricao:
      "Aprenda a organizar seus programas utilizando funções, módulos e pacotes reutilizáveis.",
    aulas: [
      "Criando funções",
      "Parâmetros",
      "Argumentos",
      "Retorno",
      "Argumentos padrão",
      "*args e **kwargs",
      "Escopo",
      "Funções lambda",
      "Módulos",
      "Import e from",
      "Pacotes",
      "Ambientes virtuais",
    ],
  },
  {
    etapa: "05",
    titulo: "Arquivos e tratamento de erros",
    descricao:
      "Aprenda a trabalhar com arquivos e lidar corretamente com erros durante a execução dos programas.",
    aulas: [
      "Abrindo arquivos",
      "Leitura de arquivos",
      "Escrita de arquivos",
      "with open",
      "Arquivos TXT",
      "Arquivos JSON",
      "Arquivos CSV",
      "try e except",
      "else e finally",
      "raise",
      "Criando erros personalizados",
      "Projeto: Sistema de cadastro",
    ],
  },
  {
    etapa: "06",
    titulo: "Programação Orientada a Objetos",
    descricao:
      "Aprenda os principais conceitos de orientação a objetos e como utilizá-los para estruturar aplicações maiores.",
    aulas: [
      "O que é orientação a objetos",
      "Classes",
      "Objetos",
      "Atributos",
      "Métodos",
      "Construtor __init__",
      "Encapsulamento",
      "Herança",
      "Polimorfismo",
      "Métodos especiais",
      "Classes e módulos",
      "Projeto: Sistema orientado a objetos",
    ],
  },
  {
    etapa: "07",
    titulo: "Python para Web e APIs",
    descricao:
      "Dê os primeiros passos no desenvolvimento Web utilizando Python e aprenda a trabalhar com APIs.",
    aulas: [
      "Python no desenvolvimento Web",
      "Requisições HTTP",
      "JSON e APIs",
      "Consumindo APIs",
      "Criando uma API",
      "Rotas",
      "Métodos HTTP",
      "Status HTTP",
      "Banco de dados",
      "CRUD",
      "Autenticação",
      "Projeto: API REST",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto Prático",
    descricao:
      "Aplique os conhecimentos do roadmap construindo uma aplicação completa em Python.",
    aulas: [
      "Planejamento do projeto",
      "Estrutura da aplicação",
      "Modelagem dos dados",
      "Implementação do backend",
      "Integração com banco de dados",
      "Criação das rotas",
      "Tratamento de erros",
      "Testes da aplicação",
      "Documentação da API",
      "Publicação do projeto",
    ],
  },
];

export default async function PythonRoadmap() {
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
            src="/icons/back/python.svg"
            alt="Python"
            width={38}
            height={38}
            className="h-10 w-10"
          />
        </div>

        <p
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
        >
          Roadmap · Backend
        </p>

        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
        >
          <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
            Python
          </span>
        </h1>

        <p className="mx-auto max-w-[650px] text-lg leading-relaxed text-[var(--muted)]">
          Aprenda Python do zero. Desenvolva sua lógica de programação,
          domine a linguagem e avance até APIs, banco de dados e projetos
          completos.
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
                        ? `/aulas/python/${etapa.etapa}/01`
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
            aplicações em Python, trabalhar com APIs e banco de dados e
            construir projetos completos.
          </p>

          <Link
            href={isAuthenticated ? "/projetos/python" : "/login"}
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