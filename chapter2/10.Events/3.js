var emmiter=require("events");
var util=require("util");

function Hero(){

}
util.inherits(Hero,emmiter);

var skill="rot";
Hero.prototype.useRot=function(data){
   this.emit(skill,data);
}

var Pudge=new Hero();

Pudge.on(skill,function(data){
   console.log(data);
});

Pudge.useRot("З-з-з-з");
