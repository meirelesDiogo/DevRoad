
import { auth } from "@/auth";
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";

export const metadata = {
  title: "Bootstrap - DevRoad",
  description:
    "Roadmap completo de Bootstrap, dos fundamentos até a criação de interfaces responsivas e personalizadas.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Fundamentos do Bootstrap",
    descricao:
      "Conheça o Bootstrap, entenda como funciona e aprenda a utilizá-lo para desenvolver interfaces com mais agilidade.",
    aulas: [
      "O que é Bootstrap",
      "Por que utilizar Bootstrap",
      "Bootstrap e CSS",
      "Instalando Bootstrap",
      "Utilizando Bootstrap por CDN",
      "Estrutura básica de um projeto",
      "Classes e nomenclaturas",
      "Documentação oficial",
    ],
  },
  {
    etapa: "02",
    titulo: "Grid System e Layout",
    descricao:
      "Aprenda a organizar páginas utilizando o sistema de grid do Bootstrap e seus recursos de posicionamento.",
    aulas: [
      "O que é Grid System",
      "Containers",
      "Rows e Columns",
      "Breakpoints",
      "Larguras das colunas",
      "Gutters e espaçamentos",
      "Alinhamento de conteúdo",
      "Layouts responsivos",
    ],
  },
  {
    etapa: "03",
    titulo: "Tipografia e elementos visuais",
    descricao:
      "Conheça as classes utilitárias responsáveis pela aparência dos textos e dos principais elementos visuais.",
    aulas: [
      "Tipografia",
      "Títulos e parágrafos",
      "Cores e backgrounds",
      "Bordas e arredondamentos",
      "Sombras",
      "Imagens responsivas",
      "Figures e elementos visuais",
      "Ícones com Bootstrap Icons",
    ],
  },
  {
    etapa: "04",
    titulo: "Componentes básicos",
    descricao:
      "Aprenda a utilizar componentes prontos para construir interfaces organizadas e funcionais.",
    aulas: [
      "Botões",
      "Button groups",
      "Cards",
      "Alerts",
      "Badges",
      "List groups",
      "Breadcrumbs",
      "Paginação",
    ],
  },
  {
    etapa: "05",
    titulo: "Navegação e componentes interativos",
    descricao:
      "Explore componentes de navegação e elementos interativos que melhoram a experiência do usuário.",
    aulas: [
      "Navbar",
      "Navs e tabs",
      "Dropdowns",
      "Collapse",
      "Accordion",
      "Modal",
      "Carousel",
      "Offcanvas",
      "Tooltips e popovers",
    ],
  },
  {
    etapa: "06",
    titulo: "Formulários",
    descricao:
      "Aprenda a criar formulários modernos, organizados e responsivos utilizando os componentes do Bootstrap.",
    aulas: [
      "Estrutura de formulários",
      "Inputs e labels",
      "Select e textarea",
      "Checkboxes e radios",
      "Input groups",
      "Formulários em grid",
      "Validação de formulários",
      "Estados e mensagens de erro",
    ],
  },
  {
    etapa: "07",
    titulo: "Personalização e boas práticas",
    descricao:
      "Aprenda a adaptar o Bootstrap às necessidades do projeto e a combinar seus recursos com CSS e JavaScript.",
    aulas: [
      "Personalizando cores e estilos",
      "Variáveis CSS",
      "Utilitários de espaçamento",
      "Display e posicionamento",
      "Flexbox no Bootstrap",
      "Utilitários responsivos",
      "Sobrescrevendo estilos",
      "Bootstrap com CSS personalizado",
      "Boas práticas de desenvolvimento",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto final",
    descricao:
      "Coloque em prática os conhecimentos adquiridos criando uma interface completa, responsiva e organizada com Bootstrap.",
    aulas: [
      "Planejamento da interface",
      "Estrutura do projeto",
      "Construindo a navegação",
      "Criando o layout principal",
      "Adicionando componentes",
      "Desenvolvendo formulários",
      "Adaptando para dispositivos móveis",
      "Revisão e finalização do projeto",
    ],
  },
];

export default async function BootstrapRoadmap() {
  const session = await auth();

  return (
    <RoadmapLayout
      titulo="Bootstrap"
      descricao="Aprenda Bootstrap do zero. Crie interfaces modernas e responsivas, domine componentes prontos e desenvolva páginas completas com mais produtividade."
      categoria="Roadmap · Bootstrap"
      icone="/icons/front/bootstrap.svg"
      iconeAlt="Bootstrap"
      roadmap={ROADMAP}
      isAuthenticated={Boolean(session?.user)}
      moduleBase="/aulas/bootstrap"
      lessonSuffix="/01"
      projeto={{
        titulo: "Agora coloque tudo em prática.",
        descricao:
          "Depois de concluir as etapas, você estará preparado para desenvolver interfaces completas e responsivas, utilizando o Bootstrap para acelerar a construção de páginas web.",
        href: "/projetos/bootstrap",
      }}
    />
  );
}
