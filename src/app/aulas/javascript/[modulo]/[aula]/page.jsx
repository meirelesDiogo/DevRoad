import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

function getYoutubeId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.replace("/", "") || null;
    }

    if (
      parsed.hostname.includes("youtube.com") ||
      parsed.hostname.includes("youtube-nocookie.com")
    ) {
      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v");
      }

      const parts = parsed.pathname.split("/").filter(Boolean);

      if (parts[0] === "embed" && parts[1]) {
        return parts[1];
      }

      if (parts[0] === "shorts" && parts[1]) {
        return parts[1];
      }
    }

    return null;
  } catch {
    return null;
  }
}

function formatTime(minutes) {
  if (!minutes) return null;

  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;

  if (remaining === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remaining}min`;
}

export async function generateMetadata({ params }) {
  const { modulo, aula } = await params;

  const moduloNumero = Number(modulo);
  const aulaNumero = Number(aula);

  if (
    !Number.isInteger(moduloNumero) ||
    !Number.isInteger(aulaNumero) ||
    moduloNumero < 1 ||
    aulaNumero < 1
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
    include: {
      modulo: true,
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
      `Aprenda ${aulaData.titulo} no curso de JavaScript do DevRoad.`,
  };
}

export default async function AulaJavaScriptPage({ params }) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const { modulo, aula } = await params;

  const moduloNumero = Number(modulo);
  const aulaNumero = Number(aula);

  if (
    !Number.isInteger(moduloNumero) ||
    !Number.isInteger(aulaNumero) ||
    moduloNumero < 1 ||
    aulaNumero < 1
  ) {
    notFound();
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

  const moduloData = aulaData.modulo;

  const todosModulos = await prisma.modulo.findMany({
    where: {
      tecnologia: {
        nome: "JavaScript",
      },
    },
    orderBy: {
      ordem: "asc",
    },
    include: {
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
  });

  const aulasDoModulo = moduloData.aulas;

  const indiceAtual = aulasDoModulo.findIndex(
    (item) => item.ordem === aulaNumero
  );

  const aulaAnterior =
    indiceAtual > 0 ? aulasDoModulo[indiceAtual - 1] : null;

  const aulaProxima =
    indiceAtual >= 0 && indiceAtual < aulasDoModulo.length - 1
      ? aulasDoModulo[indiceAtual + 1]
      : null;

  const videoId = getYoutubeId(aulaData.youtubeUrl);

  const tempo = formatTime(aulaData.tempoEstimado);

  return (
    <>
      <style>{`
        :root {
          --bg: #0A0D14;
          --surface: #10141D;
          --surface-2: #141925;
          --border: #1E2430;
          --blue: #2E8BFF;
          --purple: #7C5CFF;
          --text: #EDF0F5;
          --muted: #8A93A6;
          --muted2: #5C6478;
          --success: #45D483;
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

        a {
          color: inherit;
          text-decoration: none;
        }

        .lesson-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at top right,
              rgba(46, 139, 255, 0.08),
              transparent 28%
            ),
            var(--bg);
        }

        .lesson-header {
          height: 72px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          padding: 0 32px;
          background: rgba(10, 13, 20, 0.92);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-content {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .logo {
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logo span {
          color: var(--blue);
        }

        .back-link {
          color: var(--muted);
          font-size: 14px;
          transition: 0.2s;
        }

        .back-link:hover {
          color: var(--text);
        }

        .layout {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          min-height: calc(100vh - 72px);
        }

        .sidebar {
          border-right: 1px solid var(--border);
          padding: 26px 18px;
          position: sticky;
          top: 72px;
          height: calc(100vh - 72px);
          overflow-y: auto;
        }

        .sidebar-title {
          font-size: 13px;
          color: var(--muted2);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .sidebar-tech {
          font-size: 20px;
          font-weight: 750;
          margin-bottom: 24px;
        }

        .module {
          margin-bottom: 18px;
        }

        .module-title {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--text);
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .module-number {
          min-width: 28px;
          height: 28px;
          border-radius: 8px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: var(--muted);
        }

        .lesson-link {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 8px 10px;
          margin-left: 4px;
          border-radius: 8px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.35;
          transition: 0.2s;
        }

        .lesson-link:hover {
          background: var(--surface);
          color: var(--text);
        }

        .lesson-link.active {
          background: rgba(46, 139, 255, 0.1);
          color: var(--blue);
        }

        .lesson-number {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          opacity: 0.7;
          padding-top: 1px;
        }

        .main {
          min-width: 0;
          padding: 42px 46px 70px;
        }

        .content {
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
        }

        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          color: var(--muted2);
          font-size: 13px;
          margin-bottom: 18px;
        }

        .breadcrumb strong {
          color: var(--muted);
        }

        .lesson-title {
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin: 0;
        }

        .lesson-description {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
          margin: 16px 0 24px;
          max-width: 780px;
        }

        .lesson-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 30px;
        }

        .meta-item {
          padding: 7px 11px;
          border-radius: 8px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--muted);
          font-size: 12px;
        }

        .video-card {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 28px;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #07090e;
        }

        .video-wrapper iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .video-info {
          padding: 15px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .video-label {
          color: var(--muted);
          font-size: 13px;
        }

        .video-channel {
          color: var(--text);
          font-weight: 650;
        }

        .no-video {
          padding: 38px 28px;
          text-align: center;
        }

        .no-video-icon {
          font-size: 34px;
          margin-bottom: 12px;
        }

        .no-video h2 {
          margin: 0 0 10px;
          font-size: 21px;
        }

        .no-video p {
          max-width: 650px;
          margin: 0 auto 20px;
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        .documentation-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 16px;
          border-radius: 9px;
          background: var(--blue);
          color: white;
          font-size: 13px;
          font-weight: 700;
          transition: 0.2s;
        }

        .documentation-button:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        .section {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 25px;
          margin-bottom: 18px;
        }

        .section h2 {
          margin: 0 0 14px;
          font-size: 19px;
        }

        .section p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
          white-space: pre-line;
        }

        .section-content {
          color: var(--muted);
          line-height: 1.7;
          white-space: pre-line;
        }

        .section-empty {
          color: var(--muted2);
          font-size: 14px;
        }

        .navigation {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 28px;
        }

        .nav-card {
          min-height: 88px;
          border: 1px solid var(--border);
          border-radius: 13px;
          padding: 15px 17px;
          background: var(--surface);
          transition: 0.2s;
        }

        .nav-card:hover {
          border-color: #30394b;
          background: var(--surface-2);
        }

        .nav-card.next {
          text-align: right;
        }

        .nav-label {
          color: var(--muted2);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 7px;
        }

        .nav-title {
          color: var(--text);
          font-size: 14px;
          line-height: 1.4;
        }

        .project-box {
          border-color: rgba(124, 92, 255, 0.3);
          background:
            linear-gradient(
              135deg,
              rgba(124, 92, 255, 0.07),
              rgba(46, 139, 255, 0.03)
            ),
            var(--surface);
        }

        .exercise-box {
          border-color: rgba(46, 139, 255, 0.3);
        }

        @media (max-width: 1000px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
            height: auto;
            border-right: 0;
            border-bottom: 1px solid var(--border);
            padding: 20px;
          }

          .sidebar-content {
            max-height: 330px;
            overflow-y: auto;
          }

          .main {
            padding: 32px 24px 60px;
          }
        }

        @media (max-width: 650px) {
          .lesson-header {
            padding: 0 18px;
          }

          .back-link {
            display: none;
          }

          .main {
            padding: 26px 15px 50px;
          }

          .lesson-title {
            font-size: 32px;
          }

          .section {
            padding: 20px;
          }

          .navigation {
            grid-template-columns: 1fr;
          }

          .nav-card.next {
            text-align: left;
          }
        }
      `}</style>

      <div className="lesson-page">
        <header className="lesson-header">
          <div className="header-content">
            <Link href="/roadmaps/javascript" className="logo">
              Dev<span>Road</span>
            </Link>

            <Link href="/roadmaps/javascript" className="back-link">
              ← Voltar para o roadmap
            </Link>
          </div>
        </header>

        <div className="layout">
          <aside className="sidebar">
            <div className="sidebar-title">
              Trilha de aprendizado
            </div>

            <div className="sidebar-tech">
              JavaScript
            </div>

            <div className="sidebar-content">
              {todosModulos.map((moduloItem) => (
                <div className="module" key={moduloItem.id}>
                  <div className="module-title">
                    <span className="module-number">
                      {String(moduloItem.ordem).padStart(2, "0")}
                    </span>

                    <span>{moduloItem.titulo}</span>
                  </div>

                  {moduloItem.aulas.map((aulaItem) => {
                    const ativa =
                      moduloItem.ordem === moduloNumero &&
                      aulaItem.ordem === aulaNumero;

                    return (
                      <Link
                        key={aulaItem.id}
                        href={`/aulas/javascript/${String(
                          moduloItem.ordem
                        ).padStart(2, "0")}/${String(
                          aulaItem.ordem
                        ).padStart(2, "0")}`}
                        className={`lesson-link ${
                          ativa ? "active" : ""
                        }`}
                      >
                        <span className="lesson-number">
                          {String(aulaItem.ordem).padStart(2, "0")}
                        </span>

                        <span>{aulaItem.titulo}</span>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </aside>

          <main className="main">
            <div className="content">
              <div className="breadcrumb">
                <Link href="/roadmaps/javascript">
                  JavaScript
                </Link>

                <span>›</span>

                <strong>
                  Módulo {String(moduloNumero).padStart(2, "0")}
                </strong>

                <span>›</span>

                <strong>
                  Aula {String(aulaNumero).padStart(2, "0")}
                </strong>
              </div>

              <h1 className="lesson-title">
                {aulaData.titulo}
              </h1>

              {aulaData.descricao && (
                <p className="lesson-description">
                  {aulaData.descricao}
                </p>
              )}

              <div className="lesson-meta">
                <span className="meta-item">
                  Módulo {String(moduloNumero).padStart(2, "0")}
                </span>

                <span className="meta-item">
                  Aula {String(aulaNumero).padStart(2, "0")}
                </span>

                {tempo && (
                  <span className="meta-item">
                    ⏱ {tempo}
                  </span>
                )}
              </div>

              <div className="video-card">
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

                    <div className="video-info">
                      <span className="video-label">
                        Vídeo complementar
                      </span>

                      {aulaData.youtubeCanal && (
                        <span className="video-channel">
                          {aulaData.youtubeCanal}
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="no-video">
                    <div className="no-video-icon">
                      📚
                    </div>

                    <h2>Vídeo não disponível</h2>

                    <p>
                      Não encontramos um vídeo complementar para
                      esta aula. Você pode estudar o conteúdo
                      diretamente pela documentação e pelos
                      exemplos disponíveis no W3Schools.
                    </p>

                    <a
                      href={
                        aulaData.documentacaoUrl ||
                        "https://www.w3schools.com/js/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="documentation-button"
                    >
                      Estudar no W3Schools →
                    </a>
                  </div>
                )}
              </div>

              <section className="section">
                <h2>📖 Sobre esta aula</h2>

                {aulaData.descricao ? (
                  <p>{aulaData.descricao}</p>
                ) : (
                  <div className="section-empty">
                    Esta aula ainda não possui uma descrição.
                  </div>
                )}
              </section>

              {aulaData.exercicio && (
                <section className="section exercise-box">
                  <h2>🧠 Exercício</h2>

                  <div className="section-content">
                    {aulaData.exercicio}
                  </div>
                </section>
              )}

              {aulaData.projeto && (
                <section className="section project-box">
                  <h2>🚀 Projeto</h2>

                  <div className="section-content">
                    {aulaData.projeto}
                  </div>
                </section>
              )}

              {aulaData.documentacaoUrl && (
                <section className="section">
                  <h2>📚 Documentação</h2>

                  <a
                    href={aulaData.documentacaoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="documentation-button"
                  >
                    Acessar documentação →
                  </a>
                </section>
              )}

              <div className="navigation">
                {aulaAnterior ? (
                  <Link
                    href={`/aulas/javascript/${String(
                      moduloNumero
                    ).padStart(2, "0")}/${String(
                      aulaAnterior.ordem
                    ).padStart(2, "0")}`}
                    className="nav-card"
                  >
                    <div className="nav-label">
                      ← Aula anterior
                    </div>

                    <div className="nav-title">
                      {aulaAnterior.titulo}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {aulaProxima ? (
                  <Link
                    href={`/aulas/javascript/${String(
                      moduloNumero
                    ).padStart(2, "0")}/${String(
                      aulaProxima.ordem
                    ).padStart(2, "0")}`}
                    className="nav-card next"
                  >
                    <div className="nav-label">
                      Próxima aula →
                    </div>

                    <div className="nav-title">
                      {aulaProxima.titulo}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}