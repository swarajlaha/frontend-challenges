import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const SmallCards = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Some random text...</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SmallCards
