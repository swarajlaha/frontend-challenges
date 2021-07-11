import React from 'react'
import { Alert } from 'react-bootstrap'

const MsgField = ({ pswdCheck, pswdLenCheck }) => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Password Criteria</Alert.Heading>
        <ul>
        {pswdLenCheck ? (<li className='mb-0'>Min 8 characters </li>) : (<li className='mb-0' style={{ color: 'red' }}>Min 8 characters </li>)}
        {pswdCheck.numCheck ? (<li className='mb-0'>Should contain atleast 1 number</li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 number</li>)}
        {pswdCheck.charCheck ? (<li className='mb-0'>Should contain atleast 1 alphabet </li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 alphabet </li>)}
        {pswdCheck.specialCharCheck ? (<li className='mb-0'>Should contain atleast 1 special character</li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 special character</li>)}
        </ul>
        <hr />
        <Alert.Heading>Password Strength</Alert.Heading>
        <p>To show password strength...</p>
      </Alert>
    </>
  )
}

export default MsgField
