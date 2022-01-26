const transactionsController = require('./controllers/transactionsController.js');
const cors = require("cors");


const express = require("express");


const app = express();
 

app.use(express.json());
app.use(cors());

app.use('/transactions', transactionsController);

// THE HOME ROUTE
app.get("/", (request, response) => {
    console.log("GET request to /");
    response.send("Welcome to Thrifter App");
});

//Star (*) Match anything we haven't matched yet.
app.get("/*", (request, response) => {
response.status(404).json({ error: "Page not found" })
});


// EXPORT
module.exports = app;