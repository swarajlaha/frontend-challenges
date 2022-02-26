import React from 'react'
import { Button } from 'react-bootstrap'

const ActivitytoggleBtn = ({ index, showdetails, setShowdetails, setActivityIndex }) => {
  
  // Function to handle toggle for expand-collapse button.
  const toggleBtnClickHandler = (index) => {
    setActivityIndex(index)
    setShowdetails(!showdetails)
  }

  return (
    <>
      <Button
        variant="info"
        size="sm"
        onClick={() => toggleBtnClickHandler(index)}
      >
        Expand
      </Button>
    </>
  )
}

export default ActivitytoggleBtn