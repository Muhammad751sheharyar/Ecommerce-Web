// import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from '../Home/Home';
// import Login from '../login/login';
// import Signup from '../SignUp/SignUp';
// import ProductDetail from '../Products/ProductDetail'; // Is naye component ko import karein
// // import UpdateProduct from '../Products/updateProduct';
// import OrderHistory from '../Products/OrderHistory'; // Pehle import karein
// import Products from '../Products/Products';

// // Routes ke andar:

// const EmployeeDashboard = () => <div style={{padding: "20px"}}>Employee Dashboard (Coming Soon)</div>;

// function Router() {

//     return (
//         <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/all" element={<Products />} />


//             {/* PRODUCT DETAIL & ORDER ROUTE */}
//             {/* ':id' ek variable hai jo har product ke liye alag hoga */}
//             <Route path="/product/:id" element={<ProductDetail />} />
// <Route path="/orders" element={<OrderHistory />} />
//             {/* Add more routes here */}
//         </Routes>
//     );
// }

// export default Router;



import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../login/login';
import Signup from '../SignUp/SignUp';
import ProductDetail from '../Products/ProductDetail'; 
import OrderHistory from '../Products/OrderHistory';
import Products from '../Products/Products';
// Agar aapne UpdateProduct banaya hai toh ise uncomment karein
// import UpdateProduct from '../Products/UpdateProduct'; 

function Router() {
    return (
        <Routes>
            {/* 1. Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/all" element={<Products />} />

            {/* 2. Product Routes */}
            {/* ':id' dynamic parameter hai jo MongoDB ki _id capture karega */}
            <Route path="/product/:id" element={<ProductDetail />} />
            
            {/* Jab aap Postman se product add kar lein aur use edit karna ho */}
            {/* <Route path="/update-product/:id" element={<UpdateProduct />} /> */}

            {/* 3. Order Routes */}
            <Route path="/orders" element={<OrderHistory />} />

            {/* 4. Dashboard (Future Use) */}
            <Route path="/employee-dashboard" element={<div style={{padding: "20px"}}>Employee Dashboard (Coming Soon)</div>} />

            {/* 5. 404 Page (Optional: Agar galat URL ho toh Home par bhej de) */}
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default Router;