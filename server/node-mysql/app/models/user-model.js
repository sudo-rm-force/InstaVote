var conn = require('../../config/database');
// var dbFunc = require('../../config/db-function');

var userModel = {
   addUser:addUser,
   getUserById:getUserById
}

function getUserById(id) {
    return new Promise((resolve,reject) => {
        conn.query("SELECT * FROM voters WHERE voter_id ="+id.id,(error,rows,fields)=>{
            if(!!error) {
                // dbFunc.connectionRelease;
                reject(error);
            } else {
                // dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}

function addUser(user) {
    // let date = new Date();
    // let timestamp = date.getTime();
    console.log(user)
    return new Promise((resolve,reject) => {
        console.log('hihihih');
        const params = [user.voter_id, user.name, user.gender, user.mobile_no];
         conn.query("INSERT INTO voters (voter_id,name,gender,mobile_no) VALUES (?,?,?,?);", params, (error,rows,fields)=>{
            if(error) {
                // dbFunc.connectionRelease;
                console.log(error);
                reject(error);
            } else {
                // dbFunc.connectionRelease;
                console.log(rows);
                resolve(rows);
            }
          });
        });
}


// function queryDatabase(){
// 	   conn.query('DROP TABLE IF EXISTS inventory;', function (err, results, fields) { 
// 			if (err) throw err; 
// 			console.log('Dropped inventory table if existed.');
// 		})
//   	   conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);', 
// 	      	function (err, results, fields) {
//       			if (err) throw err;
// 			console.log('Created inventory table.');
// 		})
// 	   conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150], 
//       		function (err, results, fields) {
//       			if (err) throw err;
// 			else console.log('Inserted ' + results.affectedRows + ' row(s).');
// 	   	})
// 	   conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154], 
//       		function (err, results, fields) {
//       			if (err) throw err;
// 			console.log('Inserted ' + results.affectedRows + ' row(s).');
// 	   	})
// 	   conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100], 
// 		function (err, results, fields) {
//       			if (err) throw err;
// 			console.log('Inserted ' + results.affectedRows + ' row(s).');
// 	   	})
// 	   conn.end(function (err) { 
// 		if (err) throw err;
// 		else  console.log('Done.') 
// 		});
// };


module.exports = userModel;

