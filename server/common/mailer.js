var nodemailer = require("nodemailer");

var clientId = "742086651968-fjn9q18t75r7lbv4r5srn31uocikdj2c.apps.googleusercontent.com";
var clientSecret = "j2hNlMl_TNFgXf0EbmVRjE2H";
var refreshToken = "1//0406I-YSwnRYqCgYIARAAGAQSNwF-L9IrN5xqIlLXL7f0gcF26Am-g_fr1XgIaCL6YJtib21A2Y1pyRP-WV8UZzXBVUuEMs7yVIs";
var userMailID = "instavotedapp@gmail.com"

var smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        type: "OAuth2",
        user: userMailID,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken
    }
});

function mail(password, id, mail) {
    smtpTransport.sendMail({  //email options
        from: "InstaVote <instavotedapp@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
        to: mail, // receiver
        subject: "InstaVote Admin Account Password", // subject
        html:`
        <html>
            <head>
                <META http-equiv="Content-Type" content="text/html; charset=utf-8">
            </head>
            <body>
                <div style="font-family:Avenir,Helvetica,sans-serif;color:#74787e;height:100%;line-height:1.4;margin:0;width:100%!important">
                    Dear ${id},<br>
                    Your account's password is ${password}. Remember to keep it safe. You cannot regenerate or change it.<br>
                    Regards,<br>
                    InstaVote
                    </div>
            </body>
        </html>`  // body
     }, function(error, response){  //callback
        if(error){
           console.log("error",error);
        }else{
            console.log(response);
        }
        
     //    smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
     });
}

module.exports = {
    mail:mail
}
