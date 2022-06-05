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