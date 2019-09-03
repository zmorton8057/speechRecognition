const express = require('express');
const app = express();
const routes = require("./connection/connection.js");

var PORT = process.env.PORT || 3000;


app.use("/", routes)

app.use(express.static('./public/style'))

app.listen(PORT, () => console.log(`Listening on Port ${PORT}!`))