import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'

const ActivityDetails = ({ activityDetails, setShowdetails }) => {

  return (
    <>
      <Alert variant='light' className='mt-2'> 
        {Object.entries(activityDetails).map(([key, val]) => (
          <span key={key}>
            {'>'} {key} : {val} <br />
          </span>
        ))}
      </Alert>
    </>
  )
}

export default ActivityDetails