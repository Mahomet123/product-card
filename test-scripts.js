// Задача 1
const btnConsoleLog = document.querySelector("#output-console-log")
console.log(btnConsoleLog)

btnConsoleLog.addEventListener('click', () => {     //вызываю переменную которую именовал, говорю (addEventListener) добавь слушатель и жди команды. команда ('click') при действии клика () =>
  btnConsoleLog.style.backgroundColor = '#B005FF'     //смени цвет фона кнопки на этот
  console.log('кнопка нажата! стрелочная функция меняет цвет на фиолетовый');
});

// Задача 2
btnConsoleLog.addEventListener('click', () => {     //вызываю переменную которую именовал, говорю (addEventListener) добавь слушатель и жди команды. команда ('click') при действии клика () =>
  btnConsoleLog.classList.toggle('button--active')     //смени цвет фона кнопки на этот
  console.log('кнопка нажата! стрелочная функция переключает класс (добавить/удалить) цвет на зеленый');
});
/* как все работает 
    element.classList.add('класс') — добавить класс css
    element.classList.remove('класс') — удалить класс css
    element.classList.toggle('класс') — переключить css класс (есть — убрать, нет — добавить)
*/

// Задача 3

function handleButtonClick(){
  btnConsoleLog.classList.toggle('button--active')
  console.log('кнопка нажата! функция переключает класс (добавить/удалить) цвет на зеленый')
}
btnConsoleLog.addEventListener('click', handleButtonClick);
/* я объявил функцию, именовал ее handleButtonClick () {
у переменной под названием btnConsoleLog(const btnConsoleLog = document.querySelector("#output-console-log") объявлен на верху глобально через константу) нужно переключать класс button--active, если есть убрать, если нет поставить.
}
на кнопку сохраненную в переменной btnConsoleLog добавь(add) события(Event) слушатель(Listener) ('при клике' вызови функцию под именен handleButtonClick)
*/


// Задача 4
/* На странице есть кнопка с id="change-bgs-card-btn" (она в твоей боковой панели, первая сверху).
Напиши строку, которая найдёт эту кнопку и сохранит в константу с именем btnChangeAllCards. */

const btnChangeAllCards = document.querySelector("#change-bgs-card-btn");

// Задача 5
/* Ниже дана функция:

function openGoogle() {
    console.log('Открываю Google!');
}
Напиши строку, которая вешает эту функцию на кнопку с id="open-google" по событию клика. Переменную для кнопки создай сам с именем btnOpenGoogle. */
const btnOpenGoogle = document.querySelector("#open-google");
function openGoogle() {
  btnOpenGoogle.addEventListener(click)
  console.log('Открываю Google!');
}
openGoogle(btnOpenGoogle);

//задача 6
const clickBtn = document.querySelector("#change-bg-card-btn");
function openConsole () {
  clickBtn.addEventListener(click, "clickBtn")
}
console.log(clickBtn);
