import React from 'react'
import { Card, Button } from 'react-bootstrap'

const SideToggle = ({ toggleHandler, toggle }) => {
  return (
    <>
      <Card className="side-card">
        <Card.Body>
          SIDE CARD <br />
          <Button variant="outline-dark" onClick={toggleHandler}>{toggle ? '<-' : '->'}</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SideToggle
