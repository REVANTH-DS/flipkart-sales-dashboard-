const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

// GET sales overview
router.get('/overview', async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalRevenue = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]);
    const averageOrderValue = totalRevenue[0]?.total / totalOrders || 0;
    
    res.json({
      totalOrders,
      totalRevenue: totalRevenue[0]?.total || 0,
      averageOrderValue: averageOrderValue.toFixed(2),
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET sales trends (last 30 days)
router.get('/trends', async (req, res) => {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    
    const trends = await Order.aggregate([
      {
        $match: {
          orderDate: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$orderDate' }
          },
          revenue: { $sum: '$totalAmount' },
          orders: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);
    
    res.json(trends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET sales by product
router.get('/by-product', async (req, res) => {
  try {
    const salesByProduct = await Product.find({}).sort({ revenue: -1 }).limit(10);
    res.json(salesByProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;