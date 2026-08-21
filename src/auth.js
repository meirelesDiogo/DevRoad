import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authConfig from "./auth.config"; // 🔄 Importa a base estática do Edge
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Configura o Driver Adapter do Prisma v7
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig, // 🔄 Copia as configurações do arquivo base
  providers: [
    ...authConfig.providers, // Mantém os logins sociais
    
    // 🔒 Provedor de Login por E-mail e Senha (Isolado no ambiente de Servidor)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        senha: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.senha) return null;

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          if (!user) return null;

          const senhaCorreta = await bcrypt.compare(credentials.senha, user.senha);
          if (!senhaCorreta) return null;

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
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      return session;
    }
  }
});
