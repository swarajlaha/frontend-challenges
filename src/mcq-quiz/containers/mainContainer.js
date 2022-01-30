import React from 'react'
import AppNavbar from '../commons/appNavbar'
import QuestionNumber from '../components/questionNumber'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Question from '../components/question'
import Score from '../components/score'
import { GrPrevious, GrNext } from 'react-icons/gr'

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
              <Button variant="outline-secondary"><GrPrevious /></Button>
            </Col>
            <Col md="3">
              <Button variant="outline-secondary"><GrNext /></Button>
            </Col>
          </Row>
          <Row style={{ marginLeft: '37%', marginTop: '2%' }}>
            <Col><Button variant="outline-success">Submit</Button></Col>
          </Row>
        </Col>
        <Col md="3"></Col>
      </Row>
      <Row className="pt-5">
        <Col></Col>
        <Col>
          <Score />
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}

export default MainContainer
