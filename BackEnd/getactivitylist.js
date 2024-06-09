const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const getactivitylist = express();
getactivitylist.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

getactivitylist.get('/activitylist', async (req, res) => {
    console.log("getactivitylist")
    const userId = req.query.users;
  
    try {
      const query = `
        select ac.activityID, ac.groupID, ac.assignID, us.username, ac.userID, ac.itemName, ac.itemPrice, ac.activityDate from activitylist 
        ac join usertable us on ac.assignId = us.id where userID = ? and activityStatus = 0 order by ac.groupID
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

module.exports = {getactivitylist};