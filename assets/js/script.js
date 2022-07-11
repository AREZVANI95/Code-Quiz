// Button to start quiz
var startButton = document.getElementById('start-btn')
// Button to check scores
var scoreButton = document.getElementById('score-btn')
// Variable for questions displayed to the user
var questionPrompt = document.getElementById('user-question')
// Variable for question container
var quizContainer = document.getElementById('pop-quiz')
//Variable for text prompt for the user
var hideText = document.getElementById('prompt')
// Button's for the answers
var answer1Btn = document.getElementById('questionbox1')
var answer2Btn = document.getElementById('questionbox2')
var answer3Btn = document.getElementById('questionbox3')
var answer4Btn = document.getElementById('questionbox4')

//Question Buttons will be hidden from the user.
quizContainer.setAttribute("style", "display: none");

//Time for the quiz
var countdown = document.querySelector('#timer')
var time = 60;
countdown.textContent = "Time Left " + time;

//Asks the questions to the user
var questions = [{
        title: "What is the CMC of Orvar, The All-Form?",
        choices: ["4", "5", "4.5", "5.5"],
        answer: "4"
    },

    {
        title: "How much less damage base set Charizard take from fighting moves?",
        choices: ["20", "30", "-30", "-20"],
        answer: "-30"
    },

    {
        title: "How many tributes does the Dark Magician need to tribute summon him?",
        choices: ["0", "1", "2", "3"],
        answer: "2"
    },

    {
        title: "What is Blaster Blade's grade and clan?",
        choices: ["Grade 2 - Royal Paladin", "Grade 3 - Royal Paladin", "Grade 1 - Shadow Paladin", "Grade 2 - Gold Paladin"],
        answer: "Grade 2 - Royal Paladin"
    }
]

function startQuiz() {

    // Will hide text form user
    hideText.setAttribute("style", "display: none");
    // Will show questions to user
    quizContainer.setAttribute("style", "display: true");
};

// Starts The Pop-Quiz
startButton.addEventListener("click", startQuiz)
/* 
var askQuestion = {
    correct: {
        0: "What is the CMC of Orvar, The All-Form?",
        1: "How much less damage base set Charizard take from fighting moves?",
        2: "How many tributes does the Dark Magician need to tribute summon him?",
        3: "What is Blaster Blade's grade and clan?",
    }
};

var questionAnswers = {
    answer: {
        
        0 : {
            0: "4",
            1: "5",
            2: "4.5",
            3: "5.5"},
        1 : {
            0: "-20",
            1: "-30",
            2: "30",
            3: "20"},
        2 : {
            0: "0",
            1: "1",
            2: "2",
            3: "4"},
        3 : {
            0: "Grade 2 - Royal Paladin",
            1: "Grade 3 - Royal Paladin",
            2: "Grade 1 - Shadow Paladin",
            3: "Grade 2 - Gold Paladin"},
    }
} 
*/