# api-ementa

Esta é uma aplicação de demonstração de como utilizar o fastify com o mongoose para implementar uma API RESTful.

Esta aplicação é consideravelmente simples e consiste apenas num CRUD e produtos que em teoria representariam uma ementa de um dado restaurante.

## Instalação

Para instalar todas as dependências necessárias bata correr o seguinte comando no terminal:

```sh
npm install
```

## Utilização

Para inicializar a API basta executar:

```sh
npm run start
```

## Rotas

As seguintes rotas estão disponíveis na aplicação:

- **POST api/products** para Criar um produto
- **GET api/products** para obter uma Lista de todos os produtos
- **GET api/products/:id** para Obter os detalhes de um dado produto
- **PATCH api/products/:id** para Atualizar um dado produto
- **DELETE api/products/:id** para Apagar um dado produto
