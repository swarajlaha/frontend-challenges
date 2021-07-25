import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const CharCount = ({ enteredtxt }) => {

  let labeltxt = enteredtxt.length + '/50'
  let nowbar = (enteredtxt.length / 50) * 100
  return (
    <>
      <ProgressBar now={nowbar} label={labeltxt} />
    </>
  )
}

export default CharCount