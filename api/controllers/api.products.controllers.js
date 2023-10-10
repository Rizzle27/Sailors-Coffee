import * as service from "../../services/products.services.js";

const getProducts = (req, res) => {
    const filter = req.query;

    service.getProducts(filter)
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

const getProductsById = (req, res) => {
    const id = req.params.id;
    service.getProductById(id)
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

const createProduct = async (req, res) => {
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        size: req.body.size,
        type: req.body.type,
        outstanding: req.body.outstanding
    };

    service.createProduct(product)
        .then((product) => {
            res.status(201).json(product);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
};





const deleteProduct = (req, res) => {
    const id = req.params.id;
    service.deleteProduct(id)
        .then(() => {
            res.status(204).json();
        })
        .catch((error) => {
            res.status(500).json(error);
        })
};

export { getProducts, getProductsById, createProduct, deleteProduct };