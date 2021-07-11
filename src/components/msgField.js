import React from 'react'
import { Alert } from 'react-bootstrap'
import PswdCriteria from './pswdCriteria'

const MsgField = ({ pswdCheck, pswdLenCheck }) => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Password Criteria</Alert.Heading>
        <PswdCriteria pswdCheck={pswdCheck} pswdLenCheck={pswdLenCheck} />
        <hr />
        <Alert.Heading>Password Strength</Alert.Heading>
        <p>To show password strength...</p>
      </Alert>
    </>
  )
}

export default MsgField
