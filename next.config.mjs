import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Garante que a Vercel inclua os arquivos gerados pelo Prisma na build final
    outputFileTracingIncludes: {
      '/api/**/*': [path.resolve('./src/generated/prisma/**/*')],
      '/*': [path.resolve('./src/generated/prisma/**/*')],
    },
  },
};

export default nextConfig;
