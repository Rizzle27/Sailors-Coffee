import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://lucasgarcia:lucasgarcia@sailorexpresscoffee.xve7vik.mongodb.net");

const db = client.db("AH20232CP1");

client.connect()
  .then(async() => {
    const data = await db.collection("products").find().toArray();
    console.log(data);
  })
  .catch(() => console.log("Error al conectar"));