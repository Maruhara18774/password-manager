const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 8080;


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Maruhara18774',
    database: 'passwordmanager'
})
app.get('/',(req,res)=>{
    res.send("Connected")
})
app.listen(PORT, ()=>{
    console.log("Server is running");
})
