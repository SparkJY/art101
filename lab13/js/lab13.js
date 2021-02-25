/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/17
 * License: Public Domain
 */

//Create function
// var maxNums = document.getElementById("maxNums");
// var button = document.getElementById("my-button");

function fizzBuzz() {

// Loop through numbers 1 to 200, listing them as you go
  for (var i = 1; i<=maxNums; i++) {
    var fizzBuzzString = "";
// If the number is a multiple of 3, if should print "Fizz!"
   if(i%3 == 0) {
    fizzBuzzString = fizzBuzzString + "Fizz!";
  }
// If the number is a multiple of 5, it should print "Buzz!"
  if(i%5 == 0) {
    fizzBuzzString = fizzBuzzString + "Buzz!";
  }
// If the number is a multiple of 7, it should print "Boom!"
  if(i%7 == 0) {
    fizzBuzzString = fizzBuzzString + "Boom!";
  }
  // output
  fizzBuzzString = i + ":  " + fizzBuzzString;
  console.log(fizzBuzzString);

  $("#output").append("<p>" + fizzBuzzString +"</p>");
}
};

// document.getElementById("submit").addEventListener("Click", function () {
//   var max = document.getElementById("max").value;
//   console.log("Max number is : ", max)
//
// })
//recall the function
fizzBuzz();
//button.addEventListener("click", fizzBuzz());
