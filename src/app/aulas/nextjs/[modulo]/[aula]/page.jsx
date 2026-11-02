
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

function extrairIdYoutube(url) {
  if (!url) return null;

  try {
    const endereco = new URL(url);

    if (endereco.hostname.includes("youtu.be")) {
      return endereco.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (endereco.searchParams.get("v")) {
      return endereco.searchParams.get("v");
    }

    const partes = endereco.pathname.split("/").filter(Boolean);
    const tipo = partes[0];

    if (["embed", "shorts", "live"].includes(tipo)) {
      return partes[1] || null;
    }

    return null;
  } catch {
    return null;
  }
}

function formatarTempo(minutos) {
  if (!minutos) return null;

  if (minutos < 60) {
    return `${minutos} min`;
  }

  const horas = Math.floor(minutos / 60);
  const restante = minutos % 60;

  return restante > 0
    ? `${horas}h ${restante}min`
    : `${horas}h`;
}

async function buscarAula(moduloNumero, aulaNumero) {
  return prisma.aula.findFirst({
    where: {
      ordem: aulaNumero,
      modulo: {
        ordem: moduloNumero,
        tecnologia: {
          nome: "Next.js",
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

export default async function NextjsAulaPage({ params }) {
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
    aulaAtual.documentacaoUrl || "https://nextjs.org/docs";

  const tempo = formatarTempo(aulaAtual.tempoEstimado);

  const numeroAula = String(aulaAtual.ordem).padStart(2, "0");
  const numeroModulo = String(moduloAtual.ordem).padStart(2, "0");

  return (
    <main className={styles.container}>
      <aside className={styles.sidebar}>
        <Link href="/roadmaps/nextjs" className={styles.logo}>
          <span className={styles.logoIcon}>N</span>
          <span>Next.js</span>
        </Link>

        <Link
          href="/roadmaps/nextjs"
          className={styles.voltar}
        >
          <span>←</span>
          Voltar ao roadmap
        </Link>

        <div className={styles.sidebarInfo}>
          <span className={styles.sidebarLabel}>SEU APRENDIZADO</span>
          <h2>Conteúdo do curso</h2>
          <p>
            Módulo {numeroModulo} · {moduloAtual.titulo}
          </p>
        </div>

        <div className={styles.listaAulas}>
          {aulasModulo.map((item) => {
            const ativa = item.id_aula === aulaAtual.id_aula;

            return (
              <Link
                key={item.id_aula}
                href={`/aulas/nextjs/${numeroModulo}/${String(
                  item.ordem
                ).padStart(2, "0")}`}
                className={`${styles.itemAula} ${
                  ativa ? styles.aulaAtiva : ""
                }`}
              >
                <span className={styles.itemNumero}>
                  {String(item.ordem).padStart(2, "0")}
                </span>

                <span className={styles.itemTitulo}>
                  {item.titulo}
                </span>

                {ativa && <span className={styles.indicadorAtivo} />}
              </Link>
            );
          })}
        </div>
      </aside>

      <section className={styles.conteudo}>
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}>
            <Link href="/roadmaps/nextjs">Next.js</Link>
            <span>/</span>
            <span>{moduloAtual.titulo}</span>
          </div>

          <span className={styles.topbarLabel}>
            DEVROAD · ÁREA DE ESTUDOS
          </span>
        </header>

        <div className={styles.aulaContainer}>
          <div className={styles.aulaCabecalho}>
            <div className={styles.aulaIdentificacao}>
              <span className={styles.moduloTag}>
                MÓDULO {numeroModulo}
              </span>

              <span className={styles.separador}>/</span>

              <span className={styles.aulaTag}>
                AULA {numeroAula}
              </span>
            </div>

            <h1>{aulaAtual.titulo}</h1>

            {aulaAtual.descricao && (
              <p className={styles.descricao}>
                {aulaAtual.descricao}
              </p>
            )}

            {tempo && (
              <div className={styles.tempo}>
                <span>◷</span>
                {tempo} de conteúdo estimado
              </div>
            )}
          </div>

          <section className={styles.videoSection}>
            <div className={styles.sectionTitulo}>
              <div>
                <span className={styles.sectionEyebrow}>APRENDA</span>
                <h2>Aula em vídeo</h2>
              </div>

              {aulaAtual.youtubeCanal && (
                <span className={styles.canal}>
                  {aulaAtual.youtubeCanal}
                </span>
              )}
            </div>

            {videoId ? (
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title={`Aula: ${aulaAtual.titulo}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : (
              <div className={styles.videoIndisponivel}>
                <div className={styles.videoIcon}>▶</div>
                <h3>Vídeo ainda não disponível</h3>
                <p>
                  Esta aula ainda não possui um vídeo cadastrado.
                  Você pode continuar estudando pela documentação.
                </p>
              </div>
            )}
          </section>

          {aulaAtual.projeto && (
            <section className={styles.infoSection}>
              <div className={styles.sectionTitulo}>
                <div>
                  <span className={styles.sectionEyebrow}>
                    PRÁTICA
                  </span>
                  <h2>Projeto da aula</h2>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⌘</div>
                <div className={styles.infoTexto}>
                  <p>{aulaAtual.projeto}</p>
                </div>
              </div>
            </section>
          )}

          {aulaAtual.exercicio && (
            <section className={styles.infoSection}>
              <div className={styles.sectionTitulo}>
                <div>
                  <span className={styles.sectionEyebrow}>
                    TESTE SEU CONHECIMENTO
                  </span>
                  <h2>Exercício</h2>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✎</div>
                <div className={styles.infoTexto}>
                  <p>{aulaAtual.exercicio}</p>
                </div>
              </div>
            </section>
          )}

          <section className={styles.documentacaoSection}>
            <div className={styles.documentacaoTexto}>
              <span className={styles.sectionEyebrow}>
                APROFUNDE SEUS CONHECIMENTOS
              </span>
              <h2>Documentação oficial</h2>
              <p>
                Consulte a documentação para entender melhor
                os conceitos apresentados nesta aula.
              </p>
            </div>

            <a
              href={documentacaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.documentacaoBotao}
            >
              Acessar documentação
              <span>↗</span>
            </a>
          </section>

          <footer className={styles.navegacao}>
            {aulaAnterior ? (
              <Link
                href={`/aulas/nextjs/${numeroModulo}/${String(
                  aulaAnterior.ordem
                ).padStart(2, "0")}`}
                className={styles.botaoAnterior}
              >
                <span>←</span>
                <span>
                  <small>AULA ANTERIOR</small>
                  {aulaAnterior.titulo}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {proximaAula ? (
              <Link
                href={`/aulas/nextjs/${numeroModulo}/${String(
                  proximaAula.ordem
                ).padStart(2, "0")}`}
                className={styles.botaoProximo}
              >
                <span>
                  <small>PRÓXIMA AULA</small>
                  {proximaAula.titulo}
                </span>
                <span>→</span>
              </Link>
            ) : (
              <Link
                href="/roadmaps/nextjs"
                className={styles.botaoProximo}
              >
                <span>
                  <small>MÓDULO CONCLUÍDO</small>
                  Voltar ao roadmap
                </span>
                <span>→</span>
              </Link>
            )}
          </footer>
        </div>
      </section>
    </main>
  );
}
