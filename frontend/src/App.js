// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update imports
import './App.css';
import Dashboard from './components/Dashboard'; // Import Dashboard
import AddEmployee from './components/AddEmployee'; // Import AddEmployee
import EmployeeList from './components/EmployeeList'; // Import EmployeeList
import './assets/css/dashboard.css'; // Import Dashboard CSS

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Employee Management System</h1>
        <Routes>  
          {/* Define the routes for each page */}
          <Route path="/" element={<Dashboard />} />  {/* Home page, shows Dashboard */}
          <Route path="/add-employee" element={<AddEmployee />} />  {/* Add Employee */}
          <Route path="/employee-list" element={<EmployeeList />} />  {/* Employee List */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
