const express = require("express");
const app = express();

const products = require("./data/products/index")
const face = require("./data/Interface/index")

app.use(express.json());



app.use("/api/product", products);
app.use("/", face);

app.listen(3000, () => {
    console.log('API 3000 port started');
});
