//Load npm inquirer
var inquirer = require("inquirer");
//Load basicCard.js
var BasicCard= require("./basicCard.js");
//Load clozedCard.js
var ClozedCard = require("./clozedCard.js");

///variable to save input from inquirer
var front = "";
var back = "";
//create user interface with inquirer
inquirer.prompt([

	{
		type: "list",
		name: "flashCardType",
		message: "What kind of FlashCard do you want to make?",
		choices: ["Basic","Cloze"]
	},
]).then(function(card){
	if(card.flashCardType === "Basic"){
		console.log("You chose "+ card.flashCardType+"\n")

		getCardInfo();
		
	}else{
		console.log("You chose " + card.flashCardType+"\n");

		getClozeInfo();
	}
});

//questions to ask
function getCardInfo(){
	inquirer.prompt([
		{
			type: "input",
			name: "front",
			message: "What will be on the front of the card?"
		},
		{
			type: "input",
			name: "back",
			message: "What will be on the back of the card?"
		}
	]).then(function(Info){
		var front = Info.front;
		var back = Info.back;
		//console.log(front);
		//console.log(back);

		var basic = new BasicCard(front, back);
		basic.displayFront();
		basic.displayBack();
	});
};

function getClozeInfo(){
	inquirer.prompt([
		{
			type: "input",
			name: "front",
			message: "What will be on the front of the card?"
		},
		{
			type: "input",
			name: "back",
			message: "What will be on the back of the card?"
		}
	]).then(function(Info){
		var front = Info.front;
		var back = Info.back;
		
		if(front.indexOf(back) >= 0){
			console.log("Cloze is part of Full");
			var cloze = new ClozedCard(front, back);
			cloze.displayFull();
			cloze.displayCloze();
			cloze.displayPartial();
		}else{
			console.log("Cloze is not part of Full. Make sure cloze matches with full");
			getClozeInfo();
		}

	});

};