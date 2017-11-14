//the html routes are there to help the user. Whenever a user clicks on a link
//their browser will understand, based on the information in this file, what page to deliver to them.
var path = require('path');

module.exports = function (app) {
   
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    

}
