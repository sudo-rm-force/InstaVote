const conn = require('../../config/database');

const serverAndTable = {
    createDatabase: createDatabase
 }

function createDatabase() {
    conn.on('connection', function (conn) {
        console.log('DB Connection established');

        conn.query("CREATE DATABASE mydb", function (err, result) {
          if (err) throw err;
          console.log("Database created ", result);
        });

        let createvoters = `create table if not exists voters(
                            voter_id varchar(100)not null primary key,
                            name varchar(100)not null,
                            completed tinyint(1) not null default 0
                        )`;

        conn.query(createvoters, function(err, results, fields) {
            if (err) {
            console.log(err.message);
            }
        });

        conn.on('error', function (err) {
            console.error(new Date(), 'MySQL error', err);
        });
        connection.on('close', function (err) {
            console.error(new Date(), 'MySQL close', err);
        });
    });

    
}

module.exports = serverAndTable;