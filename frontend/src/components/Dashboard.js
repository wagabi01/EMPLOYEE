// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/css/dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Employee Management System</h2>
      <div className="dashboard-buttons">
        <Link to="/add-employee">
          <button className="dashboard-btn">Add Employee</button>
        </Link>
        <Link to="/employee-list">
          <button className="dashboard-btn">View Employee List</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
