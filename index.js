// work item 1
// var clientId = 'd3bde483f964821008c882ecd5e25efa';
// var clientSecret = '?N!Gf3(7WB';
// var tokenUrl = 'https://dev75213.service-now.com/oauth_token.do'; // Token endpoint provided by your ServiceNow instance
// var username = 'AbhaySingh';
// var password = 'Abha@123';

// function generateToken(clientId, clientSecret, tokenUrl) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', tokenUrl, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://abhay7860t.github.io/RestApiCall/');

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 var response = JSON.parse(xhr.responseText);
//                 var accessToken = response.access_token;
//                 console.log('Access Token:', accessToken);
//                 // Handle the access token
//             } 
//             else {
//                 console.error('Error:', xhr.status);
//                 // Handle the error
//             }
//         }
//     };

//     var requestBody = JSON.stringify({
//         user_name: username,
//         user_password : password,
//         client_id: clientId,
//         client_secret: clientSecret
//     });

//     xhr.send(requestBody);
// }






// static records

// function restCall() {
//     var requestBody = "{\"u_name\":\"Aslin\",\"u_email\":\"aslin@gmail.com\",\"u_phone_number\":\"8978990956\",\"u_password\":\"Aslin@123\"}";

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



// dynamic records

function restCall() {

     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var phoneNumber = document.getElementById('phone').value;
     var password = document.getElementById('password').value;

     // Create an object with dynamic values
     var user = {
         u_name: name,
         u_email: email,
         u_phone_number: phoneNumber,
         u_password: password
     };

    // Convert the object to JSON string
     var requestBody = JSON.stringify(user);

     var client = new XMLHttpRequest();
     client.open("POST", "https://dev75213.service-now.com/api/now/table/u_userrecords");

     client.setRequestHeader('Accept', 'application/json');
     client.setRequestHeader('Content-Type', 'application/json');
     client.setRequestHeader('Access-Control-Allow-Origin', 'https://abhay7860t.github.io/RestApiCall/');

//     //Eg. UserName="admin", Password="admin" for this code sample.
     client.setRequestHeader('Authorization', 'Basic ' + btoa('AbhaySingh' + ':' + 'Abha@123'));

     client.onreadystatechange = function () {
         if (this.readyState == this.DONE) {
             var data = this.response;
             document.getElementById("response").innerHTML = this.status + this.response;
         }
     };

    client.send(requestBody);
 }


// work item 2
// getting data from the servicenow table and show in the browser console.

/*
function getData() {
    var requestBody = ""; 
    
    var client = new XMLHttpRequest();
    client.open("GET", "https://dev75213.service-now.com/api/now/table/incident?sysparm_limit=1");
    
    client.setRequestHeader('Accept', 'application/json');
    client.setRequestHeader('Content-Type', 'application/json');
    
    //Eg. UserName="admin", Password="admin" for this code sample.
    client.setRequestHeader('Authorization', 'Basic ' + btoa('AbhaySingh' + ':' + 'Abha@123'));
    
    client.onreadystatechange = function() { 
        if (this.readyState == this.DONE) {
            if (this.status === 200) {
                var response = JSON.parse(this.responseText);
                console.log("Response:", response);
                // You can handle the response here, for example:
                // document.getElementById("response").innerHTML = JSON.stringify(response);
            } else {
                console.error("Error:", this.status, this.statusText);
            }
        }
    }; 
    client.send(requestBody);
}
*/


