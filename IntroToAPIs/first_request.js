// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


var request = require("request");
request('http://worldclockapi.com/api/json/utc/now', function(error, response, body){
    if(!error && response.statusCode == 200){
        var parseData = JSON.parse(body);
        console.log(parseData["currentDateTime"] + "\n" + parseData["timeZoneName"]);
    }
});

