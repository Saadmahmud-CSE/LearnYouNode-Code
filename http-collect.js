require('http').get(process.argv[2], (response) => {
  response.pipe(require('bl')((err, data) => {
    if (err) {console.error(err);return;}
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});