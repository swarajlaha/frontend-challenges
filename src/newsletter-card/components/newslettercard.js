import Heading from "./heading"
import { Card, Col, Row } from "react-bootstrap" 
import Subheading from "./subheading"
import Inputbox from "./inputbox"
import Subsbutton from "./subsbutton"
import Checkboxtext from "./checkboxtext"

const Newslettercard = () => {

  return (
    <>
      <Card body style={{ width: '50rem', textAlign: 'center' }}>
        <Heading />
        <Subheading />
        <Row style={{ marginLeft: '4rem' }}>
          <Col xs={7} style={{ marginLeft: '4rem', paddingLeft: '0' }}><Inputbox /></Col>
          <Col xs={4} style={{ marginLeft: '-4rem', paddingLeft: '0', marginTop: '1.4rem' }}><Subsbutton /></Col>
        </Row>
        <Row style={{ marginLeft: '6.8rem' }}>
          <Col xs={1}><Checkboxtext /></Col>
          <Col xs={11} style={{ marginLeft: '-2rem', marginTop: '0.2rem', fontSize: '0.7rem', textAlign: 'left' }}><span>By checking this box, you agree to receive our weekly newsletter containing coding challenges, tips, and other related content. You may unsubscribe from the newsletter at anytime</span></Col>
        </Row>
      </Card>
    </>
  )
}

export default Newslettercard