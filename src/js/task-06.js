// Отримати елемент інпуту та його значення
// Отримати довжину символів з атрибуту data-length
// Порівняти довжину значення інпуту з довжиною  атрибута
// Додати або видалити CSS-класи відповідно до результату перевірки

const inputEl = document.querySelector("#validation-input");

function setInputClass(classNameToAdd, classNameToRemove) {
  inputEl.classList.add(classNameToAdd);
  inputEl.classList.remove(classNameToRemove);
}

inputEl.addEventListener("blur", () => {
  const inputValue = inputEl.value.trim();
  const expectedLength = parseInt(inputEl.getAttribute("data-length"), 10);

  if (inputValue.length === expectedLength) {
    setInputClass("valid", "invalid");
  } else {
    setInputClass("invalid", "valid");
  }
});