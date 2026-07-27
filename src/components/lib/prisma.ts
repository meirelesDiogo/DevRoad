import { PrismaClient } from "@prisma/client/extension";

const globalPrisma = global as unknown as { prisma: PrismaClient}