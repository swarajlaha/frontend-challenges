import React, { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const InputTextbox = ({ enteredtextHandler, enteredtxt }) => {

  return (
    <>
      <span>Enter text below...</span>
      <InputGroup size="lg">
        <FormControl
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => enteredtextHandler(e)}
          value={enteredtxt}
        />
      </InputGroup>
    </>
  )
}

export default InputTextbox
