let http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Aprendiendo en The Bridge!');
  })
  .listen(8080); //saber el puerto que tenemos puesto. No es el mismo que live server
//escribir 'node index.js' y se bloquea el terminal, así se levanta el servidor
