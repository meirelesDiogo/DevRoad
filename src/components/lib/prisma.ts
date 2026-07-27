import { PrismaClient } from "@/generated/prisma";


const globalPrisma = global as unknown as { prisma: PrismaClient}