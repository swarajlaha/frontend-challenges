import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const RobotsList = ({ robotlist,setRobotlist }) => {

  // Function to remove robots on clicking the image.
  const removeRobot = (index) => {
    let robotlistArr = [...robotlist]
    robotlistArr.splice(index, 1)
    setRobotlist(robotlistArr)
  }
  
  return (
    <>
      <Card className="ml-5 mr-5 mt-5 pl-5 pr-5">
        <Container>
          <Row>
            {robotlist.map((robot, index) => (
              <Col key={index}>
                <Image 
                  src={`https://robohash.org/${robot}`}
                  onClick={(index) => removeRobot(index)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Card>
    </>
  )
}

export default RobotsList
