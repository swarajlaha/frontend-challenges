import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { CgRadioChecked } from 'react-icons/cg'

const Question = ({
  index,
  quizquestions,
  answerIndexArray,
  setAnswerIndexArray,
  checkIndex,
  setCheckIndex,
}) => {
  // Function to handle user answer selection.
  const userSelectionHandler = (answerIndex) => {
    const ansIdxArr = [...answerIndexArray]
    ansIdxArr[index] = answerIndex
    setCheckIndex(answerIndex)
    setAnswerIndexArray(ansIdxArr)
  }

  // Function to return a question based on the index of the questions array.
  const returnOneQuestion = () => {
    return (
      <>
        <Card.Header>{quizquestions[index].question}</Card.Header>
        <ListGroup variant="flush">
          {quizquestions[index].answers.map((qa, index) => (
            <ListGroup.Item>
              {checkIndex === index && <CgRadioChecked />}&nbsp;&nbsp;
              <Button
                variant="outline-secondary"
                onClick={() => userSelectionHandler(index)}
              >
                {qa}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    )
  }

  return (
    <>
      <Card border="secondary" style={{ width: '45rem' }}>
        <Card.Body>
          <Card.Title>Choose one</Card.Title>
          {returnOneQuestion()}
        </Card.Body>
      </Card>
    </>
  )
}

export default Question
