import { auth } from "@/auth";
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";

export const metadata = {
  title: "HTML & CSS - DevRoad",
  description:
    "Roadmap completo de HTML e CSS, do zero até a criação de páginas modernas e responsivas.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Fundamentos da Web",
    descricao:
      "Entenda como a Web funciona antes de começar a criar suas próprias páginas.",
    aulas: [
      "Como funciona a Internet",
      "Cliente e servidor",
      "HTTP e HTTPS",
      "Navegadores e servidores",
      "HTML, CSS e JavaScript",
      "Estrutura básica de uma página Web",
    ],
  },
  {
    etapa: "02",
    titulo: "HTML",
    descricao:
      "Aprenda a estruturar páginas utilizando HTML semântico e boas práticas.",
    aulas: [
      "O que é HTML",
      "Estrutura de um documento HTML",
      "Tags e elementos",
      "Títulos e parágrafos",
      "Links",
      "Imagens",
      "Listas",
      "Tabelas",
      "Formulários",
      "Inputs e botões",
      "HTML semântico",
      "Acessibilidade básica",
    ],
  },
  {
    etapa: "03",
    titulo: "CSS",
    descricao:
      "Aprenda a transformar uma estrutura HTML em uma interface visual.",
    aulas: [
      "O que é CSS",
      "Como adicionar CSS ao HTML",
      "Seletores",
      "Classes e IDs",
      "Cores",
      "Fontes e tipografia",
      "Unidades de medida",
      "Margens e espaçamentos",
      "Bordas",
      "Backgrounds",
      "Box Model",
    ],
  },
  {
    etapa: "04",
    titulo: "Layout com CSS",
    descricao:
      "Domine as principais ferramentas utilizadas para criar layouts modernos.",
    aulas: [
      "Display",
      "Block e Inline",
      "Position",
      "Flexbox",
      "Flex Direction",
      "Justify Content",
      "Align Items",
      "Gap",
      "CSS Grid",
      "Grid Columns e Rows",
      "Alinhamento e distribuição",
    ],
  },
  {
    etapa: "05",
    titulo: "Responsividade",
    descricao:
      "Aprenda a criar páginas que funcionam corretamente em celulares, tablets e computadores.",
    aulas: [
      "O que é responsividade",
      "Mobile First",
      "Media Queries",
      "Unidades relativas",
      "Imagens responsivas",
      "Layouts adaptáveis",
      "Breakpoints",
      "Responsividade com Flexbox",
      "Responsividade com Grid",
    ],
  },
  {
    etapa: "06",
    titulo: "CSS Avançado",
    descricao:
      "Vá além do básico e aprenda recursos utilizados em projetos profissionais.",
    aulas: [
      "Pseudo-classes",
      "Pseudo-elementos",
      "Transitions",
      "Transforms",
      "Animations",
      "Variáveis CSS",
      "Gradientes",
      "Sombras",
      "Customização de componentes",
      "Organização do CSS",
    ],
  },
  {
    etapa: "07",
    titulo: "Boas Práticas",
    descricao:
      "Aprenda a escrever código mais organizado, acessível e fácil de manter.",
    aulas: [
      "HTML semântico",
      "Acessibilidade",
      "SEO básico",
      "Organização de arquivos",
      "Nomenclatura de classes",
      "Clean CSS",
      "Performance básica",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto Prático",
    descricao:
      "Coloque tudo em prática construindo uma página completa do zero.",
    aulas: [
      "Planejamento da interface",
      "Estrutura HTML",
      "Estilização com CSS",
      "Layout responsivo",
      "Mobile First",
      "Acessibilidade",
      "Revisão do código",
      "Publicação do projeto",
    ],
  },
];

export default async function HtmlCssRoadmap() {
  const session = await auth();

  return (
    <RoadmapLayout
      titulo="HTML & CSS"
      descricao="Aprenda a criar páginas Web do zero. Comece pela estrutura com HTML, domine o CSS e termine criando interfaces modernas e responsivas."
      categoria="Roadmap · Front-end"
      icone="/icons/front/html.svg"
      iconeAlt="HTML"
      roadmap={ROADMAP}
      isAuthenticated={Boolean(session?.user)}
      moduleBase="/aulas/html-css"
      lessonSuffix="/01"
      projeto={{
        titulo: "Agora coloque tudo em prática.",
        descricao:
          "Depois de concluir as etapas, você estará preparado para construir uma página completa utilizando HTML e CSS, com layout responsivo, organização de código e boas práticas.",
        href: "/projetos/html-css",
      }}
    />
  );
}