//  1. написати код для знаходження списку ul#categories та всіх його елементів li.item
// 2. вивести загальну кількість категорій у консоль 
// 3.Для кожного елемента li.item в списку знайти тег h2 та всі елементи списку li що входять до цієї категорії
// 4.вивести назву категорії та кількість елементів у цій категорії в консоль

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});