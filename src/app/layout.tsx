
import "./globals.css";
import  {Header}  from '../components/layout/header';
import { Footer } from '../components/layout/footer';

export const metadata:Metadata = {
  title: "DevRoad - Aprenda a programar do zero",
  description: "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",
openGraph: {
  title: "DevRoad - Aprenda a programar do zero",
  description: "Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.",
  images: ['https://dev-road-henna.vercel.app/logo.png'],
}
 }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body
      className={`antialiased`}
    >
 <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
