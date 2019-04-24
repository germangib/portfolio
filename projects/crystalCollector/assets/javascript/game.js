// Javascript for Crystal Collector game
// DEveloped by German Garcia
// Date of last change: March 16, 2019
// Version: original

// game will load when script is included in html form
$(document).ready(function(){
    // initialize global variables

    var totalAddition = 0;
    var userWins = 0;
    var userLoses = 0;
    var randomCrystalOne = 0;
    var randomCrystalTwo = 0;
    var randomCrystalThree = 0;
    var randomCrystalFour = 0;
    var randomNumberToMatch = 0;
    var firstGame = true;

    // restart game (new game)

    function newGame() {
        generateRandomNumber2Match();
        generateRandomNumberCrystals();

        totalAddition = 0;

        console.log("number2Match: " + randomNumberToMatch); 

        $("#score").text(totalAddition);
        $("#scoreToMatch").text(randomNumberToMatch);

        if(firstGame){
            $("#wins").text("0");
            $("#loses").text("0");
        }
    }

    function generateRandomNumber2Match() {
        //The random number shown at the start of the game should be between 19 - 120.
        // Each crystal should have a random hidden value between 1 - 12.
        randomNumberToMatch = Math.floor((Math.random() * 120) + 19);
        // $("#scoreToMatch").html(randomNumberToMatch);

        console.log("randomNumber2Match: " + randomNumberToMatch);
    }

    function generateRandomNumberCrystals(){
        randomCrystalOne = Math.floor((Math.random() * 12) + 1); 
        randomCrystalTwo = Math.floor((Math.random() * 12) + 1); 
        randomCrystalThree = Math.floor((Math.random() * 12) + 1); 
        randomCrystalFour = Math.floor((Math.random() * 12) + 1); 

        console.log("randomCrystal1: " + randomCrystalOne);
        console.log("randomCrystal2: " + randomCrystalTwo);
        console.log("randomCrystal3: " + randomCrystalThree);
        console.log("randomCrystal4: " + randomCrystalFour);
    }

    function getCrystalAddition(crystalNumber){
        totalAddition = totalAddition + crystalNumber;
    }

    // Catch on-click event and add to score

    $("#crystal_one").on("click", function(event){
        event.preventDefault();
        getCrystalAddition(randomCrystalOne);
        $("#score").text(totalAddition);
        doWeHaveWinner();
    });

    $("#crystal_two").on("click", function(event){
        event.preventDefault();
        getCrystalAddition(randomCrystalTwo);
        $("#score").text(totalAddition);
        doWeHaveWinner();
    });

    $("#crystal_three").on("click", function(event){
        event.preventDefault();
        getCrystalAddition(randomCrystalThree);
        $("#score").text(totalAddition);
        doWeHaveWinner();
    });

    $("#crystal_four").on("click", function(event){
        event.preventDefault();
        getCrystalAddition(randomCrystalFour);
        $("#score").text(totalAddition);
        doWeHaveWinner();
    });

    function doWeHaveWinner() {
        if (totalAddition === randomNumberToMatch) { //winner
            newGame();
            userWins++;
            $("#wins").text(userWins);
            console.log("win: " + userWins);
        } else if (totalAddition > randomNumberToMatch) { //loser
            newGame();
            userLoses++;
            $("#loses").text(userLoses);  
            console.log("loses: " + userLoses); 
        }
    }

    //Start the game
    newGame();
    firstGame = false;

});