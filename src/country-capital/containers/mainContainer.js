import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import AppNavbar from "../commons/appNavbar"
import CountrycapitalBtns from "../components/countrycapitalBtns"

const MainContainer = () => {
  return (
    <>
      <AppNavbar />
      <Container className="mt-5 pt-5">
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card>
              <Card.Body>
                <CountrycapitalBtns />
              </Card.Body>
            </Card>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </>
  )
}

export default MainContainer