// // Sabse upar BASE_URL define karein
// const BASE_URL = "http://localhost:5000"; // Apna sahi port check karlein (5000 ya 3000)

// export const getProductById = async (id) => {
//   const response = await fetch(`${BASE_URL}/api/products/${id}`);
//   return response.json();
// };

// export const updateProduct = async (id, productData) => {
//   // Yahan BASE_URL tabhi chalega jab upar define hoga
//   const response = await fetch(`${BASE_URL}/api/products/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(productData),
//   });

//   return response.json();
// };

// export const deleteProduct = async (id) => {
//   const response = await fetch(`${BASE_URL}/delete-product/${id}`, {
//     method: "DELETE",
//   });

//   return response.json();
// };




const BASE_URL = "http://localhost:5000"; // Agar backend 3000 par hai to 3000 karein

export const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
    if (!response.ok) throw new Error("Product fetch failed");
    return response.json();
};

export const updateProduct = async (id, productData) => {
    const response = await fetch(`${BASE_URL}/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Update failed");
    }
    return response.json();
};