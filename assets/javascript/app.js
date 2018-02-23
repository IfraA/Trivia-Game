// $(document).ready(function()){
//create an object containing all the questions and variables for timer count and right, wrong answers
// var timer = 30;
var right = 0;
var wrong = 0;
var unanswered = 0;
var trivia = [
	{ 
		question: "Name the largest freshwater lake in the world?",
		Choices: ["Lake Superior","Lake Merritt","Lake Hurron","Lake Victoria"],
		Answer: "Lake Superior",
		id: "q1",
	},
	
	{ 
		question:"Where would you find the Sea of Tranquility?",
		Choices: ["Moon","Switzerland","Australia","Saturn"],
		Answer: "Moon",
		id: "q2",
	},
	
	{ 
		question: "What is another word for lexicon?",
		Choices: ["Novel","Dictionary","Script","Prose"],
		Answer: "Dictionary",
		id:"q3",
	},
	
	{ 
		question: "Name the seventh planet from the sun.",
		Choices: ["Neptune","Pluto","Saturn","Uranus"],
		Answer: "Uranus",
		id: "q4"
	},
	
	{ 
		question: "Which actress has won the most Oscars?",
		Choices:["Katharine Hepburn","Meryl Streep","Sally Field","Sissy Spacek"],
		Answer: "Katharine Hepburn",
		id:"q5"
	},
];
console.log(trivia);

//create a function for the start click
$("#startbtn").click(function(){
	$("#btn-container").html("");
//create function for the trivia page
//call the quesAnd function here 
	quesAns();
	//call out the function for timer for it to start running once the game starts
	timer();
});

//create a timer function
function timer(){
	time = 10;
	intervalId = setInterval(count, 1000);
	console.log(intervalId);
}
function count(){

    time--;
    $("#timer").text("Time remaining: " +time+ " seconds");
    if(time < 0){
        $("#timer").text("TIMES UP!");
        clearInterval(intervalId);
     	checkGuess();
	   
    }   
}

//create function for question answer function with for loops so it runs through the question loop and then options for each question

function quesAns(){

	for(var q = 0; q < trivia.length; q++){
		$("#QA").append("<div id='"+trivia[q].id+"' class='ques'>");
		$("#QA").append("<div>" + trivia[q].question + "</div>");
	//create a for loop to run through the trivia and display the four choices for each answer
		for(var c = 0; c < 4; c++){
			var selection = trivia[q].Choices[c];
			var ans = trivia[q].id;
			//input radio is to create the clickable circles
			//input = radio 
			//name = (question number it is at)question[q] value = choice of the question
			$("#QA").append("<input type= 'radio' name = '"+ans+"' value = '"+selection+"'><label class='options'>"+selection+'</label>');
		}	
		$("#QA").append("</div>");
	}
}

//create a function to check for correct, wrong and unanswered
function checkGuess() {
	
	//check for the length of the input which should equal zero when unanswered
	if($("input[name=q1]:checked").length === 0) {
		unanswered++;
	}

	else if($("input[name=q1]:checked").val() == trivia[0].Answer) {
		right++ ;
	}
	
	else { wrong++ 
	}
	//q2
	if($("input[name=q2]:checked").length === 0) {
		unanswered++ ;
	}

	else if($("input[name=q2]:checked").val() == trivia[1].Answer) {
		right++ ;
	}
	
	else { wrong++ 
	};
	
	//q3
	if($("input[name=q3]:checked").length === 0) {
		unanswered++ ;
	}

	else if($("input[name=q3]:checked").val() == trivia[2].Answer) {
		right++ ;
	}
	
	else { wrong++ 
	};

	//q4
	if($("input[name=q4]:checked").length === 0) {
		unanswered++ ;
	}

	else if($("input[name=q4]:checked").val() == trivia[3].Answer) {
		right++ ;
	}
	
	else { wrong++ 
	};

	//q5
	if($("input[name=q5]:checked").length === 0) {
		unanswered++;
	}

	else if($("input[name=q5]:checked").val() == trivia[4].Answer) {
		right++;
	}
	
	else { wrong++
	};

  results();	

}
//show the results after game ends
function results(){
$("#QA").html( "Correct:  "+ right + " ");
$("#QA").append("</br> Wrong: " + wrong + " ");
$("#QA").append("</br>Unanswered: " +  unanswered + " ");
}


	