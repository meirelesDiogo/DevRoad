import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Aula 01 — Fundamentos da Web | DevRoad",
  description:
    "Aprenda os fundamentos da Web e conheça a estrutura básica de uma página HTML.",
};

function extrairVideoId(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    // https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.replace("/", "");
    }

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (
      parsedUrl.hostname.includes("youtube.com") &&
      parsedUrl.searchParams.get("v")
    ) {
      return parsedUrl.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}

export default async function Aula01Page() {
  // =========================================================
  // 1. VERIFICAR AUTENTICAÇÃO
  // =========================================================

  const session = await auth();

  if (!session?.user) {
    return (
      <main className="lesson-page">
        <section className="login-required">
          <div className="login-card">
            <div className="login-icon">🔒</div>

            <h1>Faça login para acessar esta aula</h1>

            <p>
              Para aprender no DevRoad, você precisa estar conectado à sua
              conta.
            </p>

            <div className="login-actions">
              <Link href="/login" className="primary-button">
                Entrar
              </Link>

              <Link href="/cadastro" className="secondary-button">
                Criar conta
              </Link>
            </div>
          </div>
        </section>

        <style>{`
          .lesson-page {
            min-height: 100vh;
            background: #0A0D14;
            color: #EDF0F5;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
          }

          .login-required {
            width: 100%;
            max-width: 520px;
          }

          .login-card {
            background: #10141D;
            border: 1px solid #1E2430;
            border-radius: 20px;
            padding: 48px 32px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          }

          .login-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto 24px;
            border-radius: 16px;
            background: rgba(46, 139, 255, 0.1);
            border: 1px solid rgba(46, 139, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
          }

          .login-card h1 {
            margin: 0 0 14px;
            font-size: 28px;
            line-height: 1.2;
          }

          .login-card p {
            margin: 0 auto;
            max-width: 400px;
            color: #8A93A6;
            line-height: 1.7;
          }

          .login-actions {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 30px;
            flex-wrap: wrap;
          }

          .primary-button,
          .secondary-button {
            text-decoration: none;
            padding: 12px 20px;
            border-radius: 10px;
            font-weight: 600;
            transition: 0.2s ease;
          }

          .primary-button {
            background: #2E8BFF;
            color: white;
          }

          .primary-button:hover {
            opacity: 0.9;
            transform: translateY(-1px);
          }

          .secondary-button {
            background: #181D27;
            color: #EDF0F5;
            border: 1px solid #1E2430;
          }

          .secondary-button:hover {
            border-color: #2E8BFF;
          }
        `}</style>
      </main>
    );
  }

  // =========================================================
  // 2. BUSCAR AULA
  // =========================================================

  const aula = await prisma.aula.findFirst({
    where: {
      ordem: 1,

      modulo: {
        ordem: 1,

        tecnologia: {
          nome: "HTML & CSS",
        },
      },
    },

    include: {
      modulo: {
        include: {
          tecnologia: true,
        },
      },
    },
  });

  // =========================================================
  // 3. SE NÃO EXISTIR, MOSTRAR NOT FOUND
  // =========================================================

  if (!aula) {
    notFound();
  }

  // =========================================================
  // 4. EXTRAIR ID DO YOUTUBE
  // =========================================================

  const videoId = extrairVideoId(aula.youtubeUrl);

  // =========================================================
  // 5. RENDERIZAR AULA
  // =========================================================

  return (
    <main className="lesson-page">
      <div className="lesson-container">

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <nav className="breadcrumb">
          <Link href="/">DevRoad</Link>

          <span>/</span>

          <Link href="/roadmaps">Roadmaps</Link>

          <span>/</span>

          <span>{aula.modulo.tecnologia.nome}</span>

          <span>/</span>

          <span>{aula.modulo.titulo}</span>

          <span>/</span>

          <strong>Aula {aula.ordem}</strong>
        </nav>

        {/* =====================================================
            CABEÇALHO
        ====================================================== */}

        <header className="lesson-header">

          <div className="lesson-label">
            <span className="lesson-number">
              AULA {String(aula.ordem).padStart(2, "0")}
            </span>

            <span className="lesson-tech">
              {aula.modulo.tecnologia.nome}
            </span>
          </div>

          <h1>{aula.titulo}</h1>

          {aula.descricao && (
            <p className="lesson-description">
              {aula.descricao}
            </p>
          )}

          <div className="lesson-meta">

            {aula.tempoEstimado && (
              <span>
                ⏱️ {aula.tempoEstimado} minutos
              </span>
            )}

            <span>
              📚 {aula.modulo.titulo}
            </span>

          </div>
        </header>

        {/* =====================================================
            CONTEÚDO PRINCIPAL
        ====================================================== */}

        <div className="lesson-grid">

          <section className="lesson-main">

            {/* =================================================
                VÍDEO
            ================================================== */}

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
              <div className="video-unavailable">
                <span>🎥</span>

                <p>
                  O vídeo desta aula ainda não está disponível.
                </p>
              </div>
            )}

            {/* =================================================
                RESUMO
            ================================================== */}

            <section className="content-card">

              <div className="card-header">
                <span className="card-icon">📖</span>

                <div>
                  <h2>Resumo da aula</h2>

                  <p>
                    Principais conceitos apresentados nesta aula.
                  </p>
                </div>
              </div>

              <div className="summary-content">

                <p>
                  Nesta aula você conhecerá os fundamentos do
                  desenvolvimento para a Web e entenderá como uma
                  página HTML é estruturada.
                </p>

                <p>
                  Você também aprenderá os primeiros conceitos
                  necessários para começar a construir páginas
                  utilizando HTML.
                </p>

              </div>
            </section>

            {/* =================================================
                EXERCÍCIO
            ================================================== */}

            {aula.exercicio && (
              <section className="content-card exercise-card">

                <div className="card-header">
                  <span className="card-icon">🧠</span>

                  <div>
                    <h2>Exercício</h2>

                    <p>
                      Pratique o que você aprendeu.
                    </p>
                  </div>
                </div>

                <div className="exercise-content">
                  <p>{aula.exercicio}</p>
                </div>

              </section>
            )}

            {/* =================================================
                PROJETO
            ================================================== */}

            {aula.projeto && (
              <section className="content-card project-card">

                <div className="card-header">
                  <span className="card-icon">🚀</span>

                  <div>
                    <h2>Projeto</h2>

                    <p>
                      Coloque os conhecimentos em prática.
                    </p>
                  </div>
                </div>

                <div className="project-content">
                  <p>{aula.projeto}</p>
                </div>

              </section>
            )}

            {/* =================================================
                DOCUMENTAÇÃO
            ================================================== */}

            {aula.documentacaoUrl && (
              <section className="documentation-card">

                <div>
                  <span className="documentation-icon">
                    📚
                  </span>

                  <div>
                    <h2>Documentação</h2>

                    <p>
                      Consulte a documentação oficial para
                      aprofundar seus conhecimentos.
                    </p>
                  </div>
                </div>

                <a
                  href={aula.documentacaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver documentação →
                </a>

              </section>
            )}

          </section>

          {/* ===================================================
              SIDEBAR
          ==================================================== */}

          <aside className="lesson-sidebar">

            {/* PROGRESSO */}

            <div className="sidebar-card">

              <div className="sidebar-title">
                <span>📊</span>
                <h3>Seu progresso</h3>
              </div>

              <div className="progress-info">
                <span>Aula {aula.ordem}</span>
                <span>Em andamento</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" />
              </div>

              <p className="progress-text">
                Continue estudando para avançar no roadmap.
              </p>

            </div>

            {/* MÓDULO */}

            <div className="sidebar-card">

              <div className="sidebar-title">
                <span>🗺️</span>
                <h3>Módulo atual</h3>
              </div>

              <div className="module-info">

                <strong>
                  {aula.modulo.titulo}
                </strong>

                <span>
                  {aula.modulo.tecnologia.nome}
                </span>

              </div>

              <Link
                href="/roadmaps"
                className="module-link"
              >
                Ver roadmap →
              </Link>

            </div>

            {/* PRÓXIMA AULA */}

            <div className="sidebar-card next-card">

              <span className="next-label">
                PRÓXIMO PASSO
              </span>

              <h3>
                Continue sua jornada
              </h3>

              <p>
                Depois desta aula, avance para o próximo
                conteúdo do módulo.
              </p>

            </div>

          </aside>

        </div>
      </div>

      {/* =====================================================
          ESTILOS
      ====================================================== */}

      <style>{`
        .lesson-page {
          min-height: 100vh;
          background: #0A0D14;
          color: #EDF0F5;
          padding: 32px 20px 80px;
        }

        .lesson-container {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* BREADCRUMB */

        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          color: #5C6478;
          font-size: 14px;
          margin-bottom: 35px;
        }

        .breadcrumb a {
          color: #8A93A6;
          text-decoration: none;
        }

        .breadcrumb a:hover {
          color: #2E8BFF;
        }

        .breadcrumb strong {
          color: #EDF0F5;
          font-weight: 500;
        }

        /* HEADER */

        .lesson-header {
          margin-bottom: 35px;
        }

        .lesson-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .lesson-number {
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 7px;
          background: rgba(46, 139, 255, 0.1);
          border: 1px solid rgba(46, 139, 255, 0.2);
          color: #2E8BFF;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .lesson-tech {
          color: #8A93A6;
          font-size: 14px;
        }

        .lesson-header h1 {
          margin: 0;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.08;
          letter-spacing: -1.5px;
        }

        .lesson-description {
          max-width: 800px;
          margin: 18px 0 0;
          color: #8A93A6;
          font-size: 17px;
          line-height: 1.7;
        }

        .lesson-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
          color: #8A93A6;
          font-size: 14px;
        }

        /* GRID */

        .lesson-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 310px;
          gap: 28px;
          align-items: start;
        }

        .lesson-main {
          min-width: 0;
        }

        /* VIDEO */

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #000;
          border-radius: 16px;
          border: 1px solid #1E2430;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-unavailable {
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          border: 1px solid #1E2430;
          background: #10141D;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #8A93A6;
          text-align: center;
        }

        .video-unavailable span {
          font-size: 40px;
          margin-bottom: 12px;
        }

        /* CONTENT CARDS */

        .content-card {
          margin-top: 24px;
          padding: 28px;
          background: #10141D;
          border: 1px solid #1E2430;
          border-radius: 16px;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
        }

        .card-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #181D27;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .card-header h2 {
          margin: 0;
          font-size: 21px;
        }

        .card-header p {
          margin: 5px 0 0;
          color: #5C6478;
          font-size: 14px;
        }

        .summary-content,
        .exercise-content,
        .project-content {
          color: #AEB6C6;
          line-height: 1.8;
        }

        .summary-content p,
        .exercise-content p,
        .project-content p {
          margin: 0 0 14px;
        }

        .summary-content p:last-child,
        .exercise-content p:last-child,
        .project-content p:last-child {
          margin-bottom: 0;
        }

        /* EXERCISE */

        .exercise-card {
          border-color: rgba(124, 92, 255, 0.25);
        }

        .exercise-content {
          padding: 18px;
          border-radius: 10px;
          background: rgba(124, 92, 255, 0.06);
        }

        /* PROJECT */

        .project-card {
          border-color: rgba(46, 139, 255, 0.2);
        }

        .project-content {
          padding: 18px;
          border-radius: 10px;
          background: rgba(46, 139, 255, 0.05);
        }

        /* DOCUMENTATION */

        .documentation-card {
          margin-top: 24px;
          padding: 22px;
          border: 1px solid #1E2430;
          border-radius: 14px;
          background: #10141D;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .documentation-card > div {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .documentation-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #181D27;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .documentation-card h2 {
          margin: 0;
          font-size: 17px;
        }

        .documentation-card p {
          margin: 4px 0 0;
          color: #5C6478;
          font-size: 13px;
        }

        .documentation-card a {
          flex-shrink: 0;
          color: #2E8BFF;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .documentation-card a:hover {
          text-decoration: underline;
        }

        /* SIDEBAR */

        .lesson-sidebar {
          position: sticky;
          top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sidebar-card {
          padding: 22px;
          background: #10141D;
          border: 1px solid #1E2430;
          border-radius: 14px;
        }

        .sidebar-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .sidebar-title span {
          font-size: 18px;
        }

        .sidebar-title h3 {
          margin: 0;
          font-size: 16px;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: #8A93A6;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .progress-bar {
          width: 100%;
          height: 7px;
          background: #1E2430;
          border-radius: 999px;
          overflow: hidden;
        }

        .progress-fill {
          width: 0%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #2E8BFF,
            #7C5CFF
          );
          border-radius: inherit;
        }

        .progress-text {
          margin: 12px 0 0;
          color: #5C6478;
          font-size: 12px;
          line-height: 1.6;
        }

        .module-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .module-info strong {
          color: #EDF0F5;
          font-size: 15px;
        }

        .module-info span {
          color: #5C6478;
          font-size: 13px;
        }

        .module-link {
          display: block;
          margin-top: 18px;
          color: #2E8BFF;
          font-size: 13px;
          text-decoration: none;
          font-weight: 600;
        }

        .module-link:hover {
          text-decoration: underline;
        }

        .next-card {
          background: linear-gradient(
            145deg,
            rgba(46, 139, 255, 0.08),
            rgba(124, 92, 255, 0.08)
          );
        }

        .next-label {
          color: #2E8BFF;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .next-card h3 {
          margin: 10px 0 8px;
          font-size: 17px;
        }

        .next-card p {
          margin: 0;
          color: #8A93A6;
          font-size: 13px;
          line-height: 1.6;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .lesson-grid {
            grid-template-columns: 1fr;
          }

          .lesson-sidebar {
            position: static;
          }
        }

        @media (max-width: 600px) {
          .lesson-page {
            padding: 24px 14px 60px;
          }

          .breadcrumb {
            font-size: 12px;
          }

          .content-card {
            padding: 20px;
          }

          .documentation-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .documentation-card a {
            margin-left: 56px;
          }
        }
      `}</style>
    </main>
  );
}