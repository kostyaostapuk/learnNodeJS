var Emmiter=require("events");
var emmiter=new Emmiter();
var eventName="greet";

emmiter.on(eventName, function(){
   console.log("Привет!");
});

emmiter.emit(eventName);
