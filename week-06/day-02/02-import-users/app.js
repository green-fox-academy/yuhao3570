require('dotenv').config();
const mysql = require('mysql');
const {
  readFile
} = require('fs');

const connect = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const deleteQuery = 'DELETE FROM user WHERE 1=1;';
const createQuery = 'CREATE TABLE IF NOT EXISTS user( \
  id INT PRIMARY KEY AUTO_INCREMENT, \
  prefix VARCHAR(20), \
  first_name VARCHAR(20), \
  last_name VARCHAR(20), \
  address TEXT, \
  height FLOAT, \
  bitcoin_address TEXT, \
  color_preference VARCHAR(7) \
  );';

const insertionQuery = 'INSERT INTO user VALUES(?, ?, ?, ?, ?, ?, ?, ?);'

const promisedQuery = (sqlString, queryInput='') => {
  new Promise((resolve, reject) => {
      connect.query(sqlString, queryInput, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
  })
};

// Create table
(async() => {
  try{
    await promisedQuery(createQuery);
    console.log('user table created');
  } catch(error){
    console.log(error)
  }
})();

// Insertion
readFile('./users.csv', 'utf8', async (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
 
  const rows = data.split('\n');
  for (let i = 1; i < rows.length; i++){
    let detail = rows[i].split(',');
    try{
      await promisedQuery(insertionQuery, detail);
    } catch(error){
      console.log(error)
    }
  }
  connect.end();
})