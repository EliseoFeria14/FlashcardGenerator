var fs = require("fs");

var Logger = function(){
	this.pushBasic = function(front, back){
		fs.appendFileSync("basiclog.txt", "Front: "+ front+ "\nBack: "+back+"\n_____________________\n\n");
	};
	this.pushCloze = function(front, back, partial){
		fs.appendFileSync("clozelog.txt", "Front: "+ front+ "\nCloze: "+back+"\nPartial: "+partial+"\n_____________________\n\n");
	};
	this.readBasic = function(){
		console.log("Basic Flashcards\n");

		console.log(fs.readFileSync("basiclog.txt","utf8"));
	
	};
	this.readCloze = function(){
		console.log("Cloze Flashcards\n");
		
		console.log(fs.readFileSync("clozelog.txt", "utf8"));
	};
	this.readAll  = function(){
		console.log("Basic Flashcards\n");

		console.log(fs.readFileSync("basiclog.txt","utf8"));
		
		console.log("_____________________________");

		console.log("Cloze Flashcards\n");
		console.log(fs.readFileSync("clozelog.txt", "utf8"));
	}
};

module.exports = Logger;

//Test

// var front = "What is the Capital of Uruguay?";
// var back = "Montevideo"

// logger = new Logger();
// //logger.pushBasic(front,back);
// logger.readBasic();