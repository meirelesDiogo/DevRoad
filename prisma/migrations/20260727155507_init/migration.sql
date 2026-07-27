-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "telefone" VARCHAR(20),
    "senha" VARCHAR(255) NOT NULL,
    "foto" VARCHAR(255),
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Tecnologias" (
    "id_tecnologia" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "imagem" VARCHAR(255),
    "cor" VARCHAR(20),

    CONSTRAINT "Tecnologias_pkey" PRIMARY KEY ("id_tecnologia")
);

-- CreateTable
CREATE TABLE "Modulos" (
    "id_modulo" SERIAL NOT NULL,
    "id_tecnologia" INTEGER NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "descricao" TEXT,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "Modulos_pkey" PRIMARY KEY ("id_modulo")
);

-- CreateTable
CREATE TABLE "Aulas" (
    "id_aula" SERIAL NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "descricao" TEXT,
    "youtube_url" VARCHAR(500),
    "documentacao_url" VARCHAR(500),
    "projeto" TEXT,
    "exercicio" TEXT,
    "ordem" INTEGER NOT NULL,
    "tempo_estimado" INTEGER,

    CONSTRAINT "Aulas_pkey" PRIMARY KEY ("id_aula")
);

-- CreateTable
CREATE TABLE "Progresso" (
    "id_progresso" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "concluido" BOOLEAN NOT NULL DEFAULT false,
    "data_conclusao" TIMESTAMP(3),

    CONSTRAINT "Progresso_pkey" PRIMARY KEY ("id_progresso")
);

-- CreateTable
CREATE TABLE "Favoritos" (
    "id_favorito" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_tecnologia" INTEGER NOT NULL,

    CONSTRAINT "Favoritos_pkey" PRIMARY KEY ("id_favorito")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnologias_nome_key" ON "Tecnologias"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Progresso_id_user_id_aula_key" ON "Progresso"("id_user", "id_aula");

-- CreateIndex
CREATE UNIQUE INDEX "Favoritos_id_user_id_tecnologia_key" ON "Favoritos"("id_user", "id_tecnologia");

-- AddForeignKey
ALTER TABLE "Modulos" ADD CONSTRAINT "Modulos_id_tecnologia_fkey" FOREIGN KEY ("id_tecnologia") REFERENCES "Tecnologias"("id_tecnologia") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aulas" ADD CONSTRAINT "Aulas_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "Modulos"("id_modulo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progresso" ADD CONSTRAINT "Progresso_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progresso" ADD CONSTRAINT "Progresso_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "Aulas"("id_aula") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoritos" ADD CONSTRAINT "Favoritos_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoritos" ADD CONSTRAINT "Favoritos_id_tecnologia_fkey" FOREIGN KEY ("id_tecnologia") REFERENCES "Tecnologias"("id_tecnologia") ON DELETE CASCADE ON UPDATE CASCADE;
