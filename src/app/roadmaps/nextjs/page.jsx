
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";
import { auth } from "@/auth";

export const metadata = {
  title: "Roadmap Next.js | DevRoad",
  description:
    "Aprenda Next.js do zero e desenvolva aplicações web modernas com React, APIs e banco de dados.",
};

const roadmap = [
  {
    etapa: "01",
    titulo: "Introdução ao Next.js",
    descricao: "Conheça o framework e prepare seu ambiente.",
    aulas: [
      "O que é Next.js?",
      "Next.js e React: quais são as diferenças?",
      "Principais recursos do framework",
      "App Router e Pages Router",
      "Preparando o ambiente de desenvolvimento",
      "Criando o primeiro projeto Next.js",
      "Conhecendo a estrutura de pastas",
      "Executando e entendendo a aplicação",
    ],
  },
  {
    etapa: "02",
    titulo: "Rotas e navegação",
    descricao: "Aprenda a estruturar páginas e navegar entre elas.",
    aulas: [
      "Como funciona o sistema de rotas",
      "Criando páginas com page.js",
      "Organizando rotas com pastas",
      "Rotas dinâmicas e parâmetros",
      "Rotas aninhadas",
      "Layouts com layout.js",
      "Navegação com Link",
      "Rotas de carregamento e páginas de erro",
    ],
  },
  {
    etapa: "03",
    titulo: "Componentes e interface",
    descricao: "Construa interfaces reutilizáveis e modernas.",
    aulas: [
      "Criando componentes reutilizáveis",
      "Server Components",
      "Client Components",
      "Quando utilizar use client",
      "Composição de componentes",
      "Estilização com CSS e CSS Modules",
      "Estilização com Tailwind CSS",
      "Imagens e fontes com os recursos do Next.js",
    ],
  },
  {
    etapa: "04",
    titulo: "Renderização e carregamento de dados",
    descricao: "Entenda como o Next.js renderiza e entrega conteúdo.",
    aulas: [
      "Como funciona a renderização no Next.js",
      "Server-side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Incremental Static Regeneration (ISR)",
      "Fetching de dados no servidor",
      "Revalidação e atualização de dados",
      "Streaming e Suspense",
      "Loading UI e tratamento de erros",
    ],
  },
  {
    etapa: "05",
    titulo: "Formulários e interatividade",
    descricao: "Crie funcionalidades interativas e processe informações.",
    aulas: [
      "Eventos e interatividade",
      "Gerenciamento de estado no cliente",
      "Formulários no Next.js",
      "Validação de dados",
      "Server Actions",
      "Enviando dados para o servidor",
      "Feedback de carregamento e erros",
      "Boas práticas com formulários",
    ],
  },
  {
    etapa: "06",
    titulo: "Backend, APIs e banco de dados",
    descricao: "Construa o backend e conecte sua aplicação ao banco.",
    aulas: [
      "Entendendo o backend no Next.js",
      "Route Handlers e criação de APIs",
      "Métodos HTTP e respostas",
      "Parâmetros e validação de requisições",
      "Conectando com PostgreSQL",
      "Utilizando Prisma ORM",
      "Operações CRUD",
      "Tratamento de erros e segurança",
    ],
  },
  {
    etapa: "07",
    titulo: "Autenticação e recursos avançados",
    descricao: "Implemente segurança e recursos profissionais.",
    aulas: [
      "Introdução à autenticação",
      "Configurando Auth.js",
      "Login e cadastro de usuários",
      "Sessões e controle de acesso",
      "Protegendo páginas e rotas",
      "Middleware e controle de requisições",
      "Variáveis de ambiente e segurança",
      "SEO e metadados dinâmicos",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto final e publicação",
    descricao: "Desenvolva e publique uma aplicação completa.",
    aulas: [
      "Planejando a aplicação completa",
      "Criando e configurando o projeto",
      "Estruturando páginas e componentes",
      "Implementando autenticação",
      "Integrando banco de dados",
      "Desenvolvendo APIs e funcionalidades",
      "Testes, otimização e revisão",
      "Publicando a aplicação na Vercel",
    ],
  },
];

export default async function NextjsRoadmapPage() {
  const session = await auth();

  return (
    <RoadmapLayout
      titulo="Next.js"
      descricao="Aprenda a desenvolver aplicações web modernas e completas com Next.js, desde a criação de páginas até APIs, autenticação e banco de dados."
      categoria="Frontend e Backend"
      icone="/icons/front/nextjs.svg"
      iconeAlt="Next.js"
      logoTexto="Next.js"
      roadmap={roadmap}
      isAuthenticated={!!session?.user}
      moduleBase="/aulas/nextjs"
      lessonSuffix="/01"
      projeto={{
        titulo: "Agora coloque tudo em prática.",
        descricao:
          "Desenvolva uma aplicação completa utilizando Next.js, componentes, rotas, APIs, autenticação e banco de dados.",
        href: "/projetos/nextjs",
      }}
    />
  );
}
