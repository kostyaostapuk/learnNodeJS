var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/usersdb";

mongoClient.connect(url,function(err,db){
   if (err) {
      return console.log(err);
   }

   var collection=db.collection("users");
   var users=[{name:"Kostya", age: 19}, {name:"Ivan", age:20}];
   collection.insertMany(users,function(err,result){
      if (err) {
         return console.log(err);
      }
      console.log(result.ops);
      db.close();
   });
   db.collection("users").find().toArray(function(err,results){
      console.log(results);
      db.close();
   });

   /*
      DeleteMany()
   */
   db.collection("users").deleteMany({name:"Kostya"},function(err,result){
      console.log(result);
      db.close();
   });

   collection.deleteOne({name:"Alexey"},function(err,result){
      console.log(result);
      db.close();
   });

   collection.findOneAndDelete({age:20},function(err,result){
      console.log(result);
      db.close();
   });

   
   collection.drop();
});
