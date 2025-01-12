const express = require('express');
const { getAllEmployees, addEmployee, updateEmployeeStatus } = require('../models/Employee');

const router = express.Router();

// Fetch employees
router.get('/', async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add employee
router.post('/add', async (req, res) => {
  try {
    await addEmployee(req.body);
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update employee status
router.put('/update-status/:id', async (req, res) => {
  try {
    await updateEmployeeStatus(req.params.id, req.body.status);
    res.status(200).json({ message: 'Employee status updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
