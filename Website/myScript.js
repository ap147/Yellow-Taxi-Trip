function changePage() {
   
    console.log("pressed");
    if (document.getElementById("radioAdmin").checked == true)
        {
        
         document.getElementById("adminpage").style.display = "block";
        document.getElementById("login").style.display = "none";
        
        }
    else if (document.getElementById("radioDriver").checked == true)
        {
             
            document.getElementById("login").style.display = "none";
        document.getElementById("driverpage").style.display = "block";
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