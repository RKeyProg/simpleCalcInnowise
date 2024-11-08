const calculatorInput = document.getElementById('calculatorInput');

calculatorInput.addEventListener('keydown', function (event) {
  const allowedKeys = [
    'Backspace',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
    'Enter',
    'Escape',
  ];

  // Проверка на разрешенные символы
  if (
    (event.key >= '0' && event.key <= '9') ||
    allowedKeys.indexOf(event.key) !== -1 ||
    event.key === '+' ||
    event.key === '-' ||
    event.key === '*' ||
    event.key === '/' ||
    event.key === ',' ||
    event.key === '%' ||
    (event.ctrlKey && event.key === 'a') // Ctrl + A для выделения всего
  )
    return;

  // Если символ не разрешен, предотвращаем его ввод
  event.preventDefault();
});
