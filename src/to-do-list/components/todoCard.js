import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'

const TodoCard = ({ item }) => {
  return (
    <>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingRight: 50,
          width: 250,
        }}
      >
        <Card.Header>
          <h2>To Do</h2>
        </Card.Header>
        <Card.Body>
          <Button variant="outline-dark">{item}</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default TodoCard
