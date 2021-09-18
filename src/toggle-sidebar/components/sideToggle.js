import React from 'react'
import { Card, Button } from 'react-bootstrap'

const SideToggle = ({ toggleHandler, toggle }) => {

  let classStyle = toggle ? 'side-card' : 'side-card-wide'

  return (
    <>
      <Card className={classStyle}>
        <Card.Body>
          SIDE CARD <br />
          <Button variant="outline-dark" onClick={toggleHandler}>{toggle ? '<-' : '->'}</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SideToggle
