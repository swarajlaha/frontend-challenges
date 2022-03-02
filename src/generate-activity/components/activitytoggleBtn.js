import React from 'react'
import { Button } from 'react-bootstrap'

const ActivitytoggleBtn = ({ index, showdetails, setShowdetails, activityIndex, setActivityIndex }) => {
  
  // Function to handle toggle for expand-collapse button.
  const toggleBtnClickHandler = (index) => {
    const aiArr = [...activityIndex]
    aiArr.push(index)
    setActivityIndex(aiArr)
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