var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function(err,db){
   if (err) {
      return console.log(err);
   }
   var col=db.collection("users");
   col.updateOne(

      {name:"Tomas"},
      {$set:{name:"Tomas Jefferson", age:60}},
      (err,result)=>{
         console.log(result);
         db.close();
      }
   );
});
