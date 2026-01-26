import { Col, Container, Row } from "react-bootstrap";
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}></Col>
        <h5>In Form component</h5>
        {children}
      </Row>
    </Container>
  );
};

export default FormContainer;
