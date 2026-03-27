import React, { useState, useEffect } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // LocalStorage se orders nikalna
    const savedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>My Order History</h1>
      <hr />
      {orders.length === 0 ? (
        <p>Aapne abhi tak koi order nahi kiya hai.</p>
      ) : (
        orders.map((order) => (
          <div key={order.orderId} style={{ 
            display: "flex", gap: "20px", border: "1px solid #ddd", 
            padding: "15px", borderRadius: "10px", marginBottom: "15px",
            alignItems: "center" 
          }}>
            <img src={order.image} alt={order.productName} style={{ width: "80px", borderRadius: "5px" }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0" }}>{order.productName}</h3>
              <p style={{ margin: "5px 0", color: "#666" }}>Ordered on: {order.date}</p>
              <p style={{ margin: "0", fontWeight: "bold" }}>Price: ₹{order.price}</p>
            </div>
            <div style={{ textAlign: "right", fontSize: "0.9rem", color: "#888" }}>
              <p>ID: {order.orderId}</p>
              <span style={{ color: "green", fontWeight: "bold" }}>Status: Delivered</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;