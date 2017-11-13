//body parser allows us to recieve our information back in JSON format so that it is easy to manipulate.
var bodyParser = require('body-parser');
//the purpose of express is to make routing easy.
var express = require('express');
//store express function in a variable called app.
var path = require('path');

var app = express();

//this port will take whatever port is defined by heroku- 8070 is a localhost placeholder.
var PORT = process.env.PORT || 8070;


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())


//requiring html route file on sever. 
require('./app/routing/htmlRoutes.js')(app);

//console.log allows us to know check whether the server is running.
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});