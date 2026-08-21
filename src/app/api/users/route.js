import { NextResponse } from "next/server";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
// 🔄 Importa a biblioteca de criptografia
import bcrypt from "bcryptjs";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
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
 * Cria um novo usuário criptografando a senha de forma segura
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

    // 🔒 Gera o Salt e criptografa a senha informada
    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        email,
        telefone: telefone || null,
        senha: senhaCriptografada, // 🔄 Salva a senha protegida no banco
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
