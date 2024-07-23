const express = require('express');
const multer = require('multer');
const path = require('path');
const { title } = require('process');
const app = express
const PORT = 8000;

app.set('view engine' ,'ejs');

app.use('/uploads',express.static(__dirname + '/uploads'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`);
})