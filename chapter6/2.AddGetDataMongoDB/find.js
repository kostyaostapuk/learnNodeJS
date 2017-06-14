var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/usersdb";

mongoClient.connect(url,function(err,db){
   if (err) {
      return console.log(err);
   }
   db.collection("users").find({age:19}).toArray(function(err,results){
      console.log(results);
      db.close();
   });

   console.log("---findOne()---");
   db.collection("users").findOne(function(err,doc){
      console.log(doc);
      db.close();
   });
   console.log("---find()---");
   db.collection("users").find().toArray(function(err,results){
      console.log(results);
      db.close();
   });

   console.log("---findOne({name: 'Kostya'})---");
   db.collection("users").findOne({name:"Kostya"}, function(err,doc){
      console.log(doc);
   })
});
