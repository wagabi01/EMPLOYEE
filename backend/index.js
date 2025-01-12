const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const pool = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

// Route to fetch all employees
app.get('/api/employees', async (req, res) => {
  try {
    const [employees] = await pool.query(
      'SELECT id, id_number, name, phone, status, joining_date, leaving_date, cv FROM employees'
    );
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Error fetching employees' });
  }
});

// Route to add a new employee
app.post('/api/employees', upload.single('cv'), async (req, res) => {
  const { id_number, name, phone, status, joining_date, leaving_date } = req.body;
  const cv = req.file ? req.file.filename : null;

  try {
    // Insert employee data into the database
    await pool.query(
      'INSERT INTO employees (id_number, name, phone, status, joining_date, leaving_date, cv) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id_number, name, phone, status, joining_date, leaving_date, cv]
    );
    res.status(201).json({ message: 'Employee added successfully!' });
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ error: 'Error adding employee' });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
