var $ = document.querySelector.bind(document),
  $scrambledWord = $("#scrambledWord"),
  $attempt = $("#attempt"),
  $display = $("#display"),
  words = ["shape", "yes", "hot", "miss", "brought", "heat", "snow", "bring", "place", "work", "side", "part", "back", "through","the",  "and",  "you", "that",  "was", "for", "are", "with", "his", "they",  "this", "have", "from", "one", "had", "word", "but", "not", "what", "all", "were", "when", "your", "can", "said", "there", "use", "each", "which", "she",  "how", "their", "will", "other", "about", "out", "many", "then", "them", "these", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "see", "number", "way", "could", "people", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "get", "come", "made", "may", "part"],
  correct = null;

$("#new-game-btn").addEventListener('click', resetGame);
$("#guess-btn").addEventListener('click', guess);

resetGame();
function resetGame() {
  correct = words[Math.floor(Math.random() * words.length)];
  $scrambledWord.innerHTML = scrambleWord(correct);
  $attempt.value = '';
  $attempt.focus();
  $display.innerHTML = '';
}

 

function scrambleWord(word) {
  return word.split('').sort(() => 0.5 - Math.random()).join('');
}

var guesses = 0;
function guess() {
  var answer = $attempt.value;
  if (answer === correct) {
    container.innerHTML = 
    `  Correct!
    <br>
    <button onclick="window.location.reload()">New Word</button>`;
  
  }
  else {
    $display.innerHTML = "Incorrect";
    guesses += 1;
  }
  if (guesses === 3) {

container.innerHTML = 


  `
   Game Over
  <br>
The correct word was ${correct}

<br>
  <button onclick="window.location.reload()">New Word</button>`;
}
}
