var tempid;
function changePage() {
    
     

    console.log("pressed");
    if (document.getElementById("radioAdmin").checked == true) {

        document.getElementById("adminpage").style.display = "block";
        document.getElementById("login").style.display = "none";
        
        tempid = document.getElementById("usernameID").value;
        
        

    } else if (document.getElementById("radioDriver").checked == true) {

        document.getElementById("login").style.display = "none";
        document.getElementById("driverpage").style.display = "block";
        var userid;
        userid = document.getElementById("usernameID").value;
        loadDriver(userid, 1);
        
    }

}

function backHome() {
    location.reload();
}

function functionViewDrivers() {

    document.getElementById("viewTrips").style.display = "none";
    document.getElementById("viewDrivers").style.display = "block";
    loadAdmin(tempid, 2);

}

function functionViewTrips() {
    document.getElementById("viewDrivers").style.display = "none";
    document.getElementById("viewTrips").style.display = "block";
    
    loadAdmin(tempid, 1);

}


function setbackground()
{
    window.setTimeout( "setbackground()", 50000); // 50000 milliseconds delay

    var index = Math.round(Math.random() * 5);

    var ImagePath = "image0.png"; // default image

    if(index == 1)
        ImagePath = "image1.jpeg"; 
    if(index == 2)
        ImagePath = "image2.png";
    if(index == 3)
        ImagePath = "image3.jpg";
    if(index == 4)
        ImagePath = "image4.jpg";
    if(index == 5)
        ImagePath = "image5.jpg"; 

    document.getElementsByTagName("body")[0].style.backgroundImage="url('"+ ImagePath + "')"

}

