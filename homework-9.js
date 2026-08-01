// Задача 2
// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersFilter = numbers.filter(function(value){
  return value >= 5;
});
console.log(numbersFilter);

// стрелочная функция
const numbersFlt = numbers.filter(value => {
  return value >= 5;
});
console.log(numbersFlt);

// Задача 3
// Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const catalog = [
  {
    title: 'Увлажняющий мусс',
    price: 2750
  },
  {
    title: 'Увлажняющая маска',
    price: 3500
  },
  {
    title: 'Гель для умывания',
    price: 1650
  }
];
const mask = catalog.find(value => {
  return value.title === 'Гель для умывания';
})
console.log(mask);

// Задача 4
// Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
function reversArr () {
const resultNumbers = [...numbers].reverse();
console.log(resultNumbers);
const resultCatalog = [...catalog].reverse();
console.log(resultCatalog);
}
// Задача 5
/* Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов
этого массива. Данный массив представляет собой пример комментариев в соц. сетях, поэтому
переменная должна быть названа по смыслу. Не забудьте удалить квадратные кавычки у ключей
объектов (можно использовать Chat GPT, что бы не делать это вручную) */

// Задача 6
// Сделать константу экспортируемой, добавив перед "const" ключевое слово "export". Таким образом мы сможем внедрить переменную из comments.js в homework-9.js и работать с ней. Когда мы введем название переменной, нам предложит импортировать ее - так и делаем.
import {comments} from './comments.js'

// Задача 7
// Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const resultComment = [];
for (let i = 0; i < comments.length; i++) {
  if (comments[i].email.includes('.com')) {
  resultComment.push(comments[i]);
  };
}
console.log(resultComment);

const result = resultComment.filter(value => {
  return value = obj.email.includes('.com')
})
console.log(result);



