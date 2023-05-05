const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {

    res.send('Hello World');
});

app.get('/hello', (req, res) => {

    res.send('Hello Route');
});

app.get('*', (req, res) => {

    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`)
});