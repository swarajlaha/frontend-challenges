import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const Inputbox = () => {
  return (
    <>
      <InputGroup size="lg">
        <FormControl
          placeholder="Type Something..."
          aria-label="Type Something"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </>
  )
}

export default Inputbox
