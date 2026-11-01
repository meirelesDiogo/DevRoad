
import { auth } from "@/auth";
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";

export const metadata = {
  title: "TypeScript - DevRoad",
  description:
    "Roadmap completo de TypeScript, dos fundamentos até Generics, orientação a objetos e desenvolvimento com Node.js.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Introdução ao TypeScript",
    descricao:
      "Conheça o TypeScript, entenda suas vantagens e prepare seu ambiente de desenvolvimento.",
    aulas: [
      "O que é TypeScript",
      "TypeScript e JavaScript",
      "Por que utilizar TypeScript",
      "Como o TypeScript funciona",
      "Instalando o Node.js e o TypeScript",
      "Configurando um projeto TypeScript",
      "Compilando arquivos TypeScript",
      "Conhecendo o arquivo tsconfig.json",
    ],
  },
  {
    etapa: "02",
    titulo: "Tipos e variáveis",
    descricao:
      "Aprenda a trabalhar com os principais tipos de dados e a declarar variáveis com segurança.",
    aulas: [
      "Declaração de variáveis",
      "Tipo string",
      "Tipo number",
      "Tipo boolean",
      "Arrays e tipagem de listas",
      "Tuplas",
      "Enums",
      "Any, unknown e never",
    ],
  },
  {
    etapa: "03",
    titulo: "Funções e tipagem avançada",
    descricao:
      "Domine a tipagem de funções, parâmetros, retornos e recursos que tornam o código mais seguro.",
    aulas: [
      "Tipando funções",
      "Tipos de retorno",
      "Parâmetros opcionais",
      "Parâmetros padrão",
      "Parâmetros rest",
      "Union Types",
      "Type Aliases",
      "Type Narrowing",
    ],
  },
  {
    etapa: "04",
    titulo: "Objetos, interfaces e tipos",
    descricao:
      "Organize estruturas de dados utilizando objetos, interfaces e combinações de tipos.",
    aulas: [
      "Tipagem de objetos",
      "Propriedades opcionais e readonly",
      "Criando interfaces",
      "Extensão de interfaces",
      "Interfaces versus Type Aliases",
      "Intersection Types",
      "Literal Types",
      "Discriminated Unions",
    ],
  },
  {
    etapa: "05",
    titulo: "Orientação a objetos",
    descricao:
      "Utilize os recursos de orientação a objetos do TypeScript para estruturar aplicações.",
    aulas: [
      "Classes no TypeScript",
      "Construtores",
      "Modificadores de acesso",
      "Propriedades readonly",
      "Herança",
      "Implementando interfaces",
      "Classes abstratas",
      "Getters e setters",
    ],
  },
  {
    etapa: "06",
    titulo: "Generics e recursos avançados",
    descricao:
      "Explore recursos avançados da linguagem para criar códigos reutilizáveis e flexíveis.",
    aulas: [
      "O que são Generics",
      "Generics em funções",
      "Generics em interfaces",
      "Generics em classes",
      "Constraints",
      "Utility Types",
      "Type Assertions",
      "Mapped Types e Conditional Types",
    ],
  },
  {
    etapa: "07",
    titulo: "TypeScript no desenvolvimento",
    descricao:
      "Aprenda a utilizar TypeScript em projetos reais, trabalhando com módulos, APIs e ferramentas.",
    aulas: [
      "Organização de arquivos e módulos",
      "Import e Export",
      "Trabalhando com módulos externos",
      "Tipando respostas de APIs",
      "Promises e Async/Await",
      "Tratamento de erros",
      "TypeScript com Node.js",
      "Boas práticas e organização do código",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto final",
    descricao:
      "Aplique os conhecimentos adquiridos desenvolvendo uma aplicação completa com TypeScript.",
    aulas: [
      "Planejamento do projeto",
      "Configurando o ambiente",
      "Estruturando a aplicação",
      "Criando os modelos e tipos",
      "Desenvolvendo as funcionalidades",
      "Integrando uma API",
      "Testando e corrigindo erros",
      "Revisão e finalização do projeto",
    ],
  },
];

export default async function TypeScriptRoadmap() {
  const session = await auth();

  return (
    <RoadmapLayout
      titulo="TypeScript"
      descricao="Aprenda TypeScript do zero. Domine tipagem estática, interfaces, Generics e desenvolva aplicações mais seguras e organizadas."
      categoria="Roadmap · TypeScript"
      icone="/icons/front/typescript.svg"
      iconeAlt="TypeScript"
      roadmap={ROADMAP}
      isAuthenticated={Boolean(session?.user)}
      moduleBase="/aulas/typescript"
      lessonSuffix="/01"
      projeto={{
        titulo: "Agora coloque tudo em prática.",
        descricao:
          "Depois de concluir as etapas, você estará preparado para desenvolver aplicações com TypeScript, trabalhar com APIs e utilizar tipagem estática em projetos com Node.js.",
        href: "/projetos/typescript",
      }}
    />
  );
}
