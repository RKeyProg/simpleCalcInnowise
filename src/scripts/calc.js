const calculatorInput = document.getElementById('calculatorInput');
const prevAction = document.getElementById('prevAction');
const buttons = document.querySelectorAll('.buttons__button');

calculatorInput.addEventListener('input', (e) => {
  calculatorInput.value = formatInput(e.target.value);
  checkFontSize();
});

function checkFontSize() {
  if (calculatorInput.value.length >= 15) {
    calculatorInput.style.fontSize = '1.5rem';
    prevAction.style.fontSize = '1rem';
  } else if (calculatorInput.value.length >= 9) {
    calculatorInput.style.fontSize = '2rem';
    prevAction.style.fontSize = '1.5rem';
  } else {
    calculatorInput.style.fontSize = '3rem';
  }
}

// Обработка нажатия кнопок
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const event = new KeyboardEvent('keydown', {
      key: button.dataset.value,
    });
    switch (button.dataset.value) {
      case 'reset':
        calculatorInput.value = '';
        prevAction.value = '';
        checkFontSize();
        break;
      case 'changeSign':
        if (calculatorInput.value) {
          calculatorInput.value = formatInput(
            calculate(calculatorInput.value) * -1
          );
        }
        break;
      case '=':
        prevAction.value = calculatorInput.value;
        calculatorInput.value = formatInput(calculate(calculatorInput.value));
        checkFontSize();
        break;

      default:
        if (isCurrentKeyValid(event)) {
          calculatorInput.value = formatInput(
            calculatorInput.value + button.dataset.value
          );
          checkFontSize();
        }
        break;
    }
  });
});

calculatorInput.addEventListener('keydown', (e) => {
  if (!isCurrentKeyValid(e)) e.preventDefault();
});

function isCurrentKeyValid(event) {
  const allowedKeys = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
    'Enter',
  ];

  const isOperator = ['+', '-', '*', '/', ',', '%'].includes(event.key);

  // Запрет на ввод знака в начале
  if (isOperator && event.key !== '-' && calculatorInput.value.length === 0) {
    return false;
  }

  // Проверка на разрешенные символы
  if (
    !(event.key >= '0' && event.key <= '9') &&
    !isOperator &&
    allowedKeys.indexOf(event.key) === -1 &&
    !event.ctrlKey
  ) {
    return false;
  }

  // Запрет на ввод двух операторов подряд
  // if (isOperator && isOperatorLast()) {
  //   if (event.key === ',') return false;
  //   calculatorInput.value = calculatorInput.value.slice(0, -1) + event.key;
  //   return false;
  // }

  // if (event.key === ',' && isNumberHasComma()) {
  //   return false;
  // }

  return true;
}

// function isOperatorLast() {
//   const lastChar = calculatorInput.value.charAt(
//     calculatorInput.value.length - 1
//   );

//   return ['+', '-', '*', '/', ',', '%'].includes(lastChar);
// }

// function isNumberHasComma() {
//   const lastNumberPart = calculatorInput.value
//     .split(/[+\-*/%]/)
//     .pop()
//     .trim();
//   if (lastNumberPart.includes(',')) {
//     return true;
//   }

//   return false;
// }

function formatInput(val) {
  let currentValue = val.toString().replace(/\s/g, '').replace(/\./g, ',');

  // Отделение дробной части, ее не надо разделять на разряды
  const parts = currentValue.split(',');
  if (parts[0]) {
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return parts.join(',');
}

// calculate

function calculate(expression) {
  // Убираем все пробелы
  expression = expression.replace(/\s+/g, '');

  // Проверяем наличие числа в начале или отрицательного числа
  if (!/^-?\d/.test(expression)) {
    prevAction.value = 'Error';
    return '';
  }

  let numbers = [];
  let operators = [];

  // Функция для выполнения арифметических операций
  function operate(num1, num2, operator) {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '*') return num1 * num2;
    if (operator === '/') return num1 / num2;
  }

  let i = 0;
  while (i < expression.length) {
    let char = expression[i];

    // Если символ - цифра или часть числа (может быть десятичная точка)
    if (/\d/.test(char) || char === '-') {
      let numStr = char;

      // Обрабатываем многосимвольные числа
      while (i + 1 < expression.length && /[.\d]/.test(expression[i + 1])) {
        numStr += expression[i + 1];
        i++;
      }

      // Проверяем на наличие символа '%'
      if (i + 1 < expression.length && expression[i + 1] === '%') {
        numbers.push(numStr + '%');
        i++; // пропускаем символ '%'
      } else {
        numbers.push(parseFloat(numStr));
      }
    } else if (/[+\-*/]/.test(char)) {
      operators.push(char);
    }

    i++;
  }

  // Обработка процентов и преобразование их в дробные значения
  [numbers, operators] = preprocessExpression(
    numbers.map((item) => item.toString()),
    operators
  );

  // Обработка умножения и деления сначала
  const newNumbers = [];
  const newOperators = [];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '*' || operators[i] === '/') {
      let num1 = newNumbers.pop() || numbers[i];
      let num2 = numbers[i + 1];

      if (operators[i] === '/' && num2 === 0) {
        prevAction.value = 'Infinity';
        return '';
      }

      newNumbers.push(operate(num1, num2, operators[i]));
    } else {
      newNumbers.push(numbers[i]);
      newOperators.push(operators[i]);
    }
  }

  newNumbers.push(numbers[numbers.length - 1]); // Добавляем последнее число

  // Обработка сложения и вычитания
  let result = newNumbers[0];
  for (let i = 0; i < newOperators.length; i++) {
    result = operate(result, newNumbers[i + 1], newOperators[i]);
  }

  return result;
}
// Предобработка выражения для замены процентов
function preprocessExpression(numbers, operators) {
  // Выбираем индексы с символом %
  const percentIndex = numbers
    .map((item, index) => {
      if (item.includes('%')) return index;
    })
    .filter((item) => item !== undefined);

  numbers = numbers.map((item) => {
    if (item.includes('%')) return +item.slice(0, -1);
    return +item;
  });
  // Если таких нет - возвращаем исходные массивы
  if (percentIndex === -1) return [numbers, operators];

  // перебор всех индексов где нужно искать процент
  percentIndex.forEach((currentIndex) => {
    let newExpression = '';
    for (let i = 0; i < currentIndex; i++) {
      newExpression += numbers[i] + operators[i];
    }

    if (
      operators[currentIndex - 1] === '*' ||
      operators[currentIndex - 1] === '/' ||
      currentIndex === 0
    ) {
      numbers[currentIndex] = numbers[currentIndex] / 100;
    } else if (operators[currentIndex - 1] === '+') {
      newExpression = newExpression.slice(0, -1);

      // Вызов функции чтобы корректно взять процент от предыдущего результата
      numbers[currentIndex] =
        calculate(newExpression) * (numbers[currentIndex] / 100);
    } else if (operators[currentIndex - 1] === '-') {
      newExpression = newExpression.slice(0, -1);

      // Вызов функции чтобы корректно взять процент от предыдущего результата
      numbers[currentIndex] =
        calculate(newExpression) * (numbers[currentIndex] / 100);
    }
  });

  return [numbers, operators];
}

calculatorInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    prevAction.value = calculatorInput.value;
    const result = formatInput(calculate(calculatorInput.value));
    calculatorInput.value = result;
    event.preventDefault();
  }
});
