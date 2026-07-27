import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: `postgresql://${process.env.BD_USER}:${process.env.BD_PASSWORD}@${process.env.BD_HOST}:${process.env.BD_PORT}/${process.env.BD_NAME}?schema=public`,
  },
});