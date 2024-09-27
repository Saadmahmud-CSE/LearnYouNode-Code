console.log("HELLO WORLD");

console.log(
  process.argv
  .slice(2)
  .map((x) => +x)
  .reduce((a,b) => a + b, 0),
);

const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const result = buffer.toString().split('\n').length - 1;
console.log(result.toString());

const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', (err, string) =>{
  if(err) return console.log(err);
  const result = string.split('\n').length - 1;
  console.log(result);
});

const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})