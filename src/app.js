const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes')
app.set('port', process.env,PORT || 2000)
// midwalre
app.use(morgan('dev'));
app.use(cors());
//Rutas
app.use('/auth', authRoutes)
//inicio server
app.listen(app.get('port'), ()=>{
    console.log('server running')
})