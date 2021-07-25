import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const InputTextbox = () => {
  return (
    <>
      <span>Enter text below...</span>
      <InputGroup size='lg'>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
    </>
  )
}

export default InputTextbox
