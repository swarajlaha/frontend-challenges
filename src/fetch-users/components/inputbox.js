import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const Inputbox = ({ inputChangeHandler, criteria, criteriaChangeHandler }) => {
  return (
    <>
      <Row className="mt-5">
        <Col></Col>
        <Col className="mt-5">
          <Form>
            <Form.Label>User</Form.Label>
            <Form.Control type="text" onChange={(e) => inputChangeHandler(e)} />
          </Form>
        </Col>
        <Col className="mt-5">
          <Form>
            <Form.Label>Starts with</Form.Label>
            <Form.Control
              type="checkbox"
              size='sm'
              checked={criteria.startswith}
              onChange={() => criteriaChangeHandler(1)}
            />
            <Form.Label>Includes</Form.Label>
            <Form.Control
              type="checkbox"
              size='sm'
              checked={criteria.includes}
              onChange={() => criteriaChangeHandler(2)}
            />
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Inputbox
