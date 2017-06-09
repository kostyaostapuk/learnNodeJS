morning=require("./morning.js");
evening=require("./evening.js");

module.exports={
   getMorningMessage:function(){
      console.log(morning);
   },
   getEveningMessage:function(){
      console.log(evening);
   }
}
