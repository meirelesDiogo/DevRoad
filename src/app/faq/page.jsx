"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * FAQ — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/faq/page.jsx
 * Precisa de "use client" por causa do useState do accordion.
 */

const FAQ_ITEMS = [
  {
    question: "O DevRoad é realmente 100% gratuito?",
    answer:
      "Sim. Todas as funcionalidades essenciais — roadmaps, aulas, exercícios, projetos e acompanhamento de progresso — são e sempre serão gratuitas. O DevRoad é um projeto open source, não existe plano pago escondido.",
  },
  {
    question: "Preciso criar conta pra usar a plataforma?",
    answer:
      "Não pra tudo. Você pode navegar pelos roadmaps e ver as aulas sem conta. Mas pra marcar aulas como concluídas e acompanhar seu progresso, é necessário fazer login — usando Google, GitHub, GitLab ou Discord.",
  },
  {
    question: "Quais linguagens estão disponíveis?",
    answer:
      "Atualmente: HTML/CSS, JavaScript, Python, Java e PHP. Novos roadmaps são adicionados conforme o projeto evolui — fique de olho nos anúncios do nosso servidor Discord.",
  },
  {
    question: "Como funciona o login?",
    answer:
      "Usamos autenticação via OAuth com provedores que você já tem conta (Google, GitHub, GitLab, Discord). Não armazenamos sua senha — o login é processado inteiramente por esses provedores, com segurança.",
  },
  {
    question: "Posso contribuir com o projeto?",
    answer:
      "Sim, e é muito bem-vindo! O código é público no GitHub. Dá pra contribuir com código, reportar bugs, sugerir features ou até ajudar outras pessoas no Discord. Veja o guia de contribuição no repositório pra começar.",
  },
  {
    question: "Vocês vão cobrar no futuro?",
    answer:
      "Não é nosso plano. O DevRoad nasceu pra ser uma alternativa gratuita e acessível pra quem tá começando na programação, e essa é a base do projeto — não algo que pretendemos mudar.",
  },
  {
    question: "Não sei nada de programação, posso começar mesmo assim?",
    answer:
      "Com certeza. Os roadmaps são pensados justamente pra quem nunca programou antes, começando do absoluto zero até o nível avançado.",
  },
  {
    question: "Onde posso tirar dúvidas ou pedir ajuda?",
    answer:
      "No nosso servidor do Discord — tem canais de ajuda separados por linguagem, além de um canal geral pra dúvidas sobre carreira, estudos e ferramentas.",
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <main className="relative overflow-hidden bg-[var(--bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10 blur-[120px]"
        style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))" }}
      />

      {/* Cabeçalho */}
      <section className="relative mx-auto max-w-[700px] px-6 pb-14 pt-24 text-center lg:pt-32">
        <p
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
        >
          Perguntas frequentes
        </p>

        <h1
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
        >
          Tirando suas{" "}
          <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
            dúvidas
          </span>
        </h1>

        <p className="mx-auto max-w-md text-lg leading-relaxed text-[var(--muted)]">
          Não achou o que procurava? Pergunta pra comunidade no nosso Discord.
        </p>

        <div className="road-rule--brand road-rule mx-auto mt-8 w-40" />
      </section>

      {/* Accordion */}
      <section className="relative mx-auto max-w-[720px] px-6 pb-24">
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border transition-colors"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: isOpen ? "var(--blue)" : "var(--border)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span style={{ color: "var(--text)" }} className="text-sm font-semibold sm:text-base">
                    {item.question}
                  </span>
                  <span style={{ color: isOpen ? "var(--blue)" : "var(--muted)" }}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4">
                    <p style={{ color: "var(--muted)" }} className="text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative border-t px-6 py-20 text-center" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <h2
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          className="mb-3 text-xl font-bold"
        >
          Ainda com dúvidas?
        </h2>
        <p style={{ color: "var(--muted)" }} className="mb-7 text-sm leading-relaxed">
          Nossa comunidade no Discord tá sempre pronta pra ajudar.
        </p>
        <Link
          href="https://discord.com/invite/qjjZC6S5Th"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "linear-gradient(90deg, var(--blue), var(--purple))", color: "#08090C" }}
          className="inline-flex items-center gap-1.5 rounded-lg px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-px"
        >
          Entrar no Discord
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}