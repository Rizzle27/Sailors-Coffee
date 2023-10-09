import * as productsService from "../services/products.services.js";
import * as productsView from "../views/products.views.js";

const getProducts = (req, res) => {
    const type = req.params.type;
    productsService.getProducts()
        .then((products) => {
            res.send(productsView.createProductsListPage(products, type));
        })
        .catch((error) => {
            res.send(productsView.createErrorPage(error));
        });
};

const getProductsByType = (req, res) => {
    const type = req.params.type;
    productsService.getProductsByType(type)
        .then((products) => {
            res.send(productsView.createProductsListPage(products, type));
        })
        .catch((error) => {
            res.send(productsView.createErrorPage(error));
        });
};

const getProductById = (req, res) => {
    const id = req.params.id;
    productsService.getProductById(id)
        .then((product) => {
            res.send(productsView.createDetailedPage(product));
        })
        .catch((error) => {
            res.send(productsView.createErrorPage(error));
        });
};

const createProductForm = (req, res) => {
    res.send(productsView.createForm());
};

const createProduct = (req, res) => {
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        size: req.body.size,
        type: req.body.type,
        outstanding: req.body.outstanding
    };

    productsService.createProduct(product)
        .then(() => {
            res.redirect("/productos");
        })
        .catch((error) => {
            res.send(productsView.createErrorPage(error));
        });
};

const editProductForm = (req, res) => {
    const id = req.params.id;
    productsService.getProductById(id)
        .then((product) => {
            res.send(productsView.editForm(product));
        })
        .catch((error) => {
            res.send(productsView.createErrorPage(error));
        });
};

const editProduct = (req, res) => {
    const id = req.params.id;
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        size: req.body.size,
        type: req.body.type,
        outstanding: req.body.outstanding
    };

    productsService.editProduct(id, product)
        .then(() => {
            res.redirect("/productos");
        })
        .catch((error) => {
            res.send(productsView.createErrorPage(error));
        });
};

const deleteProductForm = (req, res) => {
    const id = req.params.id;
    productsService.getProductById(id)
        .then((product) => {
            res.send(productsView.deleteForm(product))
        })
};

const deleteProduct = (req, res) => {
    const id = req.params.id;
    productsService.deleteProduct(id)
        .then((deletedProduct) => {
            res.redirect("/productos");
        })
        .catch((error) => {
            res.send(productsView.createErrorPage(error));
        });
};

export { getProducts, getProductsByType, getProductById, createProductForm, createProduct, editProductForm, editProduct, deleteProductForm, deleteProduct };