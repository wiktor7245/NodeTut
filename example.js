/*var a = 1;
var b = 2;
var obj = {
c: 3
};
console.log(a + b + obj.c); // 6*/

//prosty server
var http = require('http'); //zaladowanie modulu http 
var server = http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<html><head><title>Foobar</title></head><body><h1>Hello world!</h1></body></html>');
});
server.listen(1337, '127.0.0.1'); //mozna usunac to ip zeby laczyc sie z innego kompa
console.log('Server running at http://127.0.0.1:1337/');
