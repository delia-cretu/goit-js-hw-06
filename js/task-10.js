// Task 10 (optional)
// Write a script to create and clear a collection of elements.
// The user enters the number of elements into input and clicks the Create button,
// after which a collection is rendered.
// When you click on the Clear button, the collection is cleared.

// Create a createBoxes(amount) function that takes one parameter, a number.
// The function creates as many < div > as specified in amount
// and adds them to div#boxes.

// The dimensions of the very first <div> are 30px by 30px.
// Each element after the first one should be 10px wider and higher than the previous one.
// All elements must have a random HEX background color.

// Create a destroyBoxes() function that clears the contents of div#boxes,
// thereby removing all created elements.

var create = document.querySelector("#controls button");
create.addEventListener("click", createBoxes);

function createBoxes() {
  var amount = document.querySelector("#controls input").value;
  var boxSize = 20;

  for (var i = 0; i < amount; i++) {
    var newBox = document.createElement("div");
    newBox.classList.add("box");

    boxSize += 10;
    newBox.style.width = String(boxSize) + "px";
    newBox.style.height = String(boxSize) + "px";
    newBox.style.backgroundColor = getRandomHexColor();

    document.querySelector("#boxes").append(newBox);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var destroy = document.querySelectorAll("#controls button")[1];
destroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  var boxCount = document.querySelectorAll(".box").length;
  for (var j = 0; j < boxCount; j++) {
    document.querySelector(".box").remove();
  }
}
