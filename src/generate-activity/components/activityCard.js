import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ActivityDetails from './activityDetails'
import ActivitytoggleBtn from './activitytoggleBtn'

const ActivityCard = ({ index, activity, activityIndex, setActivityIndex }) => {

  return (
    <>
      <Card>
        <Card.Body>
          {activity.activity}
          <span style={{ float: 'right' }}>
            <ActivitytoggleBtn index={index} activityIndex={activityIndex} setActivityIndex={setActivityIndex} collapse={index === activityIndex[activityIndex.length - 1]} />
          </span>
          {activityIndex.length > 0 && index === activityIndex[activityIndex.length - 1] && <ActivityDetails index={index} activityDetails={activity} />}
        </Card.Body>
      </Card>
    </>
  )
}

export default ActivityCard