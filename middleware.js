import { NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * Controle de Sessão e Bloqueio de Cache — DevRoad
 * -------------------------------------------------------------
 * Local: ./middleware.js (raiz do projeto)
 */

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const usuarioLogado = !!session?.user;

  // Define as rotas de autenticação que devem ser bloqueadas se o usuário já estiver logado
  const rotasDeAuth = ["/login", "/cadastro"];

  if (rotasDeAuth.includes(nextUrl.pathname)) {
    if (usuarioLogado) {
      // Se ele já estiver logado e tentar acessar login/cadastro pelo botão 'Voltar', joga pra Home
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Permite a navegação continuar normalmente nas outras páginas
  return NextResponse.next();
});

// Configuração para indicar ao Next.js quais caminhos devem acionar este middleware
export const config = {
  matcher: ["/login", "/cadastro"],
};
