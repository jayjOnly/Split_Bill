const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const addfriend = express();
addfriend.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

addfriend.post('/friendlist', (req, res) => {
    const { phoneNumber, currUser } = req.body;
    // console.log(phoneNumber)
    // console.log(currUser)
    
    // Check if email already exists
    try {
        const checkNumberQuery = `SELECT id FROM usertable WHERE phoneNumber = ?`;
        db.query(checkNumberQuery, [phoneNumber],  (err, result) => {   
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                // console.log(result[0].id)
                if (result.length > 0) {
                    const checkDouble = `SELECT * FROM friendlist where user1 = ? and user2 = ?`;
                    db.query(checkDouble, [currUser.id, result[0].id], async(err, result2) => {  
                        if(result2.length == 0){
                            let randomKey;
                            let isUnique = false;
        
                            do {
                                // Generate random friend ID
                                randomKey = `FR${(Math.floor(Math.random() * 1000)).toString().padStart(3, '0')}`;
        
                                // Check for uniqueness (using promises)
                                const checkUniquePromise = new Promise((resolve, reject) => {
                                    const existingKeyQuery = `SELECT * from friendlist where friendID = ?`
                                    db.query(existingKeyQuery, [randomKey], (err, result) => {
                                    if (err) {
                                        reject(err); // Handle database error
                                    } else {
                                        resolve(!result.length); // Set isUnique based on result
                                    }
                                    });
                                });
        
                                // Wait for the promise to resolve before checking isUnique
                                isUnique = await checkUniquePromise;
        
                            } while (!isUnique);
        
                            const insertFriendQuery = `INSERT INTO friendlist(friendID, user1, user2) VALUES (?, ?, ?)`;
                            db.query(insertFriendQuery, [randomKey, currUser.id, result[0].id], (err, result) => {
                                if (err) {
                                    console.log(err)
                                    res.status(500).send('Internal Server Error');
                                } else {
                                    console.log("sucess")
                                    res.status(200).send('Registration successful');
                                }
                            });     
                        }
                    })
                    // console.log("there is phone number")
                    
                } else {
                // Email is unique, proceed with registration
                res.status(400).send('User not exists');
                }
            }
        }); 
    } catch (error) {
        console.log(error)
    }   
});

module.exports = {addfriend};