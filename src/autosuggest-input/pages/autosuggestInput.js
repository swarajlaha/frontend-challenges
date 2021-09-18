import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppNavbar from '../commons/appNavbar'
import Dropdownbox from '../components/dropdownbox'
import Inputbox from '../components/inputbox'

const AutosuggestInput = () => {
  return (
    <>
      <AppNavbar />
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <Row >
              <Inputbox />
            </Row>
            <Row>
              <Dropdownbox />
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default AutosuggestInput