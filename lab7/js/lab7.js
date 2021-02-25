/**
 * Author: JunYao Li, ZiHan Guo
 * Created:   2.04.2021
 * Lab 7
 **/

// Define variables
//function sortUserName(){
  /*function UserNameReverseSorter(){

    var UserName = window.prompt("Input");
    console.log("UserName = ", UserName);

    return UserNameReverseSorted
  }
*/


  function sortUserName(){
    var userName = window.prompt("name");
    //var nameSorted = Collection.sort(caps, String.CASE_INSENSITIVE_ORDER);
    var nameSorted = userName.toLowerCase().split("").sort().join("");
    //var nameSorted = userName.split(" ").join("");


    return nameSorted;
  }

document.writeln("Your New Name: ", sortUserName(), "<br>");
