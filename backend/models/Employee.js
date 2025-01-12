const db = require('../config/db');

// Fetch all employees
const getAllEmployees = async () => {
  const [rows] = await db.query('SELECT * FROM employees');
  return rows;
};

// Add a new employee
const addEmployee = async (employee) => {
  const { id, name, phone, dateJoined, cv } = employee;
  const query = 'INSERT INTO employees (id, name, phone, date_joined, cv) VALUES (?, ?, ?, ?, ?)';
  await db.execute(query, [id, name, phone, dateJoined, cv]);
};

// Update employee status
const updateEmployeeStatus = async (id, status) => {
  const query = 'UPDATE employees SET status = ? WHERE id = ?';
  await db.execute(query, [status, id]);
};

module.exports = { getAllEmployees, addEmployee, updateEmployeeStatus };
