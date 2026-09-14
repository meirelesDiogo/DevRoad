import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Aula 01 — Fundamentos da Web | DevRoad",
  description:
    "Aprenda os fundamentos da Web, HTML, CSS e JavaScript no DevRoad.",
};

function extrairVideoId(url) {
  if (!url) return null;

  try {
    const urlObj = new URL(url);

    if (urlObj.hostname.includes("youtu.be")) {
      return urlObj.pathname.replace("/", "");
    }

    if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}

export default async function Aula01Page() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="aula-page">
        <section className="acesso-negado">
          <div className="acesso-icone">🔒</div>

          <h1>Faça login para acessar esta aula</h1>

          <p>
            Entre na sua conta do DevRoad para acompanhar seu progresso e
            acessar as aulas.
          </p>

          <Link href="/login" className="btn-primary">
            Entrar na conta
          </Link>
        </section>
      </main>
    );
  }

  const aula = await prisma.aula.findFirst({
    where: {
      id_modulo: 1,
      ordem: 1,
    },
    include: {
      modulo: {
        include: {
          tecnologia: true,
        },
      },
    },
  });

  if (!aula) {
    notFound();
  }

  const videoId = extrairVideoId(aula.youtube_url);

  return (
    <main className="aula-page">
      <div className="aula-container">
        <nav className="breadcrumb">
          <Link href="/roadmaps">Roadmaps</Link>
          <span>/</span>
          <Link href="/roadmaps/html-css">HTML & CSS</Link>
          <span>/</span>
          <span>Aula 01</span>
        </nav>

        <header className="aula-header">
          <div className="aula-header-content">
            <span className="aula-tag">HTML & CSS</span>

            <h1>{aula.titulo}</h1>

            <p className="aula-descricao">
              {aula.descricao ||
                "Aprenda os fundamentos necessários para começar a desenvolver para a Web."}
            </p>

            <div className="aula-meta">
              <span>📘 Aula 01</span>
              <span>⏱️ {aula.tempo_estimado || 20} minutos</span>
              <span>🟢 Nível iniciante</span>
            </div>
          </div>
        </header>

        <div className="aula-layout">
          <section className="aula-conteudo">
            <div className="video-card">
              <div className="video-header">
                <div>
                  <span className="section-label">Videoaula</span>
                  <h2>Assista à aula</h2>
                </div>

                <span className="video-platform">YouTube</span>
              </div>

              {videoId ? (
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={aula.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="video-error">
                  <span>⚠️</span>
                  <p>
                    O vídeo desta aula ainda não foi configurado corretamente.
                  </p>
                </div>
              )}

              <p className="video-help">
                Assista ao vídeo com atenção e depois confira o resumo e o
                exercício abaixo.
              </p>
            </div>

            <section className="content-card">
              <div className="section-heading">
                <span className="section-number">01</span>

                <div>
                  <span className="section-label">Resumo da aula</span>
                  <h2>O que você vai aprender</h2>
                </div>
              </div>

              <p>
                Nesta aula, você conhecerá os fundamentos da Web e entenderá
                como as principais tecnologias trabalham juntas.
              </p>

              <div className="concept-grid">
                <article className="concept-card">
                  <span className="concept-icon">🌐</span>
                  <h3>HTML</h3>
                  <p>
                    Responsável pela estrutura e pelos elementos da página.
                  </p>
                </article>

                <article className="concept-card">
                  <span className="concept-icon">🎨</span>
                  <h3>CSS</h3>
                  <p>
                    Responsável pela aparência, cores, espaçamentos e layout.
                  </p>
                </article>

                <article className="concept-card">
                  <span className="concept-icon">⚙️</span>
                  <h3>JavaScript</h3>
                  <p>
                    Adiciona comportamento e interatividade às páginas.
                  </p>
                </article>
              </div>
            </section>

            <section className="content-card">
              <div className="section-heading">
                <span className="section-number">02</span>

                <div>
                  <span className="section-label">Exercício</span>
                  <h2>Teste seus conhecimentos</h2>
                </div>
              </div>

              <div className="exercise-box">
                <div className="exercise-icon">🧠</div>

                <div>
                  <h3>Atividade da aula</h3>

                  <p>
                    {aula.exercicio ||
                      "Explique com suas palavras a diferença entre HTML, CSS e JavaScript."}
                  </p>
                </div>
              </div>

              <div className="exercise-instructions">
                <h3>Como realizar</h3>

                <ol>
                  <li>Assista à videoaula completa.</li>
                  <li>Escreva sua resposta em um arquivo de texto.</li>
                  <li>Compare sua resposta com o conteúdo apresentado.</li>
                  <li>Depois, avance para a próxima aula.</li>
                </ol>
              </div>
            </section>

            {aula.projeto && (
              <section className="content-card">
                <div className="section-heading">
                  <span className="section-number">03</span>

                  <div>
                    <span className="section-label">Projeto</span>
                    <h2>Prática recomendada</h2>
                  </div>
                </div>

                <div className="project-box">
                  <span className="project-icon">💻</span>
                  <p>{aula.projeto}</p>
                </div>
              </section>
            )}

            {aula.documentacao_url && (
              <section className="documentation-card">
                <div>
                  <span className="section-label">Material complementar</span>
                  <h2>Consulte a documentação</h2>
                  <p>
                    Aprofunde seus conhecimentos com a documentação indicada
                    para esta aula.
                  </p>
                </div>

                <a
                  href={aula.documentacao_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Abrir documentação ↗
                </a>
              </section>
            )}
          </section>

          <aside className="aula-sidebar">
            <div className="progress-card">
              <div className="progress-card-top">
                <div>
                  <span className="section-label">Seu progresso</span>
                  <h2>1 de 8 aulas</h2>
                </div>

                <span className="progress-percent">12%</span>
              </div>

              <div className="progress-bar">
                <span />
              </div>

              <p>
                Continue estudando para concluir o módulo Fundamentos da Web.
              </p>
            </div>

            <div className="sidebar-card">
              <span className="section-label">Nesta aula</span>

              <ul className="lesson-list">
                <li className="active">
                  <span className="lesson-status">▶</span>
                  <div>
                    <strong>Aula 01</strong>
                    <small>Fundamentos da Web</small>
                  </div>
                </li>

                <li>
                  <span className="lesson-status">02</span>
                  <div>
                    <strong>Próxima aula</strong>
                    <small>Em breve</small>
                  </div>
                </li>
              </ul>
            </div>

            <div className="sidebar-card support-card">
              <span className="support-icon">🚀</span>

              <h3>Aprenda na prática</h3>

              <p>
                Faça o exercício da aula antes de avançar para o próximo
                conteúdo.
              </p>
            </div>

            <Link href="/roadmaps/html-css" className="back-roadmap">
              ← Voltar para o roadmap
            </Link>
          </aside>
        </div>
      </div>

      <style>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(body) {
          margin: 0;
          background: #0a0d14;
          color: #edf0f5;
          font-family: Inter, Arial, sans-serif;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        .aula-page {
          min-height: 100vh;
          padding: 38px 24px 80px;
          background:
            radial-gradient(
              circle at 15% 0%,
              rgba(46, 139, 255, 0.1),
              transparent 28%
            ),
            #0a0d14;
        }

        .aula-container {
          width: min(1220px, 100%);
          margin: 0 auto;
        }

        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 34px;
          color: #5c6478;
          font-size: 13px;
        }

        .breadcrumb a {
          color: #8a93a6;
          transition: color 0.2s ease;
        }

        .breadcrumb a:hover {
          color: #2e8bff;
        }

        .aula-header {
          margin-bottom: 34px;
          padding: 42px;
          border: 1px solid #1e2430;
          border-radius: 24px;
          background:
            linear-gradient(
              135deg,
              rgba(46, 139, 255, 0.12),
              rgba(124, 92, 255, 0.06)
            ),
            #10141d;
        }

        .aula-header-content {
          max-width: 800px;
        }

        .aula-tag {
          display: inline-flex;
          padding: 7px 11px;
          border: 1px solid rgba(46, 139, 255, 0.3);
          border-radius: 999px;
          color: #6eaeff;
          background: rgba(46, 139, 255, 0.08);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .aula-header h1 {
          margin: 18px 0 14px;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .aula-descricao {
          max-width: 680px;
          margin: 0;
          color: #8a93a6;
          font-size: 16px;
          line-height: 1.8;
        }

        .aula-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 28px;
          color: #aab3c4;
          font-size: 13px;
        }

        .aula-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 310px;
          align-items: start;
          gap: 26px;
        }

        .aula-conteudo {
          min-width: 0;
        }

        .video-card,
        .content-card,
        .documentation-card,
        .progress-card,
        .sidebar-card {
          border: 1px solid #1e2430;
          border-radius: 20px;
          background: #10141d;
        }

        .video-card {
          overflow: hidden;
        }

        .video-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 25px 28px;
        }

        .section-label {
          display: block;
          margin-bottom: 7px;
          color: #6eaeff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .video-header h2,
        .content-card h2,
        .documentation-card h2 {
          margin: 0;
          font-size: 21px;
          letter-spacing: -0.03em;
        }

        .video-platform {
          padding: 7px 10px;
          border-radius: 8px;
          color: #ff8c8c;
          background: rgba(255, 80, 80, 0.1);
          font-size: 12px;
          font-weight: 700;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          background: #080a0f;
        }

        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-help {
          margin: 0;
          padding: 16px 28px 22px;
          color: #697386;
          font-size: 12px;
          line-height: 1.6;
        }

        .video-error {
          display: grid;
          min-height: 300px;
          place-items: center;
          align-content: center;
          gap: 12px;
          color: #8a93a6;
          text-align: center;
        }

        .video-error span {
          font-size: 30px;
        }

        .video-error p {
          margin: 0;
        }

        .content-card {
          margin-top: 24px;
          padding: 30px;
        }

        .section-heading {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 24px;
        }

        .section-number {
          display: grid;
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          place-items: center;
          border: 1px solid rgba(46, 139, 255, 0.3);
          border-radius: 10px;
          color: #6eaeff;
          background: rgba(46, 139, 255, 0.1);
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
        }

        .content-card > p {
          margin: 0;
          color: #aab3c4;
          font-size: 15px;
          line-height: 1.8;
        }

        .concept-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 25px;
        }

        .concept-card {
          padding: 20px;
          border: 1px solid #1e2430;
          border-radius: 14px;
          background: #0c1018;
        }

        .concept-icon {
          display: block;
          margin-bottom: 15px;
          font-size: 24px;
        }

        .concept-card h3 {
          margin: 0 0 8px;
          font-size: 15px;
        }

        .concept-card p {
          margin: 0;
          color: #7f899d;
          font-size: 12px;
          line-height: 1.6;
        }

        .exercise-box,
        .project-box {
          display: flex;
          align-items: flex-start;
          gap: 17px;
          padding: 20px;
          border: 1px solid rgba(124, 92, 255, 0.25);
          border-radius: 14px;
          background: rgba(124, 92, 255, 0.07);
        }

        .exercise-icon,
        .project-icon {
          font-size: 26px;
        }

        .exercise-box h3 {
          margin: 0 0 8px;
          font-size: 15px;
        }

        .exercise-box p,
        .project-box p {
          margin: 0;
          color: #aab3c4;
          font-size: 14px;
          line-height: 1.7;
        }

        .exercise-instructions {
          margin-top: 25px;
        }

        .exercise-instructions h3 {
          margin: 0 0 13px;
          font-size: 15px;
        }

        .exercise-instructions ol {
          display: grid;
          gap: 10px;
          margin: 0;
          padding-left: 20px;
          color: #8a93a6;
          font-size: 14px;
          line-height: 1.7;
        }

        .documentation-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 24px;
          padding: 26px 30px;
        }

        .documentation-card p {
          margin: 8px 0 0;
          color: #7f899d;
          font-size: 13px;
          line-height: 1.6;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 18px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .btn-primary {
          color: white;
          background: #2e8bff;
        }

        .btn-secondary {
          flex-shrink: 0;
          color: #dce9ff;
          border: 1px solid rgba(46, 139, 255, 0.35);
          background: rgba(46, 139, 255, 0.1);
        }

        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
        }

        .aula-sidebar {
          display: grid;
          gap: 18px;
          position: sticky;
          top: 24px;
        }

        .progress-card,
        .sidebar-card {
          padding: 23px;
        }

        .progress-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .progress-card h2 {
          margin: 0;
          font-size: 20px;
          letter-spacing: -0.03em;
        }

        .progress-percent {
          color: #6eaeff;
          font-size: 13px;
          font-weight: 800;
        }

        .progress-bar {
          height: 7px;
          margin: 20px 0 15px;
          overflow: hidden;
          border-radius: 999px;
          background: #202736;
        }

        .progress-bar span {
          display: block;
          width: 12.5%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #2e8bff, #7c5cff);
        }

        .progress-card p {
          margin: 0;
          color: #7f899d;
          font-size: 12px;
          line-height: 1.6;
        }

        .lesson-list {
          display: grid;
          gap: 10px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .lesson-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 1px solid transparent;
          border-radius: 12px;
        }

        .lesson-list li.active {
          border-color: rgba(46, 139, 255, 0.25);
          background: rgba(46, 139, 255, 0.08);
        }

        .lesson-status {
          display: grid;
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          place-items: center;
          border-radius: 9px;
          color: #8a93a6;
          background: #1b2230;
          font-family: monospace;
          font-size: 11px;
        }

        .lesson-list li.active .lesson-status {
          color: white;
          background: #2e8bff;
        }

        .lesson-list strong,
        .lesson-list small {
          display: block;
        }

        .lesson-list strong {
          margin-bottom: 4px;
          font-size: 12px;
        }

        .lesson-list small {
          color: #697386;
          font-size: 11px;
        }

        .support-card {
          text-align: center;
        }

        .support-icon {
          display: block;
          margin-bottom: 12px;
          font-size: 30px;
        }

        .support-card h3 {
          margin: 0 0 9px;
          font-size: 15px;
        }

        .support-card p {
          margin: 0;
          color: #7f899d;
          font-size: 12px;
          line-height: 1.7;
        }

        .back-roadmap {
          display: block;
          padding: 13px;
          border: 1px solid #1e2430;
          border-radius: 11px;
          color: #8a93a6;
          font-size: 12px;
          text-align: center;
          transition:
            color 0.2s ease,
            border-color 0.2s ease;
        }

        .back-roadmap:hover {
          border-color: #2e8bff;
          color: #6eaeff;
        }

        .acesso-negado {
          width: min(520px, 100%);
          margin: 100px auto;
          padding: 45px 30px;
          border: 1px solid #1e2430;
          border-radius: 22px;
          background: #10141d;
          text-align: center;
        }

        .acesso-icone {
          margin-bottom: 20px;
          font-size: 40px;
        }

        .acesso-negado h1 {
          margin: 0 0 14px;
          font-size: 26px;
        }

        .acesso-negado p {
          margin: 0 auto 25px;
          color: #8a93a6;
          font-size: 14px;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .aula-layout {
            grid-template-columns: 1fr;
          }

          .aula-sidebar {
            position: static;
            grid-template-columns: repeat(2, 1fr);
          }

          .back-roadmap {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 620px) {
          .aula-page {
            padding: 24px 14px 50px;
          }

          .aula-header {
            padding: 28px 22px;
            border-radius: 18px;
          }

          .aula-header h1 {
            font-size: 34px;
          }

          .video-header,
          .content-card,
          .documentation-card {
            padding: 22px;
          }

          .video-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .concept-grid,
          .aula-sidebar {
            grid-template-columns: 1fr;
          }

          .documentation-card {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}