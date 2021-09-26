import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import AppNavbar from '../commons/appNavbar'
import DemoCard from '../components/demoCard'
import ScrollButton from '../components/scrollButton'
import { scrollFunction } from '../helpers/index'

const BackToTop = () => {

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  window.onscroll = () => scrollFunction(setShowScrollBtn)
  return (
    <>
      <AppNavbar />
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <DemoCard />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <DemoCard />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <ScrollButton showScrollBtn={showScrollBtn} />
    </>
  )
}

export default BackToTop
