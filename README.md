# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação de agentes inteligentes.

## 🛠️ Tecnologias

### Backend
- **Fastify** - Framework web rápido para Node.js
- **TypeScript** - Linguagem de programação tipada
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas e tipos
- **Docker** - Containerização da aplicação

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter de código
- **Ultracite** - Configuração de estilo de código
- **Drizzle Kit** - Ferramentas para migrações e seeds

## 🏗️ Arquitetura

### Padrões Utilizados
- **Type Provider Pattern** - Integração de tipos TypeScript com Fastify
- **Schema Validation** - Validação de entrada com Zod
- **Repository Pattern** - Separação de lógica de acesso a dados
- **Environment Configuration** - Configuração centralizada de variáveis

### Estrutura do Projeto
```
src/
├── db/
│   ├── connection.ts      # Conexão com banco de dados
│   ├── migrations/        # Migrações do Drizzle
│   ├── schemas/          # Schemas das tabelas
│   └── seed.ts           # Dados iniciais
├── http/
│   └── routes/           # Rotas da API
├── env.ts               # Configuração de ambiente
└── server.ts            # Servidor principal
```

## 🚀 Setup e Configuração

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd server
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. **Inicie o banco de dados**
```bash
docker-compose up -d
```

5. **Execute as migrações**
```bash
npx drizzle-kit migrate
```

6. **Popule o banco com dados iniciais (opcional)**
```bash
npm run db:seed
```

### Comandos Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm start` - Inicia o servidor em produção
- `npm run db:seed` - Executa o seed do banco de dados

## 📡 API

### Endpoints
- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista todas as salas disponíveis

### Porta Padrão
O servidor roda na porta **3333** por padrão.

## 🎯 Funcionalidades

- Gerenciamento de salas (rooms)
- API REST com validação de schemas
- Banco de dados PostgreSQL com Drizzle ORM
- Configuração de ambiente com validação
- CORS habilitado para desenvolvimento

---

Desenvolvido com 💜 durante o **NLW Agents** da Rocketseat 