const ul = document.querySelector('ul#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liArray = ingredients.map(ingredient => {
  const li = document.createElement('li');

  li.textContent = "Potatoes";

  li.classList.add('item');

  return li;
});

ul.append(...ingredients);