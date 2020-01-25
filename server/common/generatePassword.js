var bcrypt = require('bcryptjs');

exports.generatePassword = function(length) {
    if(typeof(length) === "number") {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    } else {
        return false
    }
}
