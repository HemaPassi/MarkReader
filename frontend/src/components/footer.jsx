import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {currentYear} OMR | Mark Reader
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
