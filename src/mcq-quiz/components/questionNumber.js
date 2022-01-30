import React from "react"
import { Alert } from "react-bootstrap"

const QuestionNumber = ({ index, noofquest }) => {
  return (
    <>
      <Alert variant="light">
        Question: {index + 1}/{noofquest}
      </Alert>
    </>
  )
}

export default QuestionNumber