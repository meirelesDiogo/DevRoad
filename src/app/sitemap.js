/**
 * Gerador de Sitemap Dinâmico — DevRoad
 * -------------------------------------------------------------
 * Local: src/app/sitemap.js
 */

export default async function sitemap() {
  // ⚠️ Substitua pela URL principal/produção que a Vercel te deu
  const baseUrl = "https://vercel.app";

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
    lastModified: new Date().toISOString().split("T")[0], // Formato YYYY-MM-DD
    changeFrequency: "daily",
    priority: rota === "" ? 1.0 : 0.8, // Home tem prioridade máxima (1.0)
  }));

  // Lista das linguagens atuais que criamos nos cards da Home
  const linguagens = ["html", "css", "javascript", "python", "java", "php"];
  
  const rotasDeLinguagens = linguagens.map((lang) => ({
    url: `${baseUrl}/roadmaps/${lang}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Junta todas as rotas em um único mapa final para o Google ler
  return [...rotasEstaticas, ...rotasDeLinguagens];
}
