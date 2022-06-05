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