var mongoClient=require("mongodb");
var url="mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function (err,db){

   if (err) {
      return console.log(err);
   }


   var col=db.collection("users");
   col.updateMany(
      {name: "Jove"},
      {$set: {name:"Tim"}},
         (err,result)=>{
            console.log(result);
            db.close();
         }
   );
});
