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
        res.status(200).send('Login successful');
      } else {
        res.status(401).send('Invalid email or password');
      }
    }
  });
});

module.exports = {loginback};