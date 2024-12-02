import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectServices } from '../components/servicesSlice';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Card } from '@consta/uikit/Card';


const ServiceDetail = () => {
  const { id } = useParams();
  const services = useSelector(selectServices);
  const service = services.find((service) => service.id === id);

  if (!service) return <h2>Услуга не найдена.</h2>;

  return (
    <div className="profile" style={{ display: "flex", alignItems: "center" }}>
    <div style={{ marginRight: "20px" }}>
      <h1>{service.name}</h1>
      <Text>{service.description}</Text>
      <Text>Дополнительная информация: {service.createdAt}</Text>
    </div>
    <div>
      <img src={service.image} style={{ height: "150px", borderRadius: "75px" }} />
    </div>
    </div>
  );
};



export default ServiceDetail;