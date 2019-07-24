# Rent Store with Node JS

O repositório apresenta o sistema de locação de filmes:


## SQL

A tabela de usuários foi criada com intuito de gravar > nome, email e senha. 

A tabela de filmes foi criada para gravar discos, para que possa obter várias cópias do mesmo título

A tabela de aluguéis, irá gravar a chave de identificação do filme alugado.
➢ Gravará sua data



## Instalação banco de dados (opcional)

- Instalação do banco de dados postgres, se tiver o docker instalado na máquina é necessário que
  a porta 5432 esteja liberada e que o comando "docker run --name postgresDB -p 5432:5432 -d -t kartoza/postgis"
  seja rodado e finalizado corretamente. (opcional)

Os dados da API foram trabalhados encima do Sequelize. 
Portanto, é necessário informar os dados do banco no arquivo de configuração em  /Config/database.js.

```
## Para rodar o backend

- Entrar na pasta raiz e rodar o comando yarn ou npm install, para instalar as dependências.

- Após a configuração do arquivo (/Config/database.js) na raiz do projeto (src), rodar o comando "npx sequelize db:migrate".

- Na raiz (src) rodar o comando yarn dev ou npm run start.
Também é possível criar a base de dados manualmente através de um script de criação de banco de dados. Nesta base de dados, também são realizados registros de filmes e discos. [O schema de banco de dados é disponibilizado(schema.sql).
```

### Criação de Usuários

**URL (POST):**

```bash
http://127.0.0.1:3000/users
```

**Body da Requisição:**

```json
{
  "name": "Fulano",
  "email": "fulano@gmail.com",
  "password": "1234567"
}
```

### Update de Usuários

Diversos Updates podem ser realizados em usuários. O usuário, inicialmente, pode realizar a edição do nome e email:

**URL (PUT):**

```bash
http://127.0.0.1:3000/users
```

**Body da Requisição:**

```json
{
  "name": "Fulano",
  "email": "fulano@gmail.com"
}
```

No entanto, é possível também realizar o update de password do usuário. No entanto, neste caso o usuário precisa informar o password atual, novo password e uma confirmação de password:

**URL (PUT):**

```bash
http://127.0.0.1: 3000/users
```

**Body da Requisição:**

```json
{
  "name": "Fulano",
  "email": "fulano@gmail.com",
  "oldPassword": "123456",
  "password": "123456789",
  "password": "123456789"
}
```

## Sessão de Usuário

A sessão de usuários é definida

**URL (PUT):**

```bash
http://127.0.0.1: 3000/sessions
```

**Body da Requisição:**

```json
{
  "email": "fulano@gmail.com",
  "password": "123456789"
}
```

**Resultado Esperado:**

```json
{
  "user": {
    "id": 1,
    "name": "Fulano",
    "email": "fulano@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTYyMjU3ODE2LCJleHAiOjE1NjI4NjI2MTZ9.uVTk8oMxQ5tdnG5RG87a7Kawgi0rhyxBcgxcyZQQ8T8"
}
```

## Aluguel de Filmes

Considerando que apenas usuários logados no sistema podem fazer o aluguel de filmes, é necessário enviar o Token de autenticação no corpo da requisição. No corpo da requisição, envíamos o id do disco que o usuário deseja alugar. O id do usuário é informado automaticamente através do token enviado.

**URL (POST):**

```bash
http://127.0.0.1:3000/rent
```

**Body da Requisição:**

```json
{
  "disk_id": 1
}
```

## Devolução de Filmes

A devolução do disco é realizada através do método PUT. Quando um usuário devolve o filme alugado, o campo returned_at é atulizado automaticamente com o horário da requisição.

**URL (PUT):**

```bash
http://127.0.0.1:3000/rent
```

**Body da Requisição:**

```json
{
  "disk_id": 1
}
```

## Lista de Filmes

**URL (GET):**

```bash
http://127.0.0.1:3000/movies
```

**Resposta Esperada:**

```json
[
  {
    "id": 2,
    "title": "Avengers",
    "director": "Anthony Russo, Joe Russo"
  },
  {
    "id": 3,
    "title": "Spider Man",
    "director": "Jon Watts"
  }
]
```

## Busca por Filmes

**URL (GET):**

```bash
http://localhost:3000/movies/search?title=Avengers
```

**Resposta Esperada:**

```json
[
  {
    "id": 2,
    "title": "Avengers",
    "director": "Anthony Russo, Joe Russo"
  }
]
```

