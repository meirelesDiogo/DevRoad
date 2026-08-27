import { NextResponse } from "next/server";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { enviarEmailCadastro } from "@/lib/email";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

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
    console.error("Erro ao buscar usuários:", error);

    return NextResponse.json(
      { error: "Erro ao buscar usuários" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { nome, email, telefone, senha, foto } = body;

    // Validação
    if (!nome || !email || !senha) {
      return NextResponse.json(
        {
          error:
            "Os campos 'nome', 'email' e 'senha' são obrigatórios.",
        },
        { status: 400 }
      );
    }

    // Proteção dos limites do banco
    const nomeTratado = nome.substring(0, 100);
    const emailTratado = email.substring(0, 150);
    const telefoneTratado = telefone
      ? telefone.substring(0, 20)
      : null;

    // Criptografia da senha
    const salt = await bcrypt.genSalt(10);

    const senhaCriptografada = await bcrypt.hash(
      senha,
      salt
    );

    // Criação do usuário
    const novoUsuario = await prisma.user.create({
      data: {
        nome: nomeTratado,
        email: emailTratado,
        telefone: telefoneTratado,
        senha: senhaCriptografada.substring(0, 255),
        foto: foto || null,
      },

      select: {
        id: true,
        nome: true,
        email: true,
      },
    });

    // 📧 Envia o e-mail depois que o cadastro foi criado
    try {
      await enviarEmailCadastro({
        email: novoUsuario.email,
        nome: novoUsuario.nome,
      });

      console.log(
        `E-mail de boas-vindas enviado para ${novoUsuario.email}`
      );
    } catch (emailError) {
      // O usuário já foi criado.
      // Se o e-mail falhar, não apagamos o cadastro.
      console.error(
        "Erro ao enviar e-mail de boas-vindas:",
        emailError
      );
    }

    return NextResponse.json(novoUsuario, {
      status: 201,
    });
  } catch (error) {
    console.error(
      "ERRO COMPLETO DO PRISMA NO CADASTRO:",
      JSON.stringify(error, null, 2)
    );

    console.error(
      "Mensagem do erro:",
      error?.message
    );

    // E-mail duplicado
    if (error?.code === "P2002") {
      return NextResponse.json(
        {
          error:
            "Este e-mail já está cadastrado em nossa plataforma.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: `Erro interno do banco de dados: ${
          error?.message ||
          "LengthMismatch ou restrição de campo"
        }`,
      },
      { status: 500 }
    );
  }
}