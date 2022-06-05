// Importar o fastify e o mongoose
const fastify = require("fastify");
const mongoose = require("mongoose");
const formbody = require("@fastify/formbody");

// Importar o ficheiro de rotas de produtos
const productsRoutes = require("./routes/products.routes");

// Inicializar o fastify
const app = fastify({
  logger: true,
});

// Registar plugins do Fastify
app.register(formbody);

// Conectar à base de dados
try {
  mongoose.connect(
    "mongodb+srv://tutorial:C86nzqqez2qeIFr9@cluster0.494hi.mongodb.net/api-ementa?retryWrites=true&w=majority"
  );
} catch (e) {
  console.error(e);
}

// Rota principal
app.get("/", (request, reply) => {
  try {
    reply.send("Server alive!");
  } catch (e) {
    console.error(e);
  }
});

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
