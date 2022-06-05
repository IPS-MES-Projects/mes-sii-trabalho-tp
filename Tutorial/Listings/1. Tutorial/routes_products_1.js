module.exports = (api) => {
  // Rota para criar um produto
  api.post("/", (request, reply) => {});

  // Rota para obter uma lista de produtos
  api.get("/", (request, reply) => {});

  // Rota para obter um único produto
  api.get("/:id", (request, reply) => {});

  // Rota para atualizar um produto
  api.patch("/:id", (request, reply) => {});

  // Rota para apagar um produto
  api.delete("/:id", (request, reply) => {});
};
