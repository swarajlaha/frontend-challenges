import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ActivityCard from './activityCard'

const ActivitylistCard = ({ activitylist, showdetails, setShowdetails }) => {

  return (
    <>
      <Card className="mt-5 ml-5 mr-5 pl-5 pr-5">
        <Container>
          <Row>
            {activitylist.map((al, index) => (
              <Col key={index} md="6" className='mt-2 mb-2'>
                <Card>
                  <ActivityCard index={index} activity={al} showdetails={showdetails} setShowdetails={setShowdetails} />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Card>
    </>
  )
}

export default ActivitylistCard
