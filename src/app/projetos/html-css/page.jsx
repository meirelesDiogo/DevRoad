import Link from "next/link";

export const metadata = {
  title: "Projeto Final HTML & CSS | DevRoad",
  description:
    "Projeto final da trilha de HTML e CSS do DevRoad.",
};

export default function ProjetoFinalHtmlCss() {
  return (
    <main className="page">
      <div className="container">
        <Link href="/roadmaps/html-css" className="back">
          ← Voltar para HTML & CSS
        </Link>

        <div className="hero">
          <span className="tag">PROJETO FINAL</span>

          <h1>Landing Page Responsiva</h1>

          <p>
            Construa uma landing page completa utilizando HTML5 e CSS3,
            aplicando os principais conceitos aprendidos durante a trilha.
          </p>
        </div>

        <section className="card">
          <h2>🎯 Objetivo</h2>

          <p>
            Criar uma interface profissional, responsiva e acessível,
            demonstrando domínio de estrutura HTML e estilização com CSS.
          </p>
        </section>

        <section className="card">
          <h2>📋 Requisitos</h2>

          <ul>
            <li>HTML5 semântico</li>
            <li>Header e navegação</li>
            <li>Seção principal com chamada para ação</li>
            <li>Seção de apresentação</li>
            <li>Seção de serviços ou recursos</li>
            <li>Cards</li>
            <li>Formulário de contato</li>
            <li>Footer</li>
            <li>Flexbox e/ou CSS Grid</li>
            <li>Mobile First</li>
            <li>Media Queries</li>
            <li>Responsividade</li>
            <li>Acessibilidade básica</li>
            <li>Organização dos arquivos</li>
          </ul>
        </section>

        <section className="card">
          <h2>🚀 Desafio</h2>

          <p>
            Crie uma landing page para uma empresa fictícia de tecnologia.
            A página deve apresentar a empresa, seus serviços, benefícios,
            depoimentos e uma chamada para contato.
          </p>

          <p>
            A interface deve funcionar corretamente em celular, tablet e
            computador.
          </p>
        </section>

        <section className="card">
          <h2>⭐ Desafio extra</h2>

          <ul>
            <li>Adicionar animações com CSS</li>
            <li>Criar menu mobile</li>
            <li>Adicionar modo escuro</li>
            <li>Melhorar acessibilidade</li>
            <li>Publicar o projeto na internet</li>
          </ul>
        </section>

        <div className="actions">
          <Link href="/aulas/html-css/08/01" className="button secondary">
            ← Voltar às aulas
          </Link>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Consultar documentação →
          </a>
        </div>
      </div>

      <style>{styles}</style>
    </main>
  );
}

const styles = `
  :root {
    --bg: #0A0D14;
    --surface: #10141D;
    --border: #1E2430;
    --blue: #2E8BFF;
    --purple: #7C5CFF;
    --text: #EDF0F5;
    --muted: #8A93A6;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: Inter, Arial, sans-serif;
  }

  .page {
    min-height: 100vh;
    padding: 50px 20px;
    background:
      radial-gradient(
        circle at top right,
        rgba(46, 139, 255, 0.08),
        transparent 30%
      ),
      var(--bg);
  }

  .container {
    max-width: 900px;
    margin: auto;
  }

  .back {
    color: var(--muted);
    font-size: 14px;
  }

  .back:hover {
    color: var(--text);
  }

  .hero {
    margin: 55px 0 35px;
  }

  .tag {
    color: var(--blue);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  h1 {
    font-size: clamp(38px, 6vw, 64px);
    line-height: 1;
    letter-spacing: -2px;
    margin: 14px 0 20px;
  }

  .hero p {
    max-width: 700px;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.7;
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-bottom: 18px;
  }

  h2 {
    margin: 0 0 18px;
    font-size: 21px;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.7;
  }

  ul {
    padding-left: 22px;
    margin: 0;
  }

  li {
    margin-bottom: 7px;
  }

  .actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .button {
    background: var(--blue);
    color: white;
    padding: 12px 17px;
    border-radius: 9px;
    font-weight: 700;
    font-size: 14px;
  }

  .button.secondary {
    background: var(--surface);
    border: 1px solid var(--border);
  }
`;