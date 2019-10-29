require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const PORT = 3000;

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const connect = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.get('/', (req, res) => {
  connect.query('SELECT book_name FROM book_mast;', (error, result) => {
    if(error){
      console.log(error);
      res.status(500).send("DB error");
      return;
    }
    res.json(result);
  })
})

const detailQuery = 'SELECT book_name AS title, aut_name AS author, ' +
                    'cate_descrip AS category, pub_name AS publisher, book_price AS price ' +
                    'FROM ' + 
                    'book_mast ' +
                    'JOIN author ON book_mast.aut_id=author.aut_id ' +
                    'JOIN category ON book_mast.cate_id=category.cate_id ' + 
                    'JOIN publisher ON publisher.pub_id=book_mast.pub_id';

app.get('/books', (req, res) => {
  let queryKeys = Object.keys(req.query);
  const queryValues = Object.values(req.query);
  const sqlString = detailQuery + applyFilters(queryKeys) + ';'

  let query = connect.query(sqlString, queryValues, (error, result) => {
    if(error){
      console.log(error);
      res.status(500).send("DB error");
      return;
    }
    console.log(result);
    res.render('bookdetail', {result});
  })

  console.log(query.sql);
})

function applyFilters(filterKeys){
  let result = '';

  const convertFilter = {
    category: 'cate_descrip',
    publisher: 'pub_name',    
  }

  if(filterKeys.length > 0){
    result += ' WHERE ';
    for(let key  of filterKeys){
      if(key === 'plt'){
        result += `book_price<? AND `;
      }
      else if(key === 'pgt'){
        result += `book_price>? AND `;
      }
      else {
        result += `${convertFilter[key]}=? AND `;
      }
    }
    result = result.substr(0, result.lastIndexOf('AND'));
  }

  return result;
}

app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});