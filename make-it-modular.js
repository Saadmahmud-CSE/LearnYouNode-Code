require('./mymodule.js')(process.argv[2], process.argv[3], (err, data) =>
    err 
    ? console.log('Error Reading Directory: ', err)
    : data.forEach(file =>
      console.log(file),
    ),
  );