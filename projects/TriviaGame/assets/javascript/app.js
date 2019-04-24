/* Code for Trivia game
   Date: March 30,2019
   Author: German Garcia
*/

// Question set
var questionSet= [
    {
      question: "What was the first full length CGI movie?",
      answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
      correctAnswerIndex: 2
    },
    {
      question: "Which of these is NOT a name of one of the Spice Girls?",
      answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
      correctAnswerIndex: 1
    },
    {
      question: "Which NBA team won the most titles in the 90s?",
      answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
      correctAnswerIndex: 3
    },
    {
      question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
      answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
      correctAnswerIndex: 0
    },
    {
      question: "Which popular Disney movie featured the song, 'Circle of Life'?",
      answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
      correctAnswerIndex: 3
    },
    {
      question:
        "Finish this line from the Fresh Prince of Bel-Air theme song: 'I whistled for a cab and when it came near, the license plate said...'",
      answers: ["Dice", "Mirror", "Fresh", "Cab"],
      correctAnswerIndex: 2
    },
    {
      question: "What was Doug's best friend's name?",
      answers: ["Skeeter", "Mark", "Zach", "Cody"],
      correctAnswerIndex: 0
    },
    {
      question: "What was the name of the principal at Bayside High in Saved By The Bell?",
      answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
      correctAnswerIndex: 2
    }
  ];

  var timer = 0;
  var randomIndex = 0;
  var noOptionSelected = true;

// game will load when script is included in html form
$(document).ready(function(){
    // initialize global variables
    var counter = 20;

    // restart game (new game)

    function newGame() {
        
        noOptionSelected = true;
        counter = 20;
        timer = 0;

        $("#counter").text(counter);
        $("#results").text("");

        /* Draw the question and options and a 'Start' button */
        /* Get random ID from list of words */
        randomIndex =  Math.floor(Math.random() * questionSet.length);
        // console.log("randomIndex: " + randomIndex);
        // console.log("randomQuestion: " + questionSet[randomIndex].question);

        // grab reference to elements in the html form:

        // 0. Grabbing a reference to the <span> below.
        var question = document.getElementById("question");
        var option1 = document.getElementById("Option1");
        var option2 = document.getElementById("Option2");
        var option3 = document.getElementById("Option3");
        var option4 = document.getElementById("Option4");
        var correctAnswer = document.getElementById("CorrectAnswer");

        question.textContent = questionSet[randomIndex].question; 
        option1.textContent = questionSet[randomIndex].answers[0];
        option2.textContent = questionSet[randomIndex].answers[1];
        option3.textContent = questionSet[randomIndex].answers[2];
        option4.textContent = questionSet[randomIndex].answers[3];

    }

    function countDown(){
        counter = counter - 1;
        $("#counter").text(counter);
        if (counter === 0){
            console.log("Counter == 0" + counter);
            finishGame();
        }
    }

    function finishGame(){
      var customerAnswer = [document.getElementById("radioAnswer1").checked,
                            document.getElementById("radioAnswer2").checked,
                            document.getElementById("radioAnswer3").checked,
                            document.getElementById("radioAnswer4").checked]
      
      for (var i = 0; i < customerAnswer.length; i++){
        if (customerAnswer[i] === true){
          noOptionSelected = false;
          // console.log("customerAnswer in id: " + i);
          // console.log("correctAnswer: " + questionSet[randomIndex].correctAnswerIndex);
          if (i === questionSet[randomIndex].correctAnswerIndex){
            //console.log("YOU WIN");
            $("#results").text("YOU WIN");
          }
          else{
            //console.log("YOU LOSE");
            $("#results").text("YOU LOSE");
          }

        } 
      } 

      if(noOptionSelected === true){ 
        //No option selected 
        // print you have to select an option. Start the game again.
        //console.log("YOU MUST SELECT OPTION");
        $("#results").text("YOU MUST SELECT AN OPTION. PLAY AGAIN");
      }

      clearInterval(timer);

    }

    function startGame(){

        newGame();

        timer = setInterval(countDown, 1000);
        $("#counter").text(counter);
    }

    $("#startButton").on("click", function(event) {
      event.preventDefault();
      // Hide the button again:
      
      startGame();
    });

    $("#doneButton").on("click", function(event) {
      event.preventDefault();
      // Hide the button again:
      finishGame();
    });
    
});