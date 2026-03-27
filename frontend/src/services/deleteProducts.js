export const deleteProduct = async (id) => {
  const response = await fetch(`http://localhost:5000/delete-product/${id}`, {
    method: "DELETE",
  });

  return response.json();
};