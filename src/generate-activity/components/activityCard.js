import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ActivityDetails from './activityDetails'
import ActivitytoggleBtn from './activitytoggleBtn'

const ActivityCard = ({ index, activity, showdetails, setShowdetails }) => {
  const [activityIndex, setActivityIndex] = useState()
  console.log(index, activityIndex)

  return (
    <>
      <Card>
        <Card.Body>
          {activity.activity}
          <span style={{ float: 'right' }}>
            <ActivitytoggleBtn index={index} setActivityIndex={setActivityIndex} showdetails={showdetails} setShowdetails={setShowdetails} />
          </span>
          {showdetails && index === activityIndex && <ActivityDetails index={index} activityDetails={activity} setShowdetails={setShowdetails} />}
        </Card.Body>
      </Card>
    </>
  )
}

export default ActivityCard