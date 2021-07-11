import React from 'react'
import { TiTick } from 'react-icons/ti' 
import { ImCross } from 'react-icons/im'

const PswdCriteria = ({ pswdCheck, pswdLenCheck }) => {
  return (
    <>
      <ul>
        {pswdLenCheck ? (<li className='mb-0'>Min 8 characters <TiTick size={22} /></li>) : (<li className='mb-0' style={{ color: 'red' }}>Min 8 characters <ImCross size={12} /></li>)}
        {pswdCheck.numCheck ? (<li className='mb-0'>Should contain atleast 1 number <TiTick size={22} /></li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 number <ImCross size={12} /></li>)}
        {pswdCheck.charCheck ? (<li className='mb-0'>Should contain atleast 1 alphabet <TiTick size={22} /></li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 alphabet <ImCross size={12} /></li>)}
        {pswdCheck.specialCharCheck ? (<li className='mb-0'>Should contain atleast 1 special character <TiTick size={22} /></li>) : (<li className='mb-0' style={{ color: 'red' }}>Should contain atleast 1 special character <ImCross size={12} /></li>)}
        </ul>
    </>
  )
}

export default PswdCriteria