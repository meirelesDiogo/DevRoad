
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";

export const metadata = {
  title: "Angular - DevRoad",
  description:
    "Aprenda Angular do zero e desenvolva aplicações web modernas com TypeScript.",
};

const roadmap = [
  {
    etapa: "01",
    titulo: "Introdução ao Angular",
    descricao:
      "Conheça o Angular, prepare seu ambiente e crie sua primeira aplicação.",
    aulas: [
      "O que é Angular?",
      "Angular e outros frameworks",
      "Como funciona o Angular",
      "Conhecendo a arquitetura do Angular",
      "Instalando Node.js e Angular CLI",
      "Criando seu primeiro projeto",
      "Estrutura de pastas do Angular",
      "Executando e entendendo a aplicação",
    ],
  },
  {
    etapa: "02",
    titulo: "Componentes e templates",
    descricao:
      "Aprenda a construir interfaces utilizando componentes, templates e recursos do Angular.",
    aulas: [
      "O que são componentes?",
      "Criando componentes standalone",
      "Estrutura de um componente",
      "Templates e interpolação",
      "Property Binding",
      "Event Binding",
      "Two-way Data Binding",
      "Control Flow: @if, @for e @switch",
    ],
  },
  {
    etapa: "03",
    titulo: "TypeScript aplicado ao Angular",
    descricao:
      "Aplique conceitos de TypeScript para criar componentes organizados e tipados.",
    aulas: [
      "Classes e propriedades no Angular",
      "Interfaces e tipagem de dados",
      "Tipos em componentes",
      "Inputs e outputs",
      "Comunicação entre componentes",
      "Pipes e transformação de dados",
      "Pipes personalizados",
      "Diretivas e atributos",
    ],
  },
  {
    etapa: "04",
    titulo: "Serviços e injeção de dependência",
    descricao:
      "Organize a lógica da aplicação e compartilhe dados utilizando serviços.",
    aulas: [
      "O que são serviços?",
      "Criando serviços com Angular CLI",
      "Injeção de dependência",
      "Utilizando o inject()",
      "Compartilhando dados entre componentes",
      "Organização da lógica da aplicação",
      "Providers e escopos de serviços",
      "Boas práticas com serviços",
    ],
  },
  {
    etapa: "05",
    titulo: "Rotas e navegação",
    descricao:
      "Construa aplicações com múltiplas páginas e navegação dinâmica.",
    aulas: [
      "Introdução ao Angular Router",
      "Configurando as rotas",
      "Router Outlet e Router Link",
      "Navegação programática",
      "Parâmetros de rota",
      "Rotas filhas e layouts",
      "Lazy Loading",
      "Guards e proteção de rotas",
    ],
  },
  {
    etapa: "06",
    titulo: "Formulários e validações",
    descricao:
      "Crie formulários interativos, controle dados e implemente validações.",
    aulas: [
      "Introdução aos formulários",
      "Template-driven Forms",
      "Reactive Forms",
      "FormControl e FormGroup",
      "FormBuilder",
      "Validadores e mensagens de erro",
      "Validadores personalizados",
      "Enviando e tratando dados de formulários",
    ],
  },
  {
    etapa: "07",
    titulo: "Signals, APIs e recursos avançados",
    descricao:
      "Trabalhe com estado reativo, comunicação com APIs e recursos importantes do Angular.",
    aulas: [
      "Introdução aos Signals",
      "signal() e atualização de estado",
      "computed() e effect()",
      "HttpClient e requisições HTTP",
      "Observables e RxJS",
      "Tratamento de erros em requisições",
      "Interceptors HTTP",
      "Organização e boas práticas no Angular",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto final",
    descricao:
      "Desenvolva uma aplicação completa aplicando os principais recursos do Angular.",
    aulas: [
      "Planejamento da aplicação",
      "Criando e configurando o projeto",
      "Estruturando componentes e páginas",
      "Implementando navegação e rotas",
      "Criando serviços e integração com API",
      "Desenvolvendo formulários e validações",
      "Gerenciando estado e tratando erros",
      "Revisão, testes e finalização",
    ],
  },
];

export default function AngularRoadmapPage() {
  return (
    <RoadmapLayout
      titulo="Angular"
      descricao="Domine o Angular e aprenda a construir aplicações web modernas, organizadas e escaláveis."
      categoria="Roadmap · Front-end"
      icone="/icons/front/angular.svg"
      iconeAlt="Angular"
      logoTexto="Angular"
      roadmap={roadmap}
      isAuthenticated={false}
      moduleBase="/aulas/angular"
      lessonSuffix="/01"
      projeto={{
        titulo: "Agora coloque tudo em prática.",
        descricao:
          "Desenvolva uma aplicação completa utilizando componentes, serviços, rotas, formulários e integração com APIs.",
        href: "/projetos/angular",
      }}
    />
  );
}
