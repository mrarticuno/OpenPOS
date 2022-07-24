-- CreateTable
CREATE TABLE "Telemetria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "criticidade" INTEGER NOT NULL DEFAULT 0,
    "stack" TEXT,
    "tempo_execucao" INTEGER NOT NULL DEFAULT 0,
    "origem" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT,
    "filial" BOOLEAN NOT NULL DEFAULT false,
    "bloqueado" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "matriz_id" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Recurso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nivel_minimo" INTEGER NOT NULL DEFAULT 0,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "GrupoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "empresa_id" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "GrupoUsuario_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "validacao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT,
    "senhas_antigas" TEXT,
    "permissoes" TEXT,
    "grupoUsuario_id" INTEGER,
    "empresa_id" INTEGER NOT NULL,
    "bloqueado" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "alterar_senha" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Usuario_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Usuario_grupoUsuario_id_fkey" FOREIGN KEY ("grupoUsuario_id") REFERENCES "GrupoUsuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dominio" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "empresa_id" INTEGER NOT NULL,
    "antes" TEXT,
    "depois" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Log_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Log_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Permissao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 3,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "recurso_id" INTEGER NOT NULL,
    "empresa_id" INTEGER NOT NULL,
    "grupoUsuario_id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Permissao_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Permissao_recurso_id_fkey" FOREIGN KEY ("recurso_id") REFERENCES "Recurso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Permissao_grupoUsuario_id_fkey" FOREIGN KEY ("grupoUsuario_id") REFERENCES "GrupoUsuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PermissaoEspecial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 3,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "recurso_id" INTEGER NOT NULL,
    "empresa_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "PermissaoEspecial_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PermissaoEspecial_recurso_id_fkey" FOREIGN KEY ("recurso_id") REFERENCES "Recurso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PermissaoEspecial_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Modulo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Relatorio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "arquivo" TEXT NOT NULL,
    "empresa_id" INTEGER,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Relatorio_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
