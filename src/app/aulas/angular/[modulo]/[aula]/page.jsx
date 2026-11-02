
import Link from "next/link";
import { redirect, notFound } from "next/navigation";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

import styles from "./page.module.css";

const DOCUMENTACAO_PADRAO = "https://angular.dev/overview";

function extrairIdYoutube(url) {
  if (!url) return null;

  try {
    const endereco = new URL(url);

    if (endereco.hostname.includes("youtu.be")) {
      return endereco.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (endereco.pathname.startsWith("/embed/")) {
      return endereco.pathname.split("/")[2] || null;
    }

    if (endereco.pathname.startsWith("/shorts/")) {
      return endereco.pathname.split("/")[2] || null;
    }

    return endereco.searchParams.get("v");
  } catch {
    return null;
  }
}

function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

async function buscarAula(moduloNumero, aulaNumero) {
  return prisma.aula.findFirst({
    where: {
      ordem: aulaNumero,
      modulo: {
        ordem: moduloNumero,
        tecnologia: {
          nome: "Angular",
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
          },
        },
      },
    },
  });
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
      title: "Aula não encontrada | DevRoad",
    };
  }

  const aulaAtual = await buscarAula(moduloNumero, aulaNumero);

  if (!aulaAtual) {
    return {
      title: "Aula não encontrada | DevRoad",
    };
  }

  return {
    title: `${aulaAtual.titulo} | Angular - DevRoad`,
    description:
      aulaAtual.descricao ||
      `Aprenda ${aulaAtual.titulo} no curso de Angular do DevRoad.`,
  };
}

export default async function AngularAulaPage({ params }) {
  const session = await auth();

  if (!session?.user) {
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

  const aulaAtual = await buscarAula(moduloNumero, aulaNumero);

  if (!aulaAtual) {
    notFound();
  }

  const moduloAtual = aulaAtual.modulo;
  const aulasModulo = moduloAtual.aulas;

  const indiceAtual = aulasModulo.findIndex(
    (item) => item.id_aula === aulaAtual.id_aula
  );

  const aulaAnterior =
    indiceAtual > 0 ? aulasModulo[indiceAtual - 1] : null;

  const proximaAula =
    indiceAtual < aulasModulo.length - 1
      ? aulasModulo[indiceAtual + 1]
      : null;

  const videoId = extrairIdYoutube(aulaAtual.youtubeUrl);

  const documentacaoUrl =
    aulaAtual.documentacaoUrl || DOCUMENTACAO_PADRAO;

  const urlAula = (numeroModulo, numeroAula) =>
    `/aulas/angular/${formatarNumero(numeroModulo)}/${formatarNumero(
      numeroAula
    )}`;

  const urlRoadmap = "/roadmaps/angular";

  const tempoEstimado = aulaAtual.tempoEstimado;

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <Link href="/roadmaps">Roadmaps</Link>
          <span>/</span>
          <Link href={urlRoadmap}>Angular</Link>
          <span>/</span>
          <span>{moduloAtual.titulo}</span>
        </div>

        <div className={styles.layout}>
          <section className={styles.mainContent}>
            <div className={styles.moduleInfo}>
              <span className={styles.moduleLabel}>
                MÓDULO {formatarNumero(moduloAtual.ordem)}
              </span>

              <span className={styles.lessonLabel}>
                AULA {formatarNumero(aulaAtual.ordem)}
              </span>
            </div>

            <h1 className={styles.title}>{aulaAtual.titulo}</h1>

            {aulaAtual.descricao && (
              <p className={styles.description}>
                {aulaAtual.descricao}
              </p>
            )}

            <div className={styles.lessonMeta}>
              <span>
                <span className={styles.metaIcon}>◷</span>
                {tempoEstimado
                  ? `${tempoEstimado} minutos`
                  : "Tempo não informado"}
              </span>

              <span>
                {indiceAtual + 1} de {aulasModulo.length} aulas
              </span>
            </div>

            <div className={styles.videoSection}>
              {videoId ? (
                <>
                  <div className={styles.videoWrapper}>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                      title={aulaAtual.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  {aulaAtual.youtubeCanal && (
                    <p className={styles.videoChannel}>
                      Vídeo: {aulaAtual.youtubeCanal}
                    </p>
                  )}
                </>
              ) : (
                <div className={styles.videoUnavailable}>
                  <div className={styles.unavailableIcon}>▶</div>

                  <h2>Vídeo não disponível</h2>

                  <p>
                    Esta aula ainda não possui um vídeo cadastrado.
                    Enquanto isso, você pode utilizar a documentação
                    disponível para estudar o conteúdo.
                  </p>

                  <a
                    href={documentacaoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.documentationButton}
                  >
                    Acessar documentação
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>

            {aulaAtual.exercicio && (
              <section className={styles.resourceCard}>
                <div className={styles.resourceHeader}>
                  <div className={styles.resourceIcon}>⌨</div>
                  <div>
                    <span className={styles.resourceLabel}>
                      PRATIQUE
                    </span>
                    <h2>Exercício</h2>
                  </div>
                </div>

                <div className={styles.resourceContent}>
                  <p>{aulaAtual.exercicio}</p>
                </div>
              </section>
            )}

            {aulaAtual.projeto && (
              <section className={styles.resourceCard}>
                <div className={styles.resourceHeader}>
                  <div className={styles.resourceIcon}>◇</div>
                  <div>
                    <span className={styles.resourceLabel}>
                      DESAFIO
                    </span>
                    <h2>Projeto da aula</h2>
                  </div>
                </div>

                <div className={styles.resourceContent}>
                  <p>{aulaAtual.projeto}</p>
                </div>
              </section>
            )}

            <section className={styles.documentationCard}>
              <div>
                <span className={styles.resourceLabel}>
                  MATERIAL DE APOIO
                </span>
                <h2>Documentação oficial</h2>
                <p>
                  Consulte a documentação para aprofundar seus
                  conhecimentos sobre o conteúdo desta aula.
                </p>
              </div>

              <a
                href={documentacaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentationButton}
              >
                Consultar documentação
                <span>↗</span>
              </a>
            </section>

            <nav className={styles.lessonNavigation}>
              {aulaAnterior ? (
                <Link
                  href={urlAula(
                    moduloAtual.ordem,
                    aulaAnterior.ordem
                  )}
                  className={styles.previousButton}
                >
                  <span>← Aula anterior</span>
                  <strong>{aulaAnterior.titulo}</strong>
                </Link>
              ) : (
                <Link
                  href={urlRoadmap}
                  className={styles.previousButton}
                >
                  <span>← Voltar</span>
                  <strong>Roadmap Angular</strong>
                </Link>
              )}

              {proximaAula ? (
                <Link
                  href={urlAula(
                    moduloAtual.ordem,
                    proximaAula.ordem
                  )}
                  className={styles.nextButton}
                >
                  <span>Próxima aula →</span>
                  <strong>{proximaAula.titulo}</strong>
                </Link>
              ) : (
                <Link
                  href={urlRoadmap}
                  className={styles.nextButton}
                >
                  <span>Finalizar módulo →</span>
                  <strong>Voltar ao roadmap</strong>
                </Link>
              )}
            </nav>
          </section>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <div>
                <span className={styles.sidebarEyebrow}>
                  SEU APRENDIZADO
                </span>
                <h2>Conteúdo do módulo</h2>
              </div>

              <span className={styles.lessonCount}>
                {aulasModulo.length} aulas
              </span>
            </div>

            <div className={styles.moduleTitle}>
              <span>
                MÓDULO {formatarNumero(moduloAtual.ordem)}
              </span>
              <h3>{moduloAtual.titulo}</h3>
            </div>

            <div className={styles.lessonList}>
              {aulasModulo.map((item, index) => {
                const ativa = item.id_aula === aulaAtual.id_aula;

                return (
                  <Link
                    key={item.id_aula}
                    href={urlAula(moduloAtual.ordem, item.ordem)}
                    className={`${styles.lessonItem} ${
                      ativa ? styles.activeLesson : ""
                    }`}
                  >
                    <span className={styles.lessonNumber}>
                      {formatarNumero(index + 1)}
                    </span>

                    <span className={styles.lessonName}>
                      {item.titulo}
                    </span>

                    {ativa && (
                      <span className={styles.activeIndicator}>
                        <span />
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <Link href={urlRoadmap} className={styles.backToRoadmap}>
              ← Voltar ao roadmap Angular
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
