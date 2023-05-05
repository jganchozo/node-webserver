const express = require('express');
const app = express();
const port = 8080;

// servir contenido estatico
// app.use(express.static('public', {
//     extensions: ['html']
// }));

app.set('view engine', 'hbs');

// servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/generic', (req, res) => {
    res.sendFile(`${__dirname}/public/generic.html`);
});

app.get('/elements', (req, res) => {
    res.sendFile(`${__dirname}/public/elements.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`)
});