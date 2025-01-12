const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'nimrod9423', // Replace with your password
  database: process.env.DB_NAME || 'employee_management',
});

module.exports = pool.promise();
