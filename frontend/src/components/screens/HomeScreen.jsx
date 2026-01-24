import { Col, Row } from "react-bootstrap";
import products from "../../products.js";
import Product from "../product.jsx";

const HomeScreen = () => {
  console.log(products);
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
            {/* <div className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div> */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
