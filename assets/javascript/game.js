  confirm("Press okay to get started");
  confirm("Guess the letter that the computer is thinking. Press any letter key on the computer. When guesses reach zero you lose!");
  alert("press any key to begin");

  let psychicAnswers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let wins = 0;
  let losses = 0;
  let guessesLeft = 9;
  let lettersGuessed = [];

  document.onkeyup = function(event) {
      let userGuess = event.key;
      lettersGuessed.push(userGuess);

      let computerChoice = psychicAnswers[Math.floor(Math.random() * psychicAnswers.length)];

      if (userGuess === computerChoice) {
          wins++;
          guessesLeft = 9;
          lettersGuessed = [];
          alert("Wow you are a psychic!");
      } else {
          guessesLeft--;
      }

      if (guessesLeft === 0) {
          losses++;
          guessesLeft = 9;
          lettersGuessed = []
          alert("Wow you're a fake! " + computerChoice.toLowerCase() + "was the answer.")
      }
      let html =
          "<p>Number of Wins: " + wins + "</p>" +
          "<p>Number of Loses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses so far: " + lettersGuessed.join(', ') + "</p>";

      document.getElementById("outcomes").innerHTML = html;
  }