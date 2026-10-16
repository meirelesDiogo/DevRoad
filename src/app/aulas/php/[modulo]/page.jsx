
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

function formatarTempo(minutos) {
  if (!minutos || minutos <= 0) return null;

  const horas = Math.floor(minutos / 60);
  const restante = minutos % 60;

  if (horas === 0) return `${restante} min`;
  if (restante === 0) return `${horas}h`;

  return `${horas}h ${restante}min`;
}

export async function generateMetadata({ params }) {
  const { modulo } = await params;
  const moduloNumero = Number(modulo);

  if (
    !Number.isInteger(moduloNumero) ||
    moduloNumero < 1 ||
    moduloNumero > 8
  ) {
    return {
      title: "Módulo não encontrado | DevRoad",
    };
  }

  const moduloData = await prisma.modulo.findFirst({
    where: {
      ordem: moduloNumero,
      tecnologia: {
        nome: "PHP",
      },
    },
    select: {
      titulo: true,
    },
  });

  return {
    title: moduloData
      ? `${moduloData.titulo} | PHP | DevRoad`
      : "Módulo não encontrado | DevRoad",
  };
}

export default async function ModuloPHPPage({ params }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const { modulo } = await params;
  const moduloNumero = Number(modulo);

  if (
    !Number.isInteger(moduloNumero) ||
    moduloNumero < 1 ||
    moduloNumero > 8
  ) {
    notFound();
  }

  const moduloData = await prisma.modulo.findFirst({
    where: {
      ordem: moduloNumero,
      tecnologia: {
        nome: "PHP",
      },
    },
    include: {
      tecnologia: true,
      aulas: {
        orderBy: {
          ordem: "asc",
        },
        select: {
          id: true,
          titulo: true,
          descricao: true,
          ordem: true,
          tempoEstimado: true,
          youtubeUrl: true,
          documentacaoUrl: true,
        },
      },
    },
  });

  if (!moduloData) {
    notFound();
  }

  const aulas = moduloData.aulas;

  const totalMinutos = aulas.reduce(
    (total, aula) => total + (aula.tempoEstimado || 0),
    0
  );

  const proximoModulo = moduloNumero < 8 ? moduloNumero + 1 : null;
  const moduloAnterior = moduloNumero > 1 ? moduloNumero - 1 : null;

  const roadmapUrl = "/roadmaps/php";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0D14] text-[#EDF0F5]">

      {/* Glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10 blur-[120px]"
        style={{
          background:
            "linear-gradient(90deg, #777BB4, #A9ACF0)",
        }}
      />

      <div className="relative mx-auto max-w-[1100px] px-5 py-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#8A93A6]">
          <Link
            href={roadmapUrl}
            className="transition hover:text-[#A9ACF0]"
          >
            Roadmap PHP
          </Link>

          <span>/</span>

          <span className="text-[#EDF0F5]">
            Módulo {String(moduloNumero).padStart(2, "0")}
          </span>
        </nav>

        {/* Cabeçalho */}
        <section className="mb-10">

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#777BB4]/30 bg-[#777BB4]/10">
            <span className="text-xl font-bold text-[#A9ACF0]">
              {String(moduloNumero).padStart(2, "0")}
            </span>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#777BB4]/30 bg-[#777BB4]/10 px-3 py-1 text-xs font-semibold text-[#A9ACF0]">
              PHP
            </span>

            <span className="text-sm text-[#8A93A6]">
              Módulo {moduloNumero} de 8
            </span>
          </div>

          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {moduloData.titulo}
          </h1>

          {moduloData.descricao && (
            <p className="mt-4 max-w-2xl leading-relaxed text-[#8A93A6]">
              {moduloData.descricao}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#8A93A6]">
            <span className="flex items-center gap-2">
              <span className="text-[#A9ACF0]">▤</span>
              {aulas.length} aulas
            </span>

            {totalMinutos > 0 && (
              <span className="flex items-center gap-2">
                <span className="text-[#A9ACF0]">◷</span>
                {formatarTempo(totalMinutos)}
              </span>
            )}
          </div>
        </section>

        {/* Botão para começar */}
        {aulas.length > 0 && (
          <section className="mb-8 overflow-hidden rounded-2xl border border-[#777BB4]/20 bg-[#10141D] p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  Pronto para começar?
                </h2>

                <p className="mt-1 text-sm text-[#8A93A6]">
                  Continue seus estudos e avance neste módulo.
                </p>
              </div>

              <Link
                href={`/aulas/php/${String(moduloNumero).padStart(2, "0")}/${String(aulas[0].ordem).padStart(2, "0")}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#777BB4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#62669E]"
              >
                Começar módulo
                <span>→</span>
              </Link>
            </div>
          </section>
        )}

        {/* Lista de aulas */}
        <section className="mb-12">

          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">
                Conteúdo do módulo
              </h2>

              <p className="mt-1 text-sm text-[#8A93A6]">
                Todas as aulas disponíveis nesta etapa.
              </p>
            </div>

            <span className="rounded-lg border border-[#1E2430] bg-[#10141D] px-3 py-2 text-xs font-semibold text-[#A9ACF0]">
              {aulas.length} aulas
            </span>
          </div>

          {aulas.length > 0 ? (
            <div className="space-y-3">
              {aulas.map((aula) => (
                <Link
                  key={aula.id}
                  href={`/aulas/php/${String(moduloNumero).padStart(2, "0")}/${String(aula.ordem).padStart(2, "0")}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#1E2430] bg-[#10141D] p-4 transition hover:border-[#777BB4]/50 hover:bg-[#151925] sm:p-5"
                >
                  {/* Número da aula */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1E2430] bg-[#0A0D14] transition group-hover:border-[#777BB4]/40 group-hover:bg-[#777BB4]/10">
                    <span className="text-sm font-bold text-[#A9ACF0]">
                      {String(aula.ordem).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Informações */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[#EDF0F5] transition group-hover:text-[#A9ACF0]">
                      {aula.titulo}
                    </h3>

                    {aula.descricao && (
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#8A93A6]">
                        {aula.descricao}
                      </p>
                    )}

                    {aula.tempoEstimado > 0 && (
                      <span className="mt-2 block text-xs text-[#8A93A6]">
                        {formatarTempo(aula.tempoEstimado)}
                      </span>
                    )}
                  </div>

                  {/* Indicadores */}
                  <div className="flex shrink-0 items-center gap-3">
                    {aula.youtubeUrl && (
                      <span
                        title="Possui vídeo"
                        className="hidden text-sm text-[#8A93A6] sm:inline"
                      >
                        ▶
                      </span>
                    )}

                    <span className="text-lg text-[#8A93A6] transition group-hover:translate-x-1 group-hover:text-[#A9ACF0]">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-10 text-center">
              <p className="font-semibold text-[#EDF0F5]">
                Nenhuma aula cadastrada
              </p>

              <p className="mt-2 text-sm text-[#8A93A6]">
                As aulas deste módulo ainda não estão disponíveis.
              </p>
            </div>
          )}
        </section>

        {/* Navegação entre módulos */}
        <section className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1E2430] pt-6">

          {moduloAnterior ? (
            <Link
              href={`/aulas/php/${String(moduloAnterior).padStart(2, "0")}`}
              className="rounded-lg border border-[#1E2430] px-5 py-3 text-sm font-medium text-[#EDF0F5] transition hover:border-[#777BB4] hover:text-[#A9ACF0]"
            >
              ← Módulo anterior
            </Link>
          ) : (
            <Link
              href={roadmapUrl}
              className="rounded-lg border border-[#1E2430] px-5 py-3 text-sm font-medium text-[#EDF0F5] transition hover:border-[#777BB4] hover:text-[#A9ACF0]"
            >
              ← Voltar ao roadmap
            </Link>
          )}

          {proximoModulo ? (
            <Link
              href={`/aulas/php/${String(proximoModulo).padStart(2, "0")}`}
              className="rounded-lg bg-[#777BB4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#62669E]"
            >
              Próximo módulo →
            </Link>
          ) : (
            <Link
              href={roadmapUrl}
              className="rounded-lg bg-[#777BB4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#62669E]"
            >
              Voltar ao roadmap →
            </Link>
          )}
        </section>

      </div>
    </main>
  );
}
