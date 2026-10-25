// Задача 4.
// К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - 
// форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", при нажатии на 
// которую мы будем выводить консоль лог в виде объекта: { email: 'введенная почта' }
// Уровень 1:
// 1.
// Создаем файл, все как прошлых дз.

// 2.
// Почитать про теги: label, form, input (источники прикреплены в конце ДЗ)

// 3.
// Сверстать данный footer, используя семантические теги (footer, nav и т.д.)

// 4.
// К Форме, которая прикреплена в футере - добавить логику:

// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта: { email: 'введенная почта' }

// Уровень 2:
// Немного теории:

// Модальное окно — это всплывающее окно, которое появляется поверх всей страницы и блокирует взаимодействие с остальным интерфейсом, пока пользователь не выполнит в нём какое-то действие (например, нажмёт кнопку, заполнит форму, закроет окно).

// 5.
// Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).

// Важные правила создания модалки:

// 1.
// Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)

// 2.
// Модальное окно находиться ровно по центру страницы, независимо от масштаба

// Создать форму для регистрации внутри модального окна. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля. Используйте для того, что бы указать пользователю, какое поле за что отвечает. Также важно использовать placeholder (обо всем этом можно будет почитать в документации в конце поста) Разрешается добавить поля на ваше усмотрение. Все поля должны иметь валидацию. Если пользователь ввел два разных пароля или форма невалидна (используем метод checkValidity()) - мы должны предупредить его о том, что регистрация отклонена. Если регистрация успешна - выводим значения формы в лог, как в задании №4. Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()). Также создайте внешнюю переменную user и присвойте ей этот объект. После успешной регистрации - модалка должны закрыться.

import { Modal } from "./modal.js";
import { Form } from "./form.js";
//  По 12ДЗ переделали окрыти/закрытие модалки и слушатели на закрытие, перенесли логику в modal.js
//  и сюда модалки перенесли импортировали класс Modal из файла modal.js, который отвечает за модалку
const openModalBtn = document.getElementById('modal__btn-open');
console.log(openModalBtn);
const modal = new Modal('modal')
openModalBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modal.open();
})


const emailForm = new Form('subscribe-form');
emailForm.form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = emailForm.getValues();
  if (emailForm.isValid()) {
    console.log("Вы подписались на наши акции!");
    console.log(data);
  }
})


let user;

// Форма регистрации в модальном окне
const regForm = new Form('register-form')
regForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;     //сохраняем введенные данные юзера
  if (regForm.isValid() && password.value === passwordRepeat.value) {
    data.createdOn = new Date();     //добавляем дату регистрации
    user = data;      //сохраняем данные юзера во внешнюю "let user"
    console.log('Вы успешно зарегистрировались!')
    console.log(data);
    modal.close();     // удаляю добавленный класс модалки, чтобы при успешном регистрации модалка закрывалась
    regForm.reset();
  } else {
    form.reportValidity();
    console.log('Вы ввели неккоректные данные!')
  }
});

// Проверка пароля
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');

function checkPassword(inputPassword, inputPasswordRepeat) {
  if (inputPassword === '' && inputPasswordRepeat === ''
    || inputPassword === inputPasswordRepeat) {
    password.classList.remove('error')
    passwordRepeat.classList.remove('error')
  }

  if (inputPassword !== inputPasswordRepeat) {
    password.classList.add('error')
    passwordRepeat.classList.add('error')
    console.log('Пароли НЕ совпадают или пусты');
  }

};

password.addEventListener('input', (event) => {
  checkPassword(event.target.value, passwordRepeat.value)
});

passwordRepeat.addEventListener('input', (event) => {
  checkPassword(password.value, event.target.value)
});






