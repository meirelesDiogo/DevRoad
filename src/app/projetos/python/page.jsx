import Link from "next/link";

export const metadata = {
  title: "Projeto Final Python | DevRoad",
  description:
    "Projeto final da trilha de Python do DevRoad.",
};

export default function ProjetoFinalPython() {
  return (
    <main className="page">
      <div className="container">
        <Link href="/roadmaps/python" className="back">
          ← Voltar para Python
        </Link>

        <div className="hero">
          <span className="tag">PROJETO FINAL</span>

          <h1>Gerenciador de Dados</h1>

          <p>
            Construa uma aplicação completa em Python para gerenciamento
            de informações, aplicando os principais conceitos da trilha.
          </p>
        </div>

        <section className="card">
          <h2>🎯 Objetivo</h2>

          <p>
            Criar um sistema funcional em Python utilizando funções,
            estruturas de dados, orientação a objetos, arquivos,
            tratamento de erros e persistência de dados.
          </p>
        </section>

        <section className="card">
          <h2>📋 Funcionalidades obrigatórias</h2>

          <ul>
            <li>Cadastrar registros</li>
            <li>Listar registros</li>
            <li>Pesquisar registros</li>
            <li>Atualizar registros</li>
            <li>Excluir registros</li>
            <li>Validar dados</li>
            <li>Tratar erros</li>
            <li>Utilizar funções</li>
            <li>Utilizar listas e dicionários</li>
            <li>Utilizar classes e objetos</li>
            <li>Separar o código em módulos</li>
            <li>Salvar os dados em arquivo</li>
            <li>Carregar os dados ao iniciar o programa</li>
          </ul>
        </section>

        <section className="card">
          <h2>💾 Persistência</h2>

          <p>
            Na primeira versão, utilize arquivos JSON para armazenar
            os dados da aplicação.
          </p>

          <p>
            Como desafio adicional, substitua o armazenamento em JSON
            por um banco de dados SQLite.
          </p>
        </section>

        <section className="card">
          <h2>⭐ Desafio extra</h2>

          <ul>
            <li>Utilizar SQLite</li>
            <li>Criar uma camada de acesso aos dados</li>
            <li>Adicionar autenticação simples</li>
            <li>Criar relatórios</li>
            <li>Adicionar testes automatizados</li>
            <li>Criar uma interface gráfica</li>
          </ul>
        </section>

        <div className="actions">
          <Link href="/aulas/python/08/01" className="button secondary">
            ← Voltar às aulas
          </Link>

          <a
            href="https://docs.python.org/pt-br/3/"
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