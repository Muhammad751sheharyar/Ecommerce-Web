import React, { useState, useEffect } from 'react';
import { getDashboardStats, getDashboardProducts, removeProduct } from '../services/Dashboard';
// ... Lucide icons imports

 const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data load karne ka function
  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const [statsData, productsData] = await Promise.all([
        getDashboardStats(),
        getDashboardProducts()
      ]);
      setStats(statsData);
      setProducts(productsData);
    } catch (error) {
      console.error("Dashboard load failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      try {
        await removeProduct(id);
        // Page refresh ki jagah local state update karein (Fast UI)
        setProducts(products.filter(p => p._id !== id));
      } catch (error) {
        alert("Delete failed!");
      }
    }
  };

  if (loading) return <div className="loader">Loading Dashboard...</div>;

  return (
    <div className="dashboard-container">
      {/* ... Sidebar & Header ... */}

      <div className="stats-grid">
        <StatCard label="Total Orders" value={stats?.totalOrders} change="+12.5%" />
        <StatCard label="Active Users" value={stats?.activeUsers} change="+5.2%" />
        <StatCard label="Total Products" value={products.length} change="Live" />
        <StatCard label="Revenue" value={stats?.revenue} change="+18.3%" />
      </div>

      <section className="content-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>
                <td><span className="badge in-stock">{item.status}</span></td>
                <td>
                  <Edit2 size={16} className="edit-icon" />
                  <Trash2 
                    size={16} 
                    className="delete-icon" 
                    onClick={() => handleDelete(item._id)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};


exportdefault=Dashboard