import './App.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form className="w-50 border mt-5 p-3 m-auto" style={{
      'overflow': 'hidden',
      'position': 'relative'
    }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div
        style={{
          'width': '500px',
          'height': '150px',
          'backgroundColor': 'red',
          'position': 'absolute',
          'right': '-10%',
        }}>
        Hello
      </div>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}

function App() {
  return (
    <>
      <Container fluid="sm">
        <BasicExample />
      </Container>
    </>
  );
}

export default App;
