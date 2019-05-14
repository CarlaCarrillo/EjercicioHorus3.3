'use strict'
const http = require ('http');
const puerto = 8000;
const router = require ('./router/router');
const modelo = require ('./models/modelpag1');

http.createServer(router).listen(puerto);