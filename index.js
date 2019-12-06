var message = document.querySelector('.message');
var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var sadButton = document.querySelector('.crying');

happyButton.addEventListener('click', displayHappyMessage);
sillyButton.addEventListener('click', displaySillyMessage);
sadButton.addEventListener('click', displaySadMessage);


function displayHappyMessage() {
  var currentMessage = message.innerText;
  var randomMessage = randomizeHappy();
  if (currentMessage === randomMessage) {
    console.log('message was the same, retrying');
    displayHappyMessage();
  } else {
    console.log('message was good!');
    message.innerText = randomMessage;
  }
}

function randomizeHappy() {
  var happy1 = "You go!";
  var happy2 = "Your smile just cheered me up.";
  var happy3 = "YAY!";
  var randomized = Math.floor(Math.random() * 3) + 1;
  if (randomized === 1) {
    return happy1;
  } if (randomized === 2) {
    return happy2;
  } if (randomized === 3) {
    return happy3;
  }
}

function displaySillyMessage() {
  var currentMessage = message.innerText;
  var randomMessage = randomizeSilly();
  if (currentMessage === randomMessage) {
    console.log('message was the same, retrying');
    displaySillyMessage();
  } else {
    console.log('message was good!');
    message.innerText = randomMessage;
  }
}

function randomizeSilly() {
  var silly1 = "Interesting response.";
  var silly2 = "Sounds...good?";
  var silly3 = "Me too.";
  var randomized = Math.floor(Math.random() * 3) + 1;
  if (randomized === 1) {
    return silly1;
  } if (randomized === 2) {
    return silly2;
  } if (randomized === 3) {
    return silly3;
  }
}

function displaySadMessage() {
  var currentMessage = message.innerText;
  var randomMessage = randomizeSad();
  if (currentMessage === randomMessage) {
    console.log('message was the same, retrying');
    displaySadMessage();
  } else {
    console.log('message was good!');
    message.innerText = randomMessage;
  }
}

function randomizeSad() {
  var sad1 = "Do you want to talk?";
  var sad2 = "Keep your head up!";
  var sad3 = "We can cry together!";
  var sad4 = "What can I do?";
  var randomized = Math.floor(Math.random() * 4) + 1;
  if (randomized === 1) {
    return sad1;
  } if (randomized === 2) {
    return sad2;
  } if (randomized === 3) {
    return sad3;
  } if (randomized === 4) {
    return sad4;
  }
}
