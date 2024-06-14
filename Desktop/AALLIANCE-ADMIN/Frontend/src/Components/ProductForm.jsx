import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    newPrice: "",
    dimensions: "",
    size: "",
    color: "",
    features: "",
    materials: "",
    images: [],
    product_care: "",
    category: "Background",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`/products/${id}`, product);
    } else {
      await axios.post("/products", product);
    }
    navigate("/manage-products");
  };

  return (
    <div className="product-form-container">
      <h2>{id ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>New Price</label>
          <input
            type="number"
            name="newPrice"
            value={product.newPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dimensions</label>
          <input
            type="text"
            name="dimensions"
            value={product.dimensions}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Size</label>
          <input
            type="text"
            name="size"
            value={product.size}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Color</label>
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Features</label>
          <textarea
            name="features"
            value={product.features}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Materials</label>
          <textarea
            name="materials"
            value={product.materials}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Care</label>
          <textarea
            name="product_care"
            value={product.product_care}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="Background">Background</option>
            <option value="Accessories">Accessories</option>
            <option value="Idols">Idols</option>
          </select>
        </div>
        <div>
          <label>Images</label>
          <input
            type="text"
            name="images"
            value={product.images}
            onChange={(e) =>
              setProduct({ ...product, images: e.target.value.split(",") })
            }
          />
        </div>
        <button type="submit">{id ? "Update Product" : "Add Product"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
