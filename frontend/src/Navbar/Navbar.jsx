// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       // User ko home page par bhejo query ke saath: /home?search=phone
//       navigate(`/?search=${searchTerm}`);
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-logo">
//         <Link to="/" className="logo-text">🛒 ShopEase</Link>
//       </div>

//       <form className="nav-search" onSubmit={handleSearch}>
//         <input 
//           type="text" 
//           placeholder="Search for products..." 
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit" className="search-btn">🔍</button>
//       </form>

//       <div className="nav-links">
//         <Link to="/" className="nav-item">Home</Link>
//         <Link to="/orders" className="nav-item">My Orders</Link>
//         <div className="auth-buttons">
//           <Link to="/login" className="login-link">Login</Link>
//           <Link to="/signup" className="signup-btn">Register</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="brand">SwiftShop</div>
            
            <div className="nav-items">
                {user ? (
                    <div className="user-profile">
                        {/* Pehla Letter Circle mein */}
                        <div className="avatar-circle">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <button onClick={logout} className="logout-link">Logout</button>
                    </div>
                ) : (
                    <div className="auth-links">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}