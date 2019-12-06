var message = document.querySelector('.message');
var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var cryingButton = document.querySelector('.crying');

happyButton.addEventListener('click', displayHappyMessage);

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
