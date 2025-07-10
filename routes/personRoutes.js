const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
router.post('/', async (req, res) => {
  try{
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log('Person saved successfully:', savedPerson);
    res.status(201).json(savedPerson);
  } catch (error) {
    console.log('Error saving person:', error);
    res.status(500).send('Error saving person');
  }
  

})

router.get('/', async (req, res) => {
  try {
    const persons = await Person.find();  
    console.log('Persons retrieved successfully:', persons);
    res.status(200).json(persons);
  } catch (error) {
    console.log('Error retrieving persons:', error);
    res.status(500).send('Error retrieving persons');
  }
});


router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if(workType === 'manager' || workType === 'Chef' || workType === 'Waiter'){
    const response = await Person.find({work: workType});
    console.log('Persons retrieved successfully');
    res.status(200).json(response);
  } else {
    res.status(400).send('Invalid work type');
  }
  } catch (error) {
    console.log('Error retrieving persons:', error);
    res.status(500).send('Error retrieving persons');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const response = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!response) return res.status(404).send('Person not found');
    res.status(200).json({ message: 'Person updated successfully', data: response });
  } catch (error) {
    res.status(500).send('Error updating person');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const response = await Person.findByIdAndDelete(req.params.id);
    if (!response) {
      return res.status(404).send('Person not found');
    }
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).send('Error deleting person');
  }
});

module.exports = router;