var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/usersdb";
mongoClient.connect(url, function(err, db){

    var collection = db.collection("users");
    var users = [{name: "Tom", age: 23},{name: "Kostya", age: 19},{name: "Alexey", age: 20}];
    collection.insertMany(users, function(err, result){

        if(err){
            return console.log(err);
        }
        console.log(result.ops);
        db.close();
    });
});
