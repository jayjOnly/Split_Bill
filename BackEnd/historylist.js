const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const historylist = express();
historylist.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

historylist.get('/activitylist', async (req, res) => {
    console.log("historylist")
    const userId = req.query.users;
  
    try {
      const query = `
        select activityID, groupID, assignID, userID, itemName, itemPrice, activityDate, activityStatus from activitylist 
        where assignID = ? order by groupID
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

module.exports = {historylist};