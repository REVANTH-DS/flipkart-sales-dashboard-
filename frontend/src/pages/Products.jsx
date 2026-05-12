import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/products`);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{product.category}</p>
            <p className="text-2xl font-bold text-blue-600 mb-2">₹{product.price}</p>
            <p className="text-yellow-500">⭐ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;