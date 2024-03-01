function getToken1() {
    var token_ // variable will store the token
    var clientID = "d3bde483f964821008c882ecd5e25efa"; // app clientID
    var client_secret = "?N!Gf3(7WB"; // app clientSecret
    var caspioTokenUrl = "https://dev75213.service-now.com/oauth_token.do"; // Your application token endpoint  
    var request = new XMLHttpRequest();
    var key;
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send("grant_type=client_credentials&client_id=" + clientID + "&" + "client_secret=" + clientSecret); // specify the credentials to receive the token on request
    request.onreadystatechange = function () {
        if (request.readyState == request.DONE) {
            var response = request.responseText;
            var obj = JSON.parse(response);
            key = obj.access_token; //store the value of the accesstoken
            token_ = key; // store token in your global variable "token_" or you could simply return the value of the access token from the function
        }
    }
    return token_;
}


function restCall() {
    var requestBody = "{\"u_name\":\"Subash\",\"u_email\":\"subash@gmail.com\",\"u_phone_number\":\"7678789890\",\"u_password\":\"Abha@123\"}";

    var client = new XMLHttpRequest();
    client.open("post", "https://dev75213.service-now.com/api/now/table/u_userrecords");

    client.setRequestHeader('Accept', 'application/json');
    client.setRequestHeader('Content-Type', 'application/json');
    client.setRequestHeader('Access-Control-Allow-Origin', 'https://abhay7860t.github.io/RestApiCall/');

    //Eg. UserName="admin", Password="admin" for this code sample.
    client.setRequestHeader('Authorization', 'Basic ' + btoa('AbhaySingh' + ':' + 'Abha@123'));

    client.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            // var data = this.response;

            document.getElementById("response").innerHTML = this.status + this.response;

        }
    };
    client.send(requestBody);
}





