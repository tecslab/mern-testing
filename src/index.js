const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();


//Setting
const defPort = 3000;
app.set('port', process.env.PORT || defPort);


//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/pedidos.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'),() =>{
    console.log(`server listening on port ${app.get('port')}`);
});