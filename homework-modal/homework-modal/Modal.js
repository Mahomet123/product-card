export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.#initClose();
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.handleOverlayClick = () => {
      this.close();
      console.log('Нажали на оверлей')
    }
  }
  // открыть модалку
  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleOverlayClick)
    }
  }
  //закрыть модалку
  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.handleOverlayClick)
    }
  }
  //открыта ли модалка?
  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
  //инициализация открытия. чего???не понял для чего он. понимаю вешает слушатель 
  // события на кнопку и вызывает при клике на эту кнопку метод открытия модалки.
  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }
  //инициализация закрытия модалки. сначала сохраняем конпку закрытия
  #initClose() {
    const closeButton = this.modal.querySelector('#modal-close-button')
    //вешаем слушатель на кнопку закрытия, чтобы при клике на нее модалка закрылась
    closeButton.addEventListener('click', () => {
      this.close();
    })
  }
}
