const apis = require("./config/api-config");
const PORT = 8080;

apis.app.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT);
});
