import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import GitLab from "next-auth/providers/gitlab";
import Discord from "next-auth/providers/discord";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Configura o Driver Adapter do Prisma v7 para o ambiente do banco na nuvem e local
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // 🔒 Provedor de Login por E-mail e Senha (Credenciais)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        senha: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.senha) {
          return null;
        }

        try {
          // Busca o usuário no banco pelo e-mail (usando o campo mapeado no seu schema)
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          // Se o usuário não existir, bloqueia o acesso
          if (!user) {
            return null;
          }

          // 🔑 Compara a senha digitada com a hash criptografada salva na Neon
          const senhaCorreta = await bcrypt.compare(credentials.senha, user.senha);

          if (!senhaCorreta) {
            return null;
          }

          // Retorna os dados do usuário que serão salvos na sessão JWT
          return {
            id: String(user.id),
            name: user.nome,
            email: user.email,
            image: user.foto
          };
        } catch (error) {
          console.error("Erro na autenticação por credenciais:", error);
          return null;
        }
      }
    }),
    
    // Provedores Sociais OAuth normais
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
  callbacks: {
    // Insere o ID do banco de dados dentro do Token JWT do NextAuth
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // Disponibiliza o ID do usuário para ser lido no front-end via useSession() ou auth()
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    }
  }
});
