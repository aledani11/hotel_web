const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

// app.use(require('./routes'));

//app.use(require('./model/conexion.js'));



app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});
