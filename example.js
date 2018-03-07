/*var a = 1;
var b = 2;
var obj = {
c: 3
};
console.log(a + b + obj.c); // 6*/


//stworzenie prostego serwera
var http = require('http'); //zaladowanie modulu http do zmiennej http
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(1337, '127.0.0.1'); //mozna usunac ten ip i wtedy sie mozna laczyc z poziomu innego komputera
console.log('Server running at http://127.0.0.1:1337/');

