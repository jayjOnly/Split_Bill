const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const loginback = express();
loginback.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

loginback.post('/usertable', (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM usertable WHERE email = ? and password = ?;`;
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      if (result.length > 0) {
        console.log(result[0])
        const user = result[0]; // Extract user object
        res.status(200).send({ message: 'Login successful', user});
      } else {
        res.status(401).send({message: 'Invalid email or password'});
      }
    }
  });
});

module.exports = {loginback};