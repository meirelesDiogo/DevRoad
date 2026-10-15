
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function generateMetadata({ params }) {
  const { modulo } = await params;
  const numero = Number(modulo);

  if (!Number.isInteger(numero) || numero < 1 || numero > 8) {
    return { title: "Módulo não encontrado | DevRoad" };
  }

  const moduloData = await prisma.modulo.findFirst({
    where: {
      ordem: numero,
      tecnologia: { nome: "Java" },
    },
    select: {
      titulo: true,
      descricao: true,
    },
  });

  return {
    title: moduloData
      ? `${moduloData.titulo} | Java | DevRoad`
      : "Módulo não encontrado | DevRoad",
    description: moduloData?.descricao || "Estude Java com o DevRoad.",
  };
}

export default async function ModuloJavaPage({ params }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const { modulo } = await params;
  const numero = Number(modulo);

  if (!Number.isInteger(numero) || numero < 1 || numero > 8) {
    notFound();
  }

  const moduloData = await prisma.modulo.findFirst({
    where: {
      ordem: numero,
      tecnologia: {
        nome: "Java",
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
          tempoEstimado: true,
          ordem: true,
        },
      },
    },
  });

  if (!moduloData) {
    notFound();
  }

  const totalAulas = moduloData.aulas.length;

  const totalMinutos = moduloData.aulas.reduce(
    (total, aula) => total + (aula.tempoEstimado || 0),
    0
  );

  const formatarTempo = (minutos) => {
    if (!minutos) return "Não informado";

    const horas = Math.floor(minutos / 60);
    const restante = minutos % 60;

    if (horas === 0) return `${restante} min`;
    if (restante === 0) return `${horas}h`;

    return `${horas}h ${restante}min`;
  };

  return (
    <main className="min-h-screen bg-[#0A0D14] px-5 py-10 text-[#EDF0F5] sm:px-8">
      <div className="mx-auto max-w-[1100px]">

        {/* VOLTAR */}

        <Link
          href="/roadmaps/java"
          className="mb-10 inline-flex items-center gap-2 text-sm text-[#8A93A6] transition hover:text-white"
        >
          <span>←</span>
          Voltar para o roadmap de Java
        </Link>

        {/* CABEÇALHO */}

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#2E8BFF]/30 bg-[#2E8BFF]/10 px-3 py-1 font-mono text-xs text-[#2E8BFF]">
              MÓDULO {String(numero).padStart(2, "0")}
            </span>

            <span className="text-sm text-[#5C6478]">
              Java
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {moduloData.titulo}
          </h1>

          <p className="max-w-[750px] text-base leading-relaxed text-[#8A93A6] sm:text-lg">
            {moduloData.descricao ||
              "Explore as aulas deste módulo e avance no seu aprendizado de Java."}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] px-5 py-4">
              <p className="text-2xl font-bold">{totalAulas}</p>
              <p className="mt-1 text-xs text-[#8A93A6]">Aulas</p>
            </div>

            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] px-5 py-4">
              <p className="text-2xl font-bold">
                {formatarTempo(totalMinutos)}
              </p>
              <p className="mt-1 text-xs text-[#8A93A6]">
                Tempo estimado
              </p>
            </div>
          </div>
        </header>

        {/* LISTA DE AULAS */}

        <section>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">
                Conteúdo do módulo
              </h2>

              <p className="mt-1 text-sm text-[#8A93A6]">
                Siga as aulas em ordem para aproveitar melhor o conteúdo.
              </p>
            </div>

            <span className="hidden rounded-lg border border-[#1E2430] px-3 py-2 text-xs text-[#8A93A6] sm:block">
              {totalAulas} aulas disponíveis
            </span>
          </div>

          {moduloData.aulas.length === 0 ? (
            <div className="rounded-2xl border border-[#1E2430] bg-[#10141D] p-8 text-center">
              <h3 className="font-semibold">
                Nenhuma aula cadastrada
              </h3>

              <p className="mt-2 text-sm text-[#8A93A6]">
                As aulas deste módulo ainda não estão disponíveis.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {moduloData.aulas.map((aula, index) => (
                <Link
                  key={aula.id}
                  href={`/aulas/java/${String(numero).padStart(2, "0")}/${String(aula.ordem).padStart(2, "0")}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#1E2430] bg-[#10141D] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#2E8BFF]/50 hover:bg-[#131A27] sm:p-5"
                >
                  {/* NÚMERO */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#2E8BFF]/20 bg-[#2E8BFF]/10 font-mono text-sm font-bold text-[#2E8BFF]">
                    {String(aula.ordem).padStart(2, "0")}
                  </div>

                  {/* INFORMAÇÕES */}

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-[#EDF0F5] transition group-hover:text-[#2E8BFF]">
                      {aula.titulo}
                    </h3>

                    {aula.descricao && (
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#8A93A6]">
                        {aula.descricao}
                      </p>
                    )}

                    {aula.tempoEstimado && (
                      <span className="mt-2 inline-block text-xs text-[#5C6478]">
                        {aula.tempoEstimado} minutos
                      </span>
                    )}
                  </div>

                  {/* SETA */}

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1E2430] text-[#8A93A6] transition group-hover:border-[#2E8BFF]/30 group-hover:text-[#2E8BFF]">
                    →
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* NAVEGAÇÃO ENTRE MÓDULOS */}

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#1E2430] pt-7">
          {numero > 1 ? (
            <Link
              href={`/aulas/java/${String(numero - 1).padStart(2, "0")}`}
              className="text-sm text-[#8A93A6] transition hover:text-white"
            >
              ← Módulo anterior
            </Link>
          ) : (
            <span />
          )}

          {numero < 8 ? (
            <Link
              href={`/aulas/java/${String(numero + 1).padStart(2, "0")}`}
              className="rounded-lg bg-gradient-to-r from-[#2E8BFF] to-[#7C5CFF] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Próximo módulo →
            </Link>
          ) : (
            <Link
              href="/roadmaps/java"
              className="rounded-lg bg-gradient-to-r from-[#2E8BFF] to-[#7C5CFF] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Finalizar roadmap →
            </Link>
          )}
        </footer>
      </div>
    </main>
  );
}
