//constructor to build cloze flash cards

var ClozeCard= function(Front, Back){
	if(this instanceof ClozeCard){
		this.front = Front;
		this.back = Back;
		this.displayFull = function () {
			console.log("Full:\n"+ this.front);
		};
		this.displayCloze = function () {
			console.log("Cloze:\n" + this.back);
		};
		this.checkStrings = function() {
			if(this.front.indexOf(this.back) >= 0){
				console.log("Cloze is part of Full");
			}else{
				console.log("Cloze is not part of Full. Make sure cloze matches with full");
			}
		}
	}else{
		return new ClozeCard(Front, Back);
	}
}

//Tests
//checking when strings are like
var flash = new ClozeCard("Samsung is a Korean Electronics Brand", "Samsung");

flash.displayFull();
flash.displayCloze();
flash.checkStrings();

//checking when strings aren't like

console.log("------------------");
var flash2 = new ClozeCard("Apple is an american electronics brand", "So is MicroSoft");

flash2.displayFull();
flash2.displayCloze();
flash2.checkStrings();