//import { useEffect, useState } from "react";
import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";

import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";
import Message from "../Message";
import Rating from "../Rating";

const ProductScreen = () => {
  // const [product, setProduct] = useState({});

  const { id } = useParams();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(`/api/products/${id}`);
  //       const data = await response.json();
  //       setProduct(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [id]);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductDetailsQuery(id);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <Message variant="danger">
        <p>Error: {error?.data?.message || error.error}</p>
      </Message>
    );
  }
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Button type="button">Add to Cart</Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
