// constructor to build basic flash cards

var BasicCard = function(Front, Back){
	if (this instanceof BasicCard){
		this.front = Front;
		this.back = Back;

	}else{
		return new BasicCard(Front, Back);
	}	
};

BasicCard.prototype.displayFront = function(){
	console.log("Front:\n" +this.front+"\n");
};

BasicCard.prototype.displayBack = function(){
	console.log("Back:\n" +this.back+"\n");
};
//exporting BasicCard constructor
module.exports = BasicCard;

// //Tests

// var flash = new BasicCard("Who created the assembly line?","Henry Ford");

// flash.displayFront();
// flash.displayBack();
// //Testing scope safe construction
// var flash2 = BasicCard('Who created "My Neighbor Totoro"?', "Hayao Miyazaki");

// flash2.displayFront();
// flash2.displayBack();
