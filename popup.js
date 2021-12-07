
window.onload = (event) => {
	setInterval(continueOnFeedback, 200);
};

function removeLogo(){
	var logo = document.getElementById('page-navbar');
	if (logo != null){
		logo.remove();
	}
	
	let topPt3 = document.getElementsByClassName('pt-3')[0];
	if (topPt3 != null){
		topPt3.remove();  
	}
}

function continueOnFeedback(){
	
	removeLogo();
	
	let feedbackBar = document.getElementsByClassName('feedback-bar-box')[0];
	
	if (feedbackBar != null){
		buttonToPress = document.getElementsByClassName('question-submit-btn');
		buttonToPress[0].click();
	}

	var questionEl = document.getElementById('task-question');
	if (questionEl != null){
		console.log("question el is: " + questionEl.innerHTML);
		if (questionEl.innerHTML == "Pytanie 8"){
			console.log("question el is: " + questionEl);
			let elements = document.getElementsByClassName('answer-single-btn');
			if (elements != null && elements[1] != null){
				buttonToPress = elements[1];
				buttonToPress.click();
			}

			buttonToPress = document.getElementsByClassName('question-submit-btn');
			buttonToPress[0].click();
		}
	}
}

document.onkeydown = function(event) {
	var x = event.keyCode;
	var letterPressed = String.fromCharCode(x);
 
	var activeElement = document.activeElement;
	if (activeElement.tagName.toLowerCase() === 'textarea'){
		//don't react on keypress if textarea is focused
		
	} else {
	 let elements = document.getElementsByClassName('answer-single-btn');
	  
	  if (elements.length == 0){
		elements = document.getElementsByClassName('answer-multi-btn');
	  }

	  var buttonToPress ;
	  if (x >= 65 && x <= 75){
		var index = x - 65;
		console.log("selecting: " + elements[index].innerHTML);
		buttonToPress = elements[index];
		buttonToPress.click();
		
		//h3 id="task-question" Pytanie 7 </h3?
		//var logo = document.getElementById('page-navbar');
		var questionEl = document.getElementById('task-question');
		//if question 7, answer c. then fill the text
		if (letterPressed == 'C' && questionEl.innerHTML == "Pytanie 7"){
			//class="answer-comment"
			let textArea = document.getElementsByClassName('answer-comment')[0];
			textArea.focus();
			textArea.value= 'Brak zainteresowania ze strony mieszkańców.';
			var event = new Event('change');
			textArea.dispatchEvent(event);
			buttonToPress = document.getElementsByClassName('question-submit-btn');
		    buttonToPress[0].focus();
		}
	  }
	}
	
	if (letterPressed == 'Q'){
		  buttonToPress = document.getElementsByClassName('question-submit-btn');
		  if (buttonToPress != null && buttonToPress[0] != null){
			  buttonToPress[0].click();
		  } else {		  
		  //if this is next document, try another thing
		  var blackBtn = document.getElementsByClassName('ui-btn-black')[1]
		  
		  console.log("black btn: " + blackBtn.innerHTML);
		  
		  blackBtn.click();
		  }
    }
	
	
   
  

};