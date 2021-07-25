import React from 'react'
import { Button } from 'react-bootstrap'

const SubmitButton = ({ enteredtxt }) => {
  return (
    <>
      <Button variant="outline-success" disabled={enteredtxt.length > 50 || enteredtxt.length === 0}>Submit</Button>
    </>
  )
}

export default SubmitButton