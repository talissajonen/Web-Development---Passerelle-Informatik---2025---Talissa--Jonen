// console.log("hello express"); for package.json test
console.log("hello express"); 
const express = require('express');
const logger = require("./logger"); 
const requestMiddleware = require('./requestMiddleware');
const responseMiddleware = require('./responseMiddleware');
const app = express(); 
app.use (
    requestMiddleware(logger),
    responseMiddleware(logger),
);

app.get('/', (req,res) => {
    res.send('Hello World');
}); 

app.listenerCount(3000, () => {
    console.log('Server running on http://localhost:3000')
});