import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const CharCount = () => {
  return (
    <>
      <ProgressBar now={100} label='200/280' />
    </>
  )
}

export default CharCount