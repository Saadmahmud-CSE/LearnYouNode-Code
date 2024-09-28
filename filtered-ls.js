require('fs').readdir(process.argv[2], (err, files) =>
    err 
    ? console.log('Error Reading directory: ', err)
    : files.forEach(
        (file) =>
        (file.toString().split('.')[1] == process.argv[3].toString()) &&
        console.log(file)
    ),
);