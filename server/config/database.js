const mysql = require('mysql');

const config =mysql.createPool({
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
	host: 'localhost',
	user: 'root',
	password: 'ayan2510',
	database: 'instavote'
});

config.on('connection', function (conn) {
    console.log('DB Connection established');

    conn.on('error', function (err) {
        console.error(new Date(), 'MySQL error', err);
    });
    conn.on('close', function (err) {
        console.error(new Date(), 'MySQL close', err);
    });
        
});

module.exports = config