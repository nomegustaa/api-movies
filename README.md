**README.md - Projeto de Cadastro de Filmes com Tags**

# Cadastro de Filmes com Tags

Bem-vindo ao projeto de cadastro de filmes com tags! Este é um aplicativo Node.js que permite aos usuários cadastrar filmes, fornecendo informações detalhadas, como nome, descrição, nota e tags associadas.

## Tecnologias Utilizadas

- Node.js
- Fastify (framework web)
- JSON Web Tokens (JWT) para autenticação
- SQLServer (ou qualquer banco de dados de sua escolha)

# Rotas da API

## Criação de Usuário

- **Rota:** `/createUser`
- **Método:** `POST`
- **Descrição:** Cria um novo usuário no sistema.
- **Parâmetros do Corpo:**
  - `nameUser`: Nome de usuário
  - `emailUser`: Email de usuário
  - `passwordUser`: Senha de usuário
  - `avatar`: Avatar de usuário

## Login de Usuário

- **Rota:** `/loginUser`
- **Método:** `POST`
- **Descrição:** Autentica um usuário existente.
- **Parâmetros do Corpo:**
  - `emailUser`: Email de usuário
  - `passwordUser`: Senha do usuário

## Criação de Filme

- **Rota:** `/createMovie`
- **Método:** `POST`
- **Descrição:** Cria um novo filme no sistema.
- **Parâmetros do Corpo:**
  - `title`: Nome do filme
  - `description`: Descrição do filme
  - `rating`: Nota do filme

## Criação de Tag para Filme

- **Rota:** `/createTag/:id`
- **Método:** `POST`
- **Descrição:** Cria uma tag relacionada a um filme específico.
- **Parâmetros do Corpo:**
  - `tag`: Nome da tag

## Listagem de Filmes

- **Rota:** `/movies`
- **Método:** `GET`
- **Descrição:** Obtém a lista de todos os filmes cadastrados no sistema.

## Exclusão de Filme

- **Rota:** `/deleteMovie/:idMovie`
- **Método:** `DELETE`
- **Descrição:** Exclui um filme com base no ID fornecido.

## Atualização de Usuário

- **Rota:** `/updateUser`
- **Método:** `PUT`
- **Descrição:** Atualiza informações do usuário logado.
- **Parâmetros do Corpo (opcionais):**
  - `nameUser`: Novo nome do usuário
  - `emailUser`: Novo email do usuário
  - `passwordUser`: Nova senha do usuário
  - `old_password`: Senha antiga do usuário
  - `avatarUser`: Novo avatar do usuário
