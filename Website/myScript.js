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