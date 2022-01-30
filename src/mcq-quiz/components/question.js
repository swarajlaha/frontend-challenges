import React, { useEffect, useState } from 'react'
import { ButtonGroup, Card, ListGroup, ToggleButton } from 'react-bootstrap'

const Question = ({ index, quizquestions }) => {

  // Function to return a question based on the index of the questions array.
  const returnOneQuestion = () => {
    return (
      <>
        <Card.Header>{quizquestions[index].question}</Card.Header>
        <ListGroup variant="flush">
          {quizquestions[index].answers.map((qa) => (
            <ListGroup.Item>
              <ButtonGroup>
                <ToggleButton
                  key={'idx'}
                  id={`radio-1`}
                  type="radio"
                  variant="light"
                  name="radio"
                  value={'value'}
                  checked={false}
                  onChange={(e) => console.log(e.currentTarget.value)}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp; {qa}
                </ToggleButton>
              </ButtonGroup>
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
