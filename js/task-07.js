// Write a script that responds to changes in the value of input#font-size-control
// (input event) and changes the inline style of span#text by updating
// the font - size property.
// As a result, the text size will change responding to scrollbar dragging.

var scrollbar = document.querySelector("#font-size-control");
var text = document.querySelector("#text");

scrollbar.addEventListener("input", changeFontSize);

function changeFontSize() {
  var newFontSize = scrollbar.value + "px";
  text.style.fontSize = newFontSize;
}
