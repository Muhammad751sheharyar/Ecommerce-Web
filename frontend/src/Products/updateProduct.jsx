
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { updateProduct, getProductById } from "../services/productService"; 

// function UpdateProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // State mein wo saari fields add ki hain jo backend controller mein hain
//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     discountPrice: "",
//     category: "",
//     brand: "",
//     sku: "",
//     stock: "",
//     isActive: true
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadProductData = async () => {
//       try {
//         const data = await getProductById(id);
//         // Backend se pura object nikal kar state mein set karein
//         const p = data.updateprod || data.product || data; 
        
//         setProduct({
//           name: p.name || "",
//           description: p.description || "",
//           price: p.price || "",
//           discountPrice: p.discountPrice || "",
//           category: p.category || "",
//           brand: p.brand || "",
//           sku: p.sku || "",
//           stock: p.stock || "",
//           isActive: p.isActive ?? true
//         });
//         setLoading(false);
//       } catch (error) {
//         console.error("Fetch error:", error);
//         setLoading(false);
//       }
//     };
//     loadProductData();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setProduct({
//       ...product,
//       [name]: type === "checkbox" ? checked : value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await updateProduct(id, product);
//       if (result) {
//         alert("Product Successfully Update Ho Gaya!");
//         navigate("/products");
//       }
//     } catch (error) {
//       alert("Update Fail! Console check karein.");
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: 'sans-serif' }}>
//       <h2>Update Product</h2>
//       <form onSubmit={handleSubmit} style={gridFormStyle}>
        
//         {/* Row 1 */}
//         <div style={inputGroup}>
//           <label>Product Name</label>
//           <input name="name" value={product.name} onChange={handleChange} style={inputStyle} required />
//         </div>

//         <div style={inputGroup}>
//           <label>Brand</label>
//           <input name="brand" value={product.brand} onChange={handleChange} style={inputStyle} />
//         </div>

//         {/* Row 2 */}
//         <div style={inputGroup}>
//           <label>Price</label>
//           <input type="number" name="price" value={product.price} onChange={handleChange} style={inputStyle} required />
//         </div>

//         <div style={inputGroup}>
//           <label>Discount Price</label>
//           <input type="number" name="discountPrice" value={product.discountPrice} onChange={handleChange} style={inputStyle} />
//         </div>

//         {/* Row 3 */}
//         <div style={inputGroup}>
//           <label>Category</label>
//           <input name="category" value={product.category} onChange={handleChange} style={inputStyle} />
//         </div>

//         <div style={inputGroup}>
//           <label>SKU</label>
//           <input name="sku" value={product.sku} onChange={handleChange} style={inputStyle} />
//         </div>

//         {/* Row 4 */}
//         <div style={inputGroup}>
//           <label>Stock Quantity</label>
//           <input type="number" name="stock" value={product.stock} onChange={handleChange} style={inputStyle} />
//         </div>

//         <div style={{...inputGroup, flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
//           <input type="checkbox" name="isActive" checked={product.isActive} onChange={handleChange} />
//           <label>Active Product</label>
//         </div>

//         <div style={{ gridColumn: "span 2" }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
//           <textarea name="description" value={product.description} onChange={handleChange} style={{ ...inputStyle, minHeight: "100px" }} required />
//         </div>

//         <div style={{ gridColumn: "span 2", display: "flex", gap: "10px" }}>
//           <button type="submit" style={saveBtnStyle}>Update Product</button>
//           <button type="button" onClick={() => navigate("/products")} style={cancelBtnStyle}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// // Styles
// const gridFormStyle = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: "20px",
//   marginTop: "20px"
// };

// const inputGroup = { display: "flex", flexDirection: "column" };
// const inputStyle = { padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "5px" };
// const saveBtnStyle = { backgroundColor: "#2563eb", color: "white", padding: "12px", border: "none", borderRadius: "5px", cursor: "pointer", flex: 1 };
// const cancelBtnStyle = { backgroundColor: "#f1f5f9", padding: "12px", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer" };

// export default UpdateProduct;



import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduct, getProductById } from "../services/productService";

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({
        name: "", description: "", price: "", discountPrice: "",
        category: "", brand: "", sku: "", stock: "", isActive: true
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getProductById(id);
                const p = data.product || data;
                setProduct({
                    name: p.name || "",
                    description: p.description || "",
                    price: p.price || "",
                    discountPrice: p.discountPrice || "",
                    category: p.category || "",
                    brand: p.brand || "",
                    sku: p.sku || "",
                    stock: p.stock || "",
                    isActive: p.isActive ?? true
                });
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        loadData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, product);
            alert("Sahi hai! Product update ho gaya.");
            navigate("/products");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
                <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
                <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" />
                <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" required />
                <input name="discountPrice" type="number" value={product.discountPrice} onChange={handleChange} placeholder="Discount Price" />
                <input name="category" value={product.category} onChange={handleChange} placeholder="Category" />
                <input name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" />
                <input name="sku" value={product.sku} onChange={handleChange} placeholder="SKU" />
                <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" />
                <label>
                    <input type="checkbox" name="isActive" checked={product.isActive} onChange={handleChange} /> Active
                </label>
                <button type="submit" style={{ background: "blue", color: "white", padding: "10px" }}>Update</button>
            </form>
        </div>
    );
}

export default UpdateProduct;