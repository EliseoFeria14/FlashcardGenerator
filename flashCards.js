//Load npm inquirer
var inquirer = require("inquirer");
//Load basicCard.js
var BasicCard= require("./basicCard.js");
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
		console.log("You chose "+ card.flashCardType)

		getCardInfo();
		
	}else{
		console.log("You chose " + card.flashCardType);
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