// // import { Routes, Route } from 'react-router-dom';
// // import SignupForm from '../SignUp/SignUp';
// // import LoginForm from '../login/login';
// // import Home from '../Home/Home';
// // import Products from '../Products/Products';
// // import UpdateProduct from '../Products/updateProduct'
// // import Electronics from '../Products/Electronic/Electronics';
// // // import Electronics from '../Products/Electronic/Electronics';
// // function Router() {
// //   return (
// //     <div>
// //         <Routes>
// //             <Route  path="/" element={<Home />}/>
// //             <Route  path="/products" element={<Products />}/>
// //             <Route path="/update/:id" element={<UpdateProduct/>}/>
// //             <Route  path="/signup" element={<SignupForm />}/>
// //             <Route  path="/login" element={<LoginForm />}/>
// //             <Route path="/electronics" element={<Electronics/>} />
// //         </Routes>
      
// //     </div>
// //   )
// // }

// // export default Router 
// // import { Routes, Route } from 'react-router-dom';
// // import Home from '../Home/Home';
// // import Login from '../login/login';
// // import Signup from '../SignUp/SignUp';
// // import AdminDashboard from '../AdminDash/AdminDashboard';
// // import UpdateProduct from '../Products/updateProduct';

// // // Helper Wrapper (Jo App.jsx mein banaye thay unhe yahan bhi use kar sakte hain)
// // function Router() {
// //     const user = JSON.parse(localStorage.getItem("user"));

// //     return (
// //         <Routes>
// //             {/* Public Routes - Sab dekh sakte hain */}
// //             <Route path="/" element={<Home />} />
// //             <Route path="/home" element={<Home />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/signup" element={<Signup />} />

// //             {/* Admin Only Routes (CRUD yahan hoga) */}
// //             <Route path="/admin-dashboard" element={
// //                 user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
// //             } />
// //             <Route path="/update-product/:id" element={
// //                 user?.role === "admin" ? <UpdateProduct /> : <Navigate to="/login" />
// //             } />

// //             {/* Employee Only Routes */}
// //             <Route path="/employee-view" element={
// //                 user?.role === "employee" ? <EmployeeDashboard /> : <Navigate to="/login" />
// //             } />
// //         </Routes>
// //     );
// // }

// // export default Router;


// import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from '../Home/Home';
// import Login from '../login/login';
// import Signup from '../SignUp/SignUp';
// // import AdminDashboard from '../AdminDash/AdminDashboard';
// import UpdateProduct from '../Products/updateProduct';

// // Agar EmployeeDashboard file nahi hai toh ye temporary component kaam karega
// const EmployeeDashboard = () => <div style={{padding: "20px"}}>Employee Dashboard (Coming Soon)</div>;

// function Router() {
//     // User data nikalne ka safe tareeka
//     let user = null;
//     try {
//         const savedUser = localStorage.getItem("user");
//         user = savedUser ? JSON.parse(savedUser) : null;
//     } catch (error) {
//         console.error("Error parsing user from localStorage", error);
//     }

//     return (
//         <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />

//         </Routes>
//     );
// }

// export default Router;


import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../login/login';
import Signup from '../SignUp/SignUp';
import ProductDetail from '../Products/ProductDetail'; // Is naye component ko import karein
// import UpdateProduct from '../Products/updateProduct';
import OrderHistory from '../Products/OrderHistory'; // Pehle import karein
import Products from '../Products/Products';

// Routes ke andar:

const EmployeeDashboard = () => <div style={{padding: "20px"}}>Employee Dashboard (Coming Soon)</div>;

function Router() {

    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/all" element={<Products />} />


            {/* PRODUCT DETAIL & ORDER ROUTE */}
            {/* ':id' ek variable hai jo har product ke liye alag hoga */}
            <Route path="/product/:id" element={<ProductDetail />} />
<Route path="/orders" element={<OrderHistory />} />
            {/* Add more routes here */}
        </Routes>
    );
}

export default Router;