// ======= Задача 1.3 Вариант А

const text = document.querySelector('.text')

text.addEventListener('click', function () {
  text.textContent = 'Текст изменен';
  text.classList.add('text-animation');
  setTimeout(function() {
    text.classList.remove('text-animation');
}, 500);
})

// ======= Задача 1.3 Вариант Б

const square = document.querySelector('.square')

square.addEventListener('click', function () {
  square.classList.add('square-animation');
})

