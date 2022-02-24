import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GivenObject from './givenObject'
import RenderObject from './renderObject'
import { getObject } from '../getObject'
import { Card } from 'react-bootstrap'

const MainComponent = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <h3>Nested Object</h3>
            <GivenObject obj={getObject()} />
          </Col>
          <Col>
            <h3>Render Nested Object</h3>
            <Card>
              <Card.Body>
                <RenderObject obj={getObject()} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MainComponent
