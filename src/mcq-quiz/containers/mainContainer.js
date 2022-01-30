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
  const [score, setScore] = useState(0)
  const [submitBtnClicked, setSubmitBtnClicked] = useState(false)

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

  // Function to check user selected answers and correct answers.
  const submitBtnHandler = () => {
    for (let i = 0; i < quizquestions.length; i++) {
      if (answerIndexArray[i] === quizquestions[i].correct) {
        setScore((prevScore) => prevScore + 10)
      }
    }
    setSubmitBtnClicked(true)
  }

  return (
    <>
      <Row className="mb-5">
        <AppNavbar />
      </Row>
      {submitBtnClicked ? (
        <>
          <Row className="pt-5">
            <Col></Col>
            <Col>
              <Score score={score} quizquestions={quizquestions} />
            </Col>
            <Col></Col>
          </Row>
        </>
      ) : (
        <>
          <Row className="pt-5">
            <Col md="3"></Col>
            <Col md="6">
              <Row>
                <QuestionNumber
                  index={index}
                  noofquest={quizquestions.length}
                />
                <Question
                  quizquestions={quizquestions}
                  index={index}
                  answerIndexArray={answerIndexArray}
                  setAnswerIndexArray={setAnswerIndexArray}
                  checkIndex={checkIndex}
                  setCheckIndex={setCheckIndex}
                />
              </Row>
              <Row style={{ marginTop: '2%' }}>
                <Col md="3" style={{ left: '8%' }}>
                  {index > 0 && (
                    <Button
                      variant="outline-secondary"
                      onClick={prevBtnClickHandler}
                    >
                      <GrPrevious />
                    </Button>
                  )}
                </Col>
                <Col md="3" style={{ marginLeft: '50%' }}>
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
              <Row style={{ marginLeft: '37%' }}>
                <Col>
                  <Button variant="outline-success" onClick={submitBtnHandler}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md="3"></Col>
          </Row>
        </>
      )}
    </>
  )
}

export default MainContainer
