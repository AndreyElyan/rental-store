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

### Inserir Usuários

**URL (POST):**

```bash
http://127.0.0.1:3000/users
```

**Body da Requisição:**

```json
{
  "name": "Andrey",
  "email": "a.elyan.s@gmail.com",
  "password": "123456"
}
```

### Update de Usuários


**URL (PUT):**

```bash
http://127.0.0.1:3000/users
```

**Body:**

```json
{
  "name": "Andrey",
  "email": "a.elyan.s@gmail.com"
}
```

É possível realizar a atualização de senha do usuário. 
O usuário precisará informar o password atual, novo password e uma confirmação deste password:

**URL (PUT):**

```bash
http://127.0.0.1:3000/users
```

**Body:**

```json
{
  "name": "Andrey",
  "email": "a.elyan.s@gmail.com",
  "oldPassword": "123456",
  "password": "10203040",
  "password": "10203040"
}
```

## Sessão do Usuário

A sessão de usuários é definida

**URL (PUT):**

```bash
http://127.0.0.1:3000/sessions
```

**Body:**

```json
{
  "email": "a.elyan.s@gmail.com",
  "password": "10203040"
}
```

**Resultado Esperado:**

```json
{
  "user": {
    "id": 1,
    "name": "Andrey",
    "email": "a.elyan.s@@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTYyMjU3ODE2LCJleHAiOjE1NjI4NjI2MTZ9.uVTk8oMxQ5tdnG5RG87a7Kawgi0rhyxBcgxcyZQQ8T8"
}
```

## Aluguel

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

O campo returned_at é atulizado automaticamente com o horário da devolução.

**URL (PUT):**

```bash
http://127.0.0.1:3000/rent
```

**Body:**

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

