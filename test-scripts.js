// // Задача 1
// const btnConsoleLog = document.querySelector("#output-console-log")
// console.log(btnConsoleLog)

// btnConsoleLog.addEventListener('click', () => {     //вызываю переменную которую именовал, говорю (addEventListener) добавь слушатель и жди команды. команда ('click') при действии клика () =>
//   btnConsoleLog.style.backgroundColor = '#B005FF'     //смени цвет фона кнопки на этот
//   console.log('кнопка нажата! стрелочная функция меняет цвет на фиолетовый');
// });

// // Задача 2
// btnConsoleLog.addEventListener('click', () => {     //вызываю переменную которую именовал, говорю (addEventListener) добавь слушатель и жди команды. команда ('click') при действии клика () =>
//   btnConsoleLog.classList.toggle('button--active')     //смени цвет фона кнопки на этот
//   console.log('кнопка нажата! стрелочная функция переключает класс (добавить/удалить) цвет на зеленый');
// });
// /* как все работает 
//     element.classList.add('класс') — добавить класс css
//     element.classList.remove('класс') — удалить класс css
//     element.classList.toggle('класс') — переключить css класс (есть — убрать, нет — добавить)
// */

// // Задача 3

// function handleButtonClick(){
//   btnConsoleLog.classList.toggle('button--active')
//   console.log('кнопка нажата! функция переключает класс (добавить/удалить) цвет на зеленый')
// }
// btnConsoleLog.addEventListener('click', handleButtonClick);
// /* я объявил функцию, именовал ее handleButtonClick () {
// у переменной под названием btnConsoleLog(const btnConsoleLog = document.querySelector("#output-console-log") объявлен на верху глобально через константу) нужно переключать класс button--active, если есть убрать, если нет поставить.
// }
// на кнопку сохраненную в переменной btnConsoleLog добавь(add) события(Event) слушатель(Listener) ('при клике' вызови функцию под именен handleButtonClick)
// */


// // Задача 4
// /* На странице есть кнопка с id="change-bgs-card-btn" (она в твоей боковой панели, первая сверху).
// Напиши строку, которая найдёт эту кнопку и сохранит в константу с именем btnChangeAllCards. */

// const btnChangeAllCards = document.querySelector("#change-bgs-card-btn");

// // Задача 5
// /* Ниже дана функция:

// function openGoogle() {
//     console.log('Открываю Google!');
// }
// Напиши строку, которая вешает эту функцию на кнопку с id="open-google" по
// событию клика. Переменную для кнопки создай сам с именем btnOpenGoogle. */
// const btnOpenGoogle = document.querySelector("#open-google");
//   btnOpenGoogle.addEventListener('click', openGoogle);
// function openGoogle() {
//   console.log('Открываю Google!');
// }

// // задача 6
// /* Кнопка с id="change-bg-card-btn" (вторая в панели) должна при клике
// выводить в консоль сообщение 'Меняю цвет одной карточки!'.
// Напиши:
// Константу для кнопки (имя придумай сам).
// Именованную функцию (имя придумай сам).
// Обработчик клика, который вызывает эту функцию. */
// const clickBtn = document.querySelector("#change-bg-card-btn");
//   clickBtn.addEventListener('click', openConsole)
// function openConsole () {
//   console.log('Меняю цвет одной карточки!');
// }

// // Простое сравнение
// const price = 1500;

// if (price < 2000) {
//     console.log('Покупаю!');
// } else {
//     console.log('Дорого, не беру.');
// }


// Задача 7
const changeColor = document.querySelector('#btn-change-color')
// changeColor.addEventListener('click', showChangeColor);
//   function showChangeColor () {
//     if (changeColor.style.backgroundColor === '#B005FF') {     // если цвет фона такой
//     chageColor.style.backgroundColor = '#0000ff';     // присваиваем такой цвет фона
//     console.log('Цвет поменялся на синий.')
//   } else {
//       changeColor.style.backgroundColor = '#B005FF';     // иначе присваиваем такой цвет фона
//       console.log('Цвет поменялся на фиолетовый.')
//     }
// }

changeColor.addEventListener('click', showChangeColor2);
  function showChangeColor2() {
    if(changeColor.classList.contains('button--active')) {      // Проверить, есть ли класс
      changeColor.classList.remove('button--active');     // Если условие верно - убрать класс
      console.log("Цвет вернулся");
    } else { changeColor.classList.add('button--active');     // Иначе Добавить класс	
        console.log('Цвет изменён на активный')
    }
  }

// Задача 8
// 8.1  у тебя есть переменная const city = 'Москва';. Выведи в консоль строку Я живу в Москве.
const city = "Москва";
console.log(`Я живу в ${city}`);

// 8.2 у тебя есть const item = 'Увлажняющий мусс'; и const price = 2750;. Выведи Товар: Увлажняющий мусс, цена: 2750 ₽.
const item = 'Увлажняющий мусс';
const price = 2750;
console.log(`Товар: ${item}, цена: ${price} ₽.`);

// 8.3 у тебя есть const a = 10; и const b = 20;. Выведи их сумму в формате Сумма: 30. (Подсказка: внутри ${} можно писать не только переменную, но и выражение ${a + b}).
const a = 10;
const b = 20;
console.log(`Сумма: ${a + b}`);

// 8.4 напиши, какой способ (конкатенация или интерполяция) тебе кажется удобнее и почему. Одним предложением.
// интерполяция удобнее, меньше кода и разборчивее

// Задача 10
// v1
const firstBuyButton = document.querySelector('.product-card__button');
const firstTitle = document.querySelector('.product-card__title');

function baskets () {
  const title = firstTitle.textContent;
  const price = '2750';
  console.log(`Товар "${title}" добавлен в корзину за ${price} ₽`)
}
firstBuyButton.addEventListener('click', baskets);

// v2
const firstBuyButton2 = document.querySelector('.product-card__button');
const firstTitle2 = document.querySelector('.product-card__title');
const firstPrice = document.querySelector('.product-card__price span')

function baskets2 () {
  const title2 = firstTitle2.textContent;
  const price2 = firstPrice.textContent;
  console.log(`Товар "${title2}" добавлен в корзину за ${price2}`)
}
firstBuyButton.addEventListener('click', baskets2);