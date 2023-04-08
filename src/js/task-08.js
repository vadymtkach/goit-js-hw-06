// отримути доступ до форми і її елементів
const form = document.querySelector('.login-form');
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

// налаштовути обробник події submit на формі
form.addEventListener('submit', (event) => {
  // запобігти перезавантаженню сторінки
  event.preventDefault();

  // перевірити чи всі поля заповнені
  if (!emailInput.value || !passwordInput.value) {
    alert('Please fill in all fields.');
    return;
  }

  // створити об'єкт з даними форми
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  
  console.log(formData);

  // очищуємо значення полів форми
  form.reset();
});
