//check if  the js file is linked to html file
console.log("linked");
//check if jQuery is loaded
// $(document).ready(function(){
// 	if (jQuery) {  
// 	// jQuery is loaded  
// 	alert("Yeah!");
// 	} else {
// 	// jQuery is not loaded
// 	alert("Doesn't Work");
// 	}
// });
var fsCount = 0;
$(document).ready(function(){
	cardCreate();
// create button action that takes in the value of the button clicked and saves the value
	$(".flash").on("click",function(){
//variable saving the value of button clicked
		var button = $(this).attr("value");
		//console.log(button);
//disable buttons so that user cannot change choice until making that iteration of flashcard
		$(".flash").addClass("disabled");

//if/else statement that will change the prompt depending which button is clicked
		if(button == "basic"){
			console.log("flashcard format will be basic")
// use form for the user to fill out specific to basic
			$("#formSubmit").on("click",function(){
				var front = $("#front").val().trim();
				var back = $("#back").val().trim();
				console.log(front +"\n"+ back);
//reset the input textbox and reactivate the flashcard buttons
				reset();
			})
		}else{
			console.log("flashcard format will be cloze")
// use form for the user ro fill out specific to cloze
			$("#formSubmit").on("click",function(){
				var front = $("#front").val().trim();
				var back = $("#back").val().trim();
				console.log(front +"\n"+ back);
//reset the input textbox and reactivate the flashcard buttons
				reset();
			})
		}
	});
});
//function to reset the form and buttons to original states
function reset(){
	$("#front").val("");
	$("#back").val("");
	$(".flash").removeClass("disabled");
};
//function to create new flashcard
function cardCreate(){
	// fsCount++;
	// //add column div
	// var divCreator =""
	// divCreator += "<div class='col s12 m6'><div class='card blue-grey darken1'><div class='card-content white-text activator'><span class='card-title'>Card Title</span><p>sample text</p></div><div class='card-reveal'><span class ='card-title grey-text text-darken-4'>Card Title<i class='material-icons right'>close</i></span><p>sample text revealed</p></div></div>";
	// divCreator += "</div>";
	// console.log(divCreator)
	// var newCard = $(''+divCreator+'');
	$("#display").append("<div class='col s12 m6'><div class='card blue-grey darken1'><div class='card-content white-text activator'><span class='card-title'>Card Title</span><p>sample text</p></div><div class='card-reveal'><span class ='card-title grey-text text-darken-4'>Card Title<i class='material-icons right'>close</i></span><p>sample text revealed</p></div></div></div>"
);

	// var col = $("<div class= 'YYY col s12 m6'>");
	// var cardBkgd = $("<div class= 'XXX card blue-grey darken 1'>");
	// var cardContent = $("<div class= 'FRONT card-content white-text activator'>");
	// var cardText = $("<span class= 'card-title'>Card Title</span><p>sample text</p>");
	// var cardReveal = $("<div class='BACK card-reveal'>");
	// var revealContent = $("<span class='card-title grey-text text-darken-4'>Card Title<i class= 'material-icons right;>close<i/></span><p>Reveal sample text</p>");
	// $("#display").append(col);
	// $(".YYY").append(cardBkgd);
	// $(".XXX").append(cardContent);
	// $(".FRONT").append(cardText);
	// $(".XXX").append(cardReveal);
	// $(".BACK").append(revealContent);

};

cardCreate();

