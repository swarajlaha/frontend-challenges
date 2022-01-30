import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Content = () => {
  const contentSize = new Array(16).fill(1)

  return (
    <>
      {contentSize.map((cs) => (
        <Card>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </>
  )
}

export default Content
