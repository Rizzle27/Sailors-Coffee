import express from "express";
import * as productsController from "../controllers/products.controllers.js";

const route = express.Router();

route.get("/productos", productsController.getProducts);

route.get("/productos/nuevo", productsController.createProductForm);
route.post("/productos/nuevo", productsController.createProduct);

route.get("/productos/editar/:id", productsController.editProductForm);
route.post("/productos/editar/:id", productsController.editProduct);

route.get("/productos/eliminar/:id", productsController.deleteProductForm);
route.post("/productos/eliminar/:id", productsController.deleteProduct);

route.get("/productos/type/:type", productsController.getProductsByType);

route.get("/productos/:id", productsController.getProductById);

export default route;