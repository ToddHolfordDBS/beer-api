const express = require('express');
const mongoose = require('mongoose')
const app = express();
const beerRouter = require('./routes/beerRouter')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/beers', beerRouter);

app.use('/', (req, res) => {
    res.send('You hit the base route!');
})

mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to beers database')
})

mongoose.connection.on('error', (error) => {
    console.error('Error connecting to database:\n${error}')
})

const port = process.env.PORT || 9999
app.listen(port, () => {
    console.log('Listening on port 9999...');
})

