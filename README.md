# API SabIÁ - Assistente Educacional

API REST desenvolvida para servir dados ao sistema SabIÁ, um assistente voltado para professores. A aplicação conecta-se a um banco de dados PostgreSQL hospedado no Supabase e fornece os endpoints necessários para a interface do professor.

## Tecnologias

- **Node.js** + **Express 5**
- **TypeScript**
- **PostgreSQL** (Supabase)
- **Vitest** (testes)

## Estrutura do Projeto

```
src/
├── app.ts              # Entrada da aplicação
├── config/             # Configuração do banco de dados
├── controllers/        # Lógica dos endpoints
├── helpers/            # Funções auxiliares
├── repositories/       # Consultas SQL
└── routes/             # Definição das rotas
tests/
└── integration/        # Testes de integração
```

## Como Rodar

```bash
# Instalar dependências
pnpm install

# Compilar TypeScript
pnpm tsc

# Rodar em desenvolvimento
pnpm dev

# Rodar testes
pnpm vitest
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz com:

```
DATABASE_URL=sua_connection_string_do_supabase
PORT=server_port
```
