// Задача 2
// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersFilter = numbers.filter(function(value){
  return value >= 5;
});
console.log(numbersFilter);

// стрелочная функция
const filteredNumbers = numbers.filter(value => {
  return value >= 5;
});
console.log(filteredNumbers);

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
// перевернул без функции
const resultNumbers = [...numbers].reverse();
console.log(resultNumbers);
const resultCatalog = [...catalog].reverse();
console.log(resultCatalog);

//делаем то же самое но уже не меняя исходный массив, а возврашая новый перевернуты
const resultNumbers2 = numbers.toReversed();
console.log(resultNumbers2);
const resultCatalog2 = catalog.toReversed();
console.log(resultCatalog2);

//переворачиваю через функцию
function reversArr(arr, array) {      // создал функцию именовал ее, параметром которая будет принимать аргументы именовал как "arr"
  const copy = [...arr, ...array];     // сохраняем копию того, что придет в параметр ф-ии в переменной "copy" (оригинал приходит, еще не перевернутый)
  return copy.reverse();     // переворачиваем сохраненную копию и выбрасывет наружу
}
// обязательно вызываю функцию и кладу туда аргументом массив "numbers" и "catalog" чтобы код заработал. а в "reversArr"(имя которое я дал ф-ии) подхватывает то что выбросил наружу "return"
const reversedNumbers = reversArr (numbers, catalog);
// const reversedCatalog = reversArr (catalog);
//после уже выводим в консоль
console.log(reversedNumbers);
// console.log(reversedCatalog);

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
for (let i = 0; i < comments.length; i++) {     // проходимся по массиву "comments" (let i = 0)старт с 0 индекса. (i < массив.length) Условие: пока индекс меньше длины массива продолжаем проверку. (i++) после каждой итерации увеличиваем (i)индекс на 1. т.е проверил 0 индекс, увеличиваем индекс старта на 1 единицу и так до последнего
  if (comments[i].email.includes('.com')) {     //если в массиве "comments" по индексу в свойствах email содержится значение которое вкл в себя .com
    resultComment.push(comments[i]);      // добавляем этот объект в конец переменной resultComment
  };
}
console.log(resultComment);
/* сделать через фильтрацию, если массив коммент вкл в себя
com сохр в перем и потом можно вывести в консоль */
const result = comments.filter(value => {     //фильтр берет каждый объект массива "comments" и передает в ф-ию value и ждет указаний
  return value.email.includes('.com')     // смотрим в каждом объекте, вкл ли в себя свойство email значение которое содержит ".com" и если такие есть возвращает в параметр ф-ии "value"
});
console.log(result);
//можно и без return, принцип тот же (а если в comments.email.includes добавить знак "?" (Optional Chaining), то не будут ошибки при отсутствии свойства email, код продолжит работать)
const resultRewievs = comments.filter(comment => comment.email.includes ('.com'));
console.log(resultRewievs);

// решение через пустую ф-ию
const callBack = (comment) => {
  return comment.email.includes('.com');
}
console.log(comments.filter(callBack));

//проверяем есть содержит ли ".com" в массиве объекта под индексом "0"
callBack(comments[0]);     //простой вызов ф-ии, результат никуда не сохраняется
  const result1 = callBack(comments[0]);     //вызов ф-ии с сохранением в переменную, результат сохраняется в result1 - будет true или false
console.log(callBack(comments[0]));     //вызов ф-ии через консоль и вывод результата

const resultRewievs1 = comments.filter(callBack);     // передал функцию из 92строчки в "comments.filter"
console.log(resultRewievs1);

// Задача 8
/* Перебрать массив таким образом, что бы пользователи с id меньше или равно 5
имели postId: 2, а те, у кого id больше 5, имели postId: 1 */

// const users = {...comments}
const users = comments.map(comment => {
  if (comment.id <= 5) {
    comment.postId = 2
  } else {
    comment.postId = 1
  }
  return comment
});
console.log(users);

// делаем тоже самое без if/else
const user1 = comments.map((comment, postId) => {
  return {...comment, postId: comment.id <= 5 ? 2: 1}
})
console.log(user1);

// делаем тоже самое return
const user2 = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2: 1
}));
console.log(user2);

// Задача 9
// Перебрать массив, что бы объекты состояли только из айди и имени
const userName = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  }
});
console.log(userName);

// Задача 10
/* Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела
сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */
const commentsArr = comments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  }
});
console.log(commentsArr);

// Задача 11
/* Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть
тоже самое с помощью метода map */
let allEmail = comments.reduce(function(acc, comment) {
  acc.push(comment.email);
  return acc
}, []);
console.log(allEmail);

// тоже самое с помощью метода map
let allEmail2 = comments.map(function(comment) {
  return comment.email
});
console.log(allEmail2);

// то же самое через стрелочную ф-ию
let allEmail3 = comments.map(comment => comment.email);
console.log(allEmail3);

// Задача 12
/* Почитать про методы toString(), join() и перебрав массив с задания №11,
привести его к строке. */
let allEmail4 = comments.reduce((acc, comment) => {
  return [acc] + comment.email + ', ';
}, '' );
console.log(allEmail4);