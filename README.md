# 🚀 DevRoad

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0A0D14,50:2E8BFF,100:7C5CFF&height=200&section=header&text=DevRoad&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Aprenda.%20Pratique.%20Evolua.&descAlignY=55&descSize=18" width="100%">
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=3000&pause=800&color=2E8BFF&center=true&vCenter=true&width=560&lines=Trilhas+de+aprendizado+estruturadas;Next.js+%2B+Prisma+%2B+PostgreSQL;Open+Source+%E2%80%A2+Em+constante+evolu%C3%A7%C3%A3o" alt="Typing SVG" />
</p>

<p align="center">

![Status](https://img.shields.io/badge/Status-🚧%20Em%20Desenvolvimento-orange)
![Version](https://img.shields.io/badge/Version-v0.1-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-success)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-JSX-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js)
![NextAuth.js](https://img.shields.io/badge/Auth.js-v5-2E8BFF?logo=auth0&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)
![Neon](https://img.shields.io/badge/Neon-Serverless_Postgres-7C5CFF?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM_v7-2D3748?logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

</p>

<p align="center">
  <strong>Aprenda. Pratique. Evolua.</strong>
</p>

---

# 📖 Sobre o Projeto

O **DevRoad** é uma plataforma **Open Source** que organiza o aprendizado de programação por meio de trilhas estruturadas (roadmaps), reunindo vídeos gratuitos do YouTube, documentações oficiais, exercícios e projetos práticos em um único lugar — do zero ao avançado, para qualquer pessoa que queira entrar ou evoluir na área de tecnologia.

> **🚧 Este projeto está em desenvolvimento ativo e evolui continuamente.**
>
> O DevRoad não é apenas um projeto de portfólio. Ele também representa a evolução do autor como desenvolvedor: à medida que novas tecnologias e boas práticas são aprendidas, o projeto é aprimorado com novas funcionalidades e uma base de código cada vez mais sólida.

---

# ✨ Objetivos

* 📚 Organizar conteúdos gratuitos em uma sequência lógica (roadmaps).
* 🎥 Centralizar vídeos gratuitos do YouTube.
* 📖 Disponibilizar documentações oficiais como material de apoio.
* 💻 Sugerir projetos práticos ao final de cada trilha.
* 📝 Criar exercícios para fixação.
* 📈 Permitir acompanhamento de progresso por aula.
* 🌍 Manter o projeto 100% Open Source, sob licença MIT.

---

# 🛠️ Stack Tecnológica

## Front-end

* Next.js 16 (App Router, Turbopack)
* React 19
* JavaScript / JSX (sem TypeScript no código da aplicação)
* Tailwind CSS 4
* Fontes: Space Grotesk, Inter e JetBrains Mono

## Back-end

* Node.js
* Prisma ORM v7, com `prisma.config.ts` para configuração de conexão e Driver Adapter (`@prisma/adapter-pg`)
* Auth.js (NextAuth.js v5) para autenticação
* PostgreSQL

## Banco de Dados

* PostgreSQL
* Neon (Postgres serverless — ambiente de produção), com `DATABASE_URL` configurada
* Prisma Client (`src/lib/prisma.js`)

## Identidade Visual

* Tema escuro: `#0A0D14` · `#10141D` · `#1E2430`
* Azul `#2E8BFF` e roxo `#7C5CFF`
* Slogan: **"Aprenda · Pratique · Evolua"**

## Ferramentas

* Git / GitHub
* Vercel

---

# 🔑 Autenticação

* Estrutura de **login** (`/login`) e **cadastro** (`/cadastro`) já implementada.
* Páginas de aula protegidas: cada página verifica a sessão diretamente no servidor e redireciona para `/login` quando necessário.

```js
import { auth } from "@/auth";

const session = await auth();

if (!session?.user) {
  redirect("/login");
}
```

* **Planejado:** login social via Google, GitHub e Microsoft (ainda não concluído — só estruturado como próximo passo da autenticação).

---

# 🗄️ Banco de Dados

Estrutura de tabelas já criada no Neon via Prisma:

* `User`
* `Tecnologias`
* `Modulos`
* `Aulas`
* `Progresso`
* `Favoritos`

Relacionamentos:

```
Tecnologia
   ↓
Módulos
   ↓
Aulas
   ↓
Progresso
```

```
Usuário
 ├── Progresso
 └── Favoritos
```

---

# 🗺️ Roadmaps

Já implementados:

* `/roadmaps` — lista de roadmaps disponíveis
* `/roadmaps/html-css`
* `/roadmaps/javascript`
* `/roadmaps/python`

## Currículo — HTML & CSS ✅

8 módulos · **74 aulas**

| Módulo | Aulas |
|---|---|
| 01 — Fundamentos da Web | 6 |
| 02 — HTML | 12 |
| 03 — CSS | 11 |
| 04 — Layout com CSS | 11 |
| 05 — Responsividade | 9 |
| 06 — CSS Avançado | 10 |
| 07 — Boas Práticas | 7 |
| 08 — Projeto Prático | 8 |

## Currículo — Python ✅

8 módulos · **90 aulas**

| Módulo | Aulas |
|---|---|
| 01 — Fundamentos de Python | 10 |
| 02 — Estruturas de Controle | 10 |
| 03 — Estruturas de Dados | 12 |
| 04 — Funções e Modularização | 12 |
| 05 — Programação Orientada a Objetos | 12 |
| 06 — Arquivos e Exceções | 12 |
| 07 — Bibliotecas e APIs | 12 |
| 08 — Projeto Final | 10 |

## Currículo — JavaScript ⚠️

8 módulos definidos (Fundamentos, Estruturas de Controle, Arrays e Objetos, Funções, JavaScript no Navegador, JavaScript Moderno, Assincronismo e APIs, Node.js e Projeto Final).

> **Pendente de revisão:** o total de aulas varia dependendo da versão do script de seed usada. Não há um número fechado confirmado ainda — precisa ser conferido direto no banco antes de ser considerado concluído.

---

# 🎓 Sistema de Aulas Dinâmicas

Em vez de páginas manuais por aula, o DevRoad usa rotas dinâmicas:

```
/aulas/html-css/[modulo]/[aula]
/aulas/javascript/[modulo]/[aula]
/aulas/python/[modulo]/[aula]
```

A página busca a aula diretamente do PostgreSQL via Prisma, resolvendo a cadeia **tecnologia → módulo → aula**.

### Navegação entre aulas

* Aula anterior / próxima aula, restrita ao módulo atual (não pula automaticamente pro próximo módulo).
* Na última aula do módulo: botão "Voltar para o roadmap" no lugar de "Próxima aula".
* Sidebar com a lista completa de aulas do módulo.

### Vídeos do YouTube

* Campos `youtube_url` e `youtube_canal` no modelo de aula.
* Extração automática do ID de `youtube.com/watch?v=...` e `youtu.be/...`, convertido em embed.
* Quando `youtube_url` é `null`, a aula não trava — mostra **"📚 Vídeo não disponível"** e direciona pra documentação.

### Documentação

* Campo `documentacao_url`, usado como material de apoio (documentação oficial, W3Schools, etc.) quando não há vídeo.

### Estrutura de uma aula

Título · Descrição · Vídeo · Canal do YouTube · Documentação · Exercício · Projeto · Ordem · Tempo estimado.

### Página visual da aula

Breadcrumb, título, descrição, vídeo, canal, conteúdo, exercício, projeto, documentação, sidebar e navegação anterior/próxima — com CSS responsivo.

---

# 💻 Projetos Práticos

Três projetos finais já definidos:

### HTML/CSS — Landing Page Responsiva
HTML semântico, header, navegação, hero, CTA, cards, seção de serviços, formulário, footer, Flexbox, Grid, responsividade, acessibilidade.
**Extras:** animações, menu mobile, dark mode, deploy.

### JavaScript — Task Manager
CRUD (criação, edição, exclusão, conclusão), filtros, busca, validação, DOM, eventos, Arrays, Objetos, LocalStorage, Async/Await, consumo de API, tratamento de erros.
**Extras:** dark mode, drag & drop, filtros avançados, paginação, ES Modules, deploy.

### Python — Gerenciador de Dados
CRUD, validação, tratamento de erros, funções, listas, dicionários, POO, módulos, JSON.
**Extras:** SQLite, camada de acesso a dados, autenticação simples, relatórios, testes, GUI.

Rotas já planejadas:
```
/projetos/html-css
/projetos/javascript
/projetos/python
```

---

# ⚙️ Problemas já resolvidos

* **Prisma 7:** migração da configuração de conexão para `prisma.config.ts`, em vez de depender de `url = env("DATABASE_URL")` direto no `schema.prisma`.
* **PostgreSQL/Neon:** Driver Adapter configurado em `src/lib/prisma.js`.
* **Rotas duplicadas:** identificado e corrigido conflito de `Duplicate page detected` causado por `route.js` e `route.ts` coexistindo na mesma rota de autenticação.
* **Conteúdo do banco:** correções de aulas duplicadas, transações, SQL incompatível, URLs e do campo `youtube_canal`, populados diretamente via Neon SQL Editor.

---

# ⚙️ Configuração do Ambiente

## Pré-requisitos

* Node.js 22+
* Git
* Uma instância PostgreSQL (local ou Neon)

## Instalação

```bash
git clone https://github.com/MeirelesDiogo/DevRoad.git
cd DevRoad
npm install
```

## Variáveis de Ambiente

Crie um `.env` na raiz do projeto:

```env
DATABASE_URL="sua_connection_string_do_neon"
AUTH_SECRET=sua_chave_secreta
```

## Prisma

```bash
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

---

# 🏗️ Arquitetura Atual

```
Next.js 16 (App Router, Turbopack)
  │
  ├── React 19
  ├── JavaScript / JSX
  ├── Auth.js v5 (Autenticação)
  ├── Prisma ORM v7 (+ Driver Adapter @prisma/adapter-pg)
  │
  └── PostgreSQL
        └── Neon (ambiente de produção)
```

---

# 📌 Funcionalidades

### Plataforma

* [x] Estrutura de cadastro de usuários (`/cadastro`)
* [x] Estrutura de login (`/login`)
* [x] Proteção de páginas de aula via `auth()` + redirecionamento
* [ ] Login social (Google, GitHub, Microsoft)
* [ ] Perfil do usuário
* [ ] Favoritos (modelo pronto no banco, funcionalidade ainda não implementada)

### Aprendizado

* [x] Listagem de roadmaps (`/roadmaps`)
* [x] Páginas de tecnologia: HTML/CSS, JavaScript, Python
* [x] Sistema de aulas dinâmicas (`/aulas/[tecnologia]/[modulo]/[aula]`)
* [x] Integração com vídeos do YouTube (com fallback pra aulas sem vídeo)
* [x] Links para documentação oficial
* [x] Navegação entre aulas (anterior/próxima, restrita ao módulo)
* [x] Currículo de HTML/CSS completo (74 aulas)
* [x] Currículo de Python completo (90 aulas)
* [ ] Currículo de JavaScript — revisão do total de aulas pendente
* [x] Projetos práticos definidos (HTML/CSS, JavaScript, Python)
* [ ] Páginas de projeto (`/projetos/[tecnologia]`) implementadas
* [ ] Controle de progresso (modelo pronto, funcionalidade de marcar aula como concluída ainda pendente)

### Futuras Funcionalidades

* [ ] Sistema de conquistas
* [ ] Certificados
* [ ] Comentários e avaliações
* [ ] Dashboard de progresso
* [ ] Gamificação

---

# 🗺️ Roadmap de Desenvolvimento

## Planejamento
* [x] Definição da ideia, funcionalidades e stack
* [x] Planejamento do banco de dados

## Front-end
* [x] Estrutura inicial
* [x] Login e Cadastro (estrutura)
* [x] Roadmaps e páginas de tecnologia
* [x] Sistema de aulas dinâmicas
* [ ] Perfil do usuário
* [ ] Páginas de projetos práticos

## Back-end
* [x] Banco de Dados (PostgreSQL + Neon)
* [x] Prisma ORM (v7 + Driver Adapter)
* [x] Estrutura de autenticação (Auth.js v5)
* [x] Proteção de páginas de aula
* [ ] Login social (OAuth)
* [ ] Sistema de progresso funcional
* [ ] Sistema de favoritos funcional

## Conteúdo
* [x] Currículo de HTML/CSS (74 aulas)
* [x] Currículo de Python (90 aulas)
* [ ] Currículo de JavaScript (revisão pendente)
* [x] 3 projetos práticos definidos

## Deploy
* [x] Deploy do front-end (Vercel — `dev-road-henna.vercel.app`)
* [x] Banco em produção (Neon)
* [ ] Lançamento da versão 1.0

---

## 📂 Estrutura de Páginas

```text
src/
└── app/
    │
    ├── page.jsx                      # Home
    ├── layout.jsx                    # Layout global
    ├── globals.css                   # Estilos globais
    │
    ├── login/
    │   └── page.jsx
    │
    ├── cadastro/
    │   └── page.jsx
    │
    ├── roadmaps/
    │   ├── page.jsx                  # Lista de roadmaps
    │   ├── html-css/
    │   │   └── page.jsx
    │   ├── javascript/
    │   │   └── page.jsx
    │   └── python/
    │       └── page.jsx
    │
    ├── aulas/
    │   ├── html-css/[modulo]/[aula]/
    │   │   └── page.jsx
    │   ├── javascript/[modulo]/[aula]/
    │   │   └── page.jsx
    │   └── python/[modulo]/[aula]/
    │       └── page.jsx
    │
    ├── projetos/
    │   ├── html-css/
    │   ├── javascript/
    │   └── python/
    │
    ├── perfil/
    │   └── page.jsx
    │
    ├── api/
    │   └── auth/
    │       └── [...nextauth]/
    │           └── route.js
    │
    └── not-found.jsx
```

### 📄 Páginas Planejadas

| Página | Descrição |
|---|---|
| `/` | Página inicial da plataforma |
| `/login` | Login do usuário |
| `/cadastro` | Cadastro de novos usuários |
| `/roadmaps` | Lista de todos os roadmaps disponíveis |
| `/roadmaps/[tecnologia]` | Roadmap completo de uma tecnologia |
| `/aulas/[tecnologia]/[modulo]/[aula]` | Página da aula com vídeo, documentação e exercícios |
| `/projetos/[tecnologia]` | Projeto prático final da trilha |
| `/perfil` | Perfil do usuário |
| `404` | Página personalizada para rotas inexistentes |

> **Observação:** esta estrutura reflete o estado atual do desenvolvimento e pode evoluir conforme novas funcionalidades forem adicionadas.

---

# 🤝 Como Contribuir

Contribuições são sempre bem-vindas.

1. Faça um Fork.
2. Crie uma Branch:
```bash
git checkout -b feature/minha-feature
```
3. Faça suas alterações e commit:
```bash
git commit -m "feat: adiciona nova funcionalidade"
```
4. Envie para o GitHub:
```bash
git push origin feature/minha-feature
```
5. Abra um Pull Request.

---

# 📄 Licença

Este projeto é distribuído sob a licença **MIT**.

---

# 👨‍💻 Autor

**Diogo Alexandre Meireles**

GitHub: [MeirelesDiogo](https://github.com/MeirelesDiogo)

---

# ⭐ Apoie o Projeto

Se este projeto chamou sua atenção ou te ajudou de alguma forma, deixe uma ⭐ no repositório — isso incentiva o desenvolvimento contínuo do DevRoad.

---

# 💙 Nossa Missão

Acreditamos que aprender programação deve ser um processo acessível, organizado e gratuito.

O DevRoad nasceu para transformar centenas de conteúdos espalhados pela internet em uma jornada clara de aprendizado, permitindo que qualquer pessoa evolua de forma consistente.

---

<p align="center">
  <strong>🚀 Aprenda. Pratique. Evolua.</strong>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C5CFF,50:2E8BFF,100:0A0D14&height=120&section=footer" width="100%">
</p>