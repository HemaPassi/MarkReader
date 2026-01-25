import express from "express";
//import products from "../data/products.js";
import { getProductById } from "../controllers/productController.js";

import { getProducts } from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.route("/").get(getProducts);
productRoutes.route("/:id").get(getProductById);

export default productRoutes;
