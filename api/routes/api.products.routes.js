import express from "express";
import * as controller from "../controllers/api.products.controllers.js";

const route = express.Router();

route.get("/productos", controller.getProducts);
route.get("/productos/:id", controller.getProductsById);

route.post("/productos", controller.createProduct);

route.put('/productos/:id', controller.replaceProduct);

route.patch('/productos/:id', controller.updateProduct);

route.delete("/productos/:id", controller.deleteProduct);

export default route;