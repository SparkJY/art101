/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/17
 * License: Public Domain
 */

//Create function
// var maxNums = document.getElementById("maxNums");
// var button = document.getElementById("my-button");
var comicObj = {} ;

 function getAndPutData(apiURL) { $.ajax({
   url: apiURL,

   data: {},

   type: "json",

   success: function(date){

     comicObj = data;

     $('#output-image').html("<h2>"+ data.title +"</h2> <img src = " ) + data.img + "' title= '" + data.alt},

     error: function (jqXHR, textStatus, errorThrown) {

       console.log ("Error:", textStatus, errorThrown);
     }
   });

 }

 getAndPutData("https//xkcd.com/614/info.0.json");

 $('#backward').click(function(){
   var comicNum = comicObj.num - 1;
   var newUrl = "http://xkcd.com/"+ comicNum+"/info.0.json";
   getAndPutData(newUrl);
 })
