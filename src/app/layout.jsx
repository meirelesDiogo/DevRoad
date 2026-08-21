import "./globals.css";
import { OpenSourceSection } from "@/components/layout/open-source-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SessionProvider } from "next-auth/react"; // 🔄 Importa o gerenciador de sessões

export const metadata = {
  title: "DevRoad - Aprenda a programar do zero",
  description: "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {/* 🔄 Envolve o app com o Provedor de Sessão do Cliente */}
        <SessionProvider>
          <Header />
          {children}
          <OpenSourceSection />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
