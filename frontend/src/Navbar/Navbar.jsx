
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchTerm);
//     // Yahan aap search logic add kar sakte hain
//   };

//   return (
//     <nav className="navbar">
//       {/* 1. Logo Section */}
//       <div className="nav-logo">
//         <Link to="/" className="logo-text">🛒 ShopEase</Link>
//       </div>

//       {/* 2. Center Search Bar */}
//       <form className="nav-search" onSubmit={handleSearch}>
//         <input 
//           type="text" 
//           placeholder="Search for products, brands and more..." 
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit" className="search-btn">🔍</button>
//       </form>

//       {/* 3. Navigation Links */}
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


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // User ko home page par bhejo query ke saath: /home?search=phone
      navigate(`/?search=${searchTerm}`);
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-text">🛒 ShopEase</Link>
      </div>

      <form className="nav-search" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search for products..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-btn">🔍</button>
      </form>

      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/orders" className="nav-item">My Orders</Link>
        <div className="auth-buttons">
          <Link to="/login" className="login-link">Login</Link>
          <Link to="/signup" className="signup-btn">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;