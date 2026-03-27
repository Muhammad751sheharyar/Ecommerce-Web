// // src/services/auth.js
// import { apiRequest } from "./APIService";


// /**
//  * Handles user login.
//  * @param {string} email The user's email.
//  * @param {string} password The user's password.
//  * @param {string} firstName The user's email.
//  * @param {string} lastName The user's password.
//  * @returns {Promise<object|null>} User data and token on success, null on failure.
//  */
// export async function getProducts() {
//   try {
//     const data = await apiRequest(`/api/product/getProduct`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${token}`,
//       },
//       //
//     });
//     console.log(data, "line 21");
//     // Handle successful login (e.g., store token in localStorage/sessionStorage)
    
//     return data.products;
//   } catch (error) {
//     console.error("Login failed:", error.message);
//     // Specific error handling for login can go here
//     throw error;
//   }
// }
import { apiRequest } from "./APIService";

/**
 * Saare products fetch karne ke liye function
 */
export async function getProducts() {
  try {
    // 1. Check karein ke backend route sahi hai ya nahi? 
    // Agar backend mein route `/api/products` hai toh wahi likhen.
    const data = await apiRequest(`/api/product/getProduct`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("API Response:", data);

    // 2. Backend response structure check karein
    // Agar backend `res.json({ products: [...] })` bhej raha hai toh:
    return data.products || data.updateprod || data; 
    
  } catch (error) {
    console.error("Products fetch failed:", error.message);
    throw error;
  }
}