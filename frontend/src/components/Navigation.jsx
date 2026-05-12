import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/', icon: '📊' },
    { label: 'Products', path: '/products', icon: '📦' },
    { label: 'Orders', path: '/orders', icon: '🛒' },
    { label: 'Customers', path: '/customers', icon: '👥' }
  ];

  return (
    <nav className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Flipkart Analytics</h1>
      </div>
      <ul className="space-y-2 px-4 py-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;