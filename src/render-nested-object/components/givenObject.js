import React from 'react'
import { Card } from 'react-bootstrap'

const GivenObject = ({ obj }) => {
  return (
    <>
      <Card>
        <Card.Body>{JSON.stringify(obj)}</Card.Body>
      </Card>
    </>
  )
}

export default GivenObject
