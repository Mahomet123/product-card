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
Напиши строку, которая вешает эту функцию на кнопку с id="open-google" по
событию клика. Переменную для кнопки создай сам с именем btnOpenGoogle. */
const btnOpenGoogle = document.querySelector("#open-google");
  btnOpenGoogle.addEventListener('click', openGoogle);
function openGoogle() {
  console.log('Открываю Google!');
}

// задача 6
/* Кнопка с id="change-bg-card-btn" (вторая в панели) должна при клике
выводить в консоль сообщение 'Меняю цвет одной карточки!'.
Напиши:
Константу для кнопки (имя придумай сам).
Именованную функцию (имя придумай сам).
Обработчик клика, который вызывает эту функцию. */
const clickBtn = document.querySelector("#change-bg-card-btn");
  clickBtn.addEventListener('click', openConsole)
function openConsole () {
  console.log('Меняю цвет одной карточки!');
}

// Простое сравнение
const 
topPrice = 1500;

if (topPrice < 2000) {
    console.log('Покупаю!');
} else {
    console.log('Дорого, не беру.');
}


// Задача 7
const changeColor = document.querySelector('#btn-change-color')
changeColor.addEventListener('click', showChangeColor);
  function showChangeColor () {
    if (changeColor.style.backgroundColor === '#B005FF') {     // если цвет фона такой
    changeColor.style.backgroundColor = '#0000ff';     // присваиваем такой цвет фона
    console.log('Цвет поменялся на синий.')
  } else {
      changeColor.style.backgroundColor = '#B005FF';     // иначе присваиваем такой цвет фона
      console.log('Цвет поменялся на фиолетовый.')
    }
}

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
// 8.1  у тебя есть переменная const city1 = 'Москва';. Выведи в консоль строку Я живу в Москве.
const city1 = "Москва";
console.log(`Я живу в ${city1}`);

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
/* Твоя задача
Напиши код:
Найди первую кнопку "Купить" и сохрани в константу.
Найди первый заголовок товара и сохрани в константу.
Создай функцию (имя придумай сам), внутри которой:
получи текст заголовка через заголовок.textContent
получи цену (пока напиши числом, 2750)
выведи в консоль шаблонную строку с интерполяцией
Повесь обработчик клика на кнопку.

Скелет:
const firstBuyButton = document.querySelector('.....');  // селектор класса начинается с точки
const firstTitle = document.querySelector('.....');

function имяФункции() {
    const название = firstTitle.textContent;  // textContent забирает текст из элемента
    const цена = 2750;
    console.log(`......`);
}
firstBuyButton.addEventListener('click', имяФункции); */

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

// Задача 11
/* Твоя задача (закрепление, код в файл)
Сейчас мы не привязываемся к странице, просто тренируемся в script.js.
Создай объект product1 с данными первого товара:
title: 'Увлажняющий мусс'
price: 2750
label: 'для нормальной кожи'
inStock: true (логическое значение — есть ли в наличии)
Выведи в консоль:
Название товара (через точку)
Цену (через точку)
Наличие (через точку)
Выведи в консоль ту же информацию, но одной строкой через интерполяцию:
Товар "Увлажняющий мусс" стоит 2750 ₽. В наличии: true
 */
const product1 = {
  title: 'Увлажняющий мусс',
  price: 2750,
  label: 'для нормальной кожи',
  inStock: true
}
console.log(`Товар "${product1.title}" стоит ${product1.price} ₽. В наличии: ${product1.inStock}`);

/* Представь интернет-магазин. Пользователь нажал кнопку "Сортировать по цене" или "Сортировать по названию". В коде это выглядит так:
const product = {
    title: 'Увлажняющий мусс',
    price: 2750,
    label: 'для нормальной кожи'
};
// Пользователь выбрал, по чему сортировать:
const sortBy = 'price';  // может быть 'price', 'title', 'label'
// Теперь нам нужно получить значение именно того поля, которое выбрал пользователь:
console.log(product[sortBy]);  // 2750 — работает для любого поля!
Если бы пользователь выбрал 'title', мы бы просто поменяли значение переменной:
javascript
const sortBy = 'title';
console.log(product[sortBy]);  // 'Увлажняющий мусс'
Через точку так не сделать. Пришлось бы писать if else для каждого варианта:
if (sortBy === 'price') {
    console.log(product.price);
} else if (sortBy === 'title') {
    console.log(product.title);
} // и так далее — ужас!
А с квадратными скобками — одна строка, которая работает для любого случая.
Простыми словами
Точка — когда ты заранее знаешь, какое свойство нужно: "всегда дай мне цену".
Скобки — когда имя свойства приходит извне (из переменной, из клика пользователя, из цикла): "дай мне то свойство, которое сейчас в переменной".
Это как разница между:
"Дай мне всегда синюю ручку" (точка)
"Дай мне ручку того цвета, который написан на бумажке" (скобки) */
// если мы хотим испольхзовать в дальнейшем фильтрацию объектов по выбранным критериям пользователя, пишем так:
const sortBy = 'title';     // вместо title может быть любое другое свойство из выше написанного объекта, и что именно там будет  приходит извне (из переменной, из клика пользователя, из цикла): "дай мне то свойство, которое сейчас в переменной".
console.log(`Товар "${product1['title']}" стоит ${product1['price']} ₽. В наличии: ${product1['inStock']}`);

// Задача 12
/* Урок: Массивы в JS (Тема №12)
Объект — это один товар:
const product = { title: 'Мусс', price: 2750 };
Массив — это список товаров, каталог:
const products = [product1, product2, product3];
Если объект — это одна карточка товара, то массив — это вся страница каталога.
Как выглядит массив
javascript
const fruits = ['яблоко', 'банан', 'апельсин'];
Часть	Что это
[ ]	Квадратные скобки — границы массива
'яблоко'	Элемент массива
,	Запятая — разделяет элементы
Важно: у каждого элемента есть индекс — его порядковый номер. Индексы начинаются с нуля:
Индекс	Элемент
0	'яблоко'
1	'банан'
2	'апельсин'
Как достать элемент из массива
Только через квадратные скобки с индексом:
console.log(fruits[0]);  // 'яблоко'
console.log(fruits[1]);  // 'банан'
console.log(fruits[2]);  // 'апельсин'
Скобки у массивов и у объектов — это РАЗНЫЕ скобки, не путай:
Что	Синтаксис для получения
Объект { }	obj.свойство или obj['свойство']
Массив [ ]	arr[индекс] — только число!
Твоя задача (в файл script.js)
Создай массив catalog, который содержит три объекта — три твоих товара (мусс, маска, гель). Используй реальные данные из HTML. Цены: 2750, 3500, 1650.
Структура:
const catalog = [
    { title: '...', price: ... },
    { title: '...', price: ... },
    { title: '...', price: ... }
];
Выведи в консоль:
Название первого товара (индекс 0)
Цену второго товара (индекс 1)
Название и цену третьего товара одной строкой через интерполяцию */

const catalog = [
  { title: 'Увлажняющий мусс', price: 2750 },
  { title: 'Увлажняющая маска', price: 3500 },
  { title: 'Гель для умывания', price: 1650 }
];
console.log(catalog[0].title);
console.log(catalog[1].price);
console.log(`Товар ${catalog[2].title} стоит ${catalog[2].price}`);

/* Коротко: мутабельные и иммутабельные методы массивов
Объясню на пальцах, без практики — для общего понимания.
Мутабельные методы — изменяют исходный массив. Как будто ты прямо в списке что-то зачеркнул или дописал ручкой.
Метод	Что делает
.push(элемент)	Добавляет в конец
.pop()	Удаляет последний
.shift()	Удаляет первый
.splice()	Вырезает кусок
Иммутабельные методы — создают новый массив, не трогая старый. Как будто ты сделал ксерокопию списка и внёс правки туда.
Метод	Что делает
.map()	Преобразует каждый элемент
.filter()	Отбирает элементы по условию
.concat()	Склеивает массивы
.slice()	Копирует кусок
Почему это важно: иммутабельные методы — стандарт в современных фреймворках (Angular, React). Они не ломают исходные данные и позволяют отслеживать изменения.
Пока просто запомни, что такие есть. Глубоко копать будем, когда дойдём до перебора массивов на практике. */

// Задача 13
/* Четыре главных метода (которые не меняют исходный массив)
Это иммутабельные методы. Они создают новый массив, не трогая старый. В современной разработке — стандарт.
Метод	Что делает	Пример
.map()	Преобразует каждый элемент → новый массив	Из массива товаров сделать массив названий
.filter()	Отбирает элементы по условию → новый массив	Только товары дешевле 3000
.find()	Находит первый элемент по условию → один элемент	Найти товар по названию
.forEach()	Проходит по каждому элементу и что-то делает	Вывести все названия в консоль
Разбираем каждый (прямо в консоли)
.forEach() — "для каждого сделай"
catalog.forEach(function(item) {
    console.log(item.title);
});
Что здесь происходит:
catalog.forEach() — "пройди по каждому элементу массива"
function(item) — функция, которая вызовется для каждого элемента. item — это текущий товар (сначала мусс, потом маска, потом гель)
console.log(item.title) — выведи название текущего товара */

/* .map() — "преобразуй каждый"
const titles = catalog.map(function(item) {
    return item.title;
});
console.log(titles);  // ['Увлажняющий мусс', 'Увлажняющая маска', 'Гель для умывания']
Отличие от forEach: .map() собирает результаты в новый массив. return — это "верни это значение в новый массив".

.filter() — "отбери по условию"
const cheap = catalog.filter(function(item) {
    return item.price < 3000;
});
console.log(cheap);  // [мусс, гель] — маска отсеялась
return item.price < 3000 — если true, товар попадёт в новый массив. Если false — нет.

.find() — "найди первый подходящий"
const found = catalog.find(function(item) {
    return item.title === 'Увлажняющая маска';
});
console.log(found);  // { title: 'Увлажняющая маска', price: 3500 }
Возвращает сам элемент, а не массив. Первый, который подошёл. */

/* Твоя задача
Используя массив catalog, напиши:
.map() — создай массив цен. Результат должен быть: [2750, 3500, 1650]
.filter() — отбери товары с ценой больше 2000. Результат: массив из мусса и маски.
.find() — найди товар с названием 'Гель для умывания'.
Для каждого — выведи результат в консоль. Используй function(item) (не стрелочную пока — к этому вернёмся в теме про функции). */

// 13.1
const catalog1 = [
  { title: 'Увлажняющий мусс', price: 2750 },
  { title: 'Увлажняющая маска', price: 3500 },
  { title: 'Гель для умывания', price: 1650 }
];
const prices = catalog1.map(function(item) {      //  метод map преобразует каждый объект из массива. В переменную item (товар) попадает первый объект: { title: 'Увлажняющий мусс', price: 2750 }, потом второй, потом третий.
  return item.price;      // Забери у этого товара только его название (price), а цену и объем выкинь, они нам не нужны. И возврашает (price) в (const prices)
});
console.log(prices)

// 13.2
const expensive = catalog1.filter(function(item) {      //  метод filter проверяет каждый объект из массива. В переменную item попадает первый объект: { title: 'Увлажняющий мусс', price: 2750 }, потом второй, потом третий.
  return item.price > 2000;      // Если price больше 2000 — возвращает true и товар целиком попадает в новый массив expensive. Если меньше — false, товар пропускается.
});
console.log(expensive)

// 13.3
const foundProduct = catalog1.find(function(item) {       //  метод find ищет первый подходящий элемент. В переменную item попадает первый объект, потом второй, пока не найдёт совпадение.
  return item.title === 'Гель для умывания';      // Если title равен 'Гель для умывания' — возвращает true, и find возвращает этот товар целиком. Остальные не проверяет.
});
console.log(foundProduct)

// Задача 14
/* Мутабельные и иммутабельные методы
Ты уже использовал три иммутабельных метода: map, filter, find. Давай теперь закрепим разницу на живом примере.
Иммутабельные (не трогают оригинал) — создают копию:
const numbers = [1, 2, 3];

const doubled = numbers.map(function(n) {
    return n * 2;
});

console.log(numbers);  // [1, 2, 3] — оригинал НЕ изменился
console.log(doubled);  // [2, 4, 6] — новый массив
Мутабельные (меняют оригинал) — работают с тем же массивом:
const numbers = [1, 2, 3];

numbers.push(4);       // добавили в конец
console.log(numbers);  // [1, 2, 3, 4] — оригинал ИЗМЕНИЛСЯ!

numbers.pop();         // удалили последний
console.log(numbers);  // [1, 2, 3] — оригинал снова изменился!
Главные мутабельные методы
Метод	Что делает	Пример
.push(эл)	Добавляет в конец	arr.push(4)
.pop()	Удаляет последний и возвращает его	arr.pop()
.unshift(эл)	Добавляет в начало	arr.unshift(0)
.shift()	Удаляет первый и возвращает его	arr.shift()
.splice(откуда, сколько)	Вырезает кусок из середины	arr.splice(1, 2)
Простая аналогия (чтобы запомнить навсегда)
Иммутабельный — ксерокопия. Взял оригинал → сделал копию → изменил копию. Оригинал untouched.
Мутабельный — ручка. Взял оригинал → написал прямо на нём. Оригинал changed.
Современное правило: всегда предпочитай иммутабельные методы (map, filter, concat, slice). Мутабельные (push, splice) — только когда точно знаешь, что оригинал можно менять.
Твоя задача (в консоли)
Дан массив:
const numbers = [10, 20, 30, 40];
Добавь 50 в конец через .push(). Выведи numbers.
Удали последний элемент через .pop(). Выведи numbers.
Добавь 5 в начало через .unshift(). Выведи numbers.
Удали первый элемент через .shift(). Выведи numbers.
Напиши, что получилось после каждого шага. */

const numbers = [10, 20, 30, 40];
numbers.push(50);       // Добавbk 50 в конец через .push()
console.log(numbers);
numbers.pop();      // Удалиk последний элемент через .pop()
console.log(numbers);
numbers.unshift(5);     // Добавbk 5 в начало через .unshift()
console.log(numbers);
numbers.shift();      // Удали первый элемент через .shift()
console.log(numbers);

// Задача 15
/* Урок: .forEach() — "для каждого сделай"
Это самый простой метод массива. Он ничего не возвращает, а просто выполняет код для каждого элемента по очереди. Как будто ты проходишь по списку и с каждым пунктом что-то делаешь.

Структура
javascript
массив.forEach(function(элемент, индекс) {
    // что сделать с этим элементом
});
Часть	Что это	Обязательно?
элемент	Текущий элемент массива	Да
индекс	Его порядковый номер (0, 1, 2...)	Нет, можно не писать
Сравнение с .map() (ключевое отличие!)
const numbers = [10, 20, 30];

// .map() — СОЗДАЁТ новый массив
const doubled = numbers.map(function(item) {
    return item * 2;
});
console.log(doubled);  // [20, 40, 60] — новый массив!
console.log(numbers);  // [10, 20, 30] — старый не тронут

// .forEach() — НИЧЕГО не создаёт, просто выполняет код
numbers.forEach(function(item) {
    console.log(item);  // 10, потом 20, потом 30 — просто вывел
});
// Никакого результата, никакого нового массива
Простыми словами:
.map() — "возьми каталог и сделай из него новый список цен"
.forEach() — "возьми каталог и выведи каждое название в консоль"
Когда использовать .forEach()?
Когда нужно сделать что-то с каждым элементом, но не нужен новый массив:
Вывести все названия в консоль
Повесить обработчик на несколько кнопок
Отправить данные на сервер для каждого товара
Твоя задача (простая, в консоли)
У тебя есть массив catalog. Используя .forEach(), выведи в консоль каждое название товара с ценой в формате:
Увлажняющий мусс стоит 2750 ₽
Увлажняющая маска стоит 3500 ₽
Гель для умывания стоит 1650 ₽
Скелет:
catalog.forEach(function(item) {
    console.log(`......`);
});
Напиши код. */

const catalog2 = [
  { title: 'Увлажняющий мусс', price: 2750 },
  { title: 'Увлажняющая маска', price: 3500 },
  { title: 'Гель для умывания', price: 1650 }
];
catalog2.forEach(function(item) {
  console.log(`${item.title} стоит ${item.price}`);
});     /* Что сделал код
Шаг	item (что пришло)	Что вывелось
1	{ title: 'Увлажняющий мусс', price: 2750 }	Увлажняющий мусс стоит 2750
2	{ title: 'Увлажняющая маска', price: 3500 }	Увлажняющая маска стоит 3500
3	{ title: 'Гель для умывания', price: 1650 }	Гель для умывания стоит 1650
forEach прошёл по массиву, для каждого элемента вызвал функцию, функция вывела строку в консоль. Никакого нового массива не создалось.

Главное, что нужно запомнить о .forEach()
Вопрос	Ответ
Что делает?	Выполняет код для каждого элемента
Что возвращает?	Ничего (undefined)
Когда использовать?	Когда нужно сделать действие, а не получить новый массив
Можно ли прервать?	Нет, в отличие от обычного цикла for */


// Задача 16
/* Урок: .reduce() — "собиратель" (продолжение)
Теперь, когда forEach усвоен, .reduce() будет понятнее. Они похожи: оба проходят по массиву. Но цель разная:
.forEach() — просто сделай что-то с каждым (выведи, отправь)
.reduce() — собери всё в одно значение (сумма, итоговый объект, строка)
Аналогия: корзина в магазине
Ты идёшь по магазину с пустой корзиной (начальное значение = 0). Каждый товар (item) ты кладёшь в корзину, и корзина тяжелеет (аккумулятор растёт). В конце у тебя одно число — общая сумма.
Структура .reduce()
массив.reduce(function(аккумулятор, текущийЭлемент) {
    return новоеЗначениеАккумулятора;
}, начальноеЗначение);
Часть	Что это	Как назвать в голове
аккумулятор	То, что накапливается	Корзина
текущийЭлемент	Очередной элемент массива	Товар, который берём с полки
начальноеЗначение	С чего начинаем	Пустая корзина = 0
return	Обязательно! Возвращаем обновлённую корзину	Кладём товар в корзину
Пример без кода (мысленный эксперимент)
Массив: [10, 20, 30]. Хотим сумму. Начальное значение: 0.
Шаг	Корзина ДО	Товар	Действие	Корзина ПОСЛЕ
1	0	10	0 + 10	10
2	10	20	10 + 20	30
3	30	30	30 + 30	60
Итог: 60. Корзина одна, значение одно.
Твоя задача
Используя массив catalog:
const catalog = [
    { title: 'Увлажняющий мусс', price: 2750 },
    { title: 'Увлажняющая маска', price: 3500 },
    { title: 'Гель для умывания', price: 1650 }
];
Найди общую сумму всех цен через .reduce().
Скелет:
const total = catalog.reduce(function(acc, item) {
    return ...;  // acc + что?
}, ...);  // начальное значение — какое число?
Вопросы:
Что будет acc? (корзина, число)
Что будем прибавлять? (какое свойство у item?)
С какого числа начнём?
Напиши код. */
const catalog3 = [
  { title: 'Увлажняющий мусс', price: 2750 },
  { title: 'Увлажняющая маска', price: 3500 },
  { title: 'Гель для умывания', price: 1650 }
];
const total = catalog3.reduce(function(acc, item) {      // объявил переменную, в которой будет сохраняться все что добавлено в корзину, через метод "reduce" вызвал функцию, с параметром "acc", аргументом которого является "item"
  return acc + item.price;      // возвращаю "acc (0) + поштучное прибавление всех цен из каталога которые присвоены "item"
}, 0 );     // начальное значение корзины
console.log(total);

// Собираем строку
const titleString = catalog3.reduce(function(acc, item) {
  return acc + item.title + ', ';     //аккумулятор + заголовок(строка) + запятая и пробел, чтобы при склеивании строк, между ними были запятые и пробел
}, '');       //изначальное состояние строки оставляем пустым, поэтому ставим только ковычки
console.log(titleString);
// Собираем объект
const pricesByName = catalog3.reduce(function(acc, item) {
  acc[item.title] = item.price;     // создаем объект через аккумулятор со свойством item.title и значением item.price
  return acc;     //возврашаем аккумулятор с объектом в функцию
}, {});
console.log(pricesByName);

// Задача 17
/* Урок: Работа с <template> из JS (практика)
Теперь у нас есть:
Массив данных catalog (в JS)
Пустой бланк <template> (в HTML)
Соединим их. План на сейчас:
Найти шаблон
Взять первый товар из массива catalog
Клонировать шаблон
Заполнить клон данными первого товара
Вставить клон на страницу */
const template = document.querySelector('#product-card-template');
const cloneCard = template.content.cloneNode(true);

cloneCard.querySelector('.product-card__label').textContent = "для нормальной кожи";
cloneCard.querySelector('.product-card__description').textContent = "Глубоко увлажняют кожу лица";
const listItems = cloneCard.querySelectorAll('.product-card__component-list li');
listItems[0].textContent = 'активные натуральные комплексы';
listItems[1].textContent = 'витамины С, А, РР, В И Е';
listItems[2].textContent = "солнцезащитные компоненты";
cloneCard.querySelector('.product-card img').src = "images/photo_1.png";

cloneCard.querySelector('.product-card__title').textContent = (catalog3[0].title);
cloneCard.querySelector('.product-card__price span').textContent = (catalog3[0].price);

document.querySelector('.products-list').appendChild(cloneCard);

console.log(cloneCard);


const template2 = document.querySelector('#product-card-template');

catalog3.forEach(function(item) {
  const cloneCard = template2.content.cloneNode(true);

  cloneCard.querySelector('.product-card__title').textContent = item.title
  cloneCard.querySelector('.product-card__price span').textContent = item.price

  document.querySelector('.products-list').appendChild(cloneCard);

  console.log(cloneCard);
});