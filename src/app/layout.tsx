
import "./globals.css";
import  {Header}  from '../components/layout/header';
import { Footer } from '../components/layout/footer';

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
