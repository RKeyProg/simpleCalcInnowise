const themeToggle = document.querySelector('.theme-switcher__input');

// Проверка сохраненной темы в локальном хранилище
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.checked = true; // Установить checkbox в положение "включено"
}

// Обработчик события на изменение состояния чекбокса
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
  // Сохранение текущей темы в локальное хранилище
  if (document.body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light'); // Сохраняем как светлая тема
  } else {
    localStorage.removeItem('theme'); // Удаляем, если светлая тема не выбрана
  }
});
