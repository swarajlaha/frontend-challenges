import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const DisplayList = ({ list }) => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card>
              <Card.Body>
                <ul>
                {list.map((l) => (
                  <li>{l}</li>  
                ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default DisplayList
