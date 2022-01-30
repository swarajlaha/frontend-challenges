import React from 'react'
import AppNavbar from '../commons/appNavbar'
import QuestionNumber from '../components/questionNumber'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Question from '../components/question'

const MainContainer = () => {
  return (
    <>
      <Row className="mb-5">
        <AppNavbar />
      </Row>
      <Row className="pt-5">
        <Col md="3"></Col>
        <Col md="6">
          <Row>
            <QuestionNumber />
            <Question />
          </Row>
          <Row style={{ marginLeft: '30%', marginTop: '2%' }}>
            <Col md="3">
              <Button>Previous</Button>
            </Col>
            <Col md="3">
              <Button>Next</Button>
            </Col>
          </Row>
        </Col>
        <Col md="3"></Col>
      </Row>
    </>
  )
}

export default MainContainer
