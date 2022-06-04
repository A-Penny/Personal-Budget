const express = require('express')
const apiRouter = express.Router();
const db = require('./db')

apiRouter.get('/', (req, res, next) => {
    console.log('get request received at apiRouter.get / ');
    let envelopes = db.getAllEnvelopes();
    res.status(200).send(envelopes)
})

module.exports = apiRouter;
// Personal budget will have several request methods:
// GET all budget envelope balances
// GET budget envelope balance by ID
// POST new budget envelope and balance item
// PUT budget envelope balance by ID
// DELETE budget envelope item by ID