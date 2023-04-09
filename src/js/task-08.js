// отримуємо доступ до форми і її елементів
const form = document.querySelector('.login-form');
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

// налаштовуємо обробник події submit на формі
form.addEventListener('submit', (event) => {
// запобігаємо перезавантаженню сторінки
event.preventDefault();

// перевіряємо чи всі поля заповнені
if (!emailInput.value.trim() || !passwordInput.value.trim()) {
alert('Please fill in all fields.');
return;
}

// створюємо об'єкт з даними форми
const formData = {
email: emailInput.value.trim(),
password: passwordInput.value.trim(),
};

console.log(formData);

// очищуємо значення полів форми
event.target.reset();
});
