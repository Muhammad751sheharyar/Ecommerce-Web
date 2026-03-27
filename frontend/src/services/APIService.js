// // apiService.js

// /**
//  * A generic function to make a GET request to an API endpoint.
//  * @param {string} url The API endpoint URL.
//  * @returns {Promise<any>} A promise that resolves with the JSON data or rejects with an error.
//  */
// export const apiRequest = (url, params = {}) => {
//     console.log(url, params);
//     return new Promise((resolve, reject) => {
//         fetch(`http://localhost:3000${url}`, params)
//             .then((response) => {
//                 console.log(response, "line 13");
//                 if (!response.ok) {
//                     // If the response is not OK (e.g., 404, 500), reject the promise with an error
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 console.log(response);
//                 return response.json();
//             })
//             .then((data) => {
//                 // Resolve the promise with the data
//                 console.log(data);
//                 resolve(data);
//             })
//             .catch((error) => {
//                 // Catch any errors during the fetch or JSON parsing and reject the promise
//                 console.log("Error fetching data:", error);
//                 reject(error);
//             });
//     });
// };


// APIService.js mein check karein
const BASE_URL = "http://localhost:5000"; // Kya ye wahi port hai jahan backend chal raha hai?

export const apiRequest = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};