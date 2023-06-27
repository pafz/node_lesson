let http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Mi primer script en The Bridge ej 2!!!');
    console.log();
  })
  .listen(8080);

const Logger = require('logplease'); //info README, it's necessary
const logger = Logger.create('utils'); //info README, it's necessary

logger.debug('Hello Node world');
logger.info('Noticias de última hora, Node.js me encanta!!');
logger.warn('Tirando warnings como campeones');
logger.error('Algo no está bien!!!');
