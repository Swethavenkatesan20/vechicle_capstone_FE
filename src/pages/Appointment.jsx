import React, { useState, useEffect } from 'react';
import serviceServices from '../services/serviceServices';
import { instance } from '../services/instance';

const Appointment = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the list of services when the component mounts
    serviceServices.getAllServices().then(response => {
      setServices(response.data.data);
    }).catch(error => {
      console.error('Error fetching services:', error);
    });
  }, []);

  //const token = localStorage.getItem('token');
  //console.log('Token from localStorage:', token);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await instance.post(
        '/appointments',
        { date, time, serviceId: selectedService, }
      );
  
      console.log('Response from backend:', response.data);
      setMessage('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('Appointment booked successfully.');
    }
  };
  
  
  
  return (
    <div className="container">
      <h1>Book an Appointment</h1>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">Service</label>
          <select
            id="service"
            className="form-select"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service._id} value={service._id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input
            type="time"
            id="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Book Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
