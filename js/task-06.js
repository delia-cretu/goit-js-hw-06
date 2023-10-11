// Write a script that, when focus on input is lost (blur event),
// checks its contents for the correct number of entered characters.
// The number of characters in the input is specified in its data-length attribute.
// If the number of characters entered is correct, the input's border turns green,
// or red with a wrong number.
// To add styles, use the valid and invalid CSS classes,
// which you can find in the task source files.

var inputText = document.querySelector("#validation-input");
inputText.addEventListener("blur", validation);

function validation() {
  var correctLength = inputText.getAttribute("data-length");
  var realLength = inputText.value.length;
  if (Number(correctLength) !== realLength) {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  } else {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  }
}
