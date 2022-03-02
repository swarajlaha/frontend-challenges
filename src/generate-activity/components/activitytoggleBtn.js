import React from 'react'
import { Button } from 'react-bootstrap'

const ActivitytoggleBtn = ({ index, activityIndex, setActivityIndex, collapse }) => {
  
  // Function to handle toggle for expand-collapse button.
  const toggleBtnClickHandler = (index) => {
    let aiArr = [...activityIndex]
    setActivityIndex(aiArr)
    if(collapse) {
      aiArr = []
      setActivityIndex(aiArr)
    } else {
      aiArr.push(index)
    }
  }

  return (
    <>
      <Button
        variant="info"
        size="sm"
        onClick={() => toggleBtnClickHandler(index)}
      >
        {collapse ? 'Collapse' : 'Expand'}
      </Button>
    </>
  )
}

export default ActivitytoggleBtn