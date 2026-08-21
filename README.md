# 🚀 DevRoad

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:00E599,100:4169E1&height=200&section=header&text=DevRoad&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Aprenda.%20Pratique.%20Evolua.&descAlignY=55&descSize=18" width="100%">
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=3000&pause=800&color=00E599&center=true&vCenter=true&width=560&lines=Trilhas+de+aprendizado+estruturadas;Next.js+%2B+Prisma+%2B+PostgreSQL;Open+Source+%E2%80%A2+Em+constante+evolu%C3%A7%C3%A3o" alt="Typing SVG" />
</p>

<p align="center">

![Status](https://img.shields.io/badge/Status-🚧%20Em%20Desenvolvimento-orange)
![Version](https://img.shields.io/badge/Version-v0.1-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-success)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-v5-7C3AED?logo=auth0&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql)
![Neon](https://img.shields.io/badge/Neon-Serverless_Postgres-00E599?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM_v7-2D3748?logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)

</p>

<p align="center">
  <strong>Aprenda. Pratique. Evolua.</strong>
</p>

---

# 📖 Sobre o Projeto

O **DevRoad** é uma plataforma **Open Source** que organiza o aprendizado de programação por meio de trilhas estruturadas, reunindo vídeos gratuitos do YouTube, documentações oficiais, exercícios e projetos práticos em um único lugar.

A proposta é oferecer um caminho de aprendizado claro, organizado e acessível para qualquer pessoa que queira entrar ou evoluir na área de tecnologia.

> **🚧 Este projeto está em desenvolvimento e evoluirá junto com a minha jornada de estudos.**
>
> O DevRoad não é apenas um projeto de portfólio. Ele também representa minha evolução como desenvolvedor. À medida que eu aprender novas tecnologias, boas práticas e arquiteturas modernas, o projeto será continuamente aprimorado com novas funcionalidades, melhorias de desempenho e uma base de código cada vez mais sólida.
>
> Meu objetivo é construir uma plataforma realmente útil para a comunidade enquanto desenvolvo minhas habilidades em desenvolvimento Full Stack.

---

# ✨ Objetivos

* 📚 Organizar conteúdos gratuitos em uma sequência lógica.
* 🎥 Centralizar vídeos gratuitos do YouTube.
* 📖 Disponibilizar documentações oficiais.
* 💻 Sugerir projetos práticos.
* 📝 Criar exercícios para fixação.
* 📈 Permitir acompanhamento do progresso.
* 🌍 Tornar o projeto totalmente Open Source.
* 🚀 Evoluir continuamente junto com meus estudos.

---

# 🛠️ Stack Tecnológica

## Front-end

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* Motion
* shadcn/ui

## Back-end

* Node.js
* Prisma ORM v7 (com Driver Adapter `@prisma/adapter-pg`)
* NextAuth.js v5 (Auth.js) — autenticação por credenciais
* bcryptjs — hashing de senhas
* PostgreSQL 17
* Docker / Docker Compose

## Banco de Dados

* PostgreSQL 17
* Neon (Postgres serverless — ambiente de produção)
* Prisma Migrations
* Prisma Client

## Ferramentas

* Git / GitHub
* Vercel
* Docker Desktop
* Figma
* VS Code

---

# 🔒 Segurança e Cadastro de Usuários

* **Criptografia de senhas**: todas as senhas passam por hashing com `bcryptjs` (10 salt rounds) antes de serem persistidas no banco — a senha em texto puro nunca é armazenada.
* **Foto de perfil em Base64**: upload de imagem convertido em Base64 em tempo real, com preview circular instantâneo, sem depender de serviços externos de armazenamento de imagem.
* **Proteção contra estouro de caracteres**: validação e truncamento (`substring`) de campos de texto no back-end, prevenindo erros como o `P2000` do Prisma ao inserir valores maiores que o limite da coluna.

---

# 🔑 Autenticação e Gestão de Sessões (NextAuth.js v5)

* **Login por credenciais**: formulário integrado ao banco de dados — o e-mail é buscado no Postgres (Neon) e a senha validada com `bcrypt.compare`.
* **Sessões leves**: dados pesados (como a foto do usuário) foram removidos do cookie de sessão, evitando o erro `494` (header muito grande) e mantendo a autenticação estável em produção na Vercel.
* **Rota de avatar dedicada** (`/api/user/avatar`): endpoint que busca a imagem do usuário logado sob demanda direto no banco, permitindo que o `<Header />` exiba o avatar (ou a inicial do nome) sem sobrecarregar o cookie.
* **Proteção de rotas com Middleware**: `middleware.js` compatível com o Edge Runtime da Vercel, impedindo que um usuário autenticado retorne às telas de login/cadastro pelo histórico do navegador.

---

# 🗄️ Banco de Dados e Infraestrutura

* **Rede interna no Docker**: ajuste no `docker-compose.yml` e no `.env`, trocando `BD_HOST=localhost` por `postgres` (nome do serviço), permitindo a comunicação correta entre os containers locais.
* **Banco de produção na nuvem (Neon)**: estrutura completa de tabelas (`User`, `Tecnologias`, `Modulos`, `Aulas`, `Progresso`, `Favoritos`) provisionada no PostgreSQL 17 gratuito da [Neon.tech](https://neon.tech).
* **Prisma v7 + Driver Adapter**: uso do `@prisma/adapter-pg` com o driver `pg` nativo, garantindo compatibilidade total com ambientes serverless (Vercel Functions).

---

# 🌐 SEO e Indexação

* **Sitemap dinâmico** (`sitemap.js`): geração automática das rotas públicas (Home, páginas de autenticação e trilhas de tecnologias), validado no Google Search Console.
* **Políticas de rastreamento** (`robots.js`): liberação total de indexação para o Google, com bloqueio específico das rotas internas de API.

---

# ⚙️ Configuração do Ambiente

## Pré-requisitos

Antes de iniciar o projeto, tenha instalado:

* Node.js 22+
* Docker Desktop
* Git

## Instalação

Clone o repositório:

```bash
git clone https://github.com/MeirelesDiogo/DevRoad.git
```

Entre na pasta do projeto:

```bash
cd DevRoad
```

Instale as dependências:

```bash
npm install
```

## Banco de Dados

O DevRoad utiliza PostgreSQL executado através de um container Docker em ambiente local, e Neon (Postgres serverless) em produção.

Para iniciar o banco de dados local:

```bash
docker compose up -d
```

O PostgreSQL local ficará disponível em:

```
localhost:5432
```

## Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Banco de dados
BD_USER=postgres
BD_PASSWORD=postgres
BD_PORT=5432
BD_HOST=postgres
BD_NAME=DevRoad

# NextAuth.js
AUTH_SECRET=sua_chave_secreta
```

> Em ambiente Docker, `BD_HOST` deve ser o nome do serviço (`postgres`) definido no `docker-compose.yml`, não `localhost`.

## Prisma ORM

O projeto utiliza o Prisma como ORM para comunicação com o banco de dados, com Driver Adapter (`@prisma/adapter-pg`) para total compatibilidade com ambientes serverless.

Principais recursos utilizados:

* Modelagem do banco através do Prisma Schema
* Controle de migrations
* Geração do Prisma Client
* Integração com PostgreSQL (local via Docker e produção via Neon)

Executar migrations:

```bash
npx prisma migrate dev
```

Gerar Prisma Client:

```bash
npx prisma generate
```

Abrir o Prisma Studio:

```bash
npx prisma studio
```

---

# 🏗️ Arquitetura Atual

```
Next.js 15
  │
  ├── React 19
  ├── TypeScript
  ├── NextAuth.js v5 (Autenticação + Middleware)
  ├── bcryptjs (Hash de senhas)
  ├── Prisma ORM v7 (+ @prisma/adapter-pg)
  │
  └── PostgreSQL 17
        ├── Docker Container (ambiente local)
        └── Neon (ambiente de produção)
```

---

# 📌 Funcionalidades

### Plataforma

* [x] Cadastro de usuários (com hash de senha e foto em Base64)
* [x] Login por credenciais (NextAuth.js v5)
* [x] Proteção de rotas autenticadas via Middleware
* [x] Rota dedicada de avatar do usuário
* [ ] Login social (OAuth)
* [ ] Perfil do usuário
* [ ] Configurações

### Aprendizado

* [ ] Catálogo de tecnologias
* [ ] Trilhas de aprendizado
* [ ] Lista de aulas
* [ ] Integração com vídeos do YouTube
* [ ] Links para documentações oficiais
* [ ] Exercícios
* [ ] Projetos práticos
* [ ] Controle de progresso
* [ ] Favoritos
* [ ] Histórico de estudos

### Futuras Funcionalidades

* [ ] Sistema de conquistas
* [ ] Certificados
* [ ] Comentários
* [ ] Avaliações
* [ ] IA para recomendações de estudo
* [ ] Dashboard de progresso
* [ ] Gamificação

---

# 🗺️ Roadmap de Desenvolvimento

## Planejamento

* [x] Definição da ideia
* [x] Definição das funcionalidades
* [x] Escolha da stack
* [x] Planejamento do banco de dados

## Design

* [ ] Wireframes
* [ ] Protótipo no Figma
* [ ] Design System
* [ ] Componentes reutilizáveis

## Front-end

* [x] Estrutura inicial
* [x] Login
* [x] Cadastro
* [ ] Página Inicial
* [ ] Página das Tecnologias
* [ ] Página da Tecnologia
* [ ] Página das Aulas
* [ ] Perfil

## Back-end

* [x] Banco de Dados (PostgreSQL + Neon)
* [x] Prisma ORM (v7 + Driver Adapter)
* [x] Autenticação (NextAuth.js v5 + bcryptjs)
* [x] Proteção de rotas (Middleware)
* [ ] API REST completa (aulas, trilhas, progresso)
* [ ] Sistema de progresso

## SEO

* [x] Sitemap dinâmico
* [x] Robots.txt configurado
* [ ] Metadados otimizados por página
* [ ] Open Graph / compartilhamento social

## Deploy

* [x] Deploy Front-end (Vercel)
* [x] Banco em produção (Neon)
* [ ] Lançamento da versão 1.0

---

## 📂 Estrutura de Páginas

Abaixo está a estrutura inicial planejada para as rotas do DevRoad. Ela poderá evoluir conforme novas funcionalidades forem adicionadas ao projeto.

```text
src/
└── app/
    │
    ├── page.tsx                      # Home
    ├── layout.tsx                    # Layout global
    ├── globals.css                   # Estilos globais
    ├── sitemap.js                    # Sitemap dinâmico
    ├── robots.js                     # Políticas de indexação
    │
    ├── login/
    │   └── page.tsx
    │
    ├── cadastro/
    │   └── page.tsx
    │
    ├── tecnologias/
    │   ├── page.tsx                  # Lista de tecnologias
    │   └── [slug]/
    │       └── page.tsx              # Página da tecnologia
    │
    ├── aulas/
    │   └── [id]/
    │       └── page.tsx              # Aula específica
    │
    ├── roadmaps/
    │   ├── page.tsx                  # Lista de roadmaps
    │   └── [slug]/
    │       └── page.tsx              # Roadmap específico
    │
    ├── perfil/
    │   ├── page.tsx
    │   ├── configuracoes/
    │   │   └── page.tsx
    │   └── favoritos/
    │       └── page.tsx
    │
    ├── sobre/
    │   └── page.tsx
    │
    ├── contato/
    │   └── page.tsx
    │
    ├── api/
    │   └── user/
    │       └── avatar/
    │           └── route.ts          # Rota dedicada de avatar
    │
    ├── middleware.js                 # Proteção de rotas autenticadas
    │
    └── not-found.tsx
```

### 📄 Páginas Planejadas

| Página                  | Descrição                                            |
| ------------------------ | ----------------------------------------------------- |
| `/`                      | Página inicial da plataforma.                          |
| `/login`                 | Login do usuário.                                       |
| `/cadastro`              | Cadastro de novos usuários.                             |
| `/tecnologias`           | Catálogo de tecnologias disponíveis.                    |
| `/tecnologias/[slug]`    | Informações e trilha de uma tecnologia específica.      |
| `/roadmaps`              | Lista de todos os roadmaps disponíveis.                 |
| `/roadmaps/[slug]`       | Roadmap completo de uma tecnologia.                     |
| `/aulas/[id]`            | Página da aula com vídeo, documentação e exercícios.    |
| `/perfil`                | Perfil do usuário.                                      |
| `/perfil/configuracoes`  | Configurações da conta.                                 |
| `/perfil/favoritos`      | Tecnologias e aulas favoritas.                          |
| `/sobre`                 | Informações sobre o projeto DevRoad.                    |
| `/contato`               | Contato e formas de contribuição.                       |
| `/api/user/avatar`       | Endpoint que retorna o avatar do usuário autenticado.   |
| `404`                    | Página personalizada para rotas inexistentes.           |

> **Observação:** Esta estrutura representa o planejamento do projeto e poderá sofrer alterações conforme o desenvolvimento e a evolução do DevRoad.

---

# 🤝 Como Contribuir

Contribuições são sempre bem-vindas.

Caso tenha alguma ideia, sugestão ou queira colaborar com o projeto:

1. Faça um Fork.
2. Crie uma Branch.

```bash
git checkout -b feature/minha-feature
```

3. Faça suas alterações.

4. Commit.

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie para o GitHub.

```bash
git push origin feature/minha-feature
```

6. Abra um Pull Request.

---

# 📄 Licença

Este projeto será distribuído sob a licença **MIT**.

---

# 👨‍💻 Autor

**Diogo Alexandre Meireles**

GitHub: [MeirelesDiogo](https://github.com/MeirelesDiogo)

---

# ⭐ Apoie o Projeto

Se este projeto chamou sua atenção ou te ajudou de alguma forma, deixe uma ⭐ no repositório.

Isso incentiva o desenvolvimento contínuo do DevRoad e ajuda outras pessoas a descobrirem o projeto.

---

# 💙 Nossa Missão

Acreditamos que aprender programação deve ser um processo acessível, organizado e gratuito.

O DevRoad nasceu para transformar centenas de conteúdos espalhados pela internet em uma jornada clara de aprendizado, permitindo que qualquer pessoa evolua de forma consistente.

Mais do que um projeto de portfólio, o DevRoad representa uma evolução constante. Cada nova funcionalidade desenvolvida refletirá um novo conhecimento adquirido, tornando o projeto um registro público da minha trajetória como desenvolvedor e, ao mesmo tempo, uma ferramenta útil para toda a comunidade.

---

<p align="center">
  <strong>🚀 Aprenda. Pratique. Evolua.</strong>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4169E1,50:00E599,100:0D1117&height=120&section=footer" width="100%">
</p>