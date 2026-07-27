import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import GitLab from "next-auth/providers/gitlab";
import Discord from "next-auth/providers/discord";

/**
 * Configuração central do Auth.js (NextAuth v5).
 * -------------------------------------------------------------
 * Local: src/auth.ts (raiz do src, ou raiz do projeto — os dois
 * funcionam, o padrão mais comum no App Router é src/auth.ts)
 *
 * Remova do array `providers` qualquer provedor que você não for
 * usar de fato — cada um exige registrar um "app" OAuth no painel
 * do respectivo serviço e gerar client id/secret.
 *
 * Onde conseguir as credenciais de cada provedor:
 *   Google -> https://console.cloud.google.com/apis/credentials
 *   GitHub -> https://github.com/settings/developers
 *   GitLab -> https://gitlab.com/-/user_settings/applications
 *   Discord -> https://discord.com/developers/applications
 *
 * Em cada um, configure a Callback/Redirect URL como:
 *   http://localhost:3000/api/auth/callback/<provider>
 *   (troque pro seu domínio real em produção)
 */

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GitLab({
      clientId: process.env.AUTH_GITLAB_ID,
      clientSecret: process.env.AUTH_GITLAB_SECRET,
    }),
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});