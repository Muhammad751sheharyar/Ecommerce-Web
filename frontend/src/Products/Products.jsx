import { useState, useEffect } from "react";
import { getProducts } from "../services/Product";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      console.log("API Response:", response);

      setProducts(response.products || response);
    } catch (err) {
      console.log(`Products not Found ${err.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });

      fetchProducts(); // list refresh
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((item) => (
          <div className="product-card" key={item._id}>

            <div className="product-image">
              <img
                src="https://via.placeholder.com/200"
                alt={item.name}
              />
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>

              <p className="description">{item.description}</p>

              <p className="brand">Brand: {item.brand}</p>

              <p className="price">
                Price: <span>₹{item.price}</span>
              </p>

              <button className="buy-btn">Buy Now</button>

              {/* UPDATE PAGE BUTTON */}
              {/* <Link to={`/update/${item._id}`}>
                <button className="update-btn">
                  Update
                </button>
              </Link> */}

              {/* DELETE BUTTON */}
              {/* <button
                className="delete-btn"
                onClick={() => deleteProduct(item._id)}
              >
                Delete
              </button> */}

            </div>

          </div>
        ))
      ) : (
        <h2>No Products Found</h2>
      )}
    </div>
  );
}

export default Products;