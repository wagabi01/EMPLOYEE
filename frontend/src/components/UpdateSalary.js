import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/updateSalary.css';

function UpdateSalary() {
  const [employeeId, setEmployeeId] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const salaryData = {
      employee_id: employeeId,
      month: month,
      amount: amount,
    };

    try {
      // Send the POST request to update the salary
      const response = await axios.post('/api/salary', salaryData);
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error('Error updating salary:', error);
      alert('Error updating salary');
    }
  };

  return (
    <div className="update-salary-form">
      <h2>Update Employee Salary</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Salary Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date" // Date input type
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
        <button type="submit">Update Salary</button>
      </form>
    </div>
  );
}

export default UpdateSalary;
