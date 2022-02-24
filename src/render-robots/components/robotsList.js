import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const RobotsList = ({ robotlist }) => {
  return (
    <>
      <Card className="ml-5 mr-5 mt-5 pl-5 pr-5">
        <Container>
          <Row>
            {robotlist.map((robot) => (
              <Col>
                <Image src={`https://robohash.org/${robot}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </Card>
    </>
  )
}

export default RobotsList
