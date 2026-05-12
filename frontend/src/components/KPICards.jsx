import React from 'react';

const KPICards = ({ data }) => {
  const cards = [
    {
      title: 'Total Revenue',
      value: `₹${data.totalRevenue?.toLocaleString() || '0'}`,
      color: 'bg-blue-500',
      icon: '💰'
    },
    {
      title: 'Total Orders',
      value: data.totalOrders || '0',
      color: 'bg-green-500',
      icon: '📦'
    },
    {
      title: 'Average Order Value',
      value: `₹${data.averageOrderValue || '0'}`,
      color: 'bg-purple-500',
      icon: '📊'
    },
    {
      title: 'Growth Rate',
      value: '+12.5%',
      color: 'bg-orange-500',
      icon: '📈'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">{card.title}</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">{card.value}</p>
            </div>
            <div className={`${card.color} text-white text-3xl w-12 h-12 rounded-lg flex items-center justify-center`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;