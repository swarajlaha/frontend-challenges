import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ActivityCard from './activityCard'

const ActivitylistCard = ({ activitylist }) => {
  const [activityIndex, setActivityIndex] = useState([])

  return (
    <>
      <Container className="mt-5">
        <Row>
          {activitylist.map((al, index) => (
            <Col key={index} md="6" className="mt-2 mb-2">
              <Card>
                <ActivityCard
                  index={index}
                  activity={al}
                  activityIndex={activityIndex}
                  setActivityIndex={setActivityIndex}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ActivitylistCard
