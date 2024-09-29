let server = require('http').createServer((_req, response) =>
    require('fs').createReadStream(process.argv[3]).pipe(response),
);

server.listen(process.argv[2]);