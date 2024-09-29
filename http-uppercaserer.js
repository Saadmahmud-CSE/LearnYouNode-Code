let server = require('http').createServer((req, res) => {
 if (req.method != 'POST')
   return res.end('send me a POST\n');

 req.pipe(require('through2-map')((chunk) => {
   return chunk.toString().toUpperCase();
 })).pipe(res);
})

server.listen(Number(process.argv[2]));