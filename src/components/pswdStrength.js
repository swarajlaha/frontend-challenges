import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const PswdStrength = ({ pswdCheck, pswdLenCheck }) => {

console.log(pswdCheck, pswdLenCheck)
  return (
    <>
      <p>
        <ProgressBar
          animated
          variant="danger"
          now={60}
          label={`${'weak'}`}
        />
      </p>
    </>
  )
}

export default PswdStrength
