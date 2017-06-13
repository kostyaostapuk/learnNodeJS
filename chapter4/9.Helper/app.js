var express=require("express");
var hbs=require("hbs");

var app=express();


//Хелперы позволяют создавать нам ф-ции,
//которые можно будет использовать многократно

/*
   getTime
*/
hbs.registerHelper("getTime", function(){
   myDate=new Date();
   hour=myDate.getHours();
   minutes=myDate.getMinutes();
   seconds=myDate.getSeconds();

   if (minutes<10) {
      minute="0"+minute;
   }
   if (seconds<10) {
      seconds="0"+seconds;
   }
   return `Текущее время: ${hour}:${minutes}:${seconds}`;
});

/*
   createStringList
*/
hbs.registerHelper("createStringList", function(array){
   var result="";
   for(var i=0; i<array.length;i++){
      result+="<li>"+array[i]+"</li>";
   }
   return new hbs.SafeString("<ul>"+result+"</ul>");
});

app.set("view engine", "hbs");

app.get("/", function(request,response){
   response.render("home.hbs", {
      fruit:["apple","lemon","banana","grape"]
   });
});
app.listen(3000);
