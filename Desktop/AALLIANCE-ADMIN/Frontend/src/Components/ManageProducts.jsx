import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/products/${id}`);
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <button onClick={() => (window.location.href = "/add-product")}>
        Add Product
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                {product.images.map((url, index) => (
                  <img key={index} src={url} alt={product.name} style={{width: '50px'}}/>
                ))}
              </td>
              <td>
                <button
                  onClick={() =>
                    (window.location.href = `/edit-product/${product._id}`)
                  }
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
