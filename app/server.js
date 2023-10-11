import express from "express";
import RouteProducts from "../routes/products.routes.js";
import RouteApi from "../api/routes/api.products.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));
app.use(express.json());

app.use(RouteProducts);
app.use("/api", RouteApi);

app.listen(3333);