import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ActivityDetails from './activityDetails'
import ActivitytoggleBtn from './activitytoggleBtn'

const ActivityCard = ({ index, activity, showdetails, setShowdetails, activityIndex, setActivityIndex }) => {

  return (
    <>
      <Card>
        <Card.Body>
          {activity.activity}
          <span style={{ float: 'right' }}>
            <ActivitytoggleBtn index={index} activityIndex={activityIndex} setActivityIndex={setActivityIndex} showdetails={showdetails} setShowdetails={setShowdetails} />
          </span>
          {activityIndex.length > 0 && index === activityIndex[activityIndex.length - 1] && <ActivityDetails index={index} activityDetails={activity} setShowdetails={setShowdetails} />}
        </Card.Body>
      </Card>
    </>
  )
}

export default ActivityCard