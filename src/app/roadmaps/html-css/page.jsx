import Link from "next/link";
import { auth } from "@/auth";

export const metadata = {
title: "HTML & CSS - DevRoad",
description:
"Roadmap completo de HTML e CSS, do zero até a criação de páginas modernas e responsivas.",
};

const ROADMAP = [
{
etapa: "01",
titulo: "Fundamentos da Web",
descricao:
"Entenda como a Web funciona antes de começar a criar suas próprias páginas.",
aulas: [
"Como funciona a Internet",
"Cliente e servidor",
"HTTP e HTTPS",
"Navegadores e servidores",
"HTML, CSS e JavaScript",
"Estrutura básica de uma página Web",
],
},
{
etapa: "02",
titulo: "HTML",
descricao:
"Aprenda a estruturar páginas utilizando HTML semântico e boas práticas.",
aulas: [
"O que é HTML",
"Estrutura de um documento HTML",
"Tags e elementos",
"Títulos e parágrafos",
"Links",
"Imagens",
"Listas",
"Tabelas",
"Formulários",
"Inputs e botões",
"HTML semântico",
"Acessibilidade básica",
],
},
{
etapa: "03",
titulo: "CSS",
descricao:
"Aprenda a transformar uma estrutura HTML em uma interface visual.",
aulas: [
"O que é CSS",
"Como adicionar CSS ao HTML",
"Seletores",
"Classes e IDs",
"Cores",
"Fontes e tipografia",
"Unidades de medida",
"Margens e espaçamentos",
"Bordas",
"Backgrounds",
"Box Model",
],
},
{
etapa: "04",
titulo: "Layout com CSS",
descricao:
"Domine as principais ferramentas utilizadas para criar layouts modernos.",
aulas: [
"Display",
"Block e Inline",
"Position",
"Flexbox",
"Flex Direction",
"Justify Content",
"Align Items",
"Gap",
"CSS Grid",
"Grid Columns e Rows",
"Alinhamento e distribuição",
],
},
{
etapa: "05",
titulo: "Responsividade",
descricao:
"Aprenda a criar páginas que funcionam corretamente em celulares, tablets e computadores.",
aulas: [
"O que é responsividade",
"Mobile First",
"Media Queries",
"Unidades relativas",
"Imagens responsivas",
"Layouts adaptáveis",
"Breakpoints",
"Responsividade com Flexbox",
"Responsividade com Grid",
],
},
{
etapa: "06",
titulo: "CSS Avançado",
descricao:
"Vá além do básico e aprenda recursos utilizados em projetos profissionais.",
aulas: [
"Pseudo-classes",
"Pseudo-elementos",
"Transitions",
"Transforms",
"Animations",
"Variáveis CSS",
"Gradientes",
"Sombras",
"Customização de componentes",
"Organização do CSS",
],
},
{
etapa: "07",
titulo: "Boas Práticas",
descricao:
"Aprenda a escrever código mais organizado, acessível e fácil de manter.",
aulas: [
"HTML semântico",
"Acessibilidade",
"SEO básico",
"Organização de arquivos",
"Nomenclatura de classes",
"Clean CSS",
"Performance básica",
],
},
{
etapa: "08",
titulo: "Projeto Prático",
descricao:
"Coloque tudo em prática construindo uma página completa do zero.",
aulas: [
"Planejamento da interface",
"Estrutura HTML",
"Estilização com CSS",
"Layout responsivo",
"Mobile First",
"Acessibilidade",
"Revisão do código",
"Publicação do projeto",
],
},
];

export default async function HtmlCssRoadmap() {
const session = await auth();
const isAuthenticated = Boolean(session?.user);

return ( <main className="relative min-h-screen overflow-hidden bg-[var(--bg)]">
{/* Glow de fundo */}
<div
aria-hidden
className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10 blur-[120px]"
style={{
background:
"linear-gradient(90deg, var(--blue), var(--purple))",
}}
/>

```
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
        src="/icons/front/html.svg"
        alt="HTML"
        width={38}
        height={38}
        className="h-10 w-10"
      />
    </div>

    <p
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
    >
      Roadmap · Front-end
    </p>

    <h1
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
    >
      HTML{" "}
      <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
        & CSS
      </span>
    </h1>

    <p className="mx-auto max-w-[650px] text-lg leading-relaxed text-[var(--muted)]">
      Aprenda a criar páginas Web do zero. Comece pela estrutura com HTML,
      domine o CSS e termine criando interfaces modernas e responsivas.
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
        <p className="text-2xl font-bold text-[var(--text)]">50+</p>
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
      {/* Linha vertical */}
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
            {/* Número */}
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

            {/* Aulas */}
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

            {/* Botão */}
            <div className="mt-5">
              <Link
                href={
                  isAuthenticated
                    ? `/aulas/html-css/${etapa.etapa}`
                    : "/login"
                }
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                {isAuthenticated ? "Começar etapa" : "Entrar para começar"}

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
        Depois de concluir as etapas, você estará preparado para construir
        uma página completa utilizando HTML e CSS, com layout responsivo,
        organização de código e boas práticas.
      </p>

      <Link
        href={isAuthenticated ? "/projetos/html-css" : "/login"}
        className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{
          background: "linear-gradient(90deg, var(--blue), var(--purple))",
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
