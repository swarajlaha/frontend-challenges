import { Form } from "react-bootstrap";

const Inputbox = ({ inputChangeHandler, showError }) => {
  return (
    <>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter your email address" onChange={(e) => inputChangeHandler(e)} />
        </Form.Group>
        {showError && <span style={{ color: 'red', fontSize: '0.7rem' }}>Invalid email</span>}
      </Form>
    </>
  );
};

export default Inputbox;
