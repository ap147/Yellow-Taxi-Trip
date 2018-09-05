function changePage() {

    console.log("pressed");
    if (document.getElementById("radioAdmin").checked == true) {

        document.getElementById("adminpage").style.display = "block";
        document.getElementById("login").style.display = "none";

    } else if (document.getElementById("radioDriver").checked == true) {

        document.getElementById("login").style.display = "none";
        document.getElementById("driverpage").style.display = "block";
        var userid;
        userid = document.getElementById("usernameID").value;
        console.log(userid);
        loadDoc(userid);
    }

}

function backHome() {
    location.reload();
}

function functionViewDrivers() {

    document.getElementById("viewTrips").style.display = "none";
    document.getElementById("viewDrivers").style.display = "block";


}

function functionViewTrips() {
    document.getElementById("viewDrivers").style.display = "none";
    document.getElementById("viewTrips").style.display = "block";

}

function loadDoc(loggedID) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText).body.Item;
            console.log(response);
            document.getElementById("driverName").innerHTML = response.Name;
        }
    };
    xhttp.open("GET", "https://q6c3ujfk81.execute-api.us-east-2.amazonaws.com/default/getDriverDetails?id=" + loggedID, true);
    xhttp.send();
}