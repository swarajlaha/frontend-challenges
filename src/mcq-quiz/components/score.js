import React from 'react'
import { Alert } from 'react-bootstrap'

const Score = ({ score, quizquestions }) => {
  const totalScore = (quizquestions.length) * 10
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Your Score</Alert.Heading>
        <p>
          {score} / {totalScore}
        </p>
        <hr />
        <p className="mb-0">
          Total Questions: {quizquestions.length} <br />
          Correct Answers: {score/10} <br />
          Percent Secured: {(score/totalScore) * 100}%
        </p>
      </Alert>
    </>
  )
}

export default Score
