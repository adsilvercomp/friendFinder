var friendData = require("../data/friends.js");
//the api route is for the data. this route page will determine what the user sees
//as well as what data the user is able to post to the server to store.




//practicing solution

// console.log(friendData[user].scores);
function compare() {
    //user is the last person in the friendsArray
    var user = friendData.length - 1;
    //this is returning the second to last person in the array
    var friends = friendData.length - 2;
    // var userDifference = [];
    // var friendDifference = [];
    var totalDifference = []

    for (var x = 0; x < 10; x++) {
        if(friendData[user].scores[x]!==friendData[friends].scores[x]){
            // userDifference.push(friendData[user].scores[x]);
            // friendDifference.push(friendData[friends].scores[x]);
            //this is only recording the first set of numbers that are different. 
            totalDifference.push(Math.abs(friendData[user].scores[x] - friendData[friends].scores[x]));
            console.log(friendData[user].scores[x]);
            console.log(friendData[friends].scores[x])
        
        }
       
    }
    return totalDifference;
}

console.log(compare());

function addDifference(total, num){
    return total + num;
}

totalDifference.reduce(addDifference);



module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        //placing the user's data in a variable.
        var user = friendsArray.length - 1;
        var friends = friendsArray.length - 2;

        //figure out a way to post the user's data object to friends.js
        friendData.push(req.body);
        console.log(req.body);

        //this route should also be used for the compatability logic.

        //compare all of the friend arrays to the user array to see, calculate which is the best match.
        //loop through friends.scores


    });

    app.get("/api/friends", function (req, res) {
        //this should send userData in json format as a response to the client. 
        res.json(friendData);
    });
}


