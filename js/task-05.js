// Write a script that, when typing in the input#name - input input(input event),
// substitutes its current value into span#name - output.
// If the input is empty, the span should display the "Anonymous" string.

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", updateValue);

function updateValue() {
  textOutput.textContent = textInput.value || "Anonymous";
}
