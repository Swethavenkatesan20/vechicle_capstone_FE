import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles.css'

const Dashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/appointments">Appointment</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/reviews">Customer reviews</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div>
        <Outlet/>
      </div>
      <marquee className="alert alert-success fs-1 mt-3" role="alert" behavior="scroll" direction="left">10% Discount on any vechicle services. 
      Offer ends soon</marquee>
      
    </div>
  );
};

export default Dashboard;
