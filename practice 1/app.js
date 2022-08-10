const http = require('http');

const sever = http.createServer(function(req, res){
    res.write(`<h1>Hello, world!</h1><hr>`);
    res.end();
})

sever.listen(8080,`localhost`)