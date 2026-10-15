
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

function gerarEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    // Identifica playlists
    const playlistId = parsedUrl.searchParams.get("list");

    if (playlistId) {
      return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`;
    }

    // Identifica vídeos individuais
    let videoId = null;

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1);
    } else {
      videoId = parsedUrl.searchParams.get("v");

      if (!videoId && parsedUrl.pathname.includes("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1];
      }
    }

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null;
  } catch {
    return null;
  }
}

function formatarTempo(minutos) {
  if (!minutos || minutos <= 0) return null;

  const horas = Math.floor(minutos / 60);
  const restante = minutos % 60;

  if (horas === 0) return `${restante} min`;
  if (restante === 0) return `${horas}h`;

  return `${horas}h ${restante}min`;
}

export async function generateMetadata({ params }) {
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
    return { title: "Aula não encontrada | DevRoad" };
  }

  const aulaData = await prisma.aula.findFirst({
    where: {
      ordem: aulaNumero,
      modulo: {
        ordem: moduloNumero,
        tecnologia: {
          nome: "Java",
        },
      },
    },
    select: {
      titulo: true,
    },
  });

  return {
    title: aulaData
      ? `${aulaData.titulo} | Java | DevRoad`
      : "Aula não encontrada | DevRoad",
  };
}

export default async function AulaJavaPage({ params }) {
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
    moduloNumero > 8 ||
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
          nome: "Java",
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
              tempoEstimado: true,
            },
          },
        },
      },
    },
  });

  if (!aulaData) {
    notFound();
  }

  const aulas = aulaData.modulo.aulas;

  const indiceAtual = aulas.findIndex(
    (item) => item.id === aulaData.id
  );

  const aulaAnterior =
    indiceAtual > 0 ? aulas[indiceAtual - 1] : null;

  const proximaAula =
    indiceAtual < aulas.length - 1
      ? aulas[indiceAtual + 1]
      : null;

const videoEmbedUrl = gerarEmbedUrl(aulaData.youtubeUrl);

  const documentacaoUrl =
    aulaData.documentacaoUrl || "https://www.w3schools.com/java/";

  const roadmapUrl = "/roadmaps/java";

  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#8A93A6]">
          <Link
            href={roadmapUrl}
            className="transition hover:text-[#2E8BFF]"
          >
            Roadmap Java
          </Link>

          <span>/</span>

          <Link
            href={`/aulas/java/${String(moduloNumero).padStart(2, "0")}`}
            className="transition hover:text-[#2E8BFF]"
          >
            {aulaData.modulo.titulo}
          </Link>

          <span>/</span>

          <span className="text-[#EDF0F5]">
            Aula {String(aulaNumero).padStart(2, "0")}
          </span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* Conteúdo principal */}
          <div className="min-w-0">

            {/* Cabeçalho da aula */}
            <section className="mb-6">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#2E8BFF]/30 bg-[#2E8BFF]/10 px-3 py-1 text-xs font-semibold text-[#2E8BFF]">
                  JAVA
                </span>

                <span className="text-sm text-[#8A93A6]">
                  Módulo {String(moduloNumero).padStart(2, "0")}
                </span>

                {aulaData.tempoEstimado > 0 && (
                  <span className="text-sm text-[#8A93A6]">
                    • {formatarTempo(aulaData.tempoEstimado)}
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
                {aulaData.titulo}
              </h1>

              {aulaData.descricao && (
                <p className="mt-3 max-w-3xl leading-relaxed text-[#8A93A6]">
                  {aulaData.descricao}
                </p>
              )}
            </section>

           {/* Vídeo */}
<div className="mb-6 w-full overflow-hidden rounded-xl border border-[#1E2430] bg-[#10141D]">
  {videoEmbedUrl ? (
    <div className="aspect-video w-full">
      <iframe
        src={videoEmbedUrl}
        title={`Vídeo: ${aulaData.titulo}`}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  ) : (
    <div className="flex aspect-video w-full items-center justify-center text-gray-400">
      Vídeo ainda não disponível para esta aula.
    </div>
  )}
</div>

            {/* Canal do vídeo */}
            {aulaData.youtubeCanal && (
              <p className="mb-6 text-sm text-[#8A93A6]">
                Canal:{" "}
                <span className="font-medium text-[#EDF0F5]">
                  {aulaData.youtubeCanal}
                </span>
              </p>
            )}

            {/* Exercício */}
            {aulaData.exercicio && (
              <section className="mb-6 rounded-2xl border border-[#1E2430] bg-[#10141D] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C5CFF]/10 text-lg text-[#7C5CFF]">
                    ✎
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      Exercício prático
                    </h2>

                    <p className="text-xs text-[#8A93A6]">
                      Coloque seus conhecimentos em prática
                    </p>
                  </div>
                </div>

                <div className="whitespace-pre-line text-sm leading-relaxed text-[#C1C8D5]">
                  {aulaData.exercicio}
                </div>
              </section>
            )}

            {/* Projeto */}
            {aulaData.projeto && (
              <section className="mb-6 rounded-2xl border border-[#2E8BFF]/20 bg-[#10141D] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E8BFF]/10 text-lg text-[#2E8BFF]">
                    &lt;/&gt;
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      Projeto da aula
                    </h2>

                    <p className="text-xs text-[#8A93A6]">
                      Desenvolva algo com o que aprendeu
                    </p>
                  </div>
                </div>

                <div className="whitespace-pre-line text-sm leading-relaxed text-[#C1C8D5]">
                  {aulaData.projeto}
                </div>
              </section>
            )}

            {/* Documentação */}
            <section className="mb-6 rounded-2xl border border-[#1E2430] bg-[#10141D] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2E8BFF]/10 text-lg text-[#2E8BFF]">
                      ↗
                    </span>

                    <h2 className="text-lg font-bold">
                      Documentação complementar
                    </h2>
                  </div>

                  <p className="text-sm leading-relaxed text-[#8A93A6]">
                    Aprofunde seus conhecimentos sobre este conteúdo
                    com materiais de referência.
                  </p>
                </div>

                <a
                  href={documentacaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#2E8BFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1976E8]"
                >
                  Acessar documentação
                  <span>↗</span>
                </a>
              </div>

              <p className="mt-4 border-t border-[#1E2430] pt-3 text-xs text-[#8A93A6]">
                Material externo para complementar seus estudos.
              </p>
            </section>

            {/* Navegação entre aulas */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1E2430] pt-6">

              {aulaAnterior ? (
                <Link
                  href={`/aulas/java/${String(moduloNumero).padStart(2, "0")}/${String(aulaAnterior.ordem).padStart(2, "0")}`}
                  className="rounded-lg border border-[#1E2430] px-5 py-3 text-sm font-medium text-[#EDF0F5] transition hover:border-[#2E8BFF] hover:text-[#2E8BFF]"
                >
                  ← Aula anterior
                </Link>
              ) : (
                <Link
                  href={`/aulas/java/${String(moduloNumero).padStart(2, "0")}`}
                  className="rounded-lg border border-[#1E2430] px-5 py-3 text-sm font-medium text-[#EDF0F5] transition hover:border-[#2E8BFF] hover:text-[#2E8BFF]"
                >
                  ← Voltar ao módulo
                </Link>
              )}

              {proximaAula ? (
                <Link
                  href={`/aulas/java/${String(moduloNumero).padStart(2, "0")}/${String(proximaAula.ordem).padStart(2, "0")}`}
                  className="rounded-lg bg-[#2E8BFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1976E8]"
                >
                  Próxima aula →
                </Link>
              ) : (
                <Link
                  href={`/aulas/java/${String(moduloNumero).padStart(2, "0")}`}
                  className="rounded-lg bg-[#2E8BFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1976E8]"
                >
                  Finalizar módulo →
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="overflow-hidden rounded-2xl border border-[#1E2430] bg-[#10141D] lg:sticky lg:top-6">

            <div className="border-b border-[#1E2430] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2E8BFF]">
                Trilha Java
              </p>

              <h2 className="mt-2 font-bold">
                {aulaData.modulo.titulo}
              </h2>

              <p className="mt-2 text-xs text-[#8A93A6]">
                {aulas.length} aulas neste módulo
              </p>
            </div>

            <div className="max-h-[600px] overflow-y-auto p-3">
              <div className="space-y-1">
                {aulas.map((item) => {
                  const atual = item.id === aulaData.id;

                  return (
                    <Link
                      key={item.id}
                      href={`/aulas/java/${String(moduloNumero).padStart(2, "0")}/${String(item.ordem).padStart(2, "0")}`}
                      className={`flex items-center gap-3 rounded-lg p-3 transition ${
                        atual
                          ? "border border-[#2E8BFF]/30 bg-[#2E8BFF]/10"
                          : "border border-transparent hover:bg-[#1E2430]"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                          atual
                            ? "bg-[#2E8BFF] text-white"
                            : "bg-[#1E2430] text-[#8A93A6]"
                        }`}
                      >
                        {String(item.ordem).padStart(2, "0")}
                      </span>

                      <span
                        className={`min-w-0 flex-1 text-sm ${
                          atual
                            ? "font-semibold text-[#2E8BFF]"
                            : "text-[#C1C8D5]"
                        }`}
                      >
                        {item.titulo}
                      </span>

                      {atual && (
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#2E8BFF]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[#1E2430] p-4">
              <Link
                href={roadmapUrl}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#1E2430] px-4 py-3 text-sm font-medium text-[#8A93A6] transition hover:border-[#2E8BFF] hover:text-[#2E8BFF]"
              >
                ← Voltar ao roadmap
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Estilização da barra de rolagem */}
      <style>{`
        aside div::-webkit-scrollbar {
          width: 5px;
        }

        aside div::-webkit-scrollbar-track {
          background: #10141D;
        }

        aside div::-webkit-scrollbar-thumb {
          background: #2E8BFF;
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
}
