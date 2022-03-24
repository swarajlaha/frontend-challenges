import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const UsersList = () => {
  return (
    <>
      <Row className="mt-5">
        <Col></Col>
        <Col>
          <Card>
            <Card.Header>Users</Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}

export default UsersList
