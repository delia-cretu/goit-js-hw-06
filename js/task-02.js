// Create a separate <li> element.
// Be sure to use the document.createElement() method.
// add the ingredient name as its text content.
// add the item class to the element.
// insert all <li> to the ul#ingredients list in a single operation.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("ul#ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  li.classList.add("item");
  listIngredients.append(li);
});
