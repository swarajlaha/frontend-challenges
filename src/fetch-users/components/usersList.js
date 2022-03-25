import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const UsersList = ({ users, typedinput }) => {
  return (
    <>
      <Row className="mt-5">
        <Col className="ml-5">
          <Card>
            <Card.Header>Users</Card.Header>
            <Card.Body>
              <ul>
                {users.map((user, index) => (
                  <li key={index}>
                    {user.name.title}
                    {'. '}
                    {user.name.first} {user.name.last}
                    <br />
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col className="mr-5">
          <Card>
            <Card.Header>Filtered Users</Card.Header>
            <Card.Body>
              <ul>
                {users
                  .filter((user) =>
                    `${user.name.first} ${user.name.last}`
                      .toLowerCase()
                      .startsWith(typedinput.toLowerCase()),
                  )
                  .map((user, index) => {
                    return (
                      <li key={index}>
                        {user.name.title}
                        {'. '}
                        {user.name.first} {user.name.last}
                        <br />
                      </li>
                    )
                  })}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default UsersList
