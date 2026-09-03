import { productCards } from './product-cards.js';

// Задача 2
/* Создаем файл js, где будет хранится массив объектов, которые представляют собой
продуктовые карточки из вёрстки (имейте ввиду, UI-данные не относятся к данным
продукта. Гуглите). Вам нужно описать полностью объект и продублировать его для
всех карточек и после импортировать в homework-10 для дальнейшей работы с ним.
*/

// Задача 3
/*Создание шаблона:
По аналогии с лекцией создайте и реализуйте шаблон (template) для продуктовых карточек. (Обратите внимание на задание 5, чтобы сделать всё правильно).
*/

const productCardTemplate = document.getElementById('product-card-template')
const productCard = document.querySelector('.product-card')

// Задача 4
/*Работа с данными (метод reduce):
Используя метод массива .reduce(), получите новый объект (или массив), где ключом будет название продукта, а значением — его описание.
*/

let allProducts = productCards.reduce(function (acc, product) {
  acc[product.title] = product.description;
  return acc
}, {});
console.log(allProducts)


// Задача 5
/*Интерактивность (со звёздочкой, повышенной сложности):
Реализуйте функцию, которая при загрузке страницы показывает сообщение через prompt: "Сколько карточек отобразить? От 1 до 5".
В зависимости от введённого числа (1–5) — отобразите на странице соответствующее количество карточек.
Обязательно: Добавьте защиту от ввода других значений (пустых строк, букв, чисел вне диапазона) с помощью проверки if.
Структура: У вас должно быть две функции:
Одна — запрашивает и возвращает количество карточек (с проверкой).
Вторая — принимает массив данных и отрисовывает (рендерит) нужное количество карточек.
Важно: Визуально карточки не должны измениться — всё должно выглядеть так же, как и раньше.
 */

let userInput = prompt('Сколько карточек отобразить? От 1 до 5', [1]);
console.log(userInput);

const quantity = Number(userInput);
console.log(Number.isNaN(quantity));
if (isNaN(quantity) || quantity < 1 || quantity > 100) {
  alert('Введите правильное число!')
}
console.log(quantity);

const cardTemplate = document.getElementById('product-card-template');
const productList = document.querySelector('.products-list');
productCards.slice(0, quantity).forEach((card) => {
  const productClone = cardTemplate.content.cloneNode(true);
  productClone.querySelector('.product-card__img').src = card.img
  productClone.querySelector('.product-card__label').textContent = card.label
  productClone.querySelector('.product-card__title').textContent = card.title
  productClone.querySelector('.product-card__description').textContent = card.description
  productClone.querySelector('.product-card__price span').textContent = card.price

  const componentList = productClone.querySelector('.product-card__component-list');
  card.components.forEach((component) => {
    const li = document.createElement('li');
    li.textContent = component
    componentList.appendChild(li);
  })
  productList.appendChild(productClone);
  console.log(productClone);
});
