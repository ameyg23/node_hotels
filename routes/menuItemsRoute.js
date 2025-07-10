const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const savedMenuItem = await newMenuItem.save();
    console.log('MenuItem saved successfully:', savedMenuItem);
    res.status(201).json(savedMenuItem);
  } catch (error) {
    console.log('Error saving MenuItem:', error);
    res.status(500).send('Error saving MenuItem');
  }
});

router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();  
    console.log('MenuItems retrieved successfully:', menuItems);
    res.status(200).json(menuItems);
  } catch (error) {
    console.log('Error retrieving MenuItems:', error);
  
    res.status(500).send('Error retrieving MenuItems');
  }
});


router.get('/:tasteType', async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if(['spicy', 'sweet', 'sour', 'bitter'].includes(tasteType)){
      const response = await MenuItem.find({taste: tasteType});
      console.log('MenuItems retrieved successfully');
      res.status(200).json(response);
    } else {
      res.status(400).send('Invalid taste type');
    }
  } catch (error) {
    console.log('Error retrieving MenuItems:', error);
    res.status(500).send('Error retrieving MenuItems');
  }
});

module.exports = router;