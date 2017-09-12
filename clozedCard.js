var Logger = require("./logger.js");
//constructor to build cloze flash cards
var blank = function(){console.log("________________")};

var ClozeCard= function(Front, Back){
	if(this instanceof ClozeCard){
		this.front = Front;
		this.back = Back;
		this.partial= Front.replace(Back,"_________");
	}else{
		return new ClozeCard(Front, Back);
	}
};

ClozeCard.prototype.displayFull = function () {
	console.log("Full:\n"+ this.front+"\n");
};

ClozeCard.prototype.displayCloze = function () {
	console.log("Cloze:\n" + this.back+"\n");
};

ClozeCard.prototype.displayPartial = function () {
	console.log("Partial:\n" +this.partial+"\n");
};

ClozeCard.prototype.pushClozeLog = function(){
	var logger = new Logger();
	logger.pushCloze(this.front,this.back,this.partial);
};

//exporting ClozeCard constructor
module.exports = ClozeCard; 
//Tests
//checking when strings are like
//var flash = new ClozeCard("Samsung is a Korean Electronics Brand", "Samsung");
// console.log(flash.front);
// console.log(flash.back);
// console.log(flash.partial);
// flash.displayFull();
// flash.displayCloze();
// flash.displayPartial();

//checking when strings aren't like

// console.log("------------------");
// var flash2 = new ClozeCard("Apple is an american electronics brand", "So is MicroSoft");

// flash2.displayFull();
// flash2.displayCloze();
// flash2.checkStrings();