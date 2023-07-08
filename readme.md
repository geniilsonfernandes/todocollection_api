# API de TodoList

Bem-vindo à API de TodoList! Esta API permite que você gerencie uma lista de tarefas (todos). Você pode criar, atualizar, recuperar e excluir tarefas por meio dos endpoints fornecidos. O formato de comunicação com a API é JSON.

## Configuração

Para começar a usar a API de TodoList, você precisará realizar algumas etapas de configuração:

1. Certifique-se de ter uma versão recente do Node.js instalada em seu ambiente.
2. Clone o repositório da API de TodoList para sua máquina local.
3. Navegue até o diretório da API e execute o comando `npm install` para instalar todas as dependências necessárias.
4. Inicie o servidor executando o comando `npm start`.

A API de TodoList estará disponível em `http://localhost:3000`.

## Endpoints

### Listar tarefas

Retorna uma lista de todas as tarefas cadastradas.

- **URL**: `/todos`
- **Método**: `GET`
- **Resposta de exemplo**:
```json
[
  {
    "id": 1,
    "title": "Fazer compras",
    "completed": false
  },
  {
    "id": 2,
    "title": "Estudar para a prova",
    "completed": true
  }
]
```

### Criar uma nova tarefa

Cria uma nova tarefa na lista.

- **URL**: `/todos`
- **Método**: `POST`
- **Corpo da requisição**:
```json
{
  "title": "Tarefa 1",
  "completed": false
}
```
- **Resposta de exemplo**:
```json
{
  "id": 3,
  "title": "Tarefa 1",
  "completed": false
}
```

### Atualizar uma tarefa existente

Atualiza os detalhes de uma tarefa existente.

- **URL**: `/todos/{id}`
- **Método**: `PUT`
- **Parâmetros da URL**: 
  - `id` (obrigatório) - O ID da tarefa que deseja atualizar.
- **Corpo da requisição**:
```json
{
  "title": "Tarefa atualizada",
  "completed": true
}
```
- **Resposta de exemplo**:
```json
{
  "id": 3,
  "title": "Tarefa atualizada",
  "completed": true
}
```

### Excluir uma tarefa

Remove uma tarefa da lista.

- **URL**: `/todos/{id}`
- **Método**: `DELETE`
- **Parâmetros da URL**: 
  - `id` (obrigatório) - O ID da tarefa que deseja excluir.
- **Resposta de exemplo**:
```json
{
  "message": "Tarefa removida com sucesso."
}
```

## Erros

A API de TodoList retorna os seguintes códigos de status em caso de erro:

- `400 Bad Request`: Ocorreu um erro de validação nos dados da requisição.
- `404 Not Found`: O recurso solicitado não foi encontrado.
- `500 Internal Server Error`: Ocorreu um erro interno no servidor.

## Conclusão

A API de TodoList oferece uma maneira simples e conveniente de gerenciar suas tarefas diárias. Use os endpoints fornecidos para interagir com a lista de tarefas, criando, atualizando, recuperando e excluindo tarefas conforme necessário. Esperamos que esta API facilite o gerenciamento de suas tarefas!