const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 8080;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Maruhara18774',
    database: 'passwordmanager',

})
app.post('/addPassword',(req,res)=>{
    const {password,title} = req.body;

    db.query(
        "INSERT INTO passwords (password, title) VALUE (?,?)",[password,title],
        (err, result) =>{
            if(err){
                console.log(err);
            } else{
                res.send("Success add data.")
            }
        }
        );
})
app.listen(PORT, ()=>{
    console.log("Server is running");
})
