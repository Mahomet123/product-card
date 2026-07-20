// Задача 1
const btnConsoleLog = document.querySelector("#output-console-log")
console.log(btnConsoleLog)

btnConsoleLog.addEventListener('click', () => {     //вызываю переменную которую именовал, говорю (addEventListener) добавь слушатель и жди команды. команда ('click') при действии клика () =>
  btnConsoleLog.style.backgroundColor = '#B005FF'     //смени цвет фона кнопки на этот
  console.log('кнопка нажата!');
});

// Задача 2
btnConsoleLog.addEventListener('click', () => {     //вызываю переменную которую именовал, говорю (addEventListener) добавь слушатель и жди команды. команда ('click') при действии клика () =>
  btnConsoleLog.classList.toggle('button--active')     //смени цвет фона кнопки на этот
  console.log('кнопка нажата!');
});
/* как все работает 
    element.classList.add('класс') — добавить класс css
    element.classList.remove('класс') — удалить класс css
    element.classList.toggle('класс') — переключить css класс (есть — убрать, нет — добавить)
*/
