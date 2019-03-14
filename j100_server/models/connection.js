
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@mysql",
  database: "sarcelles_test"
});

connection.connect();

module.exports = connection;