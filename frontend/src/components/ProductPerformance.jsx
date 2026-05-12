import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductPerformance = ({ data }) => {
  const chartData = data.slice(0, 10).map(product => ({
    name: product.name?.substring(0, 15) || 'N/A',
    revenue: product.revenue || 0,
    sales: product.totalSales || 0
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Products</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8b5cf6" name="Revenue" />
          <Bar dataKey="sales" fill="#06b6d4" name="Sales" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductPerformance;