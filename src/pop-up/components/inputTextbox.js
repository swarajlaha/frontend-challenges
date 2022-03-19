import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const InputTextbox = () => {
  return (
    <>
      <Container className='mb-5'>
        <Row>
          <Col></Col>
          <Col>
            <Form className="mt-4 pt-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter something...</Form.Label>
                <Form.Control type="text" onChange={(e) => console.log(e.target.value)} />
              </Form.Group>
            </Form>
            <Button variant="outline-primary">Add</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default InputTextbox
