const routes = require('./10_routes.js'); 
const http = require('http'); 
const fs = require('node:fs');
const path = require('path');

const myHost = 'localhost';
const myPort = 3000;

const server = http.createServer(routes);

server.listen(myPort, myHost, () => {
    console.log(`Server running in http://${myHost}:${myPort}`);
});