
const http = require('http');

http.createServer((req, res) => {


    //res.writeHead(200, { 'Content-Type': 'application/json' });
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 9,
    //     name: 'Jose Manuel'
    // };

    //res.write(JSON.stringify(persona));
    res.write('id , nombre\n');
    res.write('1, Jose Manuel\n');
    res.write('2, Heizel Hanae\n');
    res.write('3, Hizelkey\n');
    res.write('4, Jorge\n');
    res.end();

}).listen(8080);

console.log('escuchando el puerto ', 8080);