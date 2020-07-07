var button = $('.button');
var resetBtn = $('.reset');
var greetname = $('.greet-name');
var animalEmoji = $('.animal-emoji');

var animals = {
  cat:"🐱",
  dog:"🐶",
  turtle:"🐢",
  fox:"🦊",
  cow:"🐮",
  pig:"🐷"
}

//for some reason the advance DOM is not working but I will try to improve it - must be with the emojis
button.on('click', sendGreeting);
resetBtn.on('click', reset);

function sendGreeting(event) {
  event.preventDefault();
  var nameInput = $('.name-input').val();
  var emojiInput = $('.emoji-input').val().toLowerCase();

  greetname.text(`Good Morning, ${nameInput}!`);
  //fix how the emojis appear and clean up some UI
  animalEmoji.text(animals[emojiInput]);
}

function reset() {
  document.getElementById("newForm").reset();
}
