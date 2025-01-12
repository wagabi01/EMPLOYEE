import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/addEmployee.css';  // Importing CSS

const AddEmployee = () => {
  const [idNumber, setIdNumber] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('active');
  const [joiningDate, setJoiningDate] = useState('');
  const [leavingDate, setLeavingDate] = useState('');
  const [cv, setCv] = useState(null);
  
  // Handle file upload
  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id_number', idNumber);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('status', status);
    formData.append('joining_date', joiningDate);
    formData.append('leaving_date', leavingDate);
    if (cv) {
      formData.append('cv', cv);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/employees', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);  // Show success message
    } catch (error) {
      console.error("There was an error adding the employee!", error);
      alert('There was an error adding the employee!');
    }
  };

  return (
    <div className="add-employee-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} className="add-employee-form">
        <div className="form-group">
          <label>ID Number</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="active">Active</option>
            <option value="left">Left</option>
          </select>
        </div>

        <div className="form-group">
          <label>Joining Date</label>
          <input
            type="date"
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Leaving Date (Optional)</label>
          <input
            type="date"
            value={leavingDate}
            onChange={(e) => setLeavingDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>CV (Optional)</label>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="submit-btn">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
