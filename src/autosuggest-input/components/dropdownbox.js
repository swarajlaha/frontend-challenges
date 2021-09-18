import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Dropdownbox = ({ searchRes }) => {
  return (
    <>
      <Card style={{ width: '24rem' }}>
        <ListGroup variant="flush">
          {searchRes.map((sr) => <ListGroup.Item>{sr.first_name}</ListGroup.Item>)}
        </ListGroup>
      </Card>
    </>
  )
}

export default Dropdownbox
