import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rohan', // Your MySQL user
  password: 'Rohan@220702', // Your MySQL password
  database: 'auth_db', // Your MySQL database
});

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

export default connection;
