var correct = 0;
var incorrect = 0;
var unanswered = 10;

var reset = function () {
    correct = 0;
    incorrect = 0;
    unanswered = 10;
    
}

var q1 = { question: "At which firm did Jordan begin his career?",
            answers: ["Lehman Brothers", "Merrill Lynch", "JP Morgan Chase", "Berkshire Hathaway"],
            correct: "<b>Lehman Brothers</b>"
            }

var q2 = { question: "What was the name of Jordan's yacht?",
            answers: ["The Naomi", "The Duchess", "The Odyssey", "The Wolf"],
            correct: "The Naomi"
}

var q3 = { question: "What was the primary criminal charge brought against Stratton Oakmont?",
            answers: ["Stock Manipulation", "Counterfeiting Currency", "Embezzlement", "Identity Theft"],
            correct: "Stock Manipulation"
}

var q4 = { question: "Who was Jordan Belfort's successor after he decided to step down?",
            answers: ["Donnie Azoff", "Nicky Koskoff", "Mark Hana", "Chester Ming"],
            correct: "Donnie Azoff"
}

var q5 = { question: "This fashion accessory company was used by Stratton Oakmont to defraud investors:",
            answers: ["Steve Madden", "Michael Kors", "Louis Vuitton", "Versace"],
            correct: "Steve Madden"
}

var q6 = { question: "In which country did Jordan create bank accounts to avoid United States financial regulators?",
            answers: ["Switzerland", "Sweden", "Cayman Islands", "Saudi Arabia"],
            correct: "Switzerland"
}

var q7 = { question: "What was the color of Jordan's Ferrari?",
            answers: ["White", "Red", "Black", "Yellow"],
            correct: "White"
}

var q8 = { question: "Donny Azhoff was married to his:",
            answers: ["Cousin", "Neighbor", "College Roommate", "Sister"],
            correct: "Cousin"
}

var q9 = { question: "Agent Patrick Denham, the lead investigator, was part of which government agency?",
            answers: ["Federal Bureau of Investigation (FBI)", "Security and Exchange Commission (SEC)", "Central Intelligence Agency (CIA)", "Department of Homeland Security (DHS)"],
            correct: "Federal Bureau of Investigation (FBI)"
}

var q10 = { question: "Which restaurant chain had shady business dealings with the same individuals involved in covering up Jordan's crimes?",
            answers: ["Benihana", "Domino's", "P.F. Chang's", "Outback Steakhouse"],
            correct: "Benihana"
}

// var mixQs = function () {
//     for(var i=1; i<= 10; i++)
//     {
//         var arr = [];
//         if(!arr.includes(qi)) {
//         qi = q + (Math.floor(Math.random() * 10) + 1);
//         arr.push(qi);
//         }
//     }
// }

// mixQs();

console.log(q1.question);

var correctAnswer = function () {
    $("#question").text("Correct!")
    correct++;
}

var incorrectAnswer = function () {
    $("#question").text("Nope! The correct answer was: " + q1.correct);
    incorrect++;
}

var noAnswer = function () {
    $("#question").html("Out of time! The correct answer was: " + q1.correct);
    unanswered--;
}

var seconds = 30;

var countDown = function() {
    seconds--;
    if(seconds > 0){
       setTimeout(countDown,1000);
       $("#time").text(seconds);
    }
    else {
        noAnswer();
        seconds = 30;
    }
    
 }

$("#strt").on("click", function() {
    setTimeout(countDown, 1000);
    $("#pic").empty();
    $("#question").text(q1.question);
    $(".toggle").attr("style", "");
    $("#strt").attr("style", "display: none");
    $("#answer1").text(q1.answers[0]);
    $("#answer2").text(q1.answers[1]);
    $("#answer3").text(q1.answers[2]);
    $("#answer4").text(q1.answers[3]);
});

$("#ans").on("click", function() {
    clearTimeout();
});

