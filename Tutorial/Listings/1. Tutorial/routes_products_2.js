const productsController = require("../controllers/products.controller");

module.exports = async (api) => {
  // Rota para criar um produto
  api.post("/", productsController.create);

  // Rota para obter uma lista de produtos
  api.get("/", productsController.fetch);

  // Rota para obter um único produto
  api.get("/:id", productsController.get);

  // Rota para atualizar um produto
  api.patch("/:id", productsController.update);

  // Rota para apagar um produto
  api.delete("/:id", productsController.delete);
};
