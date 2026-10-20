/*4.
Создать файл Modal.js и в нем создать класс для модального окна под названием Modal.
Он будет принимать 1 параметр черезконструктор - айди модального окна. Внутри класса будут методы:
  I. Для открытия модального окна.
  II. Для закрытия модального окна.
  III. Для проверки, открыто ли сейчас модальное окно.
  IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку
  (реализовать через eventListener) и вызывать в конструкторе.
Используя данный класс - переписать логику задания №9, связанной с модальными окнами. Как?
Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.
*/

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('modal__btn-open');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', (event) => {
  event.preventDefault();     // отменяю действие перехода по сылке
  modal.classList.add('modal-showed');     // добавляю класс
});
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');     // удаляю добавленный класс при закрытии окна нажав Х в углу
});

console.log(openModalBtn);