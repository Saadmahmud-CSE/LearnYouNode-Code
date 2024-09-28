function FileReader(directory, file_ext, callback ){
    require('fs').readdir(directory, (err, files) => {
        if(err) return callback(err);
        return callback(null, files.filter(file => file.toString().split('.')[1] == file_ext.toString()))
    })
}

module.exports = FileReader;