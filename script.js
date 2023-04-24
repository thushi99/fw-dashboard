function ValidateIPaddress(ipaddress)
 {
	var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

	if(ipaddress.value.match(ipformat))
	{
		document.form1.text1.focus();
		return true;
	}
	else
	{
		alert("You have entered an invalid IP address!");
		document.form1.text1.focus();return false;
	}
}


//Date
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
var datestring = d.getDate()  + ", " + monthNames[d.getMonth()] + " " + d.getFullYear();

document.getElementById("date").innerHTML = datestring;

//Time
var t = new Date();

var datestring = d.getHours() + " : " + d.getMinutes();
document.getElementById("time").innerHTML = datestring;