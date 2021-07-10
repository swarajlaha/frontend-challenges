import React from 'react'
import InputField from '../components/inputField'
import MsgField from '../components/msgField'
import { Container, Row, Col } from 'react-bootstrap'

const DisplayBox = () => {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <Col></Col>
          <Col>
            <InputField />
          </Col>
          <Col></Col>
        </Row>
        <Row className='mt-3'>
          <Col xs={3}></Col>
          <Col xs={6}>
            <MsgField />
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default DisplayBox
