import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Autosuggest Input
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default AppNavbar;
