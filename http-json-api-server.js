function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() };
}

let server = require('http').createServer((req, res) => {
  let parsedUrl = require('url').parse(req.url, true);
  let time = new Date(parsedUrl.query.iso);
  let result;

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time);
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time);

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));