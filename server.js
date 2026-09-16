const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Welcome to the server!');
});

app.get('/product/:id', function (req, res) {
    res.send('Welcome to the server! Product ID: ' + req.params.id);
});

app.get('.', function (req, res) {
    res.status(404).send('Error');
});

app.listen (3000, function() {
    console.log('Listening on port 3000. Server started here');
});