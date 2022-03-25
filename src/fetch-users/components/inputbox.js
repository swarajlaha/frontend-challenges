import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const Inputbox = ({ inputChangeHandler }) => {

  return (
    <>
      <Row className='mt-5'>
        <Col></Col>
        <Col className='mt-5'>
          <Form>
            <Form.Label>User</Form.Label>
            <Form.Control type="text" onChange={(e) => inputChangeHandler(e)} />
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}

export default Inputbox
