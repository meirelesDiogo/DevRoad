"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * Cadastro — DevRoad (Parte 1: Lógica do Sistema)
 * -------------------------------------------------------------
 * Local: src/app/cadastro/page.jsx
 */

export default function CadastroPage() {
  const router = useRouter();

  // Estados para controlar os campos do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    foto: "",
  });

  // Estados para feedback visual do usuário
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Atualiza o estado conforme o usuário digita nos campos comuns
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Intercepta o arquivo de imagem e converte para string Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 1024 * 1024) {
        setErro("Escolha uma foto de perfil menor que 1MB.");
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          foto: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Função disparada ao enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");
    setCarregando(true);

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const textoResposta = await response.text();
      let dados = {};

      try {
        dados = JSON.parse(textoResposta);
      } catch (parseError) {
        throw new Error(
          `O servidor retornou HTML (Status ${response.status}).`,
        );
      }

      if (!response.ok) {
        throw new Error(dados.error || "Ocorreu um erro ao criar a conta.");
      }

      setSucesso("Conta criada com sucesso! Redirecionando...");
      setFormData({ nome: "", email: "", telefone: "", senha: "", foto: "" });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  };
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0D14] px-6 py-16">
      {/* Glows decorativos de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            "linear-gradient(90deg, var(--blue, #2E8BFF), var(--purple, #7C5CFF))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full opacity-20 blur-[100px]"
        style={{ background: "var(--purple, #7C5CFF)" }}
      />

      {/* Voltar pro início */}
      <Link
        href="/"
        className="absolute left-6 top-6 z-10 flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#EDF0F5]"
        style={{ color: "var(--muted, #8A93A6)" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar para o início
      </Link>

      {/* Card Central */}
      <div className="group relative z-10 w-full max-w-[440px]">
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#2E8BFF] via-[#7C5CFF] to-[#2E8BFF] opacity-25 blur-md transition-all duration-500 group-hover:opacity-50 group-hover:blur-lg" />

        <div
          className="relative rounded-3xl border px-9 py-11 shadow-2xl backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            backgroundColor: "rgba(16,20,29,0.72)",
            borderColor: "var(--border, #1E2430)",
          }}
        >
          {/* Cabeçalho */}
          <div className="mb-8 text-center">
            <h1
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="mb-2 text-2xl font-bold tracking-tight text-[#EDF0F5]"
            >
              Crie sua conta no{" "}
              <span style={{ color: "var(--blue, #2E8BFF)" }}>Dev</span>Road
            </h1>
            <p
              style={{ color: "var(--muted, #8A93A6)" }}
              className="text-sm leading-relaxed"
            >
              Comece a mapear sua jornada e marcar seu progresso hoje.
            </p>
          </div>

          {/* Alertas de Feedback Dinâmicos */}
          {erro && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-xs font-medium text-red-400 break-words">
              {erro}
            </div>
          )}
          {sucesso && (
            <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-center text-xs font-medium text-green-400">
              {sucesso}
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Campo da Foto com Preview */}
            <div className="flex flex-col items-center gap-3 mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#EDF0F5] self-start">
                Foto de Perfil:
              </label>
              <div className="flex items-center gap-4 w-full">
                <div
                  className="relative h-14 w-14 overflow-hidden rounded-full border border-dashed flex items-center justify-center bg-[#10141D]"
                  style={{ borderColor: "var(--border, #1E2430)" }}
                >
                  {formData.foto ? (
                    <img
                      src={formData.foto}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5C6478"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  )}
                </div>
                <input
                  id="foto"
                  name="foto"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="foto"
                  className="cursor-pointer rounded-xl border border-[#1E2430] bg-[#10141D] px-4 py-2 text-xs font-medium text-[#EDF0F5] transition-colors hover:border-[#2E8BFF]"
                >
                  Selecionar imagem
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="nome"
                className="text-xs font-semibold uppercase tracking-wider text-[#EDF0F5]"
              >
                Nome Completo:
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: João Silva"
                className="w-full rounded-xl border bg-[#10141D] px-4 py-3 text-sm text-[#EDF0F5] placeholder-[#5C6478] outline-none transition-all focus:border-[#2E8BFF]"
                style={{ borderColor: "var(--border, #1E2430)" }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-[#EDF0F5]"
              >
                E-mail:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full rounded-xl border bg-[#10141D] px-4 py-3 text-sm text-[#EDF0F5] placeholder-[#5C6478] outline-none transition-all focus:border-[#2E8BFF]"
                style={{ borderColor: "var(--border, #1E2430)" }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="telefone"
                className="text-xs font-semibold uppercase tracking-wider text-[#EDF0F5]"
              >
                Telefone (Opcional):
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="w-full rounded-xl border bg-[#10141D] px-4 py-3 text-sm text-[#EDF0F5] placeholder-[#5C6478] outline-none transition-all focus:border-[#2E8BFF]"
                style={{ borderColor: "var(--border, #1E2430)" }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="senha"
                className="text-xs font-semibold uppercase tracking-wider text-[#EDF0F5]"
              >
                Senha:
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                required
                value={formData.senha}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-xl border bg-[#10141D] px-4 py-3 text-sm text-[#EDF0F5] placeholder-[#5C6478] outline-none transition-all focus:border-[#2E8BFF]"
                style={{ borderColor: "var(--border, #1E2430)" }}
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="mt-2 w-full rounded-xl py-3 text-sm font-semibold text-[#08090C] transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              style={{ background: "linear-gradient(90deg, #2E8BFF, #7C5CFF)" }}
            >
              {carregando ? "Criando conta..." : "Criar minha conta grátis"}
            </button>
          </form>

          {/* Rodapé do Card */}
          <p
            className="mt-8 text-center text-sm"
            style={{ color: "var(--muted, #8A93A6)" }}
          >
            Já tem uma conta?{" "}
            <Link
              href="/login"
              style={{ color: "var(--blue, #2E8BFF)" }}
              className="font-semibold hover:underline"
            >
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
