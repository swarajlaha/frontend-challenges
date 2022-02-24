import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import GivenObject from './givenObject';
import RenderObject from './renderObject';
import { getObject } from '../getObject'

const MainComponent = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <GivenObject obj={getObject()} />
          </Col>
          <Col>
            <RenderObject obj={getObject()} />
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default MainComponent;