import React from 'react'
import InputField from '../components/inputField'
import { Container, Row, Col } from 'react-bootstrap'

const DisplayBox = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col></Col>
          <Col>
            <InputField />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default DisplayBox
