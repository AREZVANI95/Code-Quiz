// Button to start quiz
var startButton = document.getElementById('start-btn')
// Button to check scores
var scoreButton = document.getElementById('score-btn')
//Time for the quiz
var timer = 60;

//Initialize the display timer at default value
htmltimer.textContent = timer;

//Asks the questions to the user
var askQuestion = {
    correct: {
        0: "What type of card is this?",
        1: "What is the CMC of this card?",
        2: "Which Region is this pokemon from?",
        3: "How many Tributes does this card need?",
        4: "What is this cards color identity?"
    }
};


var questionAnswers = {
    answer: {
        
        0 : {
            0: "",
            1: "",
            2: "",
            3: ""},
        1 : {
            0: "",
            1: "",
            2: "",
            3: ""},
        2 : {
            0: "",
            1: "",
            2: "",
            3: ""},
        3 : {
            0: "",
            1: "",
            2: "",
            3: ""},
        4 : {
            0: "",
            1: "",
            2: "",
            3: ""},
    }
}