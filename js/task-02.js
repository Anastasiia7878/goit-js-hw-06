const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');

const createLiItem = (ingredient) => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  return liItem;
};

const liItems = ingredients.map(ingredient => createLiItem(ingredient));

ulList.append(...liItems);