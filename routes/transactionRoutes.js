const express = require("express");
const { model } = require("mongoose");
const { addTransaction, getAllTransactions, editTransaction, deleteTransaction } = require("../controllers/transactionControllers");

const router = express.Router();

//routes
//add transactions 
router.post('/add-transaction', addTransaction);

//add transactions 
router.post('/edit-transaction', editTransaction);

//getTransaction
router.post('/get-transaction', getAllTransactions);

//deleteTransaction
router.post('/delete-transaction', deleteTransaction);


module.exports = router;
