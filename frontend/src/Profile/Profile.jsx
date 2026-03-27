import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="profile-sidebar">
          <div className="user-short-info">
            <div className="avatar-circle">AJ</div>
            <div>
              <h4>Alex Johnson</h4>
              <p>Customer</p>
            </div>
          </div>
          <nav className="side-nav">
            <button className="nav-item active">📊 Dashboard</button>
            <button className="nav-item">📦 Orders</button>
            <button className="nav-item">❤ Wishlist</button>
            <button className="nav-item">📍 Addresses</button>
            <hr />
            <button className="nav-item">⚙ Settings</button>
            <button className="nav-item logout">Logout</button>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="profile-main">
          
          {/* Header Card */}
          <div className="profile-header-card">
            <div className="header-flex">
              <div className="user-meta">
                <img src="https://via.placeholder.com/80" alt="profile" className="main-avatar" />
                <div>
                  <h2>Alex Johnson</h2>
                  <p>alex.johnson@example.com</p>
                  <div className="badges">
                    <span className="badge-verified">Verified Buyer</span>
                    <span className="badge-tier">Gold Member</span>
                  </div>
                </div>
              </div>
              <button className="edit-profile-btn">Edit Profile</button>
            </div>
          </div>

          {/* Recent Orders Table */}
          <section className="dashboard-section">
            <div className="section-header">
              <h3>Recent Orders</h3>
              <button className="view-all-link">View All</button>
            </div>
            <div className="table-wrapper">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#SX-9021</td>
                    <td>Oct 12, 2023</td>
                    <td><span className="status delivered">Delivered</span></td>
                    <td>$124.50</td>
                    <td><button className="details-btn">Details</button></td>
                  </tr>
                  <tr>
                    <td>#SX-8711</td>
                    <td>Sep 28, 2023</td>
                    <td><span className="status pending">Shipped</span></td>
                    <td>$89.00</td>
                    <td><button className="details-btn">Details</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* My Wishlist Grid */}
          <section className="dashboard-section">
            <div className="section-header">
              <h3>My Wishlist</h3>
              <button className="view-all-link">View All</button>
            </div>
            <div className="wishlist-grid">
              <div className="wish-item">
                <img src="https://via.placeholder.com/150" alt="product" />
                <div className="wish-info">
                  <h5>Pro Runner Velocity</h5>
                  <p className="price">$199.00</p>
                  <button className="add-cart-mini">Add to Cart</button>
                </div>
              </div>
              <div className="wish-item">
                <img src="https://via.placeholder.com/150" alt="product" />
                <div className="wish-info">
                  <h5>Arctic White Maven</h5>
                  <p className="price">$149.00</p>
                  <button className="add-cart-mini">Add to Cart</button>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}