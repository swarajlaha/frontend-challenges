import React from 'react'
import { Alert } from 'react-bootstrap'
import PswdCriteria from './pswdCriteria'
import PswdStrength from './pswdStrength'

const MsgField = ({ pswdCheck, pswdLenCheck, now }) => {

  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Password Criteria</Alert.Heading>
        <PswdCriteria pswdCheck={pswdCheck} pswdLenCheck={pswdLenCheck} />
        <hr />
        <Alert.Heading>Password Strength</Alert.Heading>
        <PswdStrength pswdCheck={pswdCheck} pswdLenCheck={pswdLenCheck} />
      </Alert>
    </>
  )
}

export default MsgField
