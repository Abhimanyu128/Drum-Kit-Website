// This part handles clicking on the buttons with the mouse

var drumArray = document.querySelectorAll(".drum");

for (var i = 0; i < drumArray.length; i++) {
  drumArray[i].addEventListener("click", function() {

    var buttonInnerText = this.innerText;
    makeSound(buttonInnerText);
    animateButton(buttonInnerText);
  })
}

// This part handles the keyboard button clicks triggering sounds

document.addEventListener("keydown", function(event){
  var keyPressed = event.key;
  // console.log(keyPressed);
  makeSound(keyPressed);
  animateButton(keyPressed);
});


//The function to make the sound
function makeSound(input){
  switch (input) {
    case "a":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "s":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "h":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(input);
  }
}

//The function to animate the buttons
function animateButton(input){
  var buttonPressed = document.querySelector("." + input);
  buttonPressed.classList.add("pressed");
  setTimeout(function(){
    buttonPressed.classList.remove("pressed");
  }, 100);
  //console.log(document.querySelector("." + input));
}
