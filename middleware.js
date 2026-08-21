import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./src/auth.config"; // 🔄 Lê do arquivo estático sem carregar o Prisma

// Inicializa o NextAuth no Middleware usando apenas as regras compatíveis com o Edge
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const usuarioLogado = !!session?.user;
  const rotasDeAuth = ["/login", "/cadastro"];

  if (rotasDeAuth.includes(nextUrl.pathname)) {
    if (usuarioLogado) {
      // Redireciona usuários autenticados que tentarem acessar a tela de auth via histórico/seta voltar
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/login", "/cadastro"],
};
