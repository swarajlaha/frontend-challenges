import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const GenerateactivityBtn = ({ generateactivityclickHandler }) => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col></Col>
          <Col className="pl-5 ml-5">
            <Button
              variant="outline-primary"
              onClick={generateactivityclickHandler}
            >
              Generate Activity
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default GenerateactivityBtn