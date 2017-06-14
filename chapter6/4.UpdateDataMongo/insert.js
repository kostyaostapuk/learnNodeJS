var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/usersdb";
var users=[
   {name:"Bob", age: 4},
   {name:"Tim", age: 64},
   {name:"Nick", age: 12},
   {name:"Tomas", age: 52}];
mongoClient.connect(url,function(err,db){
   if (err) {
      return console.log(err);
   }
   var collection=db.collection("users");
   collection.insertMany(users,function(err,result){
      console.log(result.ops);
      db.close();
   });
});
