import React from 'react'
import { Alert } from 'react-bootstrap'

const MsgField = () => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Password Criteria</Alert.Heading>
        <p>
          - Min 8 characters <br />
          - Should contain atleast 1 number <br />
          - Should contain atleast 1 speacial character
        </p>
        <hr />
        <Alert.Heading>Password Check</Alert.Heading>
        <p>
          To show password check result...
        </p>
      </Alert>
    </>
  )
}

export default MsgField
