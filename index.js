function restCall() {
    var requestBody = "{\"u_name\":\"AbhaySingh1\",\"u_email\":\"test@gmail.com\",\"u_phone_number\":\"7678985678\",\"u_password\":\"Abha@123\"}";

    var client = new XMLHttpRequest();
    client.open("post", "https://dev75213.service-now.com/api/now/table/u_userrecords");

    client.setRequestHeader('Accept', 'application/json');
    client.setRequestHeader('Content-Type', 'application/json');
    client.setRequestHeader('Access-Control-Allow-Origin', 'https://abhay7860t.github.io/RestApiCall/');
    // client.setRequestHeader("Access-Control-Allow-Credentials", "true");

    //Eg. UserName="admin", Password="admin" for this code sample.
    client.setRequestHeader('Authorization', 'Basic ' + btoa('AbhaySingh' + ':' + 'Abha@123'));

    client.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            // var data = this.response;

            document.getElementById("response").innerHTML = this.status + this.response;
            console.log(this.status + this.response, "Response")
            // var name = document.getElementById('name').value = data;
            // var email = document.getElementById('email').value = data;
            // var phone = document.getElementById('phone').value = data;
            // var password = document.getElementById('phone').value = data;
            // data = JSON.parse(data);
        }
    };
    client.send(requestBody);
}





