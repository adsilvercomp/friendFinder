var friendData = require("../data/friends.js");
//the api route is for the data. this route page will determine what the user sees
//as well as what data the user is able to post to the server to store.


//practicing solution

// this function returns the friends array minus the user
function FriendsLoop() {
    var friends = [];
    for (var y = 0; y < friendData.length - 1; y++) {
        friends.push(friendData[y].scores);
    }
    return friends;
}

// then use a recursive loop to loop through all of the friends
//pass the individual friends and user into the compare function
function recursiveFriendLoop() {
    //set a counter at 0 so that the first person in the array is measured first.
    var person = 0;
    // console.log(person);
    var uNumber = friendData.length - 1;
    // console.log(uNumber);
    var user = friendData[uNumber].scores;
    // console.log(user);
    var friendScoresArr = FriendsLoop();

    console.log("friends");
    console.log(friendScoresArr[person]);



    if (person < friendScoresArr.length) {
         console.log(friendScoresArr[person]);
         console.log(user);
       
            compare(friendScoresArr[person], user);
             
        
        person ++; 
    }
}
recursiveFriendLoop();


// console.log(friendData[user].scores);
function compare(friendScoreArr, user) {

    var totalDifference = []

    for (var x = 0; x < 10; x++) {
        
            // console.log(user);

            totalDifference.push(Math.abs(friendScoreArr[x] - user[x]));

        
        
    }
    console.log("difference");
    console.log(totalDifference);
    finalDifference(totalDifference);
    console.log(finalDifference(totalDifference) +3);
}

// console.log("compare");
// console.log(compare());



function addDifference(total, num) {
    return total + num;
}

function finalDifference(totalDifference) {
    console.log("number");
    console.log(totalDifference);
    var dif = totalDifference.reduce(addDifference);
    console.log("..")
    console.log(dif);
    return dif;
}




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


