require('dotenv').config();
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
