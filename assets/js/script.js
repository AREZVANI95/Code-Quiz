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
countdown.textContent = "Start Time " + time;

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

    // Will hide  user
    hideText.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
    scoreButton.setAttribute("style", "display: none");

    // Will show questions to user
    quizContainer.setAttribute("style", "display: true");

    //Question will start at the first question in the array.
    var questionBag = 0;

    //Pop-Quiz Begins
    questionPrompt.textContent = questions[questionBag].title; //Title of the Question
    answer1Btn.textContent = questions[questionBag].choices[0]; // first Choice
    answer2Btn.textContent = questions[questionBag].choices[1]; // Second Choice
    answer3Btn.textContent = questions[questionBag].choices[2]; // Third Choice
    answer4Btn.textContent = questions[questionBag].choices[3]; // fourth Choice

    //Making Function to go through the remaining questions
    function Continue() {
        //Writing a if statement to check for the remaining questions.
        if (questionBag >= 0) {
            if (questionBag === 4) {
                quizContainer.setAttribute("style, display:none");
            } else {
                questionBag++
                questionPrompt.textContent = questions[questionBag].title; //Title of the Question
                answer1Btn.textContent = questions[questionBag].choices[0]; // first Choice
                answer2Btn.textContent = questions[questionBag].choices[1]; // Second Choice
                answer3Btn.textContent = questions[questionBag].choices[2]; // Third Choice
                answer4Btn.textContent = questions[questionBag].choices[3]; // fourth Choice
            }
        }
    }

    var timeCountdown = setInterval(function () {
        if (time >= 1) {
            time--;
            countdown.textContent = "Time Left " + time;
        } else if (time === 0) {
            questionPrompt.setAttribute("style", "display: none");
            answer1Btn.setAttribute("style", "display: none");
            answer2Btn.setAttribute("style", "display: none");
            answer3Btn.setAttribute("style", "display: none");
            answer4Btn.setAttribute("style", "display: none");
            startButton.setAttribute("style", "display: true");
            scoreButton.setAttribute("style", "display: true");
            alert("Times Is Up!")
            clearInterval(timeCountdown);
        }
    }, 1000);

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