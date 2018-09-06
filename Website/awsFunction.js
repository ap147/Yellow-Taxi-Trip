
function loadData() {
    loadDriverTripR();
    loadAdminDriverR();
}

var adminDriverRAdmin = new Array();
var adminDriverRDriver = new Array();

var driverTripRDriver = new Array();
var driverTripRTrip = new Array();


function loadDriverTripR() {
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            for(var i = 0; i <response.Items.length;i++)
            {
                driverTripRTrip[i] = response.Items[i].tripID;
                driverTripRDriver[i] = response.Items[i].userID;
	           console.log(driverTripRDriver[i]+ " " + driverTripRTrip[i]);
            }   
        }
    };
    xhttp.open("GET", "https://82g3dn16l4.execute-api.us-east-2.amazonaws.com/default/getDriverToFareRelationShip", true);
    xhttp.send();
}

function loadAdminDriverR() {
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var response = JSON.parse(this.responseText);
            for(var i = 0; i <response.Items.length;i++)
                {
                    adminDriverRAdmin[i] = response.Items[i].adminID;
                    adminDriverRDriver[i] = response.Items[i].driverID;
                   //console.log(adminDriverRDriver[i]+ " " + adminDriverRAdmin[i]);
                }
            }
        };
                  
    xhttp.open("GET", "https://kgbcmhnvyi.execute-api.us-east-2.amazonaws.com/default/getAdminDriverRelationShip", true);
    xhttp.send();

}

function loadAdmin(loggedID, whichTabAdmin) {
    var idList = new Array();
    for(var i = 0; i < adminDriverRAdmin.length;i++){
        if(adminDriverRAdmin[i] == loggedID){
            idList.push(i);
        }
    }
    
    if (whichTabAdmin == 1)
        {
            for(i in idList)
            {
                console.log("getting Driver ID : "+ adminDriverRDriver[i]);

                loadDriverTrip(adminDriverRDriver[i], 2);
            }
        }
    else if (whichTabAdmin == 2)
        {
             for(i in idList)
            {
                console.log("getting Driver ID : "+ adminDriverRDriver[i]);

                loadDriver(adminDriverRDriver[i], 2);
            }
        }
}

function loadDriver(loggedID , whatToDo) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText).body.Item;
//         console.log(response);
           if (whatToDo == 1)
           {
               console.log("1");
               document.getElementById("driverName").innerHTML = response.Name;
            document.getElementById("driverNumber").innerHTML = (response["License Number"]);
            document.getElementById("driverexpire").innerHTML = (response["Expiration Date"]);
            }
            
            if (whatToDo == 2)
                {
                    console.log("2");
            var table = document.getElementById("adminDriverDetails");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.innerHTML = response.Name;
            cell2.innerHTML = (response["License Number"]);
            cell3.innerHTML = (response["Expiration Date"]);
                }
             
        }
    };
    xhttp.open("GET", "https://q6c3ujfk81.execute-api.us-east-2.amazonaws.com/default/getDriverDetails?id=" + loggedID, true);
    xhttp.send();
    
    loadDriverTrip(loggedID, 1);
}


function loadDriverTrip(loggedID, fromadmin) {
    //get fare IDs
    var idList = new Array();
    for(var i = 0; i < driverTripRDriver.length;i++){
        if(driverTripRDriver[i] == loggedID){
            idList.push(i);
        }
    }
    for(val in idList){
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText).body.Item;
            //add row to html table code
            
            if (fromadmin == 1)
                {
            var table = document.getElementById("driverFareTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.innerHTML = response.tpep_pickup_datetime;
            cell2.innerHTML = response.trip_distance + "Km";
            cell3.innerHTML = "$" + response.total_amount;
                }
            else if (fromadmin == 2)
                {
            var table = document.getElementById("adminTripsTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.innerHTML = response.tpep_pickup_datetime;
            cell2.innerHTML = response.trip_distance + "Km";
            cell3.innerHTML = "$" + response.total_amount;
                }
            
            console.log(response.trip_distance);
        }
        
        
    };
    xhttp.open("GET", "https://puorhbgvl2.execute-api.us-east-2.amazonaws.com/default/getDriverFairs?id="+driverTripRTrip[idList[val]], true);
    xhttp.send();
    }
}
