var mysql= require("mysql");
let connection;

var connection = mysql.createConnection({

        host: "localHost",
        port:8080,
        user: "root",
        password: "Brie2026!",
        database:"burger_db"



});
    
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  .
  module.exports = connection;