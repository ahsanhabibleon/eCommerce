import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

import { data } from "./data.js";
const GULU =
  "mongodb+srv://arrayinobject:<arrayinobject>@mern-ecommerce.6gmuw.mongodb.net/merneCommerce?retryWrites=true&w=majority";

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Hellow there!");
});

app.listen(PORT, () => {
  console.log(`Listening to the server at http://localhost:${PORT}`);
});
