// client/src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('/api/services');
      setServices(response.data);
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h1>Government Services</h1>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            <a href={`/service/${service._id}`}>{service.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
