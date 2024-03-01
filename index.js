var clientId = 'd3bde483f964821008c882ecd5e25efa';
var clientSecret = '?N!Gf3(7WB';
var tokenUrl = 'https://dev75213.service-now.com/oauth_token.do'; // Token endpoint provided by your OAuth 2.0 provider

function generateToken(clientId, clientSecret, tokenUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', tokenUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var accessToken = response.access_token;
                console.log('Access Token:', accessToken);
                // Handle the access token
            } else {
                console.error('Error:', xhr.status);
                // Handle the error
            }
        }
    };

    var requestBody = 'grant_type=client_credentials' +
        '&client_id=' + encodeURIComponent(clientId) +
        '&client_secret=' + encodeURIComponent(clientSecret);

    xhr.send(requestBody);
}

// Call the function to generate the token
generateToken(clientId, clientSecret, tokenUrl);













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




