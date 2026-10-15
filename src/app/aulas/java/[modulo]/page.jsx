
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
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
      tecnologia: {
        nome: "Java",
      },
    },
    select: {
      titulo: true,
    },
  });

  return {
    title: moduloData
      ? `${moduloData.titulo} | DevRoad`
      : "Módulo não encontrado | DevRoad",
  };
}

function formatarTempo(minutos) {
  if (!minutos || minutos <= 0) return "0 min";

  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  if (horas === 0) return `${minutosRestantes} min`;
  if (minutosRestantes === 0) return `${horas}h`;

  return `${horas}h ${minutosRestantes}min`;
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

  const proximoModulo = numero < 8 ? numero + 1 : null;
  const moduloAnterior = numero > 1 ? numero - 1 : null;

  return (
    <main className="min-h-screen bg-[#0A0D14] px-4 py-8 text-[#EDF0F5] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Navegação */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#8A93A6]">
          <Link
            href="/roadmaps/java"
            className="transition hover:text-[#2E8BFF]"
          >
            Roadmap Java
          </Link>

          <span>/</span>

          <span className="text-[#EDF0F5]">
            Módulo {String(numero).padStart(2, "0")}
          </span>
        </div>

        {/* Cabeçalho */}
        <section className="mb-8 rounded-2xl border border-[#1E2430] bg-[#10141D] p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#2E8BFF]/30 bg-[#2E8BFF]/10 px-3 py-1 text-xs font-semibold text-[#2E8BFF]">
              JAVA
            </span>

            <span className="text-sm text-[#8A93A6]">
              Módulo {String(numero).padStart(2, "0")} de 08
            </span>
          </div>

          <h1 className="mb-3 text-2xl font-bold sm:text-3xl">
            {moduloData.titulo}
          </h1>

          <p className="max-w-3xl leading-relaxed text-[#8A93A6]">
            {moduloData.descricao || "Explore os conteúdos deste módulo e desenvolva suas habilidades em Java."}
          </p>

          <div className="mt-7 flex flex-wrap gap-6 border-t border-[#1E2430] pt-6">
            <div>
              <p className="text-2xl font-bold text-[#2E8BFF]">
                {totalAulas}
              </p>
              <p className="text-sm text-[#8A93A6]">
                {totalAulas === 1 ? "Aula" : "Aulas"}
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#2E8BFF]">
                {formatarTempo(totalMinutos)}
              </p>
              <p className="text-sm text-[#8A93A6]">
                Tempo estimado
              </p>
            </div>
          </div>
        </section>

        {/* Lista de aulas */}
        <section>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">Conteúdo do módulo</h2>
              <p className="mt-1 text-sm text-[#8A93A6]">
                Selecione uma aula para começar a estudar.
              </p>
            </div>

            <span className="text-sm text-[#8A93A6]">
              {totalAulas} aulas
            </span>
          </div>

          {totalAulas > 0 ? (
            <div className="space-y-3">
              {moduloData.aulas.map((aula) => (
                <Link
                  key={aula.id}
                  href={`/aulas/java/${String(numero).padStart(2, "0")}/${String(aula.ordem).padStart(2, "0")}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#1E2430] bg-[#10141D] p-4 transition hover:border-[#2E8BFF]/50 hover:bg-[#141B28] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#2E8BFF]/20 bg-[#2E8BFF]/10 text-sm font-bold text-[#2E8BFF] transition group-hover:bg-[#2E8BFF] group-hover:text-white">
                    {String(aula.ordem).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[#EDF0F5] transition group-hover:text-[#2E8BFF]">
                      {aula.titulo}
                    </h3>

                    {aula.descricao && (
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#8A93A6]">
                        {aula.descricao}
                      </p>
                    )}

                    {aula.tempoEstimado > 0 && (
                      <p className="mt-2 text-xs text-[#8A93A6]">
                        {formatarTempo(aula.tempoEstimado)}
                      </p>
                    )}
                  </div>

                  <span className="shrink-0 text-[#8A93A6] transition group-hover:translate-x-1 group-hover:text-[#2E8BFF]">
                    →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-[#1E2430] bg-[#10141D] p-8 text-center">
              <h3 className="font-semibold">Nenhuma aula cadastrada</h3>
              <p className="mt-2 text-sm text-[#8A93A6]">
                As aulas deste módulo ainda não foram adicionadas.
              </p>
            </div>
          )}
        </section>

        {/* Navegação entre módulos */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#1E2430] pt-6">
          {moduloAnterior ? (
            <Link
              href={`/aulas/java/${String(moduloAnterior).padStart(2, "0")}`}
              className="rounded-lg border border-[#1E2430] px-5 py-3 text-sm text-[#EDF0F5] transition hover:border-[#2E8BFF] hover:text-[#2E8BFF]"
            >
              ← Módulo anterior
            </Link>
          ) : (
            <Link
              href="/roadmaps/java"
              className="rounded-lg border border-[#1E2430] px-5 py-3 text-sm text-[#EDF0F5] transition hover:border-[#2E8BFF] hover:text-[#2E8BFF]"
            >
              ← Roadmap Java
            </Link>
          )}

          {proximoModulo && (
            <Link
              href={`/aulas/java/${String(proximoModulo).padStart(2, "0")}`}
              className="rounded-lg bg-[#2E8BFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1976E8]"
            >
              Próximo módulo →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
