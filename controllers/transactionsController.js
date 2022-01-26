const express = require('express');
const app = require('../app');

const transactionsArray = require('../models/transaction');
const transactions = express.Router();


transactions.get("/", (_, response) => {
    console.log("GET request to /transactions")
    response.json(transactionsArray);
});


transactions.get("/:index", (request,response) => {
    console.log("GET INDEX request to /transactions")
    const { index } = request.params;
    if(transactionsArray[index]) {
        response.json(transactionsArray[index])
    } else {
        response.status(404).json({ error: "Resource not found "})
    }
});


transactions.post("/", (request, response) => {
    console.log("POST request to /transactions")
    transactionsArray.push(request.body)
    const newIndex = transactionsArray.length - 1
    response.json(transactionsArray[newIndex])
});



transactions.delete("/:index", (request, response) => {
console.log("DELETE request to /transactions")
const { index } = request.params;
if(transactionsArray[index]) {
    const [deleteTransaction] = transactionsArray.splice(index, 1)
    response.status(200).json(deleteTransaction)
    } else {
        response.status(404).json({ error: "Transaction not found"})
    }
})


transactions.put("/:index", (request, response) => {
    console.log("PUT request to /transactions")
    const { index } = request.params;
    if (transactionsArray[index]) {
    transactionsArray[index] = request.body;
    response.status(200).json(transactionsArray);
    } else {
    response.status(404).json({ error: "Transaction Not Found" });
    }
});

module.exports = transactions;