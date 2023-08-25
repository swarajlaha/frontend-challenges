import React, { useState, useEffect } from "react";
import AppNavbar from "../commons/appNavbar";
import Newslettercard from "../components/newslettercard";
import { Col, Row } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
      <Col className="mb-5 pb-5">
        <Row>
          <AppNavbar />
        </Row>
      </Col>
      <Col className="mt-5 pt-5">
        <Row style={{ width: '50%', margin: 'auto' }}>
          <Newslettercard />
        </Row>
      </Col>
    </>
  );
};

export default Newsletter;
