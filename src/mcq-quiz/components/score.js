import React from 'react'
import { Alert } from 'react-bootstrap'

const Score = () => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Your Score</Alert.Heading>
        <p>
          70/100
        </p>
        <hr />
        <p className="mb-0">
          Total Questions: 10 <br />
          Questions Attempted: 9 <br />
          Correct Answers: 7 <br />
          Percent Secured: 70%
        </p>
      </Alert>
    </>
  )
}

export default Score
