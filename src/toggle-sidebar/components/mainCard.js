import React from 'react'
import { Card } from 'react-bootstrap'

const MainCard = ({ toggle }) => {

  let classStyle = toggle ? 'main-card' : 'main-card-narrow'

  return ( 
    <>
      <Card className={classStyle}>
        <Card.Body>MAIN CARD</Card.Body>
      </Card>
    </>
  )
}

export default MainCard
