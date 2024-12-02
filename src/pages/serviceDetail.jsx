import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectServices } from '../components/servicesSlice';

const ServiceDetail = () => {
  const { id } = useParams();
  const services = useSelector(selectServices);
  const service = services.find((service) => service.id === id);

  if (!service) return <h2>Услуга не найдена.</h2>;
  return (
    <div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <p>Дополнительная информация: {service.additionalInfo}</p>
    </div>
  );
};


export default ServiceDetail;