// 1.Отримати доступ до елементів
// 2.Створити функцію яка буде обробляти подію input на повзунку
// 3.Додати обробник події input до повзунка 
// 4.Опціонально встановити початковий розмір тексту за допомогою властивості style у спані

const fontSizeControl = document.querySelector('#font-size-control');
  const text = document.querySelector('#text');

  fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value;
    text.style.fontSize = `${fontSize}px`;
  });