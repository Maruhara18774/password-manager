const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 8080;

const { encrypt, decrypt } = require('./EncryptionHandler');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Maruhara18774',
    database: 'passwordmanager',

})
app.get('/showPasswords',(req,res)=>{
    db.query('SELECT * FROM passwords;',
    (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.send(result)
        }
    })
});
app.post('/decryptPassword',(req,res)=>{
    res.send(decrypt(req.body));
})
app.post('/addPassword',(req,res)=>{
    const {password,title} = req.body;
    const hashedPassword = encrypt(password)
    db.query(
        "INSERT INTO passwords (password, title, iv) VALUE (?,?,?)",[hashedPassword.password,title,hashedPassword.iv],
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
