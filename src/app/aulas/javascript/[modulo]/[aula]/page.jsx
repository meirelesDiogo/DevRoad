import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

function extrairVideoId(url) {
  if (!url) return null;

  try {
    const urlObj = new URL(url);

    // https://www.youtube.com/watch?v=XXXXXXXX
    if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    }

    // https://youtu.be/XXXXXXXX
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.replace("/", "");
    }

    return null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { modulo, aula } = await params;

  const moduloNumero = Number(modulo);
  const aulaNumero = Number(aula);

  if (
    !Number.isInteger(moduloNumero) ||
    !Number.isInteger(aulaNumero)
  ) {
    return {
      title: "Aula | DevRoad",
    };
  }

  const aulaData = await prisma.aula.findFirst({
    where: {
      ordem: aulaNumero,

      modulo: {
        ordem: moduloNumero,

        tecnologia: {
          nome: "JavaScript",
        },
      },
    },

    select: {
      titulo: true,
      descricao: true,
    },
  });

  if (!aulaData) {
    return {
      title: "Aula não encontrada | DevRoad",
    };
  }

  return {
    title: `${aulaData.titulo} | DevRoad`,
    description:
      aulaData.descricao ||
      `${aulaData.titulo} - JavaScript | DevRoad`,
  };
}

export default async function AulaPage({ params }) {
  // ============================================================
  // AUTENTICAÇÃO
  // ============================================================

  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  // ============================================================
  // PARÂMETROS DA URL
  // ============================================================

  const { modulo, aula } = await params;

  const moduloNumero = Number(modulo);
  const aulaNumero = Number(aula);

  if (
    !Number.isInteger(moduloNumero) ||
    !Number.isInteger(aulaNumero) ||
    moduloNumero < 1 ||
    moduloNumero > 8 ||
    aulaNumero < 1
  ) {
    notFound();
  }

  // ============================================================
  // BUSCAR AULA
  // ============================================================

  const aulaData = await prisma.aula.findFirst({
    where: {
      ordem: aulaNumero,

      modulo: {
        ordem: moduloNumero,

        tecnologia: {
          nome: "JavaScript",
        },
      },
    },

    include: {
      modulo: {
        include: {
          tecnologia: true,

          aulas: {
            orderBy: {
              ordem: "asc",
            },

            select: {
              id: true,
              titulo: true,
              ordem: true,
            },
          },
        },
      },
    },
  });

  if (!aulaData) {
    notFound();
  }

  // ============================================================
  // AULAS DO MÓDULO
  // ============================================================

  const aulasDoModulo = aulaData.modulo.aulas;

  // ============================================================
  // AULA ANTERIOR
  // ============================================================

  const aulaAnterior =
    aulasDoModulo
      .filter((item) => item.ordem < aulaData.ordem)
      .sort((a, b) => b.ordem - a.ordem)[0] || null;

  // ============================================================
  // PRÓXIMA AULA
  // ============================================================

  const proximaAula =
    aulasDoModulo
      .filter((item) => item.ordem > aulaData.ordem)
      .sort((a, b) => a.ordem - b.ordem)[0] || null;

  // ============================================================
  // YOUTUBE
  // ============================================================

  const videoId = extrairVideoId(aulaData.youtubeUrl);

  // ============================================================
  // URL DO ROADMAP
  // ============================================================

  const roadmapUrl = "/roadmaps/javascript";

  return (
    <main className="aula-page">
      <div className="aula-container">

        {/* ======================================================
            BREADCRUMB
        ====================================================== */}

        <nav className="breadcrumb">
          <Link href="/roadmaps">
            Roadmaps
          </Link>

          <span>/</span>

          <Link href={roadmapUrl}>
            JavaScript
          </Link>

          <span>/</span>

          <span>
            Módulo {String(moduloNumero).padStart(2, "0")}
          </span>

          <span>/</span>

          <span>
            Aula {String(aulaNumero).padStart(2, "0")}
          </span>
        </nav>

        {/* ======================================================
            CABEÇALHO
        ====================================================== */}

        <header className="aula-header">
          <div className="aula-label">
            MÓDULO {String(moduloNumero).padStart(2, "0")}
            {" • "}
            AULA {String(aulaNumero).padStart(2, "0")}
          </div>

          <h1>
            {aulaData.titulo}
          </h1>

          {aulaData.descricao && (
            <p>
              {aulaData.descricao}
            </p>
          )}

          <div className="aula-meta">
            {aulaData.tempoEstimado && (
              <span>
                ⏱ {aulaData.tempoEstimado} min
              </span>
            )}

            <span>
              📚 {aulaData.modulo.titulo}
            </span>
          </div>
        </header>

        {/* ======================================================
            VÍDEO
        ====================================================== */}

        <section className="video-section">
          {videoId ? (
            <>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={aulaData.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {aulaData.youtubeCanal && (
                <p className="video-credit">
                  Vídeo por{" "}
                  <strong>
                    {aulaData.youtubeCanal}
                  </strong>
                </p>
              )}
            </>
          ) : (
            <div className="video-unavailable">
              <div className="video-icon">
                📚
              </div>

              <h2>
                Vídeo não disponível
              </h2>

              <p>
                Ainda não temos um vídeo selecionado para
                esta aula. Você pode estudar este assunto
                gratuitamente na documentação recomendada.
              </p>

              {aulaData.documentacaoUrl ? (
                <a
                  href={aulaData.documentacaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="documentation-button"
                >
                  Estudar documentação →
                </a>
              ) : (
                <a
                  href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="documentation-button"
                >
                  Acessar documentação →
                </a>
              )}
            </div>
          )}
        </section>

        {/* ======================================================
            CONTEÚDO
        ====================================================== */}

        <section className="aula-content">
          <div className="aula-main">

            {/* SOBRE A AULA */}

            <article className="content-card">
              <div className="card-label">
                SOBRE ESTA AULA
              </div>

              <h2>
                {aulaData.titulo}
              </h2>

              <p>
                {aulaData.descricao ||
                  "Nesta aula você irá aprender os principais conceitos relacionados a este assunto."}
              </p>
            </article>

            {/* EXERCÍCIO */}

            {aulaData.exercicio && (
              <article className="content-card exercise-card">
                <div className="card-label">
                  EXERCÍCIO
                </div>

                <h2>
                  Pratique
                </h2>

                <p>
                  {aulaData.exercicio}
                </p>
              </article>
            )}

            {/* PROJETO */}

            {aulaData.projeto && (
              <article className="content-card project-card">
                <div className="card-label">
                  PROJETO
                </div>

                <h2>
                  Projeto prático
                </h2>

                <p>
                  {aulaData.projeto}
                </p>
              </article>
            )}

            {/* DOCUMENTAÇÃO */}

            {aulaData.documentacaoUrl && videoId && (
              <article className="content-card">
                <div className="card-label">
                  DOCUMENTAÇÃO
                </div>

                <h2>
                  Continue estudando
                </h2>

                <p>
                  Consulte a documentação para aprofundar
                  o conteúdo desta aula.
                </p>

                <a
                  href={aulaData.documentacaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="documentation-link"
                >
                  Abrir documentação →
                </a>
              </article>
            )}
          </div>

          {/* ====================================================
              SIDEBAR
          ==================================================== */}

          <aside className="aula-sidebar">
            <div className="sidebar-card">

              <div className="sidebar-header">
                <span>
                  MÓDULO {String(moduloNumero).padStart(2, "0")}
                </span>

                <strong>
                  {aulaData.modulo.titulo}
                </strong>
              </div>

              <div className="lesson-list">
                {aulasDoModulo.map((item) => {
                  const numero =
                    String(item.ordem).padStart(2, "0");

                  const atual =
                    item.id === aulaData.id;

                  return (
                    <Link
                      key={item.id}
                      href={`/aulas/javascript/${String(
                        moduloNumero
                      ).padStart(2, "0")}/${numero}`}
                      className={
                        atual
                          ? "lesson-item active"
                          : "lesson-item"
                      }
                    >
                      <span className="lesson-number">
                        {numero}
                      </span>

                      <span className="lesson-title">
                        {item.titulo}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </section>

        {/* ======================================================
            NAVEGAÇÃO
        ====================================================== */}

        <nav className="lesson-navigation">
          {aulaAnterior ? (
            <Link
              href={`/aulas/javascript/${String(
                moduloNumero
              ).padStart(2, "0")}/${String(
                aulaAnterior.ordem
              ).padStart(2, "0")}`}
              className="nav-lesson"
            >
              <span>
                ← Aula anterior
              </span>

              <strong>
                {aulaAnterior.titulo}
              </strong>
            </Link>
          ) : (
            <div />
          )}

          {proximaAula ? (
            <Link
              href={`/aulas/javascript/${String(
                moduloNumero
              ).padStart(2, "0")}/${String(
                proximaAula.ordem
              ).padStart(2, "0")}`}
              className="nav-lesson next"
            >
              <span>
                Próxima aula →
              </span>

              <strong>
                {proximaAula.titulo}
              </strong>
            </Link>
          ) : (
            <Link
              href={roadmapUrl}
              className="nav-lesson next"
            >
              <span>
                Módulo concluído →
              </span>

              <strong>
                Voltar para JavaScript
              </strong>
            </Link>
          )}
        </nav>
      </div>

      {/* ========================================================
          CSS
      ======================================================== */}

      <style>{`

        .aula-page {
          min-height: 100vh;
          background: #0A0D14;
          color: #EDF0F5;
          padding: 40px 20px 80px;
        }

        .aula-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 35px;
          color: #5C6478;
          font-size: 14px;
        }

        .breadcrumb a {
          color: #8A93A6;
          text-decoration: none;
        }

        .breadcrumb a:hover {
          color: #2E8BFF;
        }

        .aula-header {
          margin-bottom: 30px;
        }

        .aula-label {
          margin-bottom: 12px;
          color: #2E8BFF;
          font-family: "JetBrains Mono", monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .08em;
        }

        .aula-header h1 {
          margin: 0;
          font-size: clamp(30px, 5vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .aula-header p {
          max-width: 800px;
          margin-top: 18px;
          color: #8A93A6;
          font-size: 17px;
          line-height: 1.7;
        }

        .aula-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .aula-meta span {
          padding: 8px 12px;
          border: 1px solid #1E2430;
          border-radius: 8px;
          background: #10141D;
          color: #8A93A6;
          font-size: 13px;
        }

        .video-section {
          margin-bottom: 45px;
        }

        .video-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border: 1px solid #1E2430;
          border-radius: 16px;
          background: #10141D;
        }

        .video-wrapper iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
        }

        .video-credit {
          margin: 10px 4px 0;
          color: #5C6478;
          font-size: 13px;
        }

        .video-credit strong {
          color: #8A93A6;
        }

        .video-unavailable {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px 25px;
          border: 1px dashed #2A3140;
          border-radius: 16px;
          background: #10141D;
          text-align: center;
        }

        .video-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border-radius: 16px;
          background: rgba(46, 139, 255, .10);
          font-size: 30px;
        }

        .video-unavailable h2 {
          margin: 0 0 12px;
          font-size: 24px;
        }

        .video-unavailable p {
          max-width: 580px;
          margin: 0 0 25px;
          color: #8A93A6;
          line-height: 1.7;
        }

        .documentation-button,
        .documentation-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 17px;
          border-radius: 9px;
          background: #2E8BFF;
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: .2s ease;
        }

        .documentation-button:hover,
        .documentation-link:hover {
          opacity: .9;
          transform: translateY(-2px);
        }

        .aula-content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 320px;
          gap: 25px;
          align-items: start;
        }

        .aula-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .content-card {
          padding: 28px;
          border: 1px solid #1E2430;
          border-radius: 14px;
          background: #10141D;
        }

        .content-card h2 {
          margin: 8px 0 12px;
          font-size: 23px;
        }

        .content-card p {
          margin: 0;
          color: #8A93A6;
          line-height: 1.75;
        }

        .card-label {
          color: #7C5CFF;
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .exercise-card {
          border-color: rgba(46, 139, 255, .25);
        }

        .project-card {
          border-color: rgba(124, 92, 255, .25);
        }

        .aula-sidebar {
          position: sticky;
          top: 25px;
        }

        .sidebar-card {
          overflow: hidden;
          border: 1px solid #1E2430;
          border-radius: 14px;
          background: #10141D;
        }

        .sidebar-header {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 20px;
          border-bottom: 1px solid #1E2430;
        }

        .sidebar-header span {
          color: #2E8BFF;
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
        }

        .sidebar-header strong {
          color: #EDF0F5;
        }

        .lesson-list {
          display: flex;
          flex-direction: column;
          max-height: 600px;
          overflow-y: auto;
        }

        .lesson-item {
          display: flex;
          gap: 12px;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(30, 36, 48, .7);
          color: #8A93A6;
          text-decoration: none;
          transition: .2s ease;
        }

        .lesson-item:hover {
          background: #151A24;
          color: #EDF0F5;
        }

        .lesson-item.active {
          border-left: 3px solid #2E8BFF;
          background: rgba(46, 139, 255, .10);
          color: #EDF0F5;
        }

        .lesson-number {
          min-width: 25px;
          color: #5C6478;
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
        }

        .lesson-item.active .lesson-number {
          color: #2E8BFF;
        }

        .lesson-title {
          font-size: 13px;
          line-height: 1.4;
        }

        .lesson-navigation {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 35px;
        }

        .nav-lesson {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 20px;
          border: 1px solid #1E2430;
          border-radius: 12px;
          background: #10141D;
          text-decoration: none;
          transition: .2s ease;
        }

        .nav-lesson:hover {
          border-color: #2E8BFF;
          transform: translateY(-2px);
        }

        .nav-lesson span {
          color: #5C6478;
          font-size: 12px;
        }

        .nav-lesson strong {
          color: #EDF0F5;
          font-size: 14px;
        }

        .nav-lesson.next {
          text-align: right;
        }

        @media (max-width: 850px) {
          .aula-content {
            grid-template-columns: 1fr;
          }

          .aula-sidebar {
            position: static;
            order: -1;
          }

          .lesson-list {
            max-height: 350px;
          }
        }

        @media (max-width: 600px) {
          .aula-page {
            padding: 25px 15px 60px;
          }

          .content-card {
            padding: 20px;
          }

          .video-unavailable {
            min-height: 300px;
          }

          .lesson-navigation {
            grid-template-columns: 1fr;
          }

          .nav-lesson.next {
            text-align: left;
          }
        }

      `}</style>
    </main>
  );
}