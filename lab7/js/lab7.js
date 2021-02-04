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


  //var userName = window.prompt ("Input your name");

  //console.log ("userName = ", userName);
  // split string to array
  /*
  var nameArray = userName.split ('');
  console.log("nameArray = ", nameArray);
  //sortUserName
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=, ", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);


  return sortUserName
}
*/
document.writeln("Your New Name: ", sortUserName(), "<br>");
