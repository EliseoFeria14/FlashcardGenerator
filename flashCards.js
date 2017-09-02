//Load npm inquirer
var inquirer = require("inquirer");

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
	}else{
		console.log("You chose " + card.flashCardType);
	}
});