// import { apiRequest } from "./APIService";

// export const getDashboardStats = async () => {
//   return await apiRequest("/api/stats");
// };

// export const getDashboardProducts = async () => {
//   return await apiRequest("/api/products");
// };

// export const removeProduct = async (id) => {
//   return await apiRequest(`/api/products/${id}`, {
//     method: "DELETE",
//   });
// };


const BASE_URL = "http://localhost:5000/api/product";

// Saare products lane ke liye
export const getDashboardProducts = async () => {
    const response = await fetch(`${BASE_URL}/getProducts`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
};

// Dashboard stats (optional)
export const getDashboardStats = async () => {
    // Agar aapka backend stats bhejta hai
    const response = await fetch(`${BASE_URL}/stats`); 
    return response.json();
};

// Product remove karne ke liye
export const removeProduct = async (id) => {
    const response = await fetch(`${BASE_URL}/delete/${id}`, {
        method: "DELETE"
    });
    return response.json();
};