
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const DOCUMENTACAO_PADRAO = "https://www.typescriptlang.org/docs/";

function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

function getYoutubeEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        const videoId = parsedUrl.searchParams.get("v");
        return videoId
          ? `https://www.youtube.com/embed/${videoId}`
          : null;
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return url;
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        const videoId = parsedUrl.pathname.split("/")[2];
        return videoId
          ? `https://www.youtube.com/embed/${videoId}`
          : null;
      }
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

  if (!Number.isInteger(moduloNumero) || !Number.isInteger(aulaNumero)) {
    return {
      title: "Aula não encontrada | DevRoad",
    };
  }

  const aulaData = await prisma.aula.findFirst({
    where: {
      ordem: aulaNumero,
      modulo: {
        ordem: moduloNumero,
        tecnologia: {
          nome: "TypeScript",
        },
      },
    },
    select: {
      titulo: true,
      descricao: true,
      modulo: {
        select: {
          titulo: true,
        },
      },
    },
  });

  if (!aulaData) {
    return {
      title: "Aula não encontrada | DevRoad",
    };
  }

  return {
    title: `${aulaData.titulo} | TypeScript - DevRoad`,
    description:
      aulaData.descricao ||
      `Aprenda ${aulaData.titulo} com o DevRoad.`,
  };
}

export default async function TypeScriptAulaPage({ params }) {
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

  const aulaAtual = await prisma.aula.findFirst({
    where: {
      ordem: aulaNumero,
      modulo: {
        ordem: moduloNumero,
        tecnologia: {
          nome: "TypeScript",
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

  const videoUrl = getYoutubeEmbedUrl(aulaAtual.youtubeUrl);

  const urlDocumentacao =
    aulaAtual.documentacaoUrl || DOCUMENTACAO_PADRAO;

  const criarUrlAula = (numeroAula) =>
    `/aulas/typescript/${formatarNumero(moduloNumero)}/${formatarNumero(numeroAula)}`;

  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#8A93A6]">
          <Link
            href="/roadmaps"
            className="transition hover:text-[#A9ACF0]"
          >
            Roadmaps
          </Link>

          <span>/</span>

          <Link
            href="/roadmaps/typescript"
            className="transition hover:text-[#A9ACF0]"
          >
            TypeScript
          </Link>

          <span>/</span>

          <span className="text-[#C1C8D5]">
            Módulo {formatarNumero(moduloNumero)}
          </span>

          <span>/</span>

          <span className="text-[#A9ACF0]">
            Aula {formatarNumero(aulaNumero)}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* Conteúdo principal */}
          <section className="min-w-0">
            {/* Cabeçalho da aula */}
            <div className="mb-6">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-lg border border-[#777BB4]/30 bg-[#777BB4]/10 px-3 py-1 text-xs font-semibold text-[#A9ACF0]">
                  TypeScript
                </span>

                <span className="text-xs text-[#8A93A6]">
                  Módulo {formatarNumero(moduloNumero)}
                </span>

                {aulaAtual.tempoEstimado && (
                  <span className="text-xs text-[#8A93A6]">
                    · {aulaAtual.tempoEstimado} min
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-bold sm:text-3xl">
                {aulaAtual.titulo}
              </h1>

              {aulaAtual.descricao && (
                <p className="mt-3 text-sm leading-relaxed text-[#8A93A6] sm:text-base">
                  {aulaAtual.descricao}
                </p>
              )}
            </div>

            {/* Vídeo */}
            <div className="mb-8 overflow-hidden rounded-2xl border border-[#1E2430] bg-[#10141D]">
              {videoUrl ? (
                <>
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      src={videoUrl}
                      title={aulaAtual.titulo}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  {aulaAtual.youtubeCanal && (
                    <div className="border-t border-[#1E2430] px-5 py-3">
                      <p className="text-xs text-[#8A93A6]">
                        Canal: {aulaAtual.youtubeCanal}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center px-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#777BB4]/20 bg-[#777BB4]/10 text-2xl text-[#A9ACF0]">
                    ▶
                  </div>

                  <h2 className="font-semibold">
                    Vídeo não disponível
                  </h2>

                  <p className="mt-2 max-w-sm text-sm text-[#8A93A6]">
                    Esta aula ainda não possui um vídeo cadastrado.
                    Você pode continuar estudando pela documentação.
                  </p>

                  <a
                    href={urlDocumentacao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 rounded-xl border border-[#777BB4]/30 bg-[#777BB4]/10 px-5 py-2.5 text-sm font-semibold text-[#A9ACF0] transition hover:bg-[#777BB4] hover:text-white"
                  >
                    Acessar documentação →
                  </a>
                </div>
              )}
            </div>

            {/* Exercício */}
            {aulaAtual.exercicio && (
              <section className="mb-5 rounded-2xl border border-[#1E2430] bg-[#10141D] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#777BB4]/10 text-lg text-[#A9ACF0]">
                    ✎
                  </div>

                  <div>
                    <h2 className="font-bold">Exercício prático</h2>
                    <p className="text-xs text-[#8A93A6]">
                      Coloque o conhecimento em prática
                    </p>
                  </div>
                </div>

                <p className="whitespace-pre-line text-sm leading-relaxed text-[#C1C8D5]">
                  {aulaAtual.exercicio}
                </p>
              </section>
            )}

            {/* Projeto */}
            {aulaAtual.projeto && (
              <section className="mb-5 rounded-2xl border border-[#1E2430] bg-[#10141D] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#777BB4]/10 text-lg text-[#A9ACF0]">
                    &lt;/&gt;
                  </div>

                  <div>
                    <h2 className="font-bold">Projeto da aula</h2>
                    <p className="text-xs text-[#8A93A6]">
                      Desenvolva algo com o que aprendeu
                    </p>
                  </div>
                </div>

                <p className="whitespace-pre-line text-sm leading-relaxed text-[#C1C8D5]">
                  {aulaAtual.projeto}
                </p>
              </section>
            )}

            {/* Documentação */}
            <section className="mb-8 rounded-2xl border border-[#1E2430] bg-[#10141D] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-bold">
                    Documentação complementar
                  </h2>

                  <p className="mt-1 text-sm text-[#8A93A6]">
                    Consulte a documentação oficial do TypeScript.
                  </p>
                </div>

                <a
                  href={urlDocumentacao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#777BB4]/30 bg-[#777BB4]/10 px-5 py-3 text-sm font-semibold text-[#A9ACF0] transition hover:bg-[#777BB4] hover:text-white"
                >
                  Abrir documentação ↗
                </a>
              </div>
            </section>

            {/* Navegação entre aulas */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aulaAnterior ? (
                <Link
                  href={criarUrlAula(aulaAnterior.ordem)}
                  className="rounded-xl border border-[#1E2430] bg-[#10141D] p-4 transition hover:border-[#777BB4]/50"
                >
                  <span className="text-xs text-[#8A93A6]">
                    ← Aula anterior
                  </span>

                  <p className="mt-2 font-semibold text-[#EDF0F5]">
                    {aulaAnterior.titulo}
                  </p>
                </Link>
              ) : (
                <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-4 opacity-50">
                  <span className="text-xs text-[#8A93A6]">
                    Você está na primeira aula
                  </span>
                </div>
              )}

              {proximaAula ? (
                <Link
                  href={criarUrlAula(proximaAula.ordem)}
                  className="rounded-xl border border-[#777BB4]/30 bg-[#777BB4]/10 p-4 text-left transition hover:border-[#777BB4] hover:bg-[#777BB4]/20 sm:text-right"
                >
                  <span className="text-xs text-[#A9ACF0]">
                    Próxima aula →
                  </span>

                  <p className="mt-2 font-semibold text-[#EDF0F5]">
                    {proximaAula.titulo}
                  </p>
                </Link>
              ) : (
                <Link
                  href="/roadmaps/typescript"
                  className="rounded-xl border border-[#777BB4]/30 bg-[#777BB4]/10 p-4 text-left transition hover:bg-[#777BB4]/20 sm:text-right"
                >
                  <span className="text-xs text-[#A9ACF0]">
                    Módulo concluído
                  </span>

                  <p className="mt-2 font-semibold text-[#EDF0F5]">
                    Voltar ao roadmap →
                  </p>
                </Link>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="h-fit overflow-hidden rounded-2xl border border-[#1E2430] bg-[#10141D] lg:sticky lg:top-6">
            <div className="border-b border-[#1E2430] p-5">
              <Link
                href="/roadmaps/typescript"
                className="text-xs font-semibold text-[#A9ACF0] transition hover:text-white"
              >
                ← Voltar ao roadmap
              </Link>

              <h2 className="mt-4 font-bold">
                {moduloAtual.titulo}
              </h2>

              <p className="mt-1 text-xs text-[#8A93A6]">
                {aulasModulo.length} aulas neste módulo
              </p>
            </div>

            <div className="max-h-[600px] space-y-1 overflow-y-auto p-3">
              {aulasModulo.map((item) => {
                const ativa = item.id_aula === aulaAtual.id_aula;

                return (
                  <Link
                    key={item.id_aula}
                    href={criarUrlAula(item.ordem)}
                    className={`flex items-start gap-3 rounded-xl p-3 transition ${
                      ativa
                        ? "border border-[#777BB4]/30 bg-[#777BB4]/10"
                        : "border border-transparent hover:bg-[#1E2430]/60"
                    }`}
                  >
                    <span
                      className={`mt-0.5 text-xs font-semibold ${
                        ativa ? "text-[#A9ACF0]" : "text-[#687286]"
                      }`}
                    >
                      {formatarNumero(item.ordem)}
                    </span>

                    <span
                      className={`text-sm leading-relaxed ${
                        ativa
                          ? "font-semibold text-[#A9ACF0]"
                          : "text-[#C1C8D5]"
                      }`}
                    >
                      {item.titulo}
                    </span>

                    {ativa && (
                      <span className="ml-auto text-xs text-[#A9ACF0]">
                        ●
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
