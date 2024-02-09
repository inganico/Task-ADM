
// ======== Задача 1.2 Вариант А

const btn1 = document.querySelector('.btn-1');

btn1.addEventListener('click', function () {
  checkName()
})

function checkName() {
  let name = prompt("Как вас зовут?");
  if (name === null || name === "") {
      alert("Ошибка: Пожалуйста, введите ваше имя!");
  } else if (/\d/.test(name)) {
      alert("Ошибка: Имя не должно содержать цифры!");
  } else {
      alert(`Здравствуйте ${name}`);
  }
}

//\d - Это символьный класс, который соответствует любой цифре от 0 до 9.


// ======= Задача 1.2 Вариант Б

const btn2 = document.querySelector('.btn-2');


btn2.addEventListener('click', function () {
  likeColor()
})

function likeColor() {
  let color = prompt("Какой ваш любимый цвет?")
  if (color === null || color === "") {
    alert('Oшибкa: «Строка пуста!');
  } else if (/\d/.test(color)) {
    alert("Ошибка: Цвет не должен содержать цифры");
  } else {
    alert(`Ваш любимый цвет - ${color}`)
  }
}