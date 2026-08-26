"use client";

import { useState } from "react";

export default function BugsPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    pagina: "",
    tipo: "Bug",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const assunto = `[DevRoad] Reporte de Bug - ${form.tipo}`;

    const corpo = `
Nome: ${form.nome}
E-mail: ${form.email}
Página: ${form.pagina}
Tipo: ${form.tipo}

Descrição do problema:
${form.descricao}
    `.trim();

    const mailto = `mailto:meirelesdiogo.dev@gmail.com?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailto;
  };

  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Cabeçalho */}
        <section className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-1 w-12 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              }}
            />

            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
              Suporte
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Reportar um bug
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#8A93A6]">
            Encontrou algum problema no DevRoad? Ajude a melhorar a
            plataforma informando o que aconteceu.
          </p>
        </section>

        {/* Conteúdo */}
        <section className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Informações */}
          <div className="space-y-5">

            <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#18243A] text-xl">
                🐛
              </div>

              <h2 className="text-xl font-semibold">
                O que é um bug?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#8A93A6]">
                Um bug é um comportamento inesperado ou um problema que
                impede alguma parte do DevRoad de funcionar corretamente.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-7">
              <h2 className="text-xl font-semibold">
                O que informar?
              </h2>

              <ul className="mt-4 space-y-3 text-sm text-[#8A93A6]">
                <li className="flex gap-3">
                  <span className="text-[#2E8BFF]">01</span>
                  <span>Em qual página o problema aconteceu.</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#2E8BFF]">02</span>
                  <span>O que você estava tentando fazer.</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#2E8BFF]">03</span>
                  <span>O que aconteceu.</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#2E8BFF]">04</span>
                  <span>Se possível, como reproduzir o problema.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-7">
              <p className="text-sm leading-7 text-[#8A93A6]">
                Você também pode contribuir diretamente com o código do
                projeto através do GitHub.
              </p>

              <a
                href="https://github.com/meirelesDiogo/DevRoad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2E8BFF] transition-colors hover:text-[#7C5CFF]"
              >
                Abrir GitHub
                <span>↗</span>
              </a>
            </div>

          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-7 md:p-9"
          >

            <div className="mb-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#7C5CFF]">
                Formulário
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Conte o que aconteceu
              </h2>

              <p className="mt-2 text-sm text-[#8A93A6]">
                Quanto mais informações você fornecer, mais fácil será
                identificar o problema.
              </p>
            </div>

            {/* Nome */}
            <div className="mb-5">
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-medium"
              >
                Nome
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="w-full rounded-lg border border-[#1E2430] bg-[#0A0D14] px-4 py-3 text-sm text-[#EDF0F5] outline-none transition-colors placeholder:text-[#5C6478] focus:border-[#2E8BFF]"
              />
            </div>

            {/* E-mail */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="w-full rounded-lg border border-[#1E2430] bg-[#0A0D14] px-4 py-3 text-sm text-[#EDF0F5] outline-none transition-colors placeholder:text-[#5C6478] focus:border-[#2E8BFF]"
              />
            </div>

            {/* Página */}
            <div className="mb-5">
              <label
                htmlFor="pagina"
                className="mb-2 block text-sm font-medium"
              >
                Página onde aconteceu
              </label>

              <input
                id="pagina"
                name="pagina"
                type="text"
                value={form.pagina}
                onChange={handleChange}
                placeholder="/roadmaps/node.js"
                className="w-full rounded-lg border border-[#1E2430] bg-[#0A0D14] px-4 py-3 text-sm text-[#EDF0F5] outline-none transition-colors placeholder:text-[#5C6478] focus:border-[#2E8BFF]"
              />
            </div>

            {/* Tipo */}
            <div className="mb-5">
              <label
                htmlFor="tipo"
                className="mb-2 block text-sm font-medium"
              >
                Tipo do problema
              </label>

              <select
                id="tipo"
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#1E2430] bg-[#0A0D14] px-4 py-3 text-sm text-[#EDF0F5] outline-none focus:border-[#2E8BFF]"
              >
                <option value="Bug">Bug / Erro</option>
                <option value="Página quebrada">Página quebrada</option>
                <option value="Link quebrado">Link quebrado</option>
                <option value="Problema visual">Problema visual</option>
                <option value="Problema de conteúdo">
                  Problema de conteúdo
                </option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Descrição */}
            <div className="mb-7">
              <label
                htmlFor="descricao"
                className="mb-2 block text-sm font-medium"
              >
                Descrição
              </label>

              <textarea
                id="descricao"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                placeholder="Descreva detalhadamente o problema..."
                required
                rows={7}
                className="w-full resize-none rounded-lg border border-[#1E2430] bg-[#0A0D14] px-4 py-3 text-sm leading-6 text-[#EDF0F5] outline-none transition-colors placeholder:text-[#5C6478] focus:border-[#2E8BFF]"
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              }}
            >
              Enviar relatório
              <span>→</span>
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#5C6478]">
              Ao enviar, seu aplicativo de e-mail será aberto com as
              informações do relatório preenchidas.
            </p>

          </form>
        </section>

        {/* Rodapé da página */}
        <section className="mt-16 border-t border-[#1E2430] pt-8">
          <p className="text-center text-sm text-[#5C6478]">
            Encontrou um problema? Obrigado por ajudar a tornar o DevRoad
            melhor.
          </p>
        </section>

      </div>
    </main>
  );
}