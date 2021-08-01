import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const CharCount = ({ enteredtxt }) => {

  let nowbar = (enteredtxt.length / 50) * 100
  let labeltxt = ''
  let variantcolor = enteredtxt.length === 50 ? 'warning' : 'primary'
  if (enteredtxt.length <= 50) {
    labeltxt = enteredtxt.length + '/50'
  } else {
    labeltxt = (50 - enteredtxt.length) + '/50'
    variantcolor = 'danger'
  }
  

  return (
    <>
      <ProgressBar now={nowbar} label={labeltxt} variant={variantcolor} />
    </>
  )
}

export default CharCount