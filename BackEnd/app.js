const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})


app.get('/activityhistory', (req, res) =>{
    const sql = "SELECT * FROM `activityhistory`";
    db.query(sql, (err, data) => {
        if(err) return{
            error: res.json(err),
            status: res.sendStatus(400)
        } 
        return{
            data: res.json(data),   
            status: res.sendStatus(200)
        } 

    })
})

module.exports = {app};