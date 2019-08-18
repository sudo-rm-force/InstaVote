const conn = require('../../config/database');

const serverAndTable = {
    createDatabase: createDatabase
 }

function createDatabase() {
    conn.on('connection', function (conn) {
        connection.on('error', function (err) {
            console.error(new Date(), 'MySQL error', err);
        });
        conn.query("CREATE DATABASE mydb", function (err, result) {
          if (err) throw err;
          console.log("Database created ", result);
        });
      });

    
}

module.exports = serverAndTable;