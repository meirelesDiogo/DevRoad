import { NextResponse } from "next/server";
// Importa o Prisma a partir do local customizado definido no seu schema.prisma
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

/**
 * GET /api/users
 * Lista todos os usuários cadastrados (sem retornar o campo de senha por segurança)
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

    // Validação de campos obrigatórios conforme o schema
    if (!nome || !email || !senha) {
      return NextResponse.json(
        { error: "Os campos 'nome', 'email' e 'senha' são obrigatórios." },
        { status: 400 }
      );
    }

    // Cria o registro respeitando o mapeamento do banco de dados
    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        email,
        telefone: telefone || null,
        senha, // Importante: criptografar esta senha antes de salvar!
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

    // Captura erro de restrição única (P2002) do Prisma para e-mails duplicados
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
