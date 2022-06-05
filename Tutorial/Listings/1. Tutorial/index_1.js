// Importar o fastify e o mongoose
const fastify = require("fastify");
const mongoose = require("mongoose");

// Inicializar o fastify
const app = fastify({
  logger: true,
});

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

// Colocar à aplicação à escuta na porta 5000 em localhost
app.listen(8080, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
