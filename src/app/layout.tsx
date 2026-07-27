import type { Metadata } from "next";
import "./globals.css";
import { OpenSourceSection } from "@/components/layout/open-source-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "DevRoad - Aprenda a programar do zero",
  description:
    "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",

  openGraph: {
    title: "DevRoad - Aprenda a programar do zero",
    description:
      "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",
    images: [
      {
        url: "https://dev-road-henna.vercel.app/logo.png",
        width: 512,
        height: 512,
        alt: "Logo DevRoad",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        {children}
        <OpenSourceSection></OpenSourceSection>
        <Footer />
      </body>
    </html>
  );
}