// ------ Global variables ------
wordArray = ["HELLO", "WORLD", "HOW", "ARE", "YOU", "DOING", "TODAY", "DUDE"];
var playerArray = [];
var inputArray = [];
var firstTimeFound = 0;
var secondTimeFound = 0;
var tempNumOfTries = 0;
var numberOfFailures = 0;
var numberOfFailures = 0;
var pauseGame = false;

/* ---- Global Variables for animation --- */
// var walkingDudeArray = [];
var walkingDudeArray = ["assets/images/DudeWalk_1.jpg", "assets/images/DudeWalk_2.jpg", "assets/images/DudeWalk_3.jpg", "assets/images/DudeWalk_4.jpg"];
var standingDude = "assets/images/standingDude.jpg";

var resultText = null;
var text = null;
var canvas = null;
var animate; 
var xPos = 0;
var i = 0;


/* ---------------------------------------
    init animation function
    ---------------------------------
*/
function InitAnimation() {
    setTimeout(function(){return 0;}, 400);
    clearTimeout(animate); 

    canvas = document.getElementById("walkingDude");
    canvas.setAttribute("src", walkingDudeArray[0]);
    canvas.style.left = '0px';
    canvas.style.position ='relative';

    resultText = document.getElementById("resultText");
    text = document.getElementById("text"); 

    text.textContent = "";
    resultText.setAttribute("class", "col-md-6 mb-3 alert alert-success text-center invisible");
    text.setAttribute("class","alert alert-success text-center invisible");
    i = 0;
    MoveCanvas();
}

function MoveCanvas() {
    pauseGame = true;
    xPos = parseInt(canvas.style.left, 10);
    if(400 >= xPos){
        if (i===4) { i = 0;}
        canvas.style.left = (xPos + 5) + 'px';
        // console.log("image= " + walkingDudeArray[i]);
        // console.log(i);
        canvas.setAttribute("src", walkingDudeArray[i]);
        i++;        
        animate = setTimeout(MoveCanvas, 80);
           
    } else{
        clearTimeout(animate); 
        // console.log("clearAnimation");
        canvas.setAttribute("src", standingDude);
        i = 0;
        pauseGame = false;
    }
    
}

function DrawWinningDude(){
    canvas.style.left = xPos;
    canvas.style.position ='relative';
    canvas.setAttribute("src", "assets/images/WinningDude.jpg")
    resultText.setAttribute("class", "col-sm-12 mb-3 alert alert-success text-center");
    
    text.setAttribute("class","alert alert-success text-center");
    text.textContent = "Well done!! Press 'Restart' to continue";
}

function DrawLosingDude(){
    canvas.style.left = xPos;
    canvas.style.position ='relative';
    canvas.setAttribute("src", "assets/images/LosingDude.jpg")
    resultText.setAttribute("class", "col-sm-12 mb-3 alert alert-danger text-center");
    
    text.setAttribute("class","alert alert-danger text-center");
    text.textContent = "Awwww! So sorry!! Press 'Restart' to try again";
    
}
/* --- End of animation functions --- */

/* Get random word from array of words */
function getRandomWord(){
        return (wordArray[Math.floor(Math.random() * wordArray.length)]);
}

var hangMan = {
    
    randomWord: "",
    numberOfTries: 0,
    
    HangmanPlayer: function(newRandomWord){
            
        this.randomWord = newRandomWord;
        this.numberOfTries = this.randomWord.length + 5;
    },

    // Procedure to check if we have a win or not
    doWeHaveWinner: function(){
        //  console.log("js - wordarray.len: " + randomWord.length + " playerArra.len: " + this.playerArray.length);
        var randomWord = arguments[0];
        for ( i = 0; i <= randomWord.length; i++) {
            if (randomWord[i] != playerArray[i]) 
                return false;
        }
        return true;
    },
    // If letter entered from keyboard is in random word, then 
    //      increase matches counter in 1, 
    //      increase failure counter in 1, 
    //      insert letter into the rigth position at players array
    matchCharFromUser: function(){
           
        var charFromUser = arguments[0]; 
        var randomWord = arguments[1];
        var nextResult = 0;
    
        //increase number of tries
        this.numberOfTries++;
        // console.log("random word: " + randomWord); 
        var result = randomWord.indexOf(charFromUser);
        // console.log ("js - result: " + result); 
        if (result >= 0){
            
            // insert char in the right position in the player Array
            playerArray[result] = charFromUser;
            // console.log("js - playerArray: " + playerArray);
            numberOfPositive++;
            console.log("2 winning attmps: " + numberOfPositive); 
            
            //check if char can be found again
            nextResult = result;
            while(nextResult>0)
            {
                nextResult = randomWord.indexOf(charFromUser, (nextResult+1));
                if (nextResult < 0) {
                    
                    break;
                }
                else
                    {
                        playerArray[nextResult] = charFromUser;
                        numberOfPositive++;
                    //    console.log("found it again in position: " + result + " player array: " + playerArray);
                    }
            }
            
        }
        else {
            numberOfFailures++;
        }

        return result;
    }
        
};

function NewHangmanGame (){
    console.log("NewHangmanGame...");
    // Call initial animation 
    InitAnimation();

    // Start calling the hangman object.
    // 1. Create new Hangman player
    newHangman = {};
    newHangman = new hangMan.HangmanPlayer(getRandomWord());
    numberOfFailures = 0;
    numberOfPositive = 0; 

    // 2. create player array and draw the lines
    screenPlayerArray = document.getElementById("playerArray");
    playerArray = []; 
    // init the player Array
    for(var i=0; i < newHangman.randomWord.length; i++){
        playerArray[i] = "_";
    }   
    screenPlayerArray.textContent = playerArray;

    // 2.1 Print number of tries:
    numberOfTries.textContent = newHangman.numberOfTries;
    attemptsLeft.textContent = newHangman.numberOfTries;
    tempNumOfTries = newHangman.numberOfTries;

    winningAttempts.textContent = "0";
    losingAttempts.textContent = "0";
    // restart the char log
    inputArray = [];
    userChar.textContent = " ";
    pauseGame = false;

    // console.log("init results. RandomWord: " + newHangman.randomWord);
    // console.log("init results. numberOfTries: " + newHangman.numberOfTries);
    // console.log("init results. playerArray: " + playerArray);

}

// 0. Grabbing a reference to the <span> below.
var userChar = document.getElementById("userText");
var screenPlayerArray = document.getElementById("playerArray");

NewHangmanGame();

// 3. we give JavaScript a function to execute when onkeyup event fires.
// -- for later: limit user to press only alphanumeric values
document.onkeyup = function(event) {

    var inputChar = event.key.toUpperCase();
    if (inputChar >= 'A' && inputChar <= "Z" && pauseGame === false) {
        inputArray.push(inputChar);

        // print the key strock in the screen 
        userChar.textContent = inputArray; 
        // print the number of tries left:
        attemptsLeft.textContent = tempNumOfTries - 1;
        tempNumOfTries = tempNumOfTries - 1; 
        /* 4. Match the userText with the word. If the char is in the string
                then print it into the array and return it.
                Otherwise print the failure count */
        if (hangMan.matchCharFromUser(inputChar, newHangman.randomWord) >= 0){
            screenPlayerArray.textContent = playerArray; 
            console.log("html - playerArray: " + screenPlayerArray.textContent); 
            //Print win counts, print number of attempts
            winningAttempts.textContent = numberOfPositive;
            // console.log("html - wins: " + winningAttempts.textContent);
        }
        else{
            //print losing count, print number of attempts 
            losingAttempts.textContent = numberOfFailures;
            // console.log("html - loses: " + losingAttempts.textContent); 
        }

        if (hangMan.doWeHaveWinner(newHangman.randomWord)){
            // console.log("YOU WIN"); 

            // Show winning character
            DrawWinningDude();
            pauseGame = true;
            $("#restart").on("click", function(event) {
                event.preventDefault();
                // Hide the button again:
                
                NewHangmanGame();
            });


        }
        if (tempNumOfTries == 0){
            // console.log("YOU LOST!!");

            // Show lossing character
            DrawLosingDude();
            pauseGame = true;
            $("#restart").on("click", function(event) {
                event.preventDefault();
                // Hide the button again:
                NewHangmanGame();
            });

        }
    }
}





