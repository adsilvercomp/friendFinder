//the api route is for the data. this route page will determine what the user sees
//as well as what data the user is able to post to the server to store.

module.exports = function(app){
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
    })
} 