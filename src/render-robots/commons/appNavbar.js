import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Render Robots
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default AppNavbar;
