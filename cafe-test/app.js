// Этот файл только подключает интерфейс к объектам из homework-13.js.
// Классы и исходный файл домашнего задания не изменяются.
(() => {
  const $ = id => document.getElementById(id);
  const buttons = document.querySelectorAll('[data-drink]');
  let current = null;
  let currentType = '';
  let busy = false;
  const colors = {coffee:'#9b633c',juice:'#ef9c24',tea:'#7eaa55'};
  const names = {coffee:'Кофе',juice:'Сок',tea:'Чай'};
  const originalLog = console.log;

  function capture(action) {
    console.log = (...args) => {
      originalLog.apply(console,args);
      const line = document.createElement('div');
      line.textContent = args.map(String).join(' ');
      $('log').appendChild(line);
      $('log').scrollTop = $('log').scrollHeight;
    };
    try { action(); } finally { console.log = originalLog; }
  }

  // homework-13.js объявляет coffee, juice, tea и cafe.
  // Их используем напрямую, без повторного создания напитков.
  let drinks;
  try {
    drinks = { coffee, juice, tea };
    if (!cafe || typeof cafe.orderDrink !== 'function') throw Error('Не найден объект cafe');
  } catch (error) {
    $('status').textContent = 'Помести homework-13.js рядом с index.html';
    $('log').textContent = 'Не удалось подключить домашнее задание: ' + error.message;
    buttons.forEach(b => b.disabled = true);
    $('cafe-info').disabled = true;
    return;
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    if (busy) return;
    currentType = button.dataset.drink;
    current = drinks[currentType];
    buttons.forEach(b => b.classList.toggle('active', b === button));
    $('selected').textContent = `${names[currentType]} · ${current.size} мл · ${current.price} ₽`;
    $('temperature').disabled = false;
    // showTemp() — метод из домашнего задания.
    capture(() => { $('temperature').value = current.showTemp(); });
    $('temperature-value').textContent = $('temperature').value;
    ['apply','order','info'].forEach(id => $(id).disabled = false);
    $('liquid').style.transition = 'none';
    $('liquid').style.height = '0%';
    $('status').textContent = 'Напиток выбран';
  }));

  $('temperature').addEventListener('input', () => {
    $('temperature-value').textContent = $('temperature').value;
  });
  $('apply').addEventListener('click', () => {
    if (!current || busy) return;
    capture(() => {
      current.setTemp(Number($('temperature').value));
      current.showTemp();
    });
    $('status').textContent = 'Температура изменена';
  });
  $('info').addEventListener('click', () => {
    if (current && !busy) capture(() => current.showInfo());
  });
  $('cafe-info').addEventListener('click', () => capture(() => cafe.showInfoCafe()));
  $('order').addEventListener('click', async () => {
    if (!current || busy) return;
    busy = true;
    $('order').disabled = true;
    const orderedDrink = current;
    const orderedType = currentType;
    $('status').textContent = 'Готовим напиток...';
    $('liquid').style.background = colors[orderedType];
    $('liquid').style.transition = 'none';
    $('liquid').style.height = '0%';
    // Вызов настоящей логики заказа из домашнего задания.
    capture(() => cafe.orderDrink(orderedDrink));
    requestAnimationFrame(() => requestAnimationFrame(() => {
      $('liquid').style.transition = 'height 2s ease';
      $('liquid').style.height = '85%';
    }));
    await new Promise(resolve => setTimeout(resolve, 2050));
    $('status').textContent = 'Напиток готов!';
    busy = false;
    $('order').disabled = false;
  });
})();
