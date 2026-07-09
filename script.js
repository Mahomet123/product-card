// Покраска всех карточек
const proguctCards = document.querySelectorAll('.product-card');
const changeColorCardsButton = document.querySelector('#change-bgs-card-btn');
const orangeColorHash = '#FF7700';
const goldColorHash = '#FFD900';

changeColorCardsButton.addEventListener('click', () => {
  proguctCards.forEach((card) => card.style.backgroundColor = orangeColorHash)
})

// Покраска первой карточки
const firstproductCard = document.querySelector('.product-card');
const changeColorCardButton = document.querySelector('#change-bg-card-btn');

changeColorCardButton.addEventListener('click', () => {
  firstproductCard.style.backgroundColor = goldColorHash;
})

// Открыть google
const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle () {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com');
  }
  else {
    return;
  }
}

// Вывод консоль лог
const outputLogButon = document.querySelector ('#output-console-log');
outputLogButon.addEventListener('click', () => {
  outputConsoleLog('ДЗ №6');
});
function outputConsoleLog(message) {
  alert('Вывести в консоль?');
  console.log(message);
}
















// 1. Находим элементы (не забудьте заменить классы на ваши из HTML)
// const changeColorCardButton = document.querySelector('.button-class'); // класс вашей кнопки
// const productCards = document.querySelectorAll('.card-class');        // класс ваших карточек

// // 2. Массив из 4 золотых/желтых оттенков
// const goldColors = [
//   '#FFD700', // Классическое золото
//   '#D4AF37', // Металлическое золото
//   '#C5A059', // Матовое золото
//   '#E5A93B'  // Янтарное золото
// ];

// // 3. Переменная для отслеживания текущего цвета
// let currentColorIndex = 0;

// // 4. Логика смены цветов по кругу
// changeColorCardButton.addEventListener('click', () => {
//   // Получаем текущий цвет из массива
//   const nextColor = goldColors[currentColorIndex];

//   // Красим все карточки в этот цвет
//   productCards.forEach((card) => {
//     card.style.backgroundColor = nextColor;
//   });

//   // Переключаем индекс на следующий элемент. 
//   // Конструкция "% goldColors.length" сбрасывает индекс в 0, когда доходим до конца (после 3 идет 0)
//   currentColorIndex = (currentColorIndex + 1) % goldColors.length;
// });
