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





