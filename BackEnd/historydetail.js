const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const historydetail = express();
historydetail.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

historydetail.get('/historydetail', async (req, res) => {
    const assignID = req.query.assignID;
    const groupID = req.query.groupID;
    
    console.log(assignID)
  
    try {
      const query = `
        select itemName, itemPrice, userID, username from activitylist 
        join usertable on usertable.id = activitylist.userID
        where assignID = ? AND groupID = ?
        order by userID
      `;
  
      db.query(query, [assignID,groupID], (err, results) => {
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

module.exports = {historydetail};