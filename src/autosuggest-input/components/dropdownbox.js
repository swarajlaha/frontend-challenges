import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Dropdownbox = ({ searchRes }) => {
  return (
    <>
      <Card style={{ width: '24rem' }}>
        <ListGroup variant="flush">
          {searchRes.map((sr) => 
            <ListGroup.Item>
              <Card.Title>{sr.first_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{sr.last_name}</Card.Subtitle>
              <i>{sr.email}</i>
            </ListGroup.Item>)}
        </ListGroup>
      </Card>
    </>
  )
}

export default Dropdownbox
