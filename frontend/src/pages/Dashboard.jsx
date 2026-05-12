import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KPICards from '../components/KPICards';
import SalesChart from '../components/SalesChart';
import ProductPerformance from '../components/ProductPerformance';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [overview, setOverview] = useState(null);
  const [trends, setTrends] = useState([]);
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [overviewRes, trendsRes, productsRes] = await Promise.all([
        axios.get(`${apiUrl}/sales/overview`),
        axios.get(`${apiUrl}/sales/trends`),
        axios.get(`${apiUrl}/sales/by-product`)
      ]);
      
      setOverview(overviewRes.data);
      setTrends(trendsRes.data);
      setProducts(productsRes.data.products || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Flipkart Sales Dashboard</h1>
      
      {overview && <KPICards data={overview} />}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <SalesChart data={trends} />
        <ProductPerformance data={products} />
      </div>
    </div>
  );
};

export default Dashboard;