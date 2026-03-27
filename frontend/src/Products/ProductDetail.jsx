import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../services/Product"; 

function ProductDetail() {
  const { id } = useParams(); // URL se ID nikalne ke liye
  const navigate = useNavigate(); // Order ke baad navigate karne ke liye
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");

  // 1. Product Fetch karna
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await getProducts();
        const data = response.products || response;
        const foundProduct = data.find((item) => item._id === id);
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProductData();
  }, [id]);

  // 2. Order Handle aur History mein Save karna
  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert("Please enter your delivery address!");
      return;
    }

    // Naya order object create karein
    const newOrder = {
      orderId: "#ORD-" + Math.floor(Math.random() * 1000000),
      productId: product._id,
      name: product.name,
      price: product.price,
      image: "https://servis.pk/cdn/shop/files/M-DC-0200058NAVY.jpg?v=1756669025", // Static image as per your design
      address: address,
      date: new Date().toLocaleString(),
    };

    // Purani history nikaalein
    const existingHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
    
    // Naya order add karke save karein
    const updatedHistory = [newOrder, ...existingHistory];
    localStorage.setItem("orderHistory", JSON.stringify(updatedHistory));

    alert("Order Placed Successfully! History mein check karein.");
    
    // Order hone ke baad History page par bhej dein
    navigate("/orders");
  };

  if (loading) return <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>;
  if (!product) return <div style={{ textAlign: "center", padding: "50px" }}>Product Not Found!</div>;

  return (
    <div style={styles.container}>
      {/* Left Side: Product Image */}
      <div style={styles.imageSection}>
        <img 
          src="https://servis.pk/cdn/shop/files/M-DC-0200058NAVY.jpg?v=1756669025" 
          alt={product.name} 
          style={styles.mainImage} 
        />
      </div>

      {/* Right Side: Product Info & Order Form */}
      <div style={styles.infoSection}>
        <span style={styles.badge}>Trending Now</span>
        <h1 style={styles.title}>{product.name}</h1>
        <p style={styles.brand}>Brand: {product.brand || "Premium Selection"}</p>
        <h2 style={styles.price}>₹{product.price}</h2>
        
        <div style={styles.divider}></div>

        {/* Delivery Form */}
        <div style={styles.orderCard}>
          <h3 style={styles.formLabel}>Delivery Address</h3>
          <textarea
            style={styles.addressInput}
            placeholder="Apna poora pata likhein (House No, Street, City, Pincode)..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button style={styles.orderBtn} onClick={handlePlaceOrder}>
            PLACE ORDER NOW
          </button>
        </div>

        <p style={styles.guarantee}>✅ 7 Days Replacement Policy available</p>
      </div>
    </div>
  );
}

// Inline CSS Styles
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "40px",
    fontFamily: "Arial, sans-serif"
  },
  imageSection: {
    flex: "1",
    minWidth: "350px"
  },
  mainImage: {
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  },
  infoSection: {
    flex: "1",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column"
  },
  badge: {
    backgroundColor: "#e74c3c",
    color: "white",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    width: "fit-content",
    marginBottom: "15px"
  },
  title: { fontSize: "32px", margin: "0 0 10px 0", color: "#2c3e50" },
  brand: { color: "#7f8c8d", fontSize: "18px", margin: "0" },
  price: { color: "#27ae60", fontSize: "28px", margin: "20px 0" },
  divider: { height: "1px", backgroundColor: "#eee", margin: "20px 0" },
  orderCard: {
    backgroundColor: "#f9f9f9",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #eee"
  },
  formLabel: { margin: "0 0 15px 0", fontSize: "18px" },
  addressInput: {
    width: "100%",
    height: "100px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginBottom: "20px",
    resize: "none",
    boxSizing: "border-box"
  },
  orderBtn: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#f39c12",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },
  guarantee: { fontSize: "13px", color: "#95a5a6", marginTop: "15px", textAlign: "center" }
};

export default ProductDetail;