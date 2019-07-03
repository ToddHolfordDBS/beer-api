const express = require('express');
const beerRouter = express.Router();

beerRouter.use('/', (req,res) => {
    res.send('Beer router working!')
})

module.exports = beerRouter;