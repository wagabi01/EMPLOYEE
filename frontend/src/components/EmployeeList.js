import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/employeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('There was an error fetching the employees!', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Joining Date</th>
            <th>Leaving Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id_number}</td>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.status}</td>
              <td>{employee.joining_date}</td>
              <td>{employee.leaving_date || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
