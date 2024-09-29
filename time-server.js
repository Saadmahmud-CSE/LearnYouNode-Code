function zeroPad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

var server = require('net').createServer((socket) => {
    var date = new Date();
    
    var year   = date.getFullYear();
    var month  = zeroPad(date.getMonth() + 1);
    var day    = zeroPad(date.getDate());
    var hour   = zeroPad(date.getHours());
    var minute = zeroPad(date.getMinutes());

    var dateString = year + '-' + month + '-' + day;
    dateString = dateString + ' ' + hour + ':' + minute;
    
    socket.end(dateString + '\n');
});

server.listen(process.argv[2]); 