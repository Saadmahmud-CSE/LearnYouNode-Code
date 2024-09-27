// import { readFileSync } from 'node:fs';
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   const fileContent = readFileSync('content.txt', 'utf8');
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(fileContent);
// });

// const instance = server.listen(0, '127.0.0.1', () => {
//   console.log('Listening on port', instance.address().port);
// });

// Asynchronus and Promises

// import { readFile } from 'node:fs/promises';
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   readFile('content.txt', 'utf8')
//   .then((content)=>{
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(fileContent);
//     return;
//   })
//   .catch((err)=>{
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('Internal Server Error');
//   });
// });
// const instance = server.listen(0, '127.0.0.1', () => {
//   console.log('Listening on port', instance.address().port);
// });

//Async-await

// import { readFile } from 'node:fs/promises';
// import { createServer } from 'node:http';

// const server = createServer(async (req, res) => {
//   const fileContent = await readFile('content.txt', 'utf8')
//   try{
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(fileContent);
//   }
//   catch(err){
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('Internal Server Error');
//   }
// });
// const instance = server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on port', instance.address().port);
// });


import cluster from 'node:cluster';
import { cpus } from 'node:os';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
  console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = createServer(async (req, res) => {
    try {
      const fileContent = await readFile('content.txt', 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(fileContent);
    } catch (err) {
      console.error('Error reading file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  });

  server.listen(3000, '127.0.0.1', () => {
    console.log(`Worker ${process.pid} started`);
  });
}