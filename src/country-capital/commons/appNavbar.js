import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Navbar.Brand href="#home">
          Country Capital
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default AppNavbar;
