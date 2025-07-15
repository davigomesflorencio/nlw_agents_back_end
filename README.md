# NLW Agents

Projeto desenvolvido durante o evento **NLW Agents** da Rocketseat.

## 📚 Tecnologias Utilizadas

- **Node.js** 18+
- **TypeScript**
- **Fastify** – Framework web rápido e eficiente
- **Drizzle ORM** – ORM moderno para TypeScript
- **PostgreSQL** – Banco de dados relacional
- **Zod** – Validação de schemas e tipos
- **Docker & Docker Compose** – Containerização e orquestração
- **Biome** – Linter e formatter de código

## 🏛️ Padrões de Projeto

- **Repository Pattern** – Separação da lógica de acesso a dados
- **Schema Validation** – Validação de entrada com Zod
- **Environment Configuration** – Configuração centralizada de variáveis de ambiente

## 🗂️ Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts      # Conexão com banco de dados
│   ├── migrations/        # Migrações do banco
│   ├── schemas/           # Schemas das tabelas
│   └── seed.ts            # Seed de dados
├── http/
│   └── routes/            # Rotas da API
├── env.ts                 # Configuração de ambiente
└── server.ts              # Servidor principal
```

## ⚡ Setup e Configuração

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose

### Passos para rodar o projeto

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

4. **Suba o banco de dados**
   ```bash
   docker-compose up -d
   ```

5. **Execute as migrações**
   ```bash
   npx drizzle-kit migrate
   ```

6. **(Opcional) Popule o banco com dados iniciais**
   ```bash
   npm run db:seed
   ```

7. **Inicie o servidor em modo desenvolvimento**
   ```bash
   npm run dev
   ```

## 📡 Endpoints Principais

- **GET /health**  
  Verifica se a aplicação está online.

- **GET /rooms**  
  Lista todas as salas disponíveis.

- **POST /rooms**  
  Cria uma nova sala.  
  Corpo esperado:
  ```json
  {
    "name": "Room Name",
    "description": "Room Description"
  }
  ```

- **GET /rooms/:roomId/questions**  
  Lista as perguntas de uma sala específica.

- **POST /rooms/:roomId/questions**  
  Cria uma nova pergunta em uma sala.  
  Corpo esperado:
  ```json
  {
    "question": "Sua pergunta aqui"
  }
  ```

- **POST /rooms/:roomId/audio**  
  Faz upload de um áudio para uma sala (multipart/form-data, campo: file).

---

Desenvolvido com 💜 durante o evento NLW Agents da Rocketseat. 