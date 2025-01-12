import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addEmployee = async (employee) => {
  await axios.post(`${API_URL}/add`, employee);
};

export const updateEmployeeStatus = async (id, status) => {
  await axios.put(`${API_URL}/update-status/${id}`, { status });
};
