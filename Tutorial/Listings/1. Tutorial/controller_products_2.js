const Product = require("../models/product.model");

module.exports = {
  // Criar um produto
  create: async (request, reply) => {
    try {
      const product = request.body;
      const newProduct = await Product.create(product);
      reply.code(201).send(newProduct);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  // Obter a lista de produtos
  fetch: async (request, reply) => {
    try {
      const products = await Product.find({});
      reply.code(200).send(products);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  // Obter um produto
  get: async (request, reply) => {
    try {
      const productId = request.params.id;
      const product = await Product.findById(productId);
      reply.code(200).send(product);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  // Atualizar um produto
  update: async (request, reply) => {
    try {
      const productId = request.params.id;
      const updates = request.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        updates,
        {
          new: true,
        }
      );
      reply.code(200).send(updatedProduct);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  // Apagar um produto
  delete: async (request, reply) => {
    try {
      const productId = request.params.id;
      const deletedProduct = await Product.findByIdAndDelete(productId);
      reply.code(200).send(deletedProduct);
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};
