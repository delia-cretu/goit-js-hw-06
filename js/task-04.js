// The counter consists of a span and buttons, which,
// when clicked, should increase and decrease its value by one.

// Create a variable, counterValue, that will store the current counter value
// and initialize it with 0.

// Add listeners for clicks on the buttons;
// inside them, increase or decrease the value of the counter.

// Update the interface with the new value of the variable counterValue.

var buttonDown = document.querySelectorAll("button")[0];
var buttonUp = document.querySelectorAll("button")[1];
var counter = document.querySelector("#value");

buttonDown.addEventListener("click", decrement);
buttonUp.addEventListener("click", increment);

function decrement() {
  counter.innerHTML--;
}

function increment() {
  counter.innerHTML++;
}
