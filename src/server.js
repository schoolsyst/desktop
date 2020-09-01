const { app } = require('electron');

var server = {};

server.start = function (path, port) {
    const express = require('express');
    const app = express();
    app.use(express.static(path));
    app.listen(port);
}

server.stop = function () {
    app.quit();
}

module.exports = server;
