const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',     // or your MySQL host
  user: 'root',
  password: 'SA2023!sa',
  database: 'invoper'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;
