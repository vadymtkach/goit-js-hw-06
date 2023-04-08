// Отримати елемент інпуту та його значення
// Отримати довжину символів з атрибуту data-length
// Порівняти довжину значення інпуту з довжиною  атрибута
// Додати або видалити CSS-класи відповідно до результату перевірки

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const inputValue = inputEl.value.trim();
  const expectedLength = parseInt(inputEl.getAttribute("data-length"), 10);

  if (inputValue.length === expectedLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});