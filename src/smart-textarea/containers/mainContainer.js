import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CharcountBar from '../components/charcountBar'
import InputTextbox from '../components/inputTextbox'
import SubmitButton from '../components/submitButton'
import TextdisplayCard from '../components/textdisplayCard'

const MainContainer = () => {

  const [enteredtxt, setEnteredtxt] = useState('')

  const enteredtextHandler = (e) => {
    setEnteredtxt(e.target.value)
  }

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <InputTextbox enteredtextHandler={enteredtextHandler} />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="pt-3">
          <Col md={3}></Col>
          <Col md={6}>
            <CharcountBar enteredtxt={enteredtxt} />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="pt-3">
          <Col className="ml-5" md={5}></Col>
          <Col md={2}>
            <SubmitButton />
          </Col>
          <Col md={5}></Col>
        </Row>
        <Row className="pt-3">
          <Col md={4}></Col>
          <Col md={4}>
            <TextdisplayCard />
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  )
}

export default MainContainer
