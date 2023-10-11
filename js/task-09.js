// Write a script that changes the background colors of the <body> element
// via inline style when clicking on button.change - color
// and outputs the color value to span.color.
// Use the getRandomHexColor function to generate a random color.

var button = document.querySelector("button");
button.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
