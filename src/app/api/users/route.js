import { NextResponse } from "next/server";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
// Importa o Prisma a partir do local customizado definido no seu schema.prisma
import { PrismaClient } from "../../../generated/prisma";

// Configura o Pool de conexões do PostgreSQL nativo usando a variável de ambiente do Docker
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// Cria o adaptador exigido obrigatoriamente a partir do Prisma v7
const adapter = new PrismaPg(pool);

// Instancia o cliente injetando o Driver Adapter configurado
const prisma = new PrismaClient({ adapter });

/**
 * GET /api/users
 * Lista todos os usuários cadastrados
 */
export async function GET() {
  try {
    const usuarios = await prisma.user.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        foto: true,
        criadoEm: true,
      },
      orderBy: {
        criadoEm: "desc",
      },
    });

    return NextResponse.json(usuarios, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor ao buscar usuários" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/users
 * Cria um novo usuário no banco de dados do DevRoad
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, senha, foto } = body;

    if (!nome || !email || !senha) {
      return NextResponse.json(
        { error: "Os campos 'nome', 'email' e 'senha' são obrigatórios." },
        { status: 400 }
      );
    }

    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        email,
        telefone: telefone || null,
        senha, 
        foto: foto || null,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        foto: true,
        criadoEm: true,
      },
    });

    return NextResponse.json(novoUsuario, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);

    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Este e-mail já está cadastrado em nossa plataforma." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erro interno do servidor ao registrar usuário." },
      { status: 500 }
    );
  }
}
