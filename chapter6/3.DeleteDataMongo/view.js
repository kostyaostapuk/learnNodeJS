var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/usersdb";

mongoClient.connect(url,function(err,db){
   if (err) {
      return console.log(err);
   }

   db.collection("users").find().toArray(function(err,results){
      console.log(results);
      db.close();
   });
});
