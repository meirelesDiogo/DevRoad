import { auth } from "@/auth";
import RoadmapLayout from "@/components/roadmaps/roadmap-layout";

export const metadata = {
  title: "Java - DevRoad",
  description:
    "Roadmap completo de Java, dos fundamentos até programação orientada a objetos, banco de dados, APIs e desenvolvimento de aplicações.",
};

const ROADMAP = [
  {
    etapa: "01",
    titulo: "Fundamentos do Java",
    descricao:
      "Aprenda os fundamentos da linguagem Java, conheça o ambiente de desenvolvimento e escreva seus primeiros programas.",
    aulas: [
      "O que é Java",
      "JDK, JRE e JVM",
      "Configurando o ambiente Java",
      "Primeiro programa em Java",
      "Variáveis",
      "Tipos de dados",
      "Operadores",
      "Conversão de tipos",
      "Entrada e saída de dados",
      "Strings e boas práticas",
    ],
  },
  {
    etapa: "02",
    titulo: "Controle de fluxo",
    descricao:
      "Aprenda a controlar a execução dos programas utilizando condições, operadores lógicos e estruturas de repetição.",
    aulas: [
      "if e else",
      "else if",
      "Operadores relacionais",
      "Operadores lógicos",
      "Operador ternário",
      "switch",
      "for",
      "while",
      "do while",
      "break e continue",
      "Exercícios de lógica",
    ],
  },
  {
    etapa: "03",
    titulo: "Arrays e Collections",
    descricao:
      "Aprenda a trabalhar com arrays e as principais estruturas de dados disponíveis no Java.",
    aulas: [
      "Arrays",
      "Acessando elementos",
      "Percorrendo arrays",
      "Arrays multidimensionais",
      "for-each",
      "ArrayList",
      "LinkedList",
      "HashSet",
      "HashMap",
      "Collections Framework",
      "Ordenação de dados",
      "Exercícios de estruturas de dados",
    ],
  },
  {
    etapa: "04",
    titulo: "Programação Orientada a Objetos",
    descricao:
      "Domine os principais conceitos de programação orientada a objetos e aprenda a estruturar aplicações utilizando classes e objetos.",
    aulas: [
      "O que é POO",
      "Classes e objetos",
      "Atributos",
      "Métodos",
      "Construtores",
      "Encapsulamento",
      "Getters e setters",
      "Modificadores de acesso",
      "static",
      "Herança",
      "Polimorfismo",
      "Classes abstratas",
      "Interfaces",
      "Exercícios de POO",
    ],
  },
  {
    etapa: "05",
    titulo: "Java intermediário",
    descricao:
      "Avance seus conhecimentos em Java utilizando recursos modernos da linguagem e conceitos importantes para aplicações maiores.",
    aulas: [
      "Packages",
      "Enums",
      "Records",
      "Object",
      "toString",
      "equals e hashCode",
      "Generics",
      "Iterators",
      "Lambda Expressions",
      "Stream API",
      "Date e Time API",
      "Exercícios de Java intermediário",
    ],
  },
  {
    etapa: "06",
    titulo: "Exceções e arquivos",
    descricao:
      "Aprenda a lidar com erros, validar informações e trabalhar com arquivos para criar aplicações mais seguras e organizadas.",
    aulas: [
      "Erros e exceções",
      "try e catch",
      "finally",
      "throw",
      "throws",
      "Exceções personalizadas",
      "Validação de dados",
      "Leitura de arquivos",
      "Escrita de arquivos",
      "Trabalhando com JSON",
      "Boas práticas de tratamento de erros",
      "Exercícios de exceções e arquivos",
    ],
  },
  {
    etapa: "07",
    titulo: "Banco de dados e APIs",
    descricao:
      "Aprenda a conectar aplicações Java a bancos de dados e trabalhar com APIs para criar aplicações completas.",
    aulas: [
      "O que é JDBC",
      "Conectando Java ao PostgreSQL",
      "Executando consultas SQL",
      "PreparedStatement",
      "CRUD com Java",
      "DAO",
      "Separação de responsabilidades",
      "O que são APIs REST",
      "Requisições HTTP",
      "Consumo de APIs",
      "JSON e APIs",
      "Integração Java com PostgreSQL e APIs",
    ],
  },
  {
    etapa: "08",
    titulo: "Projeto final",
    descricao:
      "Coloque os conhecimentos do roadmap em prática construindo uma aplicação completa com Java, banco de dados e integração com API.",
    aulas: [
      "Planejamento do projeto",
      "Estrutura da aplicação",
      "Modelagem dos dados",
      "Criação das classes",
      "Implementação do CRUD",
      "Persistência com PostgreSQL",
      "Validação e tratamento de erros",
      "Integração com API",
      "Testes e ajustes",
      "Finalização e documentação",
    ],
  },
];

export default async function JavaRoadmap() {
  const session = await auth();

  return (
    <RoadmapLayout
      titulo="Java"
      descricao="Aprenda Java do zero. Domine os fundamentos, programação orientada a objetos, estruturas de dados, banco de dados e APIs para criar aplicações completas."
      categoria="Roadmap · Java"
      icone="/icons/back/java.svg"
      iconeAlt="Java"
      roadmap={ROADMAP}
      isAuthenticated={Boolean(session?.user)}
      moduleBase="/aulas/java"
      projeto={{
        titulo: "Sistema de Gerenciamento de Tarefas",
        descricao:
          "Depois de concluir as etapas, você estará preparado para criar uma aplicação Java completa utilizando programação orientada a objetos, estruturas de dados, PostgreSQL, CRUD, APIs e tratamento de erros.",
        href: "/projetos/java",
      }}
    />
  );
}