import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/customers`);
      setCustomers(response.data.customers || []);
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Customers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map(customer => (
          <div key={customer._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{customer.name}</h3>
            <p className="text-gray-600 mb-2">📧 {customer.email}</p>
            <p className="text-gray-600 mb-3">📞 {customer.phone || 'N/A'}</p>
            <div className="border-t pt-3 mt-3">
              <p className="text-sm text-gray-600">Total Orders: <span className="font-bold">{customer.totalOrders}</span></p>
              <p className="text-sm text-gray-600">Total Spent: <span className="font-bold">₹{customer.totalSpent}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;