var friendData = require("../data/friends.js");

//the api route is for the data. this route page will determine what the user sees
//as well as what data the user is able to post to the server to store.
//nest a loop inside of another loop. the outer loop grabs the friend
// the inner loop compares the scores on the current friend 





//why is app being passed into this function?
module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        // console.log(res);
        // //*****the variable userData is the body of the request object
        var userData = req.body;
        console.log(userData);
        // //*****this is an object where the friend with the lowest difference will be stored
        var match = {
            name: "name to replace",
            photo: "link to replace",
            diff: 1000
        };
        
        // //******this loops through all of the friends in friends.js
        var allDifs = [];
        closestFriend = [];
        for (var i = 0; i < friendData.length; i++) {
            var difArray = [];
        // //*****the dif variable is the difference between the friend's score and the user's score
            var dif = 0;

        // //*****loop through the friend scores
            for (var j = 0; j < friendData[i].scores.length; j++) {
        

        // //*****the variable dif now equals the absolute difference between the friends and the user.
                dif =  Math.abs(parseInt(userData["scores[]"][j]) - friendData[i].scores[j]);
                console.log(dif);
                difArray.push(dif);
            }
        // //*****if dif is less than variable match.diff replace the match object data with the friend who has lowest absolute difference
            // if (dif < match.diff) {
            //     match.name = friendData[i].name;
            //     match.photo = friendData[i].photo;
            //     match.diff = dif;
            // }
            var sum = difArray.reduce((a, b) => a + b);
            allDifs.push(sum);
            console.log("allDifs array");
            console.log(allDifs);
            //sort the allDifs array and select the number at position 0
            var sortedDifs = allDifs.sort(function(a, b){return a-b});
            //Declare it as variable called smallestDif
            var smallestDif = sortedDifs[0];
            console.log("smallestDif");
            console.log(smallestDif);
            //loop through the allDifs array. 
            for (var x=0; x<allDifs.length; x++){
                //if smallestDif === alldifs[i]
                if(smallestDif === allDifs[x]){
                    console.log("This is the one");
                    console.log(allDifs[x]);
                    console.log(friendData[x]);
                    
                    // closestFriend.push(friendData[x]);
                    
                }
            
            }
            
            
            //push the closest friend[i] to a new array
            //

            //have an array of arrays go through that array and find the lowest number
            //push all of those difference arrays to a single array
            //each of their indexes in the global array is still going to refer to the index of the friend
            //loop over that array of arrays and sum their values. 
            //each time you loop over it you can have a maximum variable and a max index
            //if the sum of this current array is greater than the max, set the max equal to this sum. 
        
        }
        //*****this pushes the userData to the friendArray
        // friendData.push(userData);
        // res.json(match);
    
//after these first two forloops you should end up with an array of arrays
//the total difference of the friends that first submitted the form and the friend files.

    });

   

    app.get("/api/friends", function (req, res) {
        //this should send userData in json format as a response to the client. 
        console.log(req);
        res.json(friendData);
        // res.json(match);
    });
}


