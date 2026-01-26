import { Col, Container, Row } from "react-bootstrap";
const FormContainer = ({ Children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}></Col>
        {Children}
      </Row>
    </Container>
  );
};

export default FormContainer;
