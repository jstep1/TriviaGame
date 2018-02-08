// Declare initial global variables and reset function

var correct = 0;
var incorrect = 0;
var unanswered = 10;
var seconds = 15;
var index = 0;
var timer = null;

var reset = function () {
    correct = 0;
    incorrect = 0;
    unanswered = 10;
    seconds = 15;
    index = 0;
}

// List of possible trivia questions

var qs = [ {question: "At which firm did Jordan begin his career?",
            answers: ["Lehman Brothers", "Merrill Lynch", "JP Morgan Chase", "Berkshire Hathaway"],
            correct: ["answer1", "Lehman Brothers"],
            image: ""},
            
            {question: "What was the name of Jordan's yacht?",
            answers: ["The Duchess", "The Odyssey", "The Naomi", "The Wolf"],
            correct: ["answer3", "The Naomi"],
            image: ""},
            
            {question: "What was the primary criminal charge brought against Stratton Oakmont?",
            answers: ["Counterfeiting Currency", "Stock Manipulation", "Embezzlement", "Identity Theft"],
            correct: ["answer2", "Stock Manipulation"],
            image: ""},
            
            {question: "Who was Jordan Belfort's successor after he decided to step down?",
            answers: ["Nicky Koskoff", "Mark Hana", "Chester Ming", "Donnie Azoff"],
            correct: ["answer4", "Donnie Azoff"],
            image: ""},

            {question: "This fashion accessory company was used by Stratton Oakmont to defraud investors:",
            answers: ["Steve Madden", "Michael Kors", "Louis Vuitton", "Versace"],
            correct: ["answer1", "Steve Madden"],
            image: ""},

            {question: "In which country did Jordan create bank accounts to avoid United States financial regulators?",
            answers: ["Sweden", "Cayman Islands", "Switzerland", "Saudi Arabia"],
            correct: ["answer3", "Switzerland"],
            image: ""},
            
            {question: "What was the color of Jordan's Ferrari?",
            answers: ["White", "Red", "Black", "Yellow"],
            correct: ["answer1", "White"],
            image: "<iframe src='https://giphy.com/embed/6g8XtfomGPqjS' width='480' height='206' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/leonardo-dicaprio-wolf-of-wall-street-6g8XtfomGPqjS'></a></p>"},

            {question: "Donny Azhoff was married to his:",
            answers: ["Sister", "Neighbor", "College Roommate", "Cousin"],
            correct: ["answer4", "Cousin"],
            image: ""},

            {question: "Agent Patrick Denham, the lead investigator, was part of which government agency?",
            answers: ["Security and Exchange Commission (SEC)", "Federal Bureau of Investigation (FBI)", "Central Intelligence Agency (CIA)", "Department of Homeland Security (DHS)"],
            correct: ["answer2", "Federal Bureau of Investigation (FBI)"],
            image: ""},

            {question: "Which restaurant chain had shady business dealings with the same individuals involved in covering up Jordan's crimes?",
            answers: ["Domino's", "P.F. Chang's", "Benihana", "Outback Steakhouse"],
            correct: ["answer3", "Benihana"],
            image: ""} ];

// Functions used for gameplay including game initiation and answer selection

var questionStart = function() {
    if(index < 10) {
        countDown();
        $("#pic").empty();
        $(".toggle").attr("style", "");
        $("#question").text(qs[index].question);
        $("#answer1").text(qs[index].answers[0]);
        $("#answer2").text(qs[index].answers[1]);
        $("#answer3").text(qs[index].answers[2]);
        $("#answer4").text(qs[index].answers[3]);
    }
    else {
        endGame();
    }
}

var correctAnswer = function () {
    $(".ans").attr("style", "display: none");
    $("#question").text("Correct!")
    correct++;
    index++;
    unanswered--;
    clearTimeout(timer);
    timer = null;
    seconds = 15;
    setTimeout(questionStart, 5 * 1000);
}

var incorrectAnswer = function () {
    $(".ans").attr("style", "display: none");
    $("#question").html("Nope! The correct answer was: <b>" + qs[index].correct[1] + "</b>");
    incorrect++;
    index++;
    unanswered--;
    clearTimeout(timer);
    timer = null;
    seconds = 15;
    setTimeout(questionStart, 5 * 1000);
}

var noAnswer = function () {
    $(".ans").attr("style", "display: none");
    $("#question").html("Out of time! The correct answer was: <b>" + qs[index].correct[1] + "</b>");
    index++;
    clearTimeout(timer);
    timer = null;
    seconds = 15;
    setTimeout(questionStart, 5 * 1000);

}

var endGame = function () {
    $(".endr").attr("style", "display: none");
    $("#question").html("<p>Correct Answers: " + correct + "</p><br><p>Incorrect: " + incorrect + "</p><br><p>Unanswered: " + unanswered);
    reset();
    setTimeout(questionStart, 5 * 1000);
}

// Timer function

var countDown = function() {
    seconds--;
    if(seconds > 0){
       timer = setTimeout(countDown, 1000);
       $("#time").text(seconds);
    }
    else {
        noAnswer();
        seconds= 15;
    }
    
 }

// Click events for buttons throughout game

$("#strt").on("click", function() {
    $("#strt").attr("style", "display: none");
    questionStart();

});

$(".ans").on("click", function(event) {
    var choice = event.target.id;
    if(choice === qs[index].correct[0]) {
    correctAnswer();
    }
    else {
    incorrectAnswer();
    }
});

