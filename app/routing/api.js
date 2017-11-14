var friendData = require ("../data/friends.js");
//the api route is for the data. this route page will determine what the user sees
//as well as what data the user is able to post to the server to store.

module.exports = function(app){
    app.post("/api/friends", function(req, res) {
        //figure out a way to post the user's data object to friends.js
        //then figure out a way to send that data to the browser.
        friendData.push(req.body);
        console.log(req.body);
    });

    //
    app.get("/api/friends", function(req, res) {
        //this should send userData in json format as a response to the client. 
        res.json(friendData);
    });
} 


