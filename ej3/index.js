let http = require('http');
const { esPar } = require('./numeros');
const allNums = [2, 3, 101, 201, 202, 101];

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Aprendiendo en The Bridge ej3!');
  })
  .listen(8080);

const Logger = require('logplease'); //info README, it's necessary
const logger = Logger.create('utils'); //info README, it's necessary

//TODO: /*Si el número es par mostrar en consola el siguiente mensaje utilizando los métodos indicados del módulo logplease:

console.log(allNums.length);
console.log('hi');

for (let i = 0; i < allNums.length; i++) {
  esPar(i)
    ? logger.info('El número es par')
    : logger.error('El número no es par');
}
