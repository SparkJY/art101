/**
 * Author: JunYao Li, ZiHan Guo
 * Created:   2.02.2021
 * Lab 6
 **/

// Define variables
var myTransport = ["BMW X5","Bus","Subaru Crostrek","rides from friends"];

var myMainRide = {
  make: "BMW",
  model: "X5",
  color: "Jet Black",
  year: 1999
  };

// Output
document.writeln("I am usually getting around with my " + myTransport[0] + "<br>");
document.writeln("But for going to class, I often take  " + myTransport[1] + "<br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
