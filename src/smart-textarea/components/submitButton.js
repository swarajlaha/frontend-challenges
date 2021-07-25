import React from 'react'
import { Button } from 'react-bootstrap'

const SubmitButton = ({ enteredtxt, btnsubmitHandler }) => {
  return (
    <>
      <Button
        variant="outline-success"
        disabled={enteredtxt.length > 50 || enteredtxt.length === 0}
        onClick={btnsubmitHandler}
      >
        Submit
      </Button>
    </>
  )
}

export default SubmitButton
