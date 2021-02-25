/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/16
 * License: Public Domain
 */
var userInput = document.getElementById("user-name");
var userInput2 = document.getElementById("user-name2");
var output = document.getElementById("output");
var output2 = document.getElementById("output2")
var button = document.getElementById("my-button");
var button2 = document.getElementById("my-button2");

function sortUserName() {
  // Gets the value of input field
  var userName = userInput.value;
  // split string to array, sort the array, and put it back to string
  var nameSorted = userName.split("").sort().join("");
  // Replaces the html in <div id=output> with the results
   var newEl = document.createElement("p");
   newEl.innerHTML = nameSorted;
   output.appendChild(newEl);
  //output.innerHTML = nameSorted;
}

function sortUserName2() {
  // Gets the value of input field
  var userName2 = userInput2.value;
  // split string to array, sort the array, and put it back to string
  var nameSorted2 = userName2.split("").sort().join("");
  // Replaces the html in <div id=output> with the results
   var newEl2 = document.createElement("p");
   newEl2.innerHTML = nameSorted;
   output2.appendChild(newEl);
  //output.innerHTML = nameSorted;
}

// Attach an event listener to the button
button.addEventListener("click", sortUserName);
