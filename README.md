# Sistema de Logs com MongoDB e Vercel

Este é um projeto simples para enviar logs para um banco de dados MongoDB, projetado para ser implantado na Vercel.

## Funcionalidades

- Interface web para enviar logs
- API REST para enviar e receber logs
- Armazenamento em MongoDB
- Implantação fácil na Vercel

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env.local` com sua string de conexão do MongoDB:
   ```
   MONGODB_URI=sua_string_de_conexao
   ```
4. Execute o projeto localmente:
   ```bash
   npm run dev
   ```

## Implantação na Vercel

1. Crie uma conta na Vercel (se ainda não tiver)
2. Instale a CLI da Vercel:
   ```bash
   npm i -g vercel
   ```
3. Faça login na Vercel:
   ```bash
   vercel login
   ```
4. Implante o projeto:
   ```bash
   vercel
   ```
5. Configure a variável de ambiente `MONGODB_URI` no painel da Vercel

## Uso

1. Acesse a página inicial
2. Digite sua mensagem no campo de texto
3. Clique em "Enviar Log"
4. O log será salvo no MongoDB e você receberá uma confirmação

## API Endpoints

- `POST /api/logs` - Envia um novo log
- `GET /api/logs` - Lista os últimos 100 logs
