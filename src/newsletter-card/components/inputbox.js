import { Form } from "react-bootstrap";

const Inputbox = () => {
  return (
    <>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>
      </Form>
    </>
  );
};

export default Inputbox;
