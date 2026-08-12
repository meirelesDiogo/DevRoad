# Contributing to DevRoad

First off, thank you for considering contributing to DevRoad! 🎉 This
project is 100% open source and free, and it exists to help beginner
developers learn to code — every contribution, big or small, helps that
mission.

## Code of Conduct

This project and everyone participating in it is governed by our
[Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are
expected to uphold this code.

## Ways to contribute

You don't have to write code to contribute:

- 🐛 **Report bugs** — open an issue with clear reproduction steps
- 💡 **Suggest features** — open an issue describing the problem it
  solves, not just the solution
- 📝 **Improve documentation** — typos, unclear explanations, missing
  setup steps
- 🌐 **Help with translations** — if you're localizing content
- 💻 **Write code** — fix a bug, build a feature, improve performance
- 🎨 **Design** — UI/UX suggestions, accessibility improvements
- 💬 **Help others** — answer questions in the Discord server

## Getting started (local setup)

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- [Git](https://git-scm.com/)
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

### Setup steps

1. **Fork** the repository (click "Fork" on GitHub).

2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/DevRoad.git
   cd DevRoad
   ```

3. **Add the upstream remote** (so you can sync with the original repo
   later):
   ```bash
   git remote add upstream https://github.com/meirelesDiogo/DevRoad.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the values you need (see `.env.example` for what's required —
   at minimum, you'll need OAuth credentials if you're working on
   authentication).

6. **Run the dev server:**
   ```bash
   npm run dev
   ```
   The app will be running at `http://localhost:3000`.

## Branching and workflow

1. **Create a branch** off `main` for your change:
   ```bash
   git checkout -b type/short-description
   ```
   Use one of these prefixes:
   - `feat/` — new feature
   - `fix/` — bug fix
   - `docs/` — documentation only
   - `refactor/` — code change that doesn't add a feature or fix a bug
   - `style/` — formatting, styling (no logic change)
   - `chore/` — tooling, dependencies, config

   Example: `feat/add-python-roadmap`, `fix/header-mobile-overflow`

2. **Make your changes**, following the code style guidelines below.

3. **Commit** using clear, descriptive messages (see Commit Conventions
   below).

4. **Push** to your fork:
   ```bash
   git push origin type/short-description
   ```

5. **Open a Pull Request** against the `main` branch of the original
   repository.

## Commit message conventions

We loosely follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): short description

Optional longer explanation of what and why (not how).
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples:**
```
feat(roadmap): add JavaScript roadmap page
fix(header): fix mobile menu not closing on link click
docs(readme): update local setup instructions
```

## Code style guidelines

- **TypeScript** everywhere — avoid `any` when possible.
- **Tailwind CSS** for styling — avoid inline `<style>` blocks; use the
  design tokens already defined in `globals.css` (`var(--blue)`,
  `var(--surface)`, etc.) instead of hardcoding hex colors.
- Follow the existing file structure:
  - `src/app/` — routes (App Router)
  - `src/components/ui/` — generic, reusable UI pieces
  - `src/components/layout/` — header, footer, navigation
  - `src/components/sections/` — page-specific sections
  - `src/components/auth/` — authentication-related components
- Keep components **client components** (`"use client"`) only when they
  actually need interactivity (hooks, event handlers). Prefer Server
  Components by default.
- Run the linter before committing:
  ```bash
  npm run lint
  ```
- Keep pull requests **focused** — one feature or fix per PR. Large,
  mixed PRs are much harder to review.

## Submitting a Pull Request

1. Make sure your branch is up to date with `main`:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. Make sure `npm run build` completes without errors.
3. Fill out the PR description:
   - What does this PR do?
   - How can it be tested?
   - Screenshots/GIFs for UI changes (strongly encouraged)
   - Link the related issue, if any (`Closes #123`)
4. A maintainer will review your PR. We may ask for changes — this is
   normal and part of the process, not a rejection!
5. Once approved, a maintainer will merge it.

## Reporting bugs

Before opening a new issue, please search existing issues to avoid
duplicates. When reporting a bug, include:

- **Environment:** browser, OS, Node version
- **Steps to reproduce:** be as specific as possible
- **Expected behavior:** what should have happened
- **Actual behavior:** what actually happened
- **Screenshots:** if applicable

## Suggesting features

Open an issue describing:
- The problem you're trying to solve (not just the solution)
- Who benefits from it (beginners? contributors? all users?)
- Any alternatives you've considered

## Good first issues

New to the project? Look for issues tagged
[`good first issue`](https://github.com/meirelesDiogo/DevRoad/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) —
these are scoped to be approachable for first-time contributors.

## Community

Questions, ideas, or just want to hang out with other contributors? Join
our Discord server — the invite link is in the site footer and in the
repository README.

## License

By contributing to DevRoad, you agree that your contributions will be
licensed under the same [MIT License](./LICENSE) that covers the project.