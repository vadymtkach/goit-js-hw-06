const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// 1.посилання на порожній список ul#ingredients
// 2.Ітерація по кожному елементу масиву ingredients
// 3.Всередині методу forEach(), створення нового елементу списку <li> 
// за допомогою методу document.createElement().
// 4.Додати текстовий вміст з назвою інгредієнта до створеного елементу списку <li> 
// 5.Додати клас "item" до створеного елементу списку <li>
// 6.Додати  елемент списку <li> до порожнього списку ul#ingredients


const ul = document.querySelector("#ingredients");

const createListItem = (ingredients) => {
  return ingredients.map((el) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = el;
    return li;
  });
};
const listItems = createListItem(ingredients);

ul.append(...listItems);


