const conn = require('../../config/database');
const crypto = require('crypto');

const serverAndTable = {
    createDatabase: createDatabase
 }

function createDatabase() {
    conn.on('connection', function (conn) {
        console.log('DB Connection established');

        conn.query("CREATE DATABASE IF NOT EXISTS instavote", function (err, result) {
          if (err) throw err;
          console.log("Database created ", result);
        });

        let createvoters = "CREATE TABLE IF NOT EXISTS `instavote`.`voters` ( `voter_id` VARCHAR(100) NOT NULL , `name` VARCHAR(100) NOT NULL , `age` INT(10) NOT NULL DEFAULT '18' , `constituency_id` VARCHAR(100) NULL DEFAULT NULL , `gender` VARCHAR(12) NULL DEFAULT NULL, `face_id` VARCHAR(1000) NULL DEFAULT NULL , `face_name` VARCHAR(2000) NULL DEFAULT NULL , `mobile_no` BIGINT(20) NULL DEFAULT NULL , `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP );";

        conn.query(createvoters, function(err, results, fields) {
            if (err) {
            console.log(err.message);
            } else {
                console.log(results);
            }
        });

        let createLoginVoters = "CREATE TABLE IF NOT EXISTS `instavote`.`voter_login` ( `u_id` INT NOT NULL AUTO_INCREMENT , `voter_id` VARCHAR(100) NOT NULL , `face_id` VARCHAR(1000) NULL DEFAULT NULL , `time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`u_id`));";

        conn.query(createLoginVoters, function(err, results, fields) {
            if (err) {
            console.log(err.message);
            } else {
                console.log(results);
            }
        });

        let createCandidates = "CREATE TABLE IF NOT EXISTS `instavote`.`candidates` ( `candidate_id` VARCHAR(100) NOT NULL , `name` VARCHAR(100) NOT NULL , `constituency_id` VARCHAR(100) NOT NULL , `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`candidate_id`));";

        conn.query(createCandidates, function(err, results, fields) {
            if (err) {
            console.log(err.message);
            } else {
                console.log(results);
            }
        });

        let createAdmin = "CREATE TABLE IF NOT EXISTS `instavote`.`admin` ( `u_id` INT NOT NULL AUTO_INCREMENT , `admin_id` VARCHAR(100) NOT NULL , `password` VARCHAR(200) NOT NULL , PRIMARY KEY (`u_id`));";

        conn.query(createAdmin, function(err, results, fields) {
            if (err) {
            console.log(err.message);
            } else {
                console.log(results);
            }
        });

        let admin_name = 'admin';
        let pwd = 'Sdslabs@1234567890';
        let addAdmin = "INSERT INTO admin (admin_id,password) SELECT * FROM (SELECT ?,?) AS tmp WHERE NOT EXISTS (SELECT admin_id FROM admin WHERE admin_id='"+admin_name+"');";
        const pass = crypto.createHash('sha256').update(pwd).digest('base64');
        const params = [admin_name, pass]
        conn.query(addAdmin, params, function(err, results, fields) {
            if (err) {
            console.log(err.message);
            } else {
                console.log(results);
            }
        });

        conn.on('error', function (err) {
            console.error(new Date(), 'MySQL error', err);
        });
        conn.on('close', function (err) {
            console.error(new Date(), 'MySQL close', err);
        });
    });

    
}

module.exports = serverAndTable;