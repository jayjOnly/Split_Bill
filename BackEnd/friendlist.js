const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const friendlist = express();
friendlist.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

friendlist.get('/friendlist', async (req, res) => {
    const userId = req.query.user1;
  
    try {
      const query = `
        SELECT u.id, u.username, u.email, u.phonenumber
        FROM usertable u
        INNER JOIN friendlist f ON f.user2 = u.id
        WHERE f.user1 = ?
      `;
  
      db.query(query, [userId], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error fetching data');
        }
        
        // Assuming there can only be one friend for user1
        const friendData = results;
        res.json(friendData);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data');
    }
  });

module.exports = {friendlist};