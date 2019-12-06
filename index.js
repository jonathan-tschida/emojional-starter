var message = document.querySelector('.message');
var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var sadButton = document.querySelector('.crying');

happyButton.addEventListener('click', displayHappyMessage);
sillyButton.addEventListener('click', displaySillyMessage);
sadButton.addEventListener('click', displaySadMessage);


function displayHappyMessage() {
  var happy1 = "You go!";
  var happy2 = "Your smile just cheered me up.";
  var happy3 = "YAY!";
  var randomized = Math.floor(Math.random() * 3) + 1;
  if (randomized === 1) {
    message.innerText = happy1;
  } if (randomized === 2) {
    message.innerText = happy2;
  } if (randomized === 3) {
    message.innerText = happy3;
  }
}

function displaySillyMessage() {
  var silly1 = "Interesting response.";
  var silly2 = "Sounds...good?";
  var silly3 = "Me too.";
  var randomized = Math.floor(Math.random() * 3) + 1;
  if (randomized === 1) {
    message.innerText = silly1;
  } if (randomized === 2) {
    message.innerText = silly2;
  } if (randomized === 3) {
    message.innerText = silly3;
  }
}

function displaySadMessage() {
  var sad1 = "Do you want to talk?";
  var sad2 = "Keep your head up!";
  var sad3 = "We can cry together!";
  var sad4 = "What can I do?";
  var randomized = Math.floor(Math.random() * 4) + 1;
  if (randomized === 1) {
    message.innerText = sad1;
  } if (randomized === 2) {
    message.innerText = sad2;
  } if (randomized === 3) {
    message.innerText = sad3;
  } if (randomized === 4) {
    message.innerText = sad4;
  }
}
