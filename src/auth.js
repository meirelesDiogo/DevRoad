import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authConfig from "./auth.config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Configura o Driver Adapter do Prisma v7
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    ...authConfig.providers,
    
    // 🔒 Provedor de Login por E-mail e Senha
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
    // Controla o que vai para o Token JWT criptografado no navegador (mantém leve)
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    
    // Controla o que fica disponível no front-end via useSession()
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        
        // ✨ Busca a foto sob demanda direto na Neon para não pesar no cookie
        try {
          const dadosUsuario = await prisma.user.findUnique({
            where: { id: Number(token.id) },
            select: { foto: true }
          });
          session.user.image = dadosUsuario?.foto || null;
        } catch (dbError) {
          console.error("Erro ao buscar foto do usuário na sessão:", dbError);
          session.user.image = null;
        }
      }
      return session;
    }
  }
}); 
