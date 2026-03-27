import { useState, useEffect } from "react";
// import { getProducts } from "../services/Product";
import "./Electronics.css";

export default function Electronics() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchElectronics = async () => {
            try {
                const response = await getProducts();
                const data = response.products || response;
                // Sirf electronics category filter karne ke liye (optional)
                setProducts(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchElectronics();
    }, []);

    return (
        <div className="electronics-page">
            {/* Top Navigation / Breadcrumbs */}
            <div className="breadcrumb">Home {'>'} Electronics</div>
            
            <header className="page-header">
                <h1>Electronics</h1>
                <p>Showing {products.length} results for "Electronics"</p>
                <div className="sort-dropdown">
                    Sort by: <span>Most Popular ▾</span>
                </div>
            </header>

            <div className="main-layout">
                {/* Sidebar Filters */}
                <aside className="sidebar">
                    <div className="filter-group">
                        <h3>Categories</h3>
                        <label><input type="checkbox" /> Smartphones</label>
                        <label className="active"><input type="checkbox" checked readOnly /> Laptops & PCs</label>
                        <label><input type="checkbox" /> Audio & Sound</label>
                        <label><input type="checkbox" /> Wearables</label>
                    </div>

                    <div className="filter-group">
                        <h3>Price Range</h3>
                        <input type="range" className="price-slider" />
                        <div className="price-inputs">
                            <span>$250</span> <span>-</span> <span>$3500</span>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Brand</h3>
                        <label><input type="checkbox" /> Apple</label>
                        <label><input type="checkbox" /> Samsung</label>
                        <label><input type="checkbox" /> Sony</label>
                        <label><input type="checkbox" /> Microsoft</label>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="product-content">
                    {loading ? (
                        <div className="loader">Loading Products...</div>
                    ) : (
                        <div className="electronics-grid">
                            {products.map((item) => (
                                <div className="elec-card" key={item._id}>
                                    <div className="card-image">
                                        {item.price > 1000 && <span className="tag sale">SALE</span>}
                                        <img src="https://via.placeholder.com/200" alt={item.name} />
                                        <button className="wish-icon">❤</button>
                                    </div>
                                    <div className="card-details">
                                        <span className="category-label">{item.brand || "ELECTRONICS"}</span>
                                        <h4>{item.name}</h4>
                                        <div className="rating">⭐⭐⭐⭐⭐ <span>(45)</span></div>
                                        <div className="price-tag">${item.price} <span>/unit</span></div>
                                        <button className="add-to-cart-btn">
                                            <span className="cart-plus">+</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {/* Pagination */}
                    <div className="pagination">
                        <button className="arrow">{'<'}</button>
                        <button className="page-num active">1</button>
                        <button className="page-num">2</button>
                        <button className="page-num">3</button>
                        <span>...</span>
                        <button className="page-num">12</button>
                        <button className="arrow">{'>'}</button>
                    </div>
                </main>
            </div>
        </div>
    );
}