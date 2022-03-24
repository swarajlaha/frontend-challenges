import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const UsersList = ({ users }) => {
  return (
    <>
      <Row className="mt-5">
        <Col></Col>
        <Col>
          <Card>
            <Card.Header>Users</Card.Header>
            <Card.Body>
              <ul>
                {users.map((u, index) => (
                  <li key={index}>
                    {u.name.title}{'. '}{u.name.first}{' '}{u.name.last}
                    <br />
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}

export default UsersList
