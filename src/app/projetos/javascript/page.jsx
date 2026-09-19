import Link from "next/link";

export const metadata = {
  title: "Projeto Final JavaScript | DevRoad",
  description:
    "Projeto final da trilha de JavaScript do DevRoad.",
};

export default function ProjetoFinalJavaScript() {
  return (
    <main className="page">
      <div className="container">
        <Link href="/roadmaps/javascript" className="back">
          ← Voltar para JavaScript
        </Link>

        <div className="hero">
          <span className="tag">PROJETO FINAL</span>

          <h1>Task Manager</h1>

          <p>
            Construa uma aplicação completa de gerenciamento de tarefas
            utilizando JavaScript moderno.
          </p>
        </div>

        <section className="card">
          <h2>🎯 Objetivo</h2>

          <p>
            Desenvolver uma aplicação interativa utilizando JavaScript
            para controlar a interface, manipular dados e consumir uma
            API.
          </p>
        </section>

        <section className="card">
          <h2>📋 Funcionalidades obrigatórias</h2>

          <ul>
            <li>Criar tarefas</li>
            <li>Editar tarefas</li>
            <li>Excluir tarefas</li>
            <li>Marcar tarefas como concluídas</li>
            <li>Filtrar tarefas</li>
            <li>Pesquisar tarefas</li>
            <li>Validação de formulários</li>
            <li>Manipulação do DOM</li>
            <li>Eventos</li>
            <li>Arrays e objetos</li>
            <li>LocalStorage</li>
            <li>async/await</li>
            <li>Consumo de API</li>
            <li>Tratamento de erros</li>
          </ul>
        </section>

        <section className="card">
          <h2>🌐 API</h2>

          <p>
            A aplicação deve consumir uma API externa para adicionar
            informações ao projeto.
          </p>

          <p>
            Você pode utilizar uma API pública ou criar uma API própria
            posteriormente utilizando Node.js.
          </p>
        </section>

        <section className="card">
          <h2>⭐ Desafio extra</h2>

          <ul>
            <li>Dark mode</li>
            <li>Drag and drop</li>
            <li>Filtros avançados</li>
            <li>Paginação</li>
            <li>Modularização com ES Modules</li>
            <li>Deploy da aplicação</li>
          </ul>
        </section>

        <div className="actions">
          <Link href="/aulas/javascript/08/01" className="button secondary">
            ← Voltar às aulas
          </Link>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
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