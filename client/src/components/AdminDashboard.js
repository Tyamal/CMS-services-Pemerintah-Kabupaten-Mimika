// client/src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('/api/services');
      setServices(response.data);
    };
    fetchServices();
  }, []);

  const deleteService = async (id) => {
    await axios.delete(`/api/services/${id}`);
    setServices(services.filter(service => service._id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            {service.name}
            <button onClick={() => deleteService(service._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
