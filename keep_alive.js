var http = require('http');

http.createServer(function (req, res) {

res.write("මම online හුත්තෝ");

res.end(); }).listen(8080);