$(document).ready(function() {

	var correctCount = 0;
	var incorrectCount = 0;
	var unansweredCount = 0;
	var j = 0;
	var questions = [
		{
			"question": "Which album features the song 'Come Together'?",
			"choices" : ["Help!", "Rubber Soul", "Revolver", "Abbey Road"],
			"answer" : "3"
		},
		{
			"question": "Which of these songs was written by the band Aerosmith?",
			"choices" : ["Detroit Rock City", "Runnin' With the Devil", "Whole Lotta Love", "Sweet Emotion"],
			"answer" : "3"
		},
		{
			"question": "What album is certified as the best-selling of all time with 46 million sales?",
			"choices" : ["Hotel California", "Thriller", "Rummours", "Back in Black"],
			"answer" : "1"
		},
		{
			"question": "What song features the lyrics 'we don't need no education'?",
			"choices" : ["Hot for Teacher", "Another Brick in the Wall", "Don't Stand So Close to Me", "School's Out"],
			"answer" : "1"
		},
		{
			"question": "Which of these bands did not originate from the United Kingdom?",
			"choices" : ["Pink Floyd", "Black Sabbath", "The Doors", "Queen"],
			"answer" : "2"
		},
		{
			"question": "Which modern pop artist is known for singing 'Firework'?",
			"choices" : ["Adele", "Nicki Minaj", "Katy Perry", "Taylor Swift"],
			"answer" : "2"
		},
		{
			"question": "Who won the 2015 Grammy Award for Record of the Year?",
			"choices" :["Iggy Azalea", "Meghan Trainor", "Sia", "Sam Smith"],
			"answer" : "3"
		},
		{
			"question": "Which of these songs does not begin with a drum solo?",
			"choices" : ["Jump - Van Halen", "Billie Jean - Michael Jackson", "Walk This Way - Aerosmith", "My Sharona - The Knack"],
			"answer" : "0"
		},
		{
			"question": "What's the name of Sponge Bob's nextdoor neighbor?",
			"choices" : ["Mr. Krabs", "Patrick", "Squidward", "Sandy"],
			"answer" : "2"
		},
		{
			"question": "Which '90s rapper performed the song 'Gangsta's Paradise'?",
			"choices" : ["Notorious B.I.G.", "Ice Cube", "Snoop Dog", "Coolio"],
			"answer" : "3"
		}
	];

	var myInterval;

	$("#myStart").click(asd);

	function asd() {
		if (j < 10) {
			$("#myStart").hide();	
			$("#myQuestion").text(questions[j].question);
			timer();		
			for (var i = 0; i < questions[j].choices.length; i++) {
				$("#myChoices" + i).text(questions[j].choices[i]);
			}
		} else {
			$("#results").html("<p>Correct Answers: " + correctCount + "</p>");
			$("#results").append("<p>Incorrect Answers: " + incorrectCount + "</p>");
			$("#results").append("<p>Unanswered Questions: " + unansweredCount + "</p>");
			setTimeout(myFunction, 5000);
			function myFunction() {
			location.reload();
			}
		}

		
	}

	$(".myChoices").click(function() {

			var choice = $(this).attr("data-choice");		
			if (choice === questions[j].answer) {
				correctCount++;
				toastr["success"]("That is Correct.");
			} else {
				incorrectCount++;
				toastr["error"]("Wrong Answer.");
			}
	});

	function timer() {
		var t = 10;
		myInterval = setInterval(function() {

			if (t < 10) {
				$("#localTimer").html("0" + t);
			} else {
				$("#localTimer").html(t);
			}

			if (t === 0) {
				unansweredCount++;
				clearInterval(myInterval);
				j++;
				asd();
			} else {
				t--;
			}
		}, 1000);
	}

	$(".myChoices").click(function() {
		clearInterval(myInterval);
		j++;
		asd();
	});

	$("#myRestart").click(function() {
		location.reload();
	});

});