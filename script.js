// let enterTheNumber = prompt("Введіть число");
// if (!isNaN(enterTheNumber)) {
//   if (enterTheNumber % 2 == 0) {
//     alert("парне");
//   } else {
//     alert("не парне ");
//   }
// } else {
//   alert("введіть число");
// }

// let enterText = prompt("Введіть текст");
// if (enterText.includes("блін")) {
//   alert("не коректне значення  ");
// } else {
//   alert("Добрий вечір");
// }

// let enterQuestion = confirm("Будеш пиво?");
// if (enterQuestion) {
//   alert("чудово");
// } else {
//   let enterQuestion2 = confirm("А сік?");
//   if (enterQuestion2) {
//     alert("ну таке собі");
//   } else {
//     alert("Допобачення");
//   }
// }

// let enterSize = prompt("Введіть розмір США");
// if (enterSize == 8) {
//   alert("Ваш розмір у Франції 38");
// } else if (enterSize == 10) {
//   alert("Ваш розмір у Франції 40");
// } else if (enterSize == 12) {
//   alert("Ваш розмір у Франції 42");
// } else if (enterSize == 14) {
//   alert("Ваш розмір у Франції 44");
// } else if (enterSize == 16) {
//   alert("Ваш розмір у Франції 46");
// } else if (enterSize == 18) {
//   alert("Ваш розмір у Франції 48");
// } else if (enterSize == 20) {
//   alert("Ваш розмір у Франції 50");
// } else if (enterSize == 22) {
//   alert("Ваш розмір у Франції 52");
// } else {
//   alert("Ну не судьба");
// }

// alert(confirm("Ви жінка?") ? "Ви жінка!" : "Ви чоловік");

// let age = prompt("How old are you?");
// let yearOfBirth;

// const currentYear = 2024;
// if (age === null || age === "") {
//   alert("Сталася помилка");
// } else if (age > 0 && age <= currentYear) {
//   yearOfBirth = currentYear - age;
//   alert(`Year of birth: ${yearOfBirth} `);
// }

// confirm("Шоппін?") || alert("ти бяка");

// let question = confirm("Шоппін?");
// if (!question) {
//   alert("ти бяка");
// }

// let name = prompt("Імя") || "Іван";
// let lastname = prompt("По батькові") || "Іванович";
// let sername = prompt("Прізвище") || "Іванов";
// alert(name + " " + lastname + " " + sername);

// let name = prompt("Імя");
// let lastname = prompt("По батькові");
// let sername = prompt("Прізвище");
// if (!name) {
//   name = "Іван";
// }
// if (!lastname) {
//   lastname = "Іванович";
// }
// if (!sername) {
//   sername = "Іванов";
// }
// alert(name + " " + lastname + " " + sername);

// let login = prompt("Введіть логін");
// let password = prompt("Введіть пароль");
// const currentLogin = "admin";
// const currentPassword = "qwerty";
// if (login == currentLogin && password == currentPassword) {
//   alert("вітаю");
// } else {
//   alert("Сталася помилка");
// }

// let start = prompt("Потрібно usd або eur?").toLowerCase();
// if (start == "usd" || start == "eur") {
//   let summ = +prompt("Какая сумма?");
//   let buyRateD = 39.99;
//   let sellRateD = 39.49;
//   let buyRateE = 39.1;
//   let sellRateE = 38.1;
//   if (start === "usd") {
//     confirm("Купить доллар?")
//       ? alert("С " + summ + " гривень, ти отримаеш: " + summ / buyRateD + start)
//       : alert(
//           "С " + summ + start + " ти отримаеш: " + summ * sellRateD + " гривень"
//         );
//   }
//   if (start === "eur") {
//     confirm("Купить евро?")
//       ? alert("С " + summ + " гривень, ти отримаеш: " + summ / buyRateE + start)
//       : alert(
//           "С " + summ + start + " ти отримаеш: " + summ * sellRateE + " гривень"
//         );
//   }
// }

// let user = prompt("Камень ножницы или бумага?").toLowerCase();
// if (user == "камень" || user == "ножницы" || user == "бумага") {
//   let arr = ["камень", "ножницы", "бумага"];
//   let program = Math.floor(Math.random() * arr.length);
//   alert("Бот выбрал: " + arr[program]);
//   if (
//     (user === "камень" && arr[program] === "камень") ||
//     (user === "ножницы" && arr[program] === "ножницы") ||
//     (user === "бумага" && arr[program] === "бумага")
//   ) {
//     alert("draw");
//   } else if (
//     (user === "камень" && arr[program] === "ножницы") ||
//     (user === "ножницы" && arr[program] === "бумага") ||
//     (user === "бумага" && arr[program] === "камень")
//   ) {
//     alert("you win");
//   } else {
//     alert("you lose");
//   }
// }
