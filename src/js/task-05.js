// 1.отримати посилання на інпут та елемент спан
// 2.додаємо прослуховувач подій до інпуту щоб розуміти коли там щось ввели
// 3.отримати поточне значення інпуту та перевірити, чи воно не пусте
// 4.написати функцію, яку потрібно виконати при спрацюванні події "input"

const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim();
    nameOutput.textContent = name ? name : "Anonymous";
  });