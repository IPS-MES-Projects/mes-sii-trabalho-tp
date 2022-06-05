// Obter a lista de produtos
fetch: async (request, reply) => {
  try {
    const products = await Product.find({});
    reply.code(200).send(products);
  } catch (e) {
    reply.code(500).send(e);
  }
},