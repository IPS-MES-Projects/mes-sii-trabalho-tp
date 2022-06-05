// Importar o fastify e o mongoose
const fastify = require("fastify");
const mongoose = require("mongoose");
const formbody = require("@fastify/formbody");

// ...

// Inicializar o fastify
const app = fastify({
  logger: true,
});

// Registar plugins do Fastify
app.register(formbody);

// ...
