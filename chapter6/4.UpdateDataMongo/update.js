var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function(err,db){
   if (err) {
      return console.log(err);
   }
   var collection=db.collection("users");
   collection.findOneAndUpdate(
      {age:4},
      {$set: {age:25}},
      function(err,result){
         console.log(result);
         db.close();
      }
   );
});
