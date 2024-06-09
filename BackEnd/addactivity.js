const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const addactivity = express();
addactivity.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

addactivity.post('/activitylist', async (req, res) => {
    console.log(req.body.datas)
  let activities = req.body.datas;
  let tax =  req.body.tax;
  let assignID = req.body.assignID
  console.log(tax)
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-indexed
  const day = today.getDate();
  const currentDate = `${year}-${month}-${day}`;
    
  try {
    let successfulInsertions = 0;
    const randomKey2 = await generateUniqueKey('GC', "groupID"); // Replace with function to generate unique key
    for (const userId in activities) {
        const items = activities[userId];
        for (const item of items) {
        const randomKey = await generateUniqueKey('AC', "activityID"); // Replace with function to generate unique key
        

        const insertFriendQuery = `INSERT INTO activitylist(activityID, groupID, assignID, userID, itemName, itemPrice, activityDate, activityStatus) VALUES (?, ?, ?, ?, ?, ?, ?, 0)`;
        await new Promise((resolve, reject) => {
          db.query(insertFriendQuery, [randomKey, randomKey2, assignID, userId, item.item, (item.price/(item.selectedBy).length).toFixed(2), currentDate], (err, result) => {
            if (err) {
              reject(err);
            } else {
              successfulInsertions++;
              resolve();
            }
          });
        });
      }
      const randomKey = await generateUniqueKey('AC', "activityID"); // Replace with function to generate unique key      
      const insertFriendQuery = `INSERT INTO activitylist(activityID, groupID, assignID, userID, itemName, itemPrice, activityDate, activityStatus) VALUES (?, ?, ?, ?, "TAX", ?, ?, 0)`;
      await new Promise((resolve, reject) => {
              db.query(insertFriendQuery, [randomKey, randomKey2, assignID, userId, tax, currentDate], (err, result) => {
              if (err) {
                reject(err);
              } else {
               successfulInsertions++;
                  resolve();
              }
           });
      });
    }

    if (successfulInsertions === Object.keys(activities).length) {
      res.status(200).send('Registration successful');
    } else {
      // Handle partial success or error scenario (optional)
      res.status(500).send('Some insertions failed'); // Choose appropriate status code
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error');
  }
});

// Function to generate unique key (replace with actual implementation)
async function generateUniqueKey(prefix, columname) { // Assuming prefix is 'AC'
    let isUnique = false;
    let randomKey;
    do {
      randomKey = `${prefix}${(Math.floor(Math.random() * 1000)).toString().padStart(3, '0')}`;
      const existingKeyQuery = `SELECT * from activitylist where ${columname} = ?`; // Corrected column reference
      const result = await new Promise((resolve, reject) => {
        db.query(existingKeyQuery, [randomKey], (err, result) => {
          if (err) { 
            reject(err);
          } else {
            resolve(!result.length);
          }
        });
      });
      isUnique = result;
    } while (!isUnique);
    return randomKey;
  }

module.exports = { addactivity };