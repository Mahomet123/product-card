const cardForm = document.getElementById('cardForm');
const titleInput = document.getElementById('titleInput');
const ingredientsContainer = document.getElementById('ingredientsContainer');
const addIngredientBtn = document.getElementById('addIngredientBtn');
const cardsContainer = document.getElementById('cardsContainer');
const cardTemplate = document.getElementById('cardTemplate');

// Кнопка "+ Добавить компонент"
addIngredientBtn.addEventListener('click', () => {
  const row = document.createElement('div');
  row.className = 'ingredient-row';
  
  row.innerHTML = `
    <input type="text" class="ingredient-input" required placeholder="Следующий компонент">
    <button type="button" class="btn-remove">×</button>
  `;
  
  // Логика для удаления конкретно этой строки по клику на крестик
  row.querySelector('.btn-remove').addEventListener('click', () => row.remove());
  
  ingredientsContainer.appendChild(row);
});

// Обработка отправки формы
cardForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const titleValue = titleInput.value.trim();
  
  // Собираем все заполненные инпуты состава в один массив строк
  const ingredientInputs = document.querySelectorAll('.ingredient-input');
  const ingredientsArray = [];
  
  ingredientInputs.forEach(input => {
    if (input.value.trim() !== '') {
      ingredientsArray.push(input.value.trim());
    }
  });

  // Клонируем шаблон карточки
  const cardClone = cardTemplate.content.cloneNode(true);
  cardClone.querySelector('.card-title').textContent = titleValue;

  // Находим список <ul> внутри клона
  const ul = cardClone.querySelector('.card-ingredients-list');

  // Заполняем список тегами <li> на основе нашего массива
  ingredientsArray.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  // Добавляем готовую карточку на страницу
  cardsContainer.appendChild(cardClone);

  // Очищаем форму и возвращаем к исходному состоянию
  cardForm.reset();
  ingredientsContainer.innerHTML = `
    <div class="ingredient-row">
      <input type="text" class="ingredient-input" required placeholder="Компонент 1">
    </div>
  `;
});
