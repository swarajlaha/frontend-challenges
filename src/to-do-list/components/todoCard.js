import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'

const TodoCard = () => {
  return (
    <>
      <Card>
      <Card.Header><h2>To Do</h2></Card.Header>
        <Card.Body>
          <h4>To do title</h4>
          <Row className='mt-2 ml-3'><Button variant="outline-dark">DarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDark</Button></Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default TodoCard