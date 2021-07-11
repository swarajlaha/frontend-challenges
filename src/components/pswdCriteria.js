import React from 'react'

const PswdCriteria = ({ pswdCheck, pswdLenCheck }) => {
  return (
    <>
      <ul>
        {pswdLenCheck ? (<li className='mb-0'>Min 8 characters </li>) : (<li className='mb-0' style={{ color: 'red' }}>Min 8 characters </li>)}
        {pswdCheck.numCheck ? (<li className='mb-0'>Should contain atleast 1 number</li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 number</li>)}
        {pswdCheck.charCheck ? (<li className='mb-0'>Should contain atleast 1 alphabet </li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 alphabet </li>)}
        {pswdCheck.specialCharCheck ? (<li className='mb-0'>Should contain atleast 1 special character</li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 special character</li>)}
        </ul>
    </>
  )
}

export default PswdCriteria