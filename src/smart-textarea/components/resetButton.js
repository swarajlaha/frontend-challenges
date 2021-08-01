import React from 'react'
import { Button } from 'react-bootstrap'

const ResetButton = ({ btnresetHandler, enteredtxt }) => {
  return (
    <>
      <Button
        variant="outline-danger"
        disabled={!enteredtxt}
        onClick={btnresetHandler}
      >
        Reset
      </Button>
    </>
  )
}

export default ResetButton
