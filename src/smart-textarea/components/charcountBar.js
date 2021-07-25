import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const CharCount = ({ enteredtxt }) => {

  let nowbar = (enteredtxt.length / 50) * 100
  let labeltxt = ''
  if (enteredtxt.length <= 50) {
    labeltxt = enteredtxt.length + '/50'
  } else {
    labeltxt = (50 - enteredtxt.length) + '/50'
  }
  return (
    <>
      <ProgressBar now={nowbar} label={labeltxt} />
    </>
  )
}

export default CharCount