import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppNavbar from '../commons/appNavbar'
import Dropdownbox from '../components/dropdownbox'
import Inputbox from '../components/inputbox'
import axios from 'axios'

const AutosuggestInput = () => {

  const inputChangeHandler = () => {
    axios.get('http://localhost:3000/employees')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <AppNavbar />
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <Row >
              <Inputbox inputChangeHandler={inputChangeHandler} />
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