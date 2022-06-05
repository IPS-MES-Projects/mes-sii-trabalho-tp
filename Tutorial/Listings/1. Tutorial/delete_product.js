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