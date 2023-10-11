var numberOfCateg = document.querySelectorAll(".item").length;
console.log("Number of categories: " + numberOfCateg);

var numberOfElements;
var categName;

for (i = 0; i < numberOfCateg; i++) {
  categName = document
    .querySelectorAll(".item")
    [i].querySelector("h2").innerHTML;

  numberOfElements = document
    .querySelectorAll(".item")
    [i].querySelectorAll("li").length;

  console.log(
    "Category: " + categName + "\n" + "Elements: " + numberOfElements
  );
}
