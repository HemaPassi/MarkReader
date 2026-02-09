//import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../../products.js";
import { useGetProductsQuery } from "../../slices/productsApiSlice.js";
import Loader from "../Loader";
import Message from "../Message";
import Product from "../Product";

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("/api/products", {
  //         headers: { Accept: "application/json" },
  //       });
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          <p>Error: {error?.data?.message || error.error}</p>
        </Message>
      ) : (
        <Row>
          {products && products.map((product) => (
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
      )}
    </div>
  );
};

export default HomeScreen;
