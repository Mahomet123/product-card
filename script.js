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

// Вывод в консоль содержимое заголовка
const mainTitle = document.querySelector ('.container__title');
mainTitle.addEventListener('mouseenter', (eveent) => {
  console.log(event.target.textContent);
})

// Кнопка меняющая цвет
const btnChangeColor = document.querySelector ('#btn-change-color');
btnChangeColor.addEventListener('click', function() {
  btnChangeColor.classList.toggle('activ-btn');
  const isClassActive = btnChangeColor.classList.contains('activ-btn');
  console.log('Кнопка нажата', isClassActive);
})