import React from 'react'
import { Card } from 'react-bootstrap'

const TextdisplayCard = ({ submittxt }) => {

  return (
    <>
      <Card>
        <Card.Body>{submittxt}</Card.Body>
      </Card>
    </>
  )
}

export default TextdisplayCard
