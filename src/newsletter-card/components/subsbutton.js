import { Button } from "react-bootstrap"

const Subsbutton = ({ onSubsBtnClick }) => {

  return (
    <>
      <Button variant="dark" onClick={() => onSubsBtnClick()}>Subscribe</Button>
    </>
  )
}

export default Subsbutton