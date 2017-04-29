  confirm("Press okay to get started");
  confirm("Guess the letter that the computer is thinking. Press any letter key on the computer. When guesses reach zero you lose!");
  alert("press any key to begin");
  
  var psychicAnswers =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var wins= 0;
  var losses= 0;
  var guessesLeft= 9;
  var lettersGuessed = [];

  document.onkeyup = function(event) {
      var userGuess = event.key; 
      lettersGuessed.push(userGuess); 

      var computerChoice = psychicAnswers[Math.floor(Math.random() * psychicAnswers.length)];
     
      if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        lettersGuessed= [];
        alert("Wow you are a psychic!");
      }
  
      else {
        guessesLeft--;
      }
      
      if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        lettersGuessed=[]
        alert("Wow you're a fake!")
      }
      var html = 
        "<p>Number of Wins: " + wins + "</p>" +
        "<p>Number of Loses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + lettersGuessed.join(', ') + "</p>" ; 
        
        document.getElementById("outcomes").innerHTML = html;
    }
		