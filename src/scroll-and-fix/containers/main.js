import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Content from '../components/content'
import Sidebar from '../components/sidebar'

const Main = ({ scrollDown }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Sidebar scrollDown={scrollDown} />
          </Col>
          <Col md={9}>
            <Content />
          </Col>
        </Row>
      </Container>    
    </>
  )
}

export default Main