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
// Button's for the next questions
var quest1Btn = document.getElementById('questionbox1')
var quest2Btn = document.getElementById('questionbox2')
var quest3Btn = document.getElementById('questionbox3')
var quest4Btn = document.getElementById('questionbox4')

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
    // Event that will move the user forwards as he chooses the right or wrong answer.
    quest1Btn.addEventListener("click", Continue);
    quest2Btn.addEventListener("click", Continue);
    quest3Btn.addEventListener("click", Continue);
    quest4Btn.addEventListener("click", Continue);

    //function to make the quiz timer countdown as the user takes the quiz
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
            setTimeout("location.reload(true);", 500);
        }
    }, 1000);

}
// Starts The Pop-Quiz
startButton.addEventListener("click", startQuiz)