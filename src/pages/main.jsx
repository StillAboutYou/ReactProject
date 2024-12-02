import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices, selectServices, selectLoading, selectError } from '../components/mainSlice';
import { Link } from 'react-router-dom';
import  './services.css';


const Main = () => {
  const dispatch = useDispatch();
  const services = useSelector(selectServices);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) return <center><h1>Загрузка...</h1></center>;
  if (error) return <h2>Произошла ошибка: {error}</h2>;

  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <h3 className='h3'>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};


export default Main;