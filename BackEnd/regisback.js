const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const regisback = express();
regisback.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

// Registration endpoint
// regisback.post('/usertable', (req, res) => {
//   const { username, email, password } = req.body;
//   const sql = `INSERT INTO usertable(id, username, email, password) VALUES (0, ?, ?, ?)`;
//   db.query(sql, [username, email, password], (err, result) => {
//     if (err) {
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).send('Registration successful');
//     }
//   });
// });

regisback.post('/usertable', (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if email already exists
    const checkEmailQuery = `SELECT * FROM usertable WHERE email = ?`;
    db.query(checkEmailQuery, [email], (err, result) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      } else {
        if (result.length > 0) {
          res.status(400).send('Email already exists');
        } else {
          // Email is unique, proceed with registration
          const insertUserQuery = `INSERT INTO usertable(id, username, email, password) VALUES (0, ?, ?, ?)`;
          db.query(insertUserQuery, [username, email, password], (err, result) => {
            if (err) {
              res.status(500).send('Internal Server Error');
            } else {
              res.status(200).send('Registration successful');
            }
          });
        }
      }
    });
  });

module.exports = {regisback};