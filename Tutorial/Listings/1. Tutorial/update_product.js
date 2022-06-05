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