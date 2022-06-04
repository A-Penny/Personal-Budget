const express = require('express')
const app = express();
const apiRouter = express.Router();
const db = require('./db')


apiRouter.param('id', (req, res, next) => {
    req.params.id = parseInt(req.params.id);
    next();
})

apiRouter.get('/', (req, res, next) => {
    console.log('get request received at apiRouter.get / ');
    let envelopes = db.getAllEnvelopes();
    res.status(200).send(envelopes)
})

// GET budget envelope balance by ID
apiRouter.get('/:id', (req, res, next) => {
    let envelope = db.getEnvelopeById(req.params.id);
    if (envelope) {
        res.status(200).send(envelope)
    } else {
        res.status(404).send('There is no envelope with that Id')
    }
})
module.exports = apiRouter;
// Personal budget will have several request methods:
// GET all budget envelope balances
// GET budget envelope balance by ID
// POST new budget envelope and balance item
// PUT budget envelope balance by ID
// DELETE budget envelope item by ID