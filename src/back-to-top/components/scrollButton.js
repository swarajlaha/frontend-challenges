import React from 'react'
import { Button } from 'react-bootstrap'
import { scrollToTopHandler } from '../helpers/index'

const ScrollButton = ({ showScrollBtn }) => {
  return (
    <>
      {showScrollBtn && <Button variant="scroll" onClick={scrollToTopHandler}><b>^</b></Button>}
    </>
  )
}

export default ScrollButton