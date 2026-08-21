import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import GitLab from "next-auth/providers/gitlab";
import Discord from "next-auth/providers/discord";

/**
 * Configuração Estática de Autenticação (Compatível com Edge Runtime)
 * -----------------------------------------------------------------
 * Local: src/auth.config.js
 */
export default {
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
};
