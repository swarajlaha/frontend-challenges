import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import CompletedCard from './completedCard'
import TodoCard from './todoCard'

const MainContainer = () => {
  return (
    <>
      <Card className='mt-5 pt-5'>
        <Card.Body>
          <Row>
            <Col>
              <TodoCard />
            </Col>
            <Col>
              <CompletedCard />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default MainContainer