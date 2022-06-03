const express = require('express')
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    console.log('get request received at apiRouter.get / ')
})

module.exports = apiRouter;