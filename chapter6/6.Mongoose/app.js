var mongoose=require("mongoose");
var Shema=mongoose.Shema;

//для работы с promise
mongoose.Promise=global.Promise;

//установка схемы
var userSheme=new Shema({
   name: String,
   age Number
});

//connection
mongoose.connect("mongodb://localhost:27017/userdb");

var User = mongoose.model("User", userSheme);
var user=new User({
   name: "Bill",
   age: 41
});

user.save(function(err)){
   mongoose.disconnect(); //disconnect from database

   if (err) {
      return console.log(err);
   }
   console.log("Saved object",user);
}
