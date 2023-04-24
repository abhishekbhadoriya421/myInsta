const express = require('express');
const port = 8000;

const app = express();

app.use('/', require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log('There is an Error',err);
        return;
    }
    console.log('Running at Port: ',port);
});