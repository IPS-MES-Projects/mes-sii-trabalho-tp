// ...

// Importar o ficheiro de rotas de produtos
const productRoutes = require("./routes/product.routes");

// Inicializar o fastify
const app = fastify({
  logger: true,
});

// ...

// Regista um roteador para as rotas da api
app.register(
  async (api) => {
    // Regista o roteador dos produtos
    api.register(productsRoutes, {
      prefix: "/products",
    });
  },
  {
    prefix: "/api",
  }
);

// Colocar à aplicação à escuta na porta 5000 em localhost
app.listen(8080, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
