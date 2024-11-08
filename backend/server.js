const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

app.get('/',(re,res)=>{
    return res.json({message: 'Welcome to the server'});
})

app.listen(8081,()=>{
    console.log('Server is running on port 3000');
})


