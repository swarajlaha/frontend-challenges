import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const InputTextbox = ({ enteredtextHandler }) => {
  return (
    <>
      <span>Enter text below...</span>
      <InputGroup size='lg'>
        <FormControl as="textarea" aria-label="With textarea" onChange={(e) => enteredtextHandler(e)} />
      </InputGroup>
    </>
  )
}

export default InputTextbox
