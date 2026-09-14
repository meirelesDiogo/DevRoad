import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Aula 01 — Fundamentos da Web | DevRoad",
};

function extrairVideoId(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v");
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
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          background: "#0A0D14",
          color: "#EDF0F5",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            textAlign: "center",
            padding: "40px",
            background: "#10141D",
            border: "1px solid #1E2430",
            borderRadius: "16px",
          }}
        >
          <h1 style={{ marginBottom: "12px" }}>
            Faça login para acessar esta aula
          </h1>

          <p style={{ color: "#8A93A6", marginBottom: "24px" }}>
            Entre na sua conta do DevRoad para acompanhar seu progresso.
          </p>

          <Link
            href="/login"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "8px",
              background: "#2E8BFF",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Entrar
          </Link>
        </div>
      </main>
    );
  }

  const aula = await prisma.aula.findFirst({
    where: {
      moduloId: 1,
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

  const videoId = extrairVideoId(aula.youtubeUrl);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0A0D14",
        color: "#EDF0F5",
        fontFamily: "Inter, sans-serif",
        paddingBottom: "60px",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          borderBottom: "1px solid #1E2430",
          background: "#0A0D14",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#EDF0F5",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            Dev<span style={{ color: "#2E8BFF" }}>Road</span>
          </Link>

          <Link
            href="/roadmaps/html-css"
            style={{
              color: "#8A93A6",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Voltar para o roadmap
          </Link>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        {/* BREADCRUMB */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            alignItems: "center",
            marginBottom: "24px",
            color: "#8A93A6",
            fontSize: "14px",
          }}
        >
          <Link
            href="/roadmaps"
            style={{ color: "#8A93A6", textDecoration: "none" }}
          >
            Roadmaps
          </Link>

          <span>/</span>

          <Link
            href="/roadmaps/html-css"
            style={{ color: "#8A93A6", textDecoration: "none" }}
          >
            HTML & CSS
          </Link>

          <span>/</span>

          <span style={{ color: "#EDF0F5" }}>{aula.titulo}</span>
        </div>

        {/* TÍTULO */}
        <section style={{ marginBottom: "32px" }}>
          <span
            style={{
              display: "inline-block",
              marginBottom: "12px",
              padding: "6px 10px",
              borderRadius: "6px",
              background: "rgba(46, 139, 255, 0.1)",
              color: "#2E8BFF",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            AULA {String(aula.ordem).padStart(2, "0")}
          </span>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(30px, 5vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            {aula.titulo}
          </h1>

          {aula.descricao && (
            <p
              style={{
                maxWidth: "760px",
                marginTop: "16px",
                color: "#8A93A6",
                fontSize: "17px",
                lineHeight: 1.7,
              }}
            >
              {aula.descricao}
            </p>
          )}
        </section>

        {/* GRID PRINCIPAL */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 300px",
            gap: "24px",
          }}
        >
          <div>
            {/* VÍDEO */}
            <section
              style={{
                overflow: "hidden",
                background: "#10141D",
                border: "1px solid #1E2430",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: "#000",
                }}
              >
                {videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={aula.titulo}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div
                    style={{
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      padding: "20px",
                      color: "#8A93A6",
                      textAlign: "center",
                    }}
                  >
                    Vídeo desta aula ainda não disponível.
                  </div>
                )}
              </div>

              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    color: "#8A93A6",
                    fontSize: "13px",
                  }}
                >
                  <span>
                    📚 {aula.modulo?.titulo || "Módulo"}
                  </span>

                  {aula.tempoEstimado && (
                    <span>⏱️ {aula.tempoEstimado} min</span>
                  )}
                </div>
              </div>
            </section>

            {/* RESUMO */}
            <section
              style={{
                marginTop: "24px",
                padding: "28px",
                background: "#10141D",
                border: "1px solid #1E2430",
                borderRadius: "16px",
              }}
            >
              <h2 style={{ marginTop: 0 }}>📖 O que você vai aprender</h2>

              <p
                style={{
                  color: "#8A93A6",
                  lineHeight: 1.8,
                }}
              >
                Nesta aula você vai conhecer os fundamentos da Web e entender
                como HTML, CSS e JavaScript trabalham juntos na construção de
                páginas e aplicações web.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "12px",
                  marginTop: "24px",
                }}
              >
                <div
                  style={{
                    padding: "18px",
                    background: "#0A0D14",
                    border: "1px solid #1E2430",
                    borderRadius: "10px",
                  }}
                >
                  <strong>HTML</strong>
                  <p
                    style={{
                      color: "#8A93A6",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      marginBottom: 0,
                    }}
                  >
                    Estrutura e conteúdo da página.
                  </p>
                </div>

                <div
                  style={{
                    padding: "18px",
                    background: "#0A0D14",
                    border: "1px solid #1E2430",
                    borderRadius: "10px",
                  }}
                >
                  <strong>CSS</strong>
                  <p
                    style={{
                      color: "#8A93A6",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      marginBottom: 0,
                    }}
                  >
                    Aparência e apresentação visual.
                  </p>
                </div>

                <div
                  style={{
                    padding: "18px",
                    background: "#0A0D14",
                    border: "1px solid #1E2430",
                    borderRadius: "10px",
                  }}
                >
                  <strong>JavaScript</strong>
                  <p
                    style={{
                      color: "#8A93A6",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      marginBottom: 0,
                    }}
                  >
                    Comportamento e interatividade.
                  </p>
                </div>
              </div>
            </section>

            {/* EXERCÍCIO */}
            <section
              style={{
                marginTop: "24px",
                padding: "28px",
                background: "#10141D",
                border: "1px solid #1E2430",
                borderRadius: "16px",
              }}
            >
              <h2 style={{ marginTop: 0 }}>🧠 Exercício</h2>

              {aula.exercicio ? (
                <p
                  style={{
                    color: "#8A93A6",
                    lineHeight: 1.8,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {aula.exercicio}
                </p>
              ) : (
                <p
                  style={{
                    color: "#8A93A6",
                    lineHeight: 1.8,
                  }}
                >
                  Crie uma página HTML simples utilizando a estrutura básica
                  apresentada na aula. Adicione um título, um cabeçalho e
                  alguns parágrafos.
                </p>
              )}
            </section>

            {/* PROJETO */}
            {aula.projeto && (
              <section
                style={{
                  marginTop: "24px",
                  padding: "28px",
                  background: "#10141D",
                  border: "1px solid #1E2430",
                  borderRadius: "16px",
                }}
              >
                <h2 style={{ marginTop: 0 }}>🚀 Projeto</h2>

                <p
                  style={{
                    color: "#8A93A6",
                    lineHeight: 1.8,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {aula.projeto}
                </p>
              </section>
            )}

            {/* DOCUMENTAÇÃO */}
            {aula.documentacaoUrl && (
              <section
                style={{
                  marginTop: "24px",
                  padding: "24px",
                  background: "#10141D",
                  border: "1px solid #1E2430",
                  borderRadius: "16px",
                }}
              >
                <a
                  href={aula.documentacaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#2E8BFF",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  📚 Acessar documentação
                </a>
              </section>
            )}
          </div>

          {/* SIDEBAR */}
          <aside>
            <div
              style={{
                position: "sticky",
                top: "24px",
                padding: "24px",
                background: "#10141D",
                border: "1px solid #1E2430",
                borderRadius: "16px",
              }}
            >
              <span
                style={{
                  color: "#2E8BFF",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                SEU PROGRESSO
              </span>

              <h3 style={{ marginBottom: "8px" }}>
                {aula.modulo?.titulo || "Módulo"}
              </h3>

              <p
                style={{
                  marginTop: 0,
                  color: "#8A93A6",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                Continue estudando para avançar no roadmap.
              </p>

              <div
                style={{
                  height: "6px",
                  margin: "20px 0",
                  background: "#1E2430",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "12.5%",
                    height: "100%",
                    background: "#2E8BFF",
                    borderRadius: "999px",
                  }}
                />
              </div>

              <p
                style={{
                  color: "#8A93A6",
                  fontSize: "13px",
                  marginBottom: "20px",
                }}
              >
                Aula {aula.ordem} do módulo
              </p>

              <Link
                href="/roadmaps/html-css"
                style={{
                  display: "block",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #1E2430",
                  color: "#EDF0F5",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Ver roadmap completo
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* RESPONSIVIDADE */}
      <style>{`
        @media (max-width: 850px) {
          main > div > div {
            grid-template-columns: 1fr !important;
          }

          aside {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}