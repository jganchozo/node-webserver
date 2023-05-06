require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// servir contenido estatico
// app.use(express.static('public', {
//     extensions: ['html']
// }));

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`, (err) => { });

// servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jose Manuel',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jose Manuel',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jose Manuel',
        titulo: 'Curso de Node'
    });
});

// app.get('/elements', (req, res) => {
//     res.sendFile(`${__dirname}/public/elements.html`);
// });

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`)
});