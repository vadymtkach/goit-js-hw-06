// 1.Оголосити змінну для лічильника
// 2.Отримати доступ до елементів кнопок і спану
// 3.Додати обробники подій для кнопок

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});