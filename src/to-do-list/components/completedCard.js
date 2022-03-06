import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'

const CompletedCard = () => {
  return (
    <>
      <Card>
      <Card.Header><h2>Done</h2></Card.Header>
        <Card.Body>
          <h4>Done title</h4>
          <Row className='mt-2 ml-3'><Button variant="outline-dark">DarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDarkDark</Button></Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default CompletedCard