import { PrismaClient } from "@prisma/client";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

const tecnologias = [
  {
    nome: "HTML & CSS",
    descricao:
      "Aprenda a criar páginas web modernas, estruturadas e responsivas utilizando HTML5 e CSS3.",
    imagem: "/tecnologias/html-css.png",
    cor: "#E34F26",

    modulos: [
      {
        titulo: "Fundamentos da Web",
        descricao:
          "Entenda como a Web funciona, sua estrutura e os principais conceitos necessários para começar.",
        ordem: 1,
      },
      {
        titulo: "HTML",
        descricao:
          "Aprenda a estruturar páginas utilizando HTML5, elementos semânticos, formulários e boas práticas.",
        ordem: 2,
      },
      {
        titulo: "CSS",
        descricao:
          "Aprenda a estilizar páginas utilizando seletores, propriedades, cores, fontes e outros recursos.",
        ordem: 3,
      },
      {
        titulo: "Layout com CSS",
        descricao:
          "Aprenda a criar layouts utilizando Flexbox, Grid e outras técnicas modernas de CSS.",
        ordem: 4,
      },
      {
        titulo: "Responsividade",
        descricao:
          "Aprenda a desenvolver páginas que funcionam corretamente em diferentes tamanhos de tela.",
        ordem: 5,
      },
      {
        titulo: "CSS Avançado",
        descricao:
          "Explore animações, transições, transformações, variáveis e recursos avançados do CSS.",
        ordem: 6,
      },
      {
        titulo: "Boas Práticas",
        descricao:
          "Aprenda técnicas para escrever HTML e CSS organizados, reutilizáveis, acessíveis e fáceis de manter.",
        ordem: 7,
      },
      {
        titulo: "Projeto Prático",
        descricao:
          "Coloque em prática os conhecimentos adquiridos construindo um projeto completo.",
        ordem: 8,
      },
    ],
  },

  {
    nome: "JavaScript",
    descricao:
      "Aprenda JavaScript do básico ao desenvolvimento de aplicações web interativas.",
    imagem: "/tecnologias/javascript.png",
    cor: "#F7DF1E",

    modulos: [
      {
        titulo: "Fundamentos do JavaScript",
        descricao:
          "Aprenda variáveis, tipos de dados, operadores e os principais fundamentos da linguagem.",
        ordem: 1,
      },
      {
        titulo: "Controle de Fluxo",
        descricao:
          "Aprenda estruturas condicionais e de repetição para controlar o comportamento dos programas.",
        ordem: 2,
      },
      {
        titulo: "Funções",
        descricao:
          "Aprenda a criar, utilizar e organizar funções em JavaScript.",
        ordem: 3,
      },
      {
        titulo: "Arrays e Objetos",
        descricao:
          "Aprenda a trabalhar com estruturas de dados fundamentais do JavaScript.",
        ordem: 4,
      },
      {
        titulo: "DOM",
        descricao:
          "Aprenda a manipular elementos HTML e criar interações utilizando JavaScript.",
        ordem: 5,
      },
      {
        titulo: "JavaScript Assíncrono",
        descricao:
          "Entenda callbacks, Promises, async/await e operações assíncronas.",
        ordem: 6,
      },
      {
        titulo: "APIs e Fetch",
        descricao:
          "Aprenda a consumir APIs e trabalhar com requisições HTTP utilizando Fetch.",
        ordem: 7,
      },
      {
        titulo: "Projeto Prático",
        descricao:
          "Desenvolva um projeto completo utilizando os conhecimentos adquiridos em JavaScript.",
        ordem: 8,
      },
    ],
  },

  {
    nome: "Python",
    descricao:
      "Aprenda Python desde os fundamentos até conceitos utilizados no desenvolvimento de aplicações.",
    imagem: "/tecnologias/python.png",
    cor: "#3776AB",

    modulos: [
      {
        titulo: "Fundamentos do Python",
        descricao:
          "Aprenda a sintaxe, variáveis, tipos de dados, operadores e conceitos básicos da linguagem.",
        ordem: 1,
      },
      {
        titulo: "Controle de Fluxo",
        descricao:
          "Aprenda estruturas condicionais e loops para controlar o fluxo dos programas.",
        ordem: 2,
      },
      {
        titulo: "Funções",
        descricao:
          "Aprenda a criar funções e organizar o código de forma reutilizável.",
        ordem: 3,
      },
      {
        titulo: "Listas e Dicionários",
        descricao:
          "Aprenda a trabalhar com listas, dicionários e outras estruturas de dados.",
        ordem: 4,
      },
      {
        titulo: "Programação Orientada a Objetos",
        descricao:
          "Entenda classes, objetos, herança, encapsulamento e outros conceitos de POO.",
        ordem: 5,
      },
      {
        titulo: "Arquivos e Exceções",
        descricao:
          "Aprenda a manipular arquivos e tratar erros utilizando exceções.",
        ordem: 6,
      },
      {
        titulo: "Bibliotecas e APIs",
        descricao:
          "Aprenda a utilizar bibliotecas externas e consumir APIs utilizando Python.",
        ordem: 7,
      },
      {
        titulo: "Projeto Prático",
        descricao:
          "Desenvolva um projeto completo aplicando os conceitos aprendidos em Python.",
        ordem: 8,
      },
    ],
  },

  {
    nome: "Java",
    descricao:
      "Aprenda Java desde os fundamentos até conceitos de programação orientada a objetos e banco de dados.",
    imagem: "/tecnologias/java.png",
    cor: "#ED8B00",

    modulos: [
      {
        titulo: "Fundamentos do Java",
        descricao:
          "Aprenda a sintaxe, tipos de dados, variáveis, operadores e conceitos fundamentais do Java.",
        ordem: 1,
      },
      {
        titulo: "Controle de Fluxo",
        descricao:
          "Aprenda estruturas condicionais e de repetição utilizando Java.",
        ordem: 2,
      },
      {
        titulo: "Métodos e Arrays",
        descricao:
          "Aprenda a criar métodos e trabalhar com arrays em Java.",
        ordem: 3,
      },
      {
        titulo: "Orientação a Objetos",
        descricao:
          "Aprenda classes, objetos, herança, polimorfismo, encapsulamento e abstração.",
        ordem: 4,
      },
      {
        titulo: "Collections",
        descricao:
          "Aprenda a trabalhar com as principais estruturas da Java Collections Framework.",
        ordem: 5,
      },
      {
        titulo: "Exceções e Arquivos",
        descricao:
          "Aprenda tratamento de exceções e manipulação de arquivos em Java.",
        ordem: 6,
      },
      {
        titulo: "Banco de Dados",
        descricao:
          "Aprenda os conceitos necessários para conectar aplicações Java a bancos de dados.",
        ordem: 7,
      },
      {
        titulo: "Projeto Prático",
        descricao:
          "Desenvolva uma aplicação completa utilizando os conceitos aprendidos em Java.",
        ordem: 8,
      },
    ],
  },

  {
    nome: "PHP",
    descricao:
      "Aprenda PHP para desenvolvimento web, trabalhando com formulários, banco de dados, autenticação e sessões.",
    imagem: "/tecnologias/php.png",
    cor: "#777BB4",

    modulos: [
      {
        titulo: "Fundamentos do PHP",
        descricao:
          "Aprenda sintaxe, variáveis, tipos de dados, operadores e os principais fundamentos do PHP.",
        ordem: 1,
      },
      {
        titulo: "Controle de Fluxo",
        descricao:
          "Aprenda estruturas condicionais e de repetição utilizando PHP.",
        ordem: 2,
      },
      {
        titulo: "Funções e Arrays",
        descricao:
          "Aprenda a criar funções e trabalhar com arrays em PHP.",
        ordem: 3,
      },
      {
        titulo: "Programação Orientada a Objetos",
        descricao:
          "Aprenda classes, objetos, herança, interfaces, encapsulamento e outros conceitos de POO.",
        ordem: 4,
      },
      {
        titulo: "Formulários",
        descricao:
          "Aprenda a receber, validar e processar dados enviados por formulários.",
        ordem: 5,
      },
      {
        titulo: "Banco de Dados",
        descricao:
          "Aprenda a conectar aplicações PHP a bancos de dados e realizar operações CRUD.",
        ordem: 6,
      },
      {
        titulo: "Autenticação e Sessões",
        descricao:
          "Aprenda conceitos de autenticação, sessões e controle de acesso em aplicações PHP.",
        ordem: 7,
      },
      {
        titulo: "Projeto Prático",
        descricao:
          "Desenvolva um projeto completo utilizando os conhecimentos adquiridos em PHP.",
        ordem: 8,
      },
    ],
  },
];

/*
|--------------------------------------------------------------------------
| AULAS
|--------------------------------------------------------------------------
| As aulas ficam separadas das tecnologias e módulos.
| Cada aula aponta para uma tecnologia e para o módulo através
| da ordem do módulo.
*/

const aulas = [
  {
    tecnologia: "HTML & CSS",
    moduloOrdem: 1,
    titulo: "Introdução ao HTML",
    descricao:
      "Aprenda os fundamentos do HTML, entenda a estrutura básica de uma página e crie seu primeiro documento HTML.",
    youtubeUrl: "https://www.youtube.com/watch?v=iZ1ucWosOww",
    documentacaoUrl:
      "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    projeto:
      "Criar uma página HTML simples contendo título, parágrafos e uma estrutura básica de documento.",
    exercicio:
      "Crie seu primeiro arquivo HTML utilizando a estrutura básica apresentada na aula.",
    ordem: 1,
    tempoEstimado: 30,
  },
];

async function main() {
  console.log("🌱 Iniciando seed do DevRoad...\n");

  /*
  |--------------------------------------------------------------------------
  | TECNOLOGIAS E MÓDULOS
  |--------------------------------------------------------------------------
  */

  for (const tecnologiaData of tecnologias) {
    const { modulos, ...dadosTecnologia } = tecnologiaData;

    const tecnologia = await prisma.tecnologias.upsert({
      where: {
        nome: dadosTecnologia.nome,
      },

      update: {
        descricao: dadosTecnologia.descricao,
        imagem: dadosTecnologia.imagem,
        cor: dadosTecnologia.cor,
      },

      create: dadosTecnologia,
    });

    console.log(`💻 Tecnologia: ${tecnologia.nome}`);

    for (const moduloData of modulos) {
      const moduloExistente = await prisma.modulo.findFirst({
        where: {
          tecnologiaId: tecnologia.id,
          ordem: moduloData.ordem,
        },
      });

      if (moduloExistente) {
        await prisma.modulo.update({
          where: {
            id: moduloExistente.id,
          },

          data: {
            titulo: moduloData.titulo,
            descricao: moduloData.descricao,
          },
        });

        console.log(`   ↻ Módulo atualizado: ${moduloData.titulo}`);
      } else {
        await prisma.modulo.create({
          data: {
            tecnologiaId: tecnologia.id,
            titulo: moduloData.titulo,
            descricao: moduloData.descricao,
            ordem: moduloData.ordem,
          },
        });

        console.log(`   ✓ Módulo criado: ${moduloData.titulo}`);
      }
    }

    console.log("");
  }

  /*
  |--------------------------------------------------------------------------
  | AULAS
  |--------------------------------------------------------------------------
  */

  console.log("📚 Cadastrando aulas...\n");

  for (const aulaData of aulas) {
    const tecnologia = await prisma.tecnologias.findUnique({
      where: {
        nome: aulaData.tecnologia,
      },
    });

    if (!tecnologia) {
      throw new Error(
        `Tecnologia "${aulaData.tecnologia}" não encontrada.`
      );
    }

    const modulo = await prisma.modulo.findFirst({
      where: {
        tecnologiaId: tecnologia.id,
        ordem: aulaData.moduloOrdem,
      },
    });

    if (!modulo) {
      throw new Error(
        `Módulo ${aulaData.moduloOrdem} da tecnologia "${aulaData.tecnologia}" não encontrado.`
      );
    }

    const aulaExistente = await prisma.aula.findFirst({
      where: {
        moduloId: modulo.id,
        ordem: aulaData.ordem,
      },
    });

    if (aulaExistente) {
      await prisma.aula.update({
        where: {
          id: aulaExistente.id,
        },

        data: {
          titulo: aulaData.titulo,
          descricao: aulaData.descricao,
          youtubeUrl: aulaData.youtubeUrl,
          documentacaoUrl: aulaData.documentacaoUrl,
          projeto: aulaData.projeto,
          exercicio: aulaData.exercicio,
          tempoEstimado: aulaData.tempoEstimado,
        },
      });

      console.log(`   ↻ Aula atualizada: ${aulaData.titulo}`);
    } else {
      await prisma.aula.create({
        data: {
          moduloId: modulo.id,
          titulo: aulaData.titulo,
          descricao: aulaData.descricao,
          youtubeUrl: aulaData.youtubeUrl,
          documentacaoUrl: aulaData.documentacaoUrl,
          projeto: aulaData.projeto,
          exercicio: aulaData.exercicio,
          ordem: aulaData.ordem,
          tempoEstimado: aulaData.tempoEstimado,
        },
      });

      console.log(`   ✓ Aula criada: ${aulaData.titulo}`);
    }
  }

  console.log("\n✅ Seed concluído com sucesso!");
}

main()
  .catch((error) => {
    console.error("❌ Erro ao executar o seed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });