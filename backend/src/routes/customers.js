const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// GET all customers
router.get('/', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;
    const skip = (page - 1) * limit;
    
    const customers = await Customer.find().skip(skip).limit(limit);
    const total = await Customer.countDocuments();
    
    res.json({
      customers,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET customer demographics
router.get('/analytics/demographics', async (req, res) => {
  try {
    const demographics = await Customer.aggregate([
      {
        $group: {
          _id: '$location.state',
          count: { $sum: 1 },
          avgSpent: { $avg: '$totalSpent' }
        }
      },
      { $sort: { count: -1 } }
    ]);
    res.json(demographics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create customer
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;