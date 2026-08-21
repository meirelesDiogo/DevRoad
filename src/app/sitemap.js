/**
 * Gerador de Sitemap Dinâmico — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/sitemap.js
 */

export default async function sitemap() {
  // 🔄 VEJA AQUI: Troque o "vercel.app" genérico pela URL real do seu projeto!
  const baseUrl = "https://dev-road-henna.vercel.app"; 

  // Páginas estáticas do seu projeto
  const rotasEstaticas = [
    "",
    "/login",
    "/cadastro",
    "/roadmaps",
    "/aulas",
    "/comunidade",
    "/sobre",
  ].map((rota) => ({
    url: `${baseUrl}${rota}`,
    lastModified: new Date().toISOString().split("T")[0], 
    changeFrequency: "daily",
    priority: rota === "" ? 1.0 : 0.8,
  }));

  // Lista das linguagens atuais
  const linguagens = ["html", "css", "javascript", "python", "java", "php"];
  
  const rotasDeLinguagens = linguagens.map((lang) => ({
    url: `${baseUrl}/roadmaps/${lang}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...rotasEstaticas, ...rotasDeLinguagens];
}
