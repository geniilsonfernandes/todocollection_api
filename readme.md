# API de TodoList

Esta API permite que você gerencie uma lista de tarefas (todos). Você pode criar, atualizar, recuperar e excluir tarefas por meio dos endpoints criados. Podemos tambem cria uma coleção de tarefas.

## Configuração

Para começar a usar a API de TodoList, você precisará realizar algumas etapas de configuração:

1. Certifique-se de ter uma versão recente do Node.js instalada em seu ambiente.
2. Clone o repositório da API de TodoList para sua máquina local.
3. Navegue até o diretório da API e execute o comando `yarn` para instalar todas as dependências necessárias.
4. Inicie o servidor executando o comando `yarn dev`.

A API de TodoList estará disponível em `http://localhost:3000`.

## Exemplos de algums dos endpoints da API

### usuários

Criar um usuário

- **URL**: `/user/create`
- **Método**: `POST`
- **Corpo da requisição**:

```json
{
  "nickname": "g3232e",
  "email": "genilso@gmail.com",
  "password": "dsff34343"
}
```

Autenticar um usuário

- **URL**: `/user/auth`
- **Método**: `POST`
- **Corpo da requisição**:

```json
{
  "password": "dsff3434343",
  "nickname": "genilson"
}
```

### Cria uma nova coleção

Retorna uma lista de todas as tarefas cadastradas.

- **URL**: `/collections`
- **Método**: `POST`
- **Resposta de exemplo**:

```json
{
  "name": "hora",
  "description": "tarefas de faculdade"
}
```

Listar todas as coleções

- **URL**: `/collections`
- **Método**: `GET`
- **Resposta de exemplo**:

```json
[
  {
    "id": "345cc988-2c2f-4bc2-bff7-3494d3d96173",
    "name": "tarefas de casa",
    "description": "tarefas de casa",
    "created_at": "2023-07-08T22:41:04.176Z",
    "updated_at": "2023-07-08T22:41:04.176Z"
  }
]
```

### Atualizar uma tarefa existente

Atualiza os detalhes de uma tarefa existente.

- **URL**: `/tasks/{id}`
- **Método**: `PATCH`
- **Parâmetros da URL**:
  - `id` (obrigatório) - O ID da tarefa que deseja atualizar.
- **Corpo da requisição**:

```json
{
  "is_completed": true
}
```

## Erros

A API de TodoList retorna os seguintes códigos de status em caso de erro:

- `400 Bad Request`: Ocorreu um erro de validação nos dados da requisição.
- `404 Not Found`: O recurso solicitado não foi encontrado.
- `500 Internal Server Error`: Ocorreu um erro interno no servidor.

## Conclusão

A API de TodoList oferece uma maneira simples e conveniente de gerenciar suas tarefas diárias. Use os endpoints fornecidos para interagir com a lista de tarefas, criando, atualizando, recuperando e excluindo tarefas conforme necessário. Esperamos que esta API facilite o gerenciamento de suas tarefas!
