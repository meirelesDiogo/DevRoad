import { auth } from "@/auth";
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";

export const metadata = {
  title: "JavaScript - DevRoad",
  description:
    "Roadmap completo de JavaScript, dos fundamentos até APIs, assincronismo e desenvolvimento com Node.js.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Fundamentos do JavaScript",
    descricao:
      "Aprenda os conceitos fundamentais da linguagem e comece a escrever seus primeiros códigos em JavaScript.",
    aulas: [
      "O que é JavaScript",
      "Como executar JavaScript",
      "Variáveis",
      "let, const e var",
      "Tipos de dados",
      "Operadores",
      "Conversão de tipos",
      "Entrada e saída de dados",
      "Template literals",
      "Comentários e boas práticas",
    ],
  },
  {
    etapa: "02",
    titulo: "Controle de fluxo",
    descricao:
      "Aprenda a controlar a execução do programa utilizando condições, operadores lógicos e estruturas de repetição.",
    aulas: [
      "if e else",
      "else if",
      "Operador ternário",
      "Operadores lógicos",
      "switch",
      "for",
      "while",
      "do...while",
      "break e continue",
      "Exercícios de lógica",
    ],
  },
  {
    etapa: "03",
    titulo: "Arrays e objetos",
    descricao:
      "Aprenda a trabalhar com estruturas de dados essenciais para praticamente qualquer aplicação JavaScript.",
    aulas: [
      "O que são arrays",
      "Acessando elementos",
      "Adicionando e removendo elementos",
      "Percorrendo arrays",
      "map",
      "filter",
      "find",
      "reduce",
      "O que são objetos",
      "Propriedades e métodos",
      "Destructuring",
      "Spread e Rest",
    ],
  },
  {
    etapa: "04",
    titulo: "Funções",
    descricao:
      "Domine funções e aprenda conceitos importantes como callbacks, escopo, closures e recursão.",
    aulas: [
      "Criando funções",
      "Parâmetros e argumentos",
      "Retorno",
      "Escopo",
      "Function expression",
      "Arrow functions",
      "Callbacks",
      "Funções de alta ordem",
      "Closures",
      "Recursão",
    ],
  },
  {
    etapa: "05",
    titulo: "JavaScript no navegador",
    descricao:
      "Aprenda a utilizar JavaScript para criar páginas interativas manipulando o DOM e respondendo às ações do usuário.",
    aulas: [
      "O que é DOM",
      "Selecionando elementos",
      "Alterando conteúdo",
      "Alterando estilos",
      "Criando elementos",
      "Removendo elementos",
      "Eventos",
      "Formulários",
      "Validação",
      "localStorage",
      "sessionStorage",
      "Projeto: Lista de tarefas",
    ],
  },
  {
    etapa: "06",
    titulo: "JavaScript moderno",
    descricao:
      "Conheça recursos modernos da linguagem utilizados no desenvolvimento de aplicações atuais.",
    aulas: [
      "ES6+",
      "Destructuring avançado",
      "Spread e Rest",
      "Modules",
      "import e export",
      "Optional chaining",
      "Nullish coalescing",
      "Default parameters",
      "Sets e Maps",
      "Date e Math",
    ],
  },
  {
    etapa: "07",
    titulo: "Assincronismo e APIs",
    descricao:
      "Aprenda a trabalhar com operações assíncronas, Promises e APIs REST.",
    aulas: [
      "Código síncrono e assíncrono",
      "Callbacks",
      "Promises",
      "async e await",
      "Tratamento de erros",
      "fetch",
      "Requisições GET",
      "POST, PUT e DELETE",
      "JSON",
      "APIs REST",
      "Consumo de APIs externas",
      "Projeto: Aplicação consumindo API",
    ],
  },
  {
    etapa: "08",
    titulo: "JavaScript para Backend",
    descricao:
      "Dê o próximo passo utilizando JavaScript no backend com Node.js e prepare-se para criar aplicações completas.",
    aulas: [
      "O que é Node.js",
      "Node.js e JavaScript",
      "NPM",
      "package.json",
      "Módulos no Node.js",
      "File System",
      "HTTP com Node.js",
      "Criando um servidor",
      "CRUD em memória",
      "Projeto final com Node.js",
    ],
  },
];

export default async function JavaScriptRoadmap() {
  const session = await auth();

  return (
    <RoadmapLayout
      titulo="JavaScript"
      descricao="Aprenda JavaScript do zero. Domine a linguagem, crie aplicações interativas no navegador e avance até APIs, assincronismo e Node.js."
      categoria="Roadmap · JavaScript"
      icone="/icons/front/javascript.svg"
      iconeAlt="JavaScript"
      roadmap={ROADMAP}
      isAuthenticated={Boolean(session?.user)}
      moduleBase="/aulas/javascript"
      lessonSuffix="/01"
      projeto={{
        titulo: "Agora coloque tudo em prática.",
        descricao:
          "Depois de concluir as etapas, você estará preparado para criar aplicações JavaScript, consumir APIs e dar os primeiros passos no desenvolvimento backend com Node.js.",
        href: "/projetos/javascript",
      }}
    />
  );
}