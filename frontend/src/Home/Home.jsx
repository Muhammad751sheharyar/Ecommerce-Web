import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/Product";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrendingProducts = async () => {
    try {
      const response = await getProducts();
      // Yahan hum sirf pehle 4 products le rahe hain
      const data = response.products || response;
      setProducts(data.slice(0, 4));
      setLoading(false);
    } catch (err) {
      console.log("Error fetching products:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingProducts();
  }, []);

  const categoryData = [
    { name: "Electronics", img: "https://t3.ftcdn.net/jpg/03/20/72/66/360_F_320726662_XVxhHxXYGwXnBMkHRnEeHJ4hA6gH0DqN.jpg" },
    { name: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3mGYOyGbAxZG2s5hWL-z2GMwxsXmZVAfcw&s" },
    { name: "Home", img: "https://static.vecteezy.com/system/resources/thumbnails/000/616/494/small/home-06.jpg" },
    { name: "Sports", img: "https://img.freepik.com/premium-vector/sports-tshirt-design-logo-sport-sport-is-shown-with-triangle-middle_856405-2413.jpg?semt=ais_hybrid&w=740&q=80" },
    { name: "Beauty", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlZMY9DhqvqZnVvlYjGM0_IIgP1h8ja9vxQ&s" },
    { name: "Toys", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwynecAro8xUbOKkbi2PsTCrbARJDFvXpQ&s" }
  ];

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="badge">Limited Offer</span>
            <h1>Summer Tech <br /> Mega Sale</h1>
            <p>Up to 40% OFF on all Gadgets. Upgrade your lifestyle with our latest collection.</p>
            <Link to="/products">
              <button className="primary-btn">Shop Now</button>
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Summer Tech Mega Sale - Latest Gadgets"
              style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          {/* <div className="hero-image">
            <img src="data:image/jpeg;base64,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" alt="Summer Tech Sale" />
          </div> */}
        </div>
      </section>

      {/* FLASH SALE */}
      <section className="flash-sale-banner">
        <div className="flash-header">
          <div className="timer-group">
            <h2>Flash Sale</h2>
            <div className="countdown">
              <span>02</span>:<span>45</span>:<span>12</span>
            </div>
          </div>
          <Link to="/all" className="view-all">View All Deals →</Link>
        </div>
      </section>

      {/* CATEGORIES */}
 
      <section className="categories-section" style={{ padding: '40px 20px' }}>
        {/* Header Part */}
        <div className="section-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Shop by Category</h2>
          <Link to="/all" className="see-all" style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: '500'
          }}>See all</Link>
        </div>

        {/* Categories Grid */}
        <div className="category-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '25px',
          textAlign: 'center'
        }}>
          {categoryData.map((cat) => (
            <Link
              to={`/${cat.name.toLowerCase()}`}
              key={cat.name}
              className="category-link"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="category-card" style={{ cursor: 'pointer' }}>
                <div className="icon-box" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto',
                  border: '3px solid #f8f9fa',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img
                    src={cat.img}
                    alt={cat.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <p style={{
                  marginTop: '15px',
                  fontWeight: '600',
                  fontSize: '15px',
                  color: '#333'
                }}>{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* DYNAMIC TRENDING PRODUCTS (Limit: 4) */}
      <section className="products-section">
        <div className="section-header">
          <h2>Trending Products</h2>
        </div>
        <div className="product-grid">
          {loading ? (
            <p>Loading Trending Products...</p>
          ) : products.length > 0 ? (
            products.map((item) => (
              <div className="product-card" key={item._id}>
                <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="prod-img-box">
                    <img src="https://res.cloudinary.com/dfmhw2d9y/image/upload/v1774595527/css_vwcz8w.png" alt={item.name} />
                  </div>
                  <div className="prod-info">
                    <h4>{item.name}</h4>
                    <span className="current-price">₹{item.price}</span>
                  </div>
                </Link>
                <button className="add-cart-btn">+</button>
              </div>
            ))
          ) : (
            <p>No Products Found</p>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="newsletter-card">
          <h2>Join Our Newsletter</h2>
          <p>Get updates about new products and special offers</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


