const express = require('express');
const app = express();

const middlewares = require('../src/config/middlewares')
const routes = require('./config/routers');

app.use(middlewares.bodyParser)
app.use(middlewares.cors)
app.use(routes);

module.exports =  app
