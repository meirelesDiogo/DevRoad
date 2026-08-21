import { NextResponse } from "next/server";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

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
    return NextResponse.json({ error: "Erro ao buscar usuários" }, { status: 500 });
  }
}

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

    // 🔒 Proteção: Garante que os tamanhos respeitem os limites do VARCHAR do seu Schema
    const nomeTratado = nome.substring(0, 100);
    const emailTratado = email.substring(0, 150);
    const telefoneTratado = telefone ? telefone.substring(0, 20) : null;

    // Criptografia da senha
    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const novoUsuario = await prisma.user.create({
      data: {
        nome: nomeTratado,
        email: emailTratado,
        telefone: telefoneTratado,
        senha: senhaCriptografada.substring(0, 255),
        foto: foto || null, // Já alterado para TEXT na Neon, aceita qualquer tamanho
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });

    return NextResponse.json(novoUsuario, { status: 201 });
  } catch (error) {
    // 🔍 LOG ULTRA DETALHADO: Exibe exatamente o erro no painel da Vercel
    console.error("ERRO COMPLETO DO PRISMA NO CADASTRO:", JSON.stringify(error, null, 2));
    console.error("Mensagem do erro:", error.message);

    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Este e-mail já está cadastrado em nossa plataforma." },
        { status: 400 }
      );
    }

    // Retorna mais detalhes do erro na resposta HTTP para facilitar o seu diagnóstico na tela
    return NextResponse.json(
      { error: `Erro interno do banco de dados: ${error.message || "LengthMismatch ou restrição de campo"}` },
      { status: 500 }
    );
  }
}
