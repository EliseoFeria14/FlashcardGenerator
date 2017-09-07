//constructor to build cloze flash cards
var blank = function(){console.log("________________")};

var ClozeCard= function(Front, Back){
	if(this instanceof ClozeCard){
		this.front = Front;
		this.back = Back;
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
	var string = this.front;
	//console.log(string);
	//blank();
	var repl = this.back;
	//console.log(repl);
	//blank();
	var partialString = string.replace(repl,"_____________");
	console.log("Partial:\n" +partialString+"\n");
};

//exporting ClozeCard constructor
module.exports = ClozeCard; 
//Tests
//checking when strings are like
// var flash = new ClozeCard("Samsung is a Korean Electronics Brand", "Samsung");

// flash.displayFull();
// flash.displayCloze();
// flash.checkStrings();
// flash.displayPartial();

//checking when strings aren't like

// console.log("------------------");
// var flash2 = new ClozeCard("Apple is an american electronics brand", "So is MicroSoft");

// flash2.displayFull();
// flash2.displayCloze();
// flash2.checkStrings();