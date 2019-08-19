var fs = require('fs')

fs.copyFile('./build/contracts/Authorizer.json', './client/src/contracts/Authorizer.json', (err) => {
    if (err) throw err;
    console.log('success');
});
  
fs.copyFile('./build/contracts/Authorizer.json', './admin/src/contracts/Authorizer.json', (err) => {
    if (err) throw err;
    console.log('success');
});