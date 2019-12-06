var message = document.querySelector('.message');
var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var cryingButton = document.querySelector('.crying');

happyButton.addEventListener('click', displayHappyMessage);
sillyButton.addEventListener('click', displaySillyMessage);

function displayHappyMessage() {
  var happy1 = "Your smile just cheered me up.";
  var happy2 = "You go!";
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
