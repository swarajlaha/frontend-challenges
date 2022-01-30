import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Navbar.Brand href="#home">
          Scroll and Fix
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default AppNavbar;
