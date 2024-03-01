var token_; // variable will store the token
var userName = "d3bde483f964821008c882ecd5e25efa"; // app clientID
var passWord = "?N!Gf3(7WB"; // app clientSecret
var caspioTokenUrl = "https://dev75213.service-now.com/oauth_token.do"; // Your application token endpoint  

function getToken(url, clientID, clientSecret, callback) {
    var request = new XMLHttpRequest(); 
    request.open("POST", url, true); 
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader('Access-Control-Allow-Origin', 'https://abhay7860t.github.io/RestApiCall/');
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            if (request.status == 200) {
                var response = JSON.parse(request.responseText);
                var key = response.access_token;
                token_ = key;
                callback(null, key); // Call the callback with the token
            } else {
                callback("Error getting token", null);
            }
        }
    };
    request.send("grant_type=client_credentials&client_id=" + encodeURIComponent(clientID) + "&client_secret=" + encodeURIComponent(clientSecret));
}

// Usage
getToken(caspioTokenUrl, userName, passWord, function(error, token) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Token:", token);
        // Do something with the token
    }
});



// function restCall() {
//     var requestBody = "{\"u_name\":\"Subash\",\"u_email\":\"subash@gmail.com\",\"u_phone_number\":\"7678789890\",\"u_password\":\"Abha@123\"}";

//     var client = new XMLHttpRequest();
//     client.open("post", "https://dev75213.service-now.com/api/now/table/u_userrecords");

//     client.setRequestHeader('Accept', 'application/json');
//     client.setRequestHeader('Content-Type', 'application/json');
//     client.setRequestHeader('Access-Control-Allow-Origin', 'https://abhay7860t.github.io/RestApiCall/');

//     //Eg. UserName="admin", Password="admin" for this code sample.
//     client.setRequestHeader('Authorization', 'Basic ' + btoa('AbhaySingh' + ':' + 'Abha@123'));

//     client.onreadystatechange = function () {
//         if (this.readyState == this.DONE) {
//             // var data = this.response;

//             document.getElementById("response").innerHTML = this.status + this.response;

//         }
//     };
//     client.send(requestBody);
// }





