//Load npm inquirer
var inquirer = require("inquirer");
//Load basicCard.js
var BasicCard= require("./basicCard.js");
//Load clozedCard.js
var ClozedCard = require("./clozedCard.js");

var Logger = require("./logger.js");
///variable to save input from inquirer
var front = "";
var back = "";
//create user interface with inquirer
inquirer.prompt([

	{
		type: "list",
		name: "flashCardType",
		message: "What would you like to do?",
		choices: ["Make Basic","Make Cloze","View Cards"]
	},
]).then(function(card){
	if(card.flashCardType === "Make Basic"){
		console.log("You chose "+ card.flashCardType+"\n")

		getCardInfo();
		
	}else if(card.flashCardType === "Make Cloze"){
		console.log("You chose " + card.flashCardType+"\n");

		getClozeInfo();
	}else{
		console.log("You chose " + card.flashCardType+"\n");

		readLog();
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
		basic.pushBasicLog();
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
			cloze.pushClozeLog();
		}else{
			console.log("Cloze is not part of Full. Make sure cloze matches with full");
			getClozeInfo();
		}

	});

};

function readLog(){
	inquirer.prompt({
		type: "list",
		name: "logtype",
		message: "Which Flashcards would you like to view?",
		choices: ["Basic","Cloze","All"]
	}).then(function(log){
		

		if(log.logtype === "Basic"){
			logger = new Logger();
			logger.readBasic();
		}else if(log.logtype === "Cloze"){
			logger = new Logger();
			logger.readCloze();
		}else{
			logger = new Logger();
			logger.readAll();
		}
	});
};