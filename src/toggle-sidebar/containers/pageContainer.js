import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MainCard from '../components/mainCard'
import SideToggle from '../components/sideToggle'
import SmallCards from '../components/smallCards'
import './style.css'

const PageContainer = () => {
  const [toggle, setToggle] = useState(true)

  // Function to handle the toggle of sidebar.
  const toggleHandler = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Container className="ml-5">
        <Row>
          <Col>
            <MainCard toggle={toggle} />
            <Row>
              <SmallCards />
            </Row>
          </Col>
          <Col>
            <SideToggle toggle={toggle} toggleHandler={toggleHandler} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PageContainer
