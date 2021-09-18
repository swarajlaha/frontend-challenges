import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MainCard from '../components/mainCard'
import SideToggle from '../components/sideToggle'

const PageContainer = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <MainCard />
          </Col>
          <Col>
            <SideToggle />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PageContainer