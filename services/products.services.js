import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
    "mongodb+srv://lucasgarcia:lucasgarcia@sailorexpresscoffee.xve7vik.mongodb.net"
  );
  
const db = client.db("AH20232CP1");

async function getProducts() {
    return db.collection("products").find().toArray();
};

async function getProductsByType(type) {
  return db.collection("products").find({ type: type }).toArray();
};

async function getProductById(id) {
  return db.collection("products").findOne({ _id: new ObjectId(id) });
};

const createProduct = async (product) => {
  const insertedProduct = await db.collection("products").insertOne(product);
  product._id = insertedProduct.insertedId;
  return product;
};

const editProduct = async (id, product) => {
  const editedProduct = await db.collection("products").updateOne({ _id: new ObjectId(id) }, { $set: product });
  return editedProduct;
};

const deleteProduct = async (id) => {
  const deletedProduct = await db.collection("products").deleteOne({ _id: new ObjectId(id) });
  return deletedProduct;
}

export { getProducts, getProductsByType, getProductById, createProduct, editProduct, deleteProduct };