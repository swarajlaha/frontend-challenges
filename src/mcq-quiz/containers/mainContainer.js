import React, { useState } from 'react'
import AppNavbar from '../commons/appNavbar'
import QuestionNumber from '../components/questionNumber'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Question from '../components/question'
import Score from '../components/score'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { questions } from '../questions'

const MainContainer = () => {
  const questionsArray = questions()
  const [quizquestions] = useState(questionsArray)
  const [index, setIndex] = useState(0)
  const [answerIndexArray, setAnswerIndexArray] = useState([])
  const [checkIndex, setCheckIndex] = useState(-1)

  // Function to handle next button clicks.
  const nextBtnClickHandler = () => {
    setIndex((prevIndex) => prevIndex + 1)
    setCheckIndex(-1)
  }

  // Function to handle previous button clicks.
  const prevBtnClickHandler = () => {
    setIndex((prevIndex) => prevIndex - 1)
    setCheckIndex(-1)
  }

  return (
    <>
      <Row className="mb-5">
        <AppNavbar />
      </Row>
      <Row className="pt-5">
        <Col md="3"></Col>
        <Col md="6">
          <Row>
            <QuestionNumber index={index} noofquest={quizquestions.length} />
            <Question quizquestions={quizquestions} index={index} answerIndexArray={answerIndexArray} setAnswerIndexArray={setAnswerIndexArray} checkIndex={checkIndex} setCheckIndex={setCheckIndex} />
          </Row>
          <Row style={{ marginLeft: '30%', marginTop: '2%' }}>
            <Col md="3">
              {index > 0 && (
                <Button
                  variant="outline-secondary"
                  onClick={prevBtnClickHandler}
                >
                  <GrPrevious />
                </Button>
              )}
            </Col>
            <Col md="3">
              {quizquestions.length !== index + 1 && (
                <Button
                  variant="outline-secondary"
                  onClick={nextBtnClickHandler}
                >
                  <GrNext />
                </Button>
              )}
            </Col>
          </Row>
          <Row style={{ marginLeft: '37%', marginTop: '2%' }}>
            <Col>
              <Button variant="outline-success" onClick={() => console.log(answerIndexArray)}>Submit</Button>
            </Col>
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
