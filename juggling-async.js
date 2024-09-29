let results = [];
let count = 0;

function httpGet (index) {
    require('http').get(process.argv[2 + index], (response) => 
    response.pipe(require('bl')((err, data) => {
      if (err)
        return console.error(err);

      results[index] = data.toString();
      count++;

      if (count == 3)
        for (let i = 0; i < 3; i++) console.log(results[i]);
    })),
  );
};

for (let i = 0; i < 3; i++)
  httpGet(i);