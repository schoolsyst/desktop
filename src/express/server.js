const express = require('express');
const app = express();

var server = {};
var listen;

server.start = function (path, port) {
    app.use(express.static(path));
    listen = app.listen(port);
}

server.stop = function () {
   listen.close();
}

module.exports = server;
