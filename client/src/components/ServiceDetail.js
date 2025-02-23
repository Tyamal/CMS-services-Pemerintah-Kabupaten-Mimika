// client/src/components/ServiceDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceDetail = ({ match }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const response = await axios.get(`/api/services/${match.params.id}`);
      setService(response.data);
    };
    fetchService();
  }, [match.params.id]);

  if (!service) return <div>Loading...</div>;

  return (
    <div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
