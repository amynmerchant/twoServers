var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var goodQuotes = ['Do what you love, love what you do.', 'Everything is temporary!', 'In error there is growth.', 'Go where there is no path and leave a trail.'];
var dwellQuotes = ['Being happy takes work.', 'Living in the past = unproductive.', 'Perception is reality.', 'Success is not final, failure is not fatal; it is the courage to continue that counts.'];

var randomNumber = Math.floor(Math.random() * (goodQuotes.length || dwellQuotes.length));
//console.log(randomNumber);

function handleRequestGood(request, response) {
    //response.end("Baloons and confetti @ " + request.url);
    response.end(goodQuotes[randomNumber] + request.url);
}

function handleRequestDwell(request, response) {
    //response.end("Not feeling it @ " + request.url);
    response.end(dwellQuotes[randomNumber] + request.url);
}

var server1 = http.createServer(handleRequestGood);
var server2 = http.createServer(handleRequestDwell);

server1.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
});

// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet

