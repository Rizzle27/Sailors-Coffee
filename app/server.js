import express from "express";
import RouteProducts from "../routes/products.routes.js"

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

app.use(RouteProducts)

app.listen(3333);