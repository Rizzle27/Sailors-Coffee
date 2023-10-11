import * as service from "../../services/products.services.js";
import yup from "yup";

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

const productSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    image: yup.string().required(),
    size: yup.string().required(),
    type: yup.string().required(),
    outstanding: yup.boolean().required()
  });

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
    
    try {
        const validatedProduct = await productSchema.validate(req.body);
        service.createProduct(validatedProduct)
            .then((newProduct) => {
                res.status(201).json(newProduct);
            })
    } catch (error) {
        res.status(500).json(error);
    }
};

const replaceProduct = (req, res) => {
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

    service.replaceProduct(id, product)
        .then((editedProduct) => {
            res.status(200).json(editedProduct);
        })
        .catch((error) => {
            res.status(404).json(error);
        });
}

const updateProduct = (req, res) => {
    const id = req.params.id;

    const product = {};

    if(req.body.name) {
        product.name = req.body.name;
    }

    if(req.body.description) {
        product.description = req.body.description;
    }

    if(req.body.price) {
        product.price = req.body.price;
    }

    if(req.body.image) {
        product.image = req.body.image;
    }

    if(req.body.size) {
        product.size = req.body.size;
    }

    if(req.body.type) {
        product.type = req.body.type;
    }

    if(req.body.outstanding) {
        product.outstanding = req.body.outstanding;
    }

    service.editProduct(id, product)
        .then((editedProduct) => {
            res.status(200).json(editedProduct);
        })
        .catch((error) => {
            res.status(404).json(error);
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

export { getProducts, getProductsById, createProduct, replaceProduct, updateProduct, deleteProduct };