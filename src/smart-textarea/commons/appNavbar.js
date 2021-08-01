import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='mt-2 ml-2 mr-2'>
        <Navbar.Brand href="#home">
          Smart Textarea
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default AppNavbar;
