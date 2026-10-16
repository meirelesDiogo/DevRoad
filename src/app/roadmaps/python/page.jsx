
import { auth } from "@/auth";
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";

export const metadata = {
  title: "Python - DevRoad",
  description:
    "Roadmap completo de Python, dos fundamentos até projetos, orientação a objetos, arquivos, APIs e desenvolvimento backend.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Fundamentos do Python",
    descricao:
      "Aprenda a sintaxe da linguagem e os conceitos fundamentais para começar a programar com Python.",
    aulas: [
      "O que é Python",
      "Instalação e ambiente",
      "Primeiro programa",
      "Variáveis",
      "Tipos de dados",
      "Entrada de dados",
      "Saída de dados",
      "Operadores",
      "Conversão de tipos",
      "Comentários e boas práticas",
    ],
  },
  {
    etapa: "02",
    titulo: "Controle de fluxo",
    descricao:
      "Aprenda a criar programas capazes de tomar decisões e repetir tarefas automaticamente.",
    aulas: [
      "if",
      "else",
      "elif",
      "Operadores de comparação",
      "Operadores lógicos",
      "match",
      "for",
      "while",
      "break e continue",
      "Exercícios de lógica",
    ],
  },
  {
    etapa: "03",
    titulo: "Estruturas de dados",
    descricao:
      "Domine listas, tuplas, conjuntos e dicionários para organizar e manipular informações.",
    aulas: [
      "Listas",
      "Índices e slicing",
      "Métodos de listas",
      "Percorrendo listas",
      "List comprehension",
      "Tuplas",
      "Sets",
      "Dicionários",
      "Métodos de dicionários",
      "Estruturas de dados aninhadas",
      "Desempacotamento",
      "Exercícios com estruturas de dados",
    ],
  },
  {
    etapa: "04",
    titulo: "Funções e módulos",
    descricao:
      "Aprenda a organizar seus programas utilizando funções, módulos e pacotes reutilizáveis.",
    aulas: [
      "Criando funções",
      "Parâmetros",
      "Argumentos",
      "Retorno",
      "Argumentos padrão",
      "*args e **kwargs",
      "Escopo",
      "Funções lambda",
      "Módulos",
      "Import e from",
      "Pacotes",
      "Ambientes virtuais",
    ],
  },
  {
    etapa: "05",
    titulo: "Arquivos e tratamento de erros",
    descricao:
      "Aprenda a trabalhar com arquivos e lidar corretamente com erros durante a execução dos programas.",
    aulas: [
      "Abrindo arquivos",
      "Leitura de arquivos",
      "Escrita de arquivos",
      "with open",
      "Arquivos TXT",
      "Arquivos JSON",
      "Arquivos CSV",
      "try e except",
      "else e finally",
      "raise",
      "Criando erros personalizados",
      "Projeto: Sistema de cadastro",
    ],
  },
  {
    etapa: "06",
    titulo: "Programação Orientada a Objetos",
    descricao:
      "Aprenda os principais conceitos de orientação a objetos e como utilizá-los para estruturar aplicações maiores.",
    aulas: [
      "O que é orientação a objetos",
      "Classes",
      "Objetos",
      "Atributos",
      "Métodos",
      "Construtor __init__",
      "Encapsulamento",
      "Herança",
      "Polimorfismo",
      "Métodos especiais",
      "Classes e módulos",
      "Projeto: Sistema orientado a objetos",
    ],
  },
  {
    etapa: "07",
    titulo: "Python para Web e APIs",
    descricao:
      "Dê os primeiros passos no desenvolvimento Web utilizando Python e aprenda a trabalhar com APIs.",
    aulas: [
      "Python no desenvolvimento Web",
      "Requisições HTTP",
      "JSON e APIs",
      "Consumindo APIs",
      "Criando uma API",
      "Rotas",
      "Métodos HTTP",
      "Status HTTP",
      "Banco de dados",
      "CRUD",
      "Autenticação",
      "Projeto: API REST",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto Prático",
    descricao:
      "Aplique os conhecimentos do roadmap construindo uma aplicação completa em Python.",
    aulas: [
      "Planejamento do projeto",
      "Estrutura da aplicação",
      "Modelagem dos dados",
      "Implementação do backend",
      "Integração com banco de dados",
      "Criação das rotas",
      "Tratamento de erros",
      "Testes da aplicação",
      "Documentação da API",
      "Publicação do projeto",
    ],
  },
];

export default async function PythonRoadmap() {
  const session = await auth();

  return (
    <RoadmapLayout
      titulo="Python"
      descricao="Aprenda Python do zero. Desenvolva sua lógica de programação, domine a linguagem e avance até APIs, banco de dados e projetos completos."
      categoria="Roadmap · Backend"
      icone="/icons/back/python.svg"
      iconeAlt="Python"
      roadmap={ROADMAP}
      isAuthenticated={Boolean(session?.user)}
      moduleBase="/aulas/python"
      lessonSuffix="/01"
      projeto={{
        titulo: "Agora coloque tudo em prática.",
        descricao:
          "Depois de concluir as etapas, você estará preparado para criar aplicações em Python, trabalhar com APIs e banco de dados e construir projetos completos.",
        href: "/projetos/python",
      }}
    />
  );
}
