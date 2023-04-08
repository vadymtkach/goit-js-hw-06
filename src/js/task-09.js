
// 1.отримуємо посилання на елементи кнопки і span.color
// 2.додати обробник події click на кнопку щоб він викликав функцію getRandomHexColor
// 3.Змінити колір фону елемента body за допомогою інлайн-стилю та встановити вміст span.color

const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});