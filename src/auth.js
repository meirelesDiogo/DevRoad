import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authConfig from "./auth.config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,

  providers: [
    ...authConfig.providers,

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        senha: {
          label: "Senha",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.senha) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            return null;
          }

          const senhaCorreta = await bcrypt.compare(
            credentials.senha,
            user.senha
          );

          if (!senhaCorreta) {
            return null;
          }

          return {
            id: String(user.id),
            name: user.nome,
            email: user.email,
            image: null,
          };
        } catch (error) {
          console.error(
            "Erro na autenticação por credenciais:",
            error
          );

          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;

        try {
          const dadosUsuario = await prisma.user.findUnique({
            where: {
              id: Number(token.id),
            },
            select: {
              foto: true,
            },
          });

          session.user.image = dadosUsuario?.foto || null;
        } catch (dbError) {
          console.error(
            "Erro ao buscar foto do usuário na sessão:",
            dbError
          );

          session.user.image = null;
        }
      }

      return session;
    },
  },
});